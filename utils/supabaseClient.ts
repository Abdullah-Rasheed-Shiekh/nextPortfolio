import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cpqmdixmxzrdtzpuufpi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwcW1kaXhteHpyZHR6cHV1ZnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NDk1NTEsImV4cCI6MjA3MzMyNTU1MX0.LBQFuoCGFtURmJBA7cLgat_uhEaYkYdBEX_x0i8bezo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)