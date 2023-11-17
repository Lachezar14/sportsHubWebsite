import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://whabehwehbncoblwqwtw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoYWJlaHdlaGJuY29ibHdxd3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNjEzOTUsImV4cCI6MjAxNTYzNzM5NX0.d-U-rFGaDxiylnYUj3DDSIeExt4iZfbXJR4Lre34kEA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;