
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://deckdlwtywvbmyrhgyev.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlY2tkbHd0eXd2Ym15cmhneWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NDc5OTgsImV4cCI6MjA2NTMyMzk5OH0._4czeeWZC7dCntywO9_rPU9GtO2a2Px-bqOjRDBMOxg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
