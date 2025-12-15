// CHANGE IS HERE: We added "@2" to lock the version
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// These variables are hardcoded here (which is fine for the Anon key)
const supabaseUrl = "https://eeyfzopydsgusqkvhsrr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVleWZ6b3B5ZHNndXNxa3Zoc3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNzA4MjEsImV4cCI6MjA2NTg0NjgyMX0.N4zNst3g0Ab4qE1Ykwqqx9e8ZXGeyldN_f3AihMdfXk";

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
