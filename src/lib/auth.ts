
import { User, Session } from '@supabase/supabase-js';
import { supabase } from "@/integrations/supabase/client";

export type AuthError = {
  message: string;
};

export async function signUp(email: string, password: string): Promise<{ data: any | null; error: AuthError | null }> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) {
    return { data: null, error: { message: error.message } };
  }
  
  return { data, error: null };
}

export async function signIn(email: string, password: string): Promise<{ data: any | null; error: AuthError | null }> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    return { data: null, error: { message: error.message } };
  }
  
  return { data, error: null };
}

export async function signOut() {
  return await supabase.auth.signOut();
}
