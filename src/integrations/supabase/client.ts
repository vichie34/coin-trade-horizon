// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gumdwkjwlpontwymfriw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1bWR3a2p3bHBvbnR3eW1mcml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTc5OTgsImV4cCI6MjA2MTA3Mzk5OH0.b3vsGDM-MVnJ2u-gBYstnQIpxCRAVGMIBUXyxlucf_s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);