import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bnyfcftmqqiqrwyrgpyy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJueWZjZnRtcXFpcXJ3eXJncHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0MDMzNjUsImV4cCI6MTk5OTk3OTM2NX0.0J_WAVgHLczCh1cyXfcFNv2_NPrG5_OmbUtEyBECPmc';

export const supabase = createClient(supabaseUrl, supabaseKey);
