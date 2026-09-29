import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validate signup request
const signupSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Palavra-passe deve ter pelo menos 8 caracteres'),
  displayName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  language: z.enum(['pt', 'en', 'ur']).optional().default('pt'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, displayName, language } = signupSchema.parse(body);

    // Initialize Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email já está registado' },
        { status: 409 }
      );
    }

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: false,
    });

    if (authError) {
      console.error('Auth creation error:', authError);
      return NextResponse.json(
        { error: 'Erro ao criar conta' },
        { status: 500 }
      );
    }

    // Create user record
    const { data: newUser, error: userError } = await supabase
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        display_name: displayName,
        role: 'student', // Default role for new signups
        language,
        auth_metadata: {
          createdAt: new Date().toISOString(),
          signupSource: 'web',
        },
      })
      .select()
      .single();

    if (userError) {
      console.error('User creation error:', userError);
      // Rollback auth user
      await supabase.auth.admin.deleteUser(authData.user.id);
      return NextResponse.json(
        { error: 'Erro ao criar perfil de utilizador' },
        { status: 500 }
      );
    }

    // Log signup activity
    await supabase.from('admin_audit_log').insert({
      user_id: authData.user.id,
      action: 'SIGNUP',
      details: {
        email,
        displayName,
        language,
        ip: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent'),
      },
      timestamp: new Date().toISOString(),
    });

    // Send confirmation email (Supabase handles this)
    // TODO: Custom email template with branding

    return NextResponse.json(
      {
        success: true,
        message: 'Conta criada com sucesso. Verifique o seu email para confirmar.',
        user: {
          id: newUser.id,
          email: newUser.email,
          displayName: newUser.display_name,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados de entrada inválidos', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Erro ao processar registo' },
      { status: 500 }
    );
  }
}
