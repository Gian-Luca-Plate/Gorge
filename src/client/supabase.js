import { createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://sbxavgocogvoivicdvuj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieGF2Z29jb2d2b2l2aWNkdnVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgwOTIyMjUsImV4cCI6MjEwMzY2ODIyNX0.7NM7ji3eYoS_6y2__XeTDrSVMI6qTwZaIEZehu0_4us'
export const supabase = createClient(supabaseUrl, supabaseKey)