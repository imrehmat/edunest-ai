import { User, UserRole } from './database';

export interface AuthSession {
  user: User | null;
  session: {
    access_token: string;
    refresh_token: string;
    expires_at: number;
  } | null;
}

export interface JWTPayload {
  sub: string; // user ID
  email: string;
  role: UserRole;
  aud: string;
  exp: number;
  iat: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  email: string;
  password: string;
  displayName: string;
  acceptTerms: boolean;
}

export interface MFASetup {
  qr_code: string;
  secret: string;
  backup_codes: string[];
}

export interface MFAVerification {
  code: string;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordReset {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface AuthError {
  code: string;
  message: string;
  details?: string;
}

export interface AuthResponse<T = any> {
  success: boolean;
  data?: T;
  error?: AuthError;
}
