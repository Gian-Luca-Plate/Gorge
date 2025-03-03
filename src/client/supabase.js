import { createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://ivzfzexvkzaztkbqvdrh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2emZ6ZXh2a3phenRrYnF2ZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1OTgzNTgsImV4cCI6MjA1NDE3NDM1OH0.URVh2xNBkCXhK46AQjCJK_GPWmRqkA4iy9MW2Q0KYtI'
export const supabase = createClient(supabaseUrl, supabaseKey)