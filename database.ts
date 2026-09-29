// Database table types - auto-generated from Supabase schema

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  display_name: string;
  avatar_url: string | null;
  language: 'pt' | 'en' | 'ur';
  mfa_enabled: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
  auth_metadata: Record<string, any>;
}

export interface Student {
  id: string;
  user_id: string;
  grade: 5 | 10 | 12;
  school_name: string;
  curriculum: 'portuguese_national';
  enrolled_subjects: string[];
  academic_track: string | null;
  learning_preferences: Record<string, any>;
  study_schedule: Record<string, any>;
  created_at: string;
  updated_at: string;
  academic_metadata: Record<string, any>;
}

export interface AITeacher {
  id: string;
  subject: string; // 'Português', 'Matemática', 'Ciências Naturais', etc.
  grade_level: 5 | 10 | 12;
  description: string;
  knowledge_base_id: string | null;
  system_prompt: string;
  configuration: {
    model: string;
    temperature: number;
    max_tokens: number;
    voice_enabled: boolean;
    languages: string[];
  };
  is_active: boolean;
  performance_metrics: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  teacher_id: string;
  student_id: string;
  subject: string;
  title: string;
  scheduled_at: string;
  started_at: string | null;
  completed_at: string | null;
  duration_minutes: number | null;
  curriculum_objective_id: string | null;
  lesson_content: Record<string, any>;
  whiteboard_state: string | null;
  student_participation_notes: string | null;
  assessment_data: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface AdminAuditLog {
  id: string;
  admin_user_id: string;
  action_type: string; // 'user_created', 'settings_changed', 'data_exported', etc.
  resource_type: string; // 'user', 'student', 'lesson', 'settings'
  resource_id: string | null;
  changes: Record<string, any>;
  ip_address: string | null;
  user_agent: string | null;
  result: 'success' | 'failure';
  error_message: string | null;
  created_at: string;
}

export interface AIAuditLog {
  id: string;
  teacher_id: string;
  student_id: string;
  action_type: string; // 'tool_call', 'api_request', 'content_generation'
  tool_name: string | null;
  tool_input: Record<string, any> | null;
  tool_output: Record<string, any> | null;
  prompt_used: string | null;
  result: 'success' | 'failure';
  error_message: string | null;
  tokens_used: number | null;
  created_at: string;
}

export interface DigitalLibrary {
  id: string;
  student_id: string;
  subject: string;
  grade: 5 | 10 | 12;
  title: string;
  file_path: string;
  file_type: 'pdf' | 'document' | 'image' | 'worksheet';
  file_size_bytes: number;
  source: 'curriculum' | 'textbook' | 'student_upload' | 'teacher_provided';
  is_indexed_for_search: boolean;
  ocr_text: string | null;
  created_at: string;
  updated_at: string;
}

export interface Homework {
  id: string;
  teacher_id: string;
  student_id: string;
  subject: string;
  title: string;
  description: string;
  assigned_at: string;
  due_date: string;
  completed_at: string | null;
  submission_data: Record<string, any> | null;
  feedback: string | null;
  assessment_score: number | null; // 0-100
  created_at: string;
  updated_at: string;
}

export interface ExaminationMock {
  id: string;
  student_id: string;
  subject: string;
  grade: 5 | 10 | 12;
  title: string;
  started_at: string | null;
  completed_at: string | null;
  duration_minutes: number;
  total_questions: number;
  correct_answers: number | null;
  score: number | null; // percentage 0-100
  curriculum_objectives: string[];
  questions: ExaminationQuestion[];
  created_at: string;
  updated_at: string;
}

export interface ExaminationQuestion {
  id: string;
  examination_id: string;
  question_text: string;
  question_type: 'multiple_choice' | 'short_answer' | 'essay' | 'problem';
  options?: string[]; // For multiple choice
  correct_answer: string;
  student_answer: string | null;
  is_correct: boolean | null;
  feedback: string | null;
  curriculum_objective_id: string | null;
}

export interface AdminReport {
  id: string;
  admin_user_id: string;
  report_type: 'daily' | 'weekly' | 'monthly';
  generated_at: string;
  period_start: string;
  period_end: string;
  report_data: Record<string, any>; // Flexible JSON for various report types
  created_at: string;
}

export interface CurriculumObjective {
  id: string;
  grade: 5 | 10 | 12;
  subject: string;
  chapter: string;
  topic: string;
  objective_text: string;
  learning_outcomes: string[];
  estimated_hours: number;
  assessment_methods: string[];
  created_at: string;
}

export interface KnowledgeBase {
  id: string;
  teacher_id: string;
  source_type: 'official_curriculum' | 'textbook' | 'educational_material';
  source_title: string;
  source_url: string | null;
  vector_index_id: string | null;
  is_indexed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Session {
  id: string;
  user_id: string;
  device_identifier: string;
  ip_address: string;
  user_agent: string;
  started_at: string;
  last_activity_at: string;
  expires_at: string;
  is_active: boolean;
}
