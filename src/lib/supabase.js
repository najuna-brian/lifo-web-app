import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_project_url_here' && 
  supabaseAnonKey !== 'your_supabase_anon_key_here'

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper function to get public URL for storage files
export const getImageUrl = (path) => {
  if (!path || !supabase) return null
  return supabase.storage.from('impact-photos').getPublicUrl(path).data.publicUrl
}

// Helper function to upload image
export const uploadImage = async (file, folder = '') => {
  if (!supabase) {
    return { data: null, error: { message: 'Supabase not configured' } }
  }

  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${folder}${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from('impact-photos')
      .upload(fileName, file)

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Export configuration status as a function
export const isConfigured = () => {
  return isSupabaseConfigured;
};
