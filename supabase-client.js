import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// These variables will be provided by Vercel's Environment Variables.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);