import { createClient } from '@supabase/supabase-js';

/**
 * ADMIN CLIENT - BACKEND ONLY
 * Uses service role key for privileged operations
 * NEVER expose this to frontend code
 * NEVER use in client components
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
}

if (!SERVICE_ROLE_KEY) {
  throw new Error(
    'Missing SUPABASE_SERVICE_ROLE_KEY. This should only be set in server environment variables.'
  );
}

/**
 * Admin client with full database access
 * Used only in API routes and server-side operations
 */
export const supabaseAdmin = createClient(
  SUPABASE_URL,
  SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    db: {
      schema: 'public',
    },
  }
);

/**
 * Create a new user account (admin operation)
 */
export async function createUserAccount(
  email: string,
  password: string,
  displayName: string,
  role: 'admin' | 'student' | 'teacher' | 'parent'
) {
  try {
    // Create auth user
    const { data: authUser, error: authError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: false,
      });

    if (authError) throw authError;

    if (!authUser.user) {
      throw new Error('User creation failed');
    }

    // Create user profile
    const { error: profileError } = await supabaseAdmin
      .from('users')
      .insert([
        {
          id: authUser.user.id,
          email,
          display_name: displayName,
          role,
          language: 'pt', // Default to Portuguese
          mfa_enabled: false,
          is_active: true,
        },
      ]);

    if (profileError) throw profileError;

    return {
      success: true,
      userId: authUser.user.id,
      email,
    };
  } catch (error: any) {
    console.error('Error creating user:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Delete a user account (admin operation)
 */
export async function deleteUserAccount(userId: string) {
  try {
    // Delete from users table (cascades to related records)
    const { error: deleteError } = await supabaseAdmin
      .from('users')
      .delete()
      .eq('id', userId);

    if (deleteError) throw deleteError;

    // Delete auth user
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(
      userId
    );

    if (authError) throw authError;

    return {
      success: true,
      message: `User ${userId} deleted successfully`,
    };
  } catch (error: any) {
    console.error('Error deleting user:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Get user by email (admin operation)
 */
export async function getUserByEmail(email: string) {
  try {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) throw error;

    return data;
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return null;
  }
}

/**
 * Update user role (admin operation)
 */
export async function updateUserRole(
  userId: string,
  newRole: 'admin' | 'student' | 'teacher' | 'parent'
) {
  try {
    const { error } = await supabaseAdmin
      .from('users')
      .update({ role: newRole })
      .eq('id', userId);

    if (error) throw error;

    return {
      success: true,
      message: `User role updated to ${newRole}`,
    };
  } catch (error: any) {
    console.error('Error updating user role:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * List all users (admin operation)
 */
export async function listAllUsers(limit: number = 100, offset: number = 0) {
  try {
    const { data, error, count } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact' })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return {
      data,
      total: count,
      limit,
      offset,
    };
  } catch (error: any) {
    console.error('Error listing users:', error);
    return {
      data: [],
      total: 0,
      error: error.message,
    };
  }
}

/**
 * Record audit log (admin operation)
 */
export async function logAdminAction(
  adminUserId: string,
  actionType: string,
  resourceType: string,
  resourceId: string | null,
  changes: Record<string, any>
) {
  try {
    const { error } = await supabaseAdmin
      .from('admin_audit_log')
      .insert([
        {
          admin_user_id: adminUserId,
          action_type: actionType,
          resource_type: resourceType,
          resource_id: resourceId,
          changes,
          result: 'success',
        },
      ]);

    if (error) throw error;

    return { success: true };
  } catch (error: any) {
    console.error('Error logging admin action:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Generate admin dashboard report
 */
export async function generateDailyReport(adminUserId: string) {
  try {
    const today = new Date().toISOString().split('T')[0];

    // Fetch today's activity
    const { data: lessonsData } = await supabaseAdmin
      .from('lessons')
      .select('*')
      .gte('created_at', `${today}T00:00:00`)
      .lte('created_at', `${today}T23:59:59`);

    const { data: homeworkData } = await supabaseAdmin
      .from('homework')
      .select('*')
      .gte('created_at', `${today}T00:00:00`)
      .lte('created_at', `${today}T23:59:59`);

    return {
      success: true,
      report: {
        date: today,
        lessonsCompleted: lessonsData?.length || 0,
        homeworkSubmissions: homeworkData?.length || 0,
        generatedAt: new Date().toISOString(),
      },
    };
  } catch (error: any) {
    console.error('Error generating report:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}
