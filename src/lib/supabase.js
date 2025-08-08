import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to get public URL for storage files
export const getImageUrl = (path) => {
  if (!path) return null
  return supabase.storage.from('impact-photos').getPublicUrl(path).data.publicUrl
}

// Helper function to upload image
export const uploadImage = async (file, folder = '') => {
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
