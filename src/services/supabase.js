import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ueunghauywvnklvbkhuz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVldW5naGF1eXd2bmtsdmJraHV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NjM4MjcsImV4cCI6MjAxNDMzOTgyN30.13TvzC33Qmd02T2z-uUs7qIfjMKf7Tuj1WmOJbL-N98";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
