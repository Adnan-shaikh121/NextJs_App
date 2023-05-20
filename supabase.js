import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://omaxhdylcmspuwfssvee.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tYXhoZHlsY21zcHV3ZnNzdmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0Mzg3OTcsImV4cCI6MTk5ODAxNDc5N30.RUYrx4K1SIlrm4gLCceIliZpN37sHbeK8o5FCG9iNJo';

export const supabase = createClient(supabaseUrl, supabaseKey);
