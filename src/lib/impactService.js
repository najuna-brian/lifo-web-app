import { supabase, isConfigured } from './supabase'

// Get all impact photos with optional filtering
export const getImpactPhotos = async (filters = {}) => {
  if (!isConfigured()) {
    // Return mock data when Supabase is not configured
    return { 
      data: [], 
      error: null 
    }
  }

  try {
    let query = supabase
      .from('impact_photos')
      .select('*')
      .order('created_at', { ascending: false })

    // Apply filters
    if (filters.category) {
      query = query.eq('category', filters.category)
    }
    
    if (filters.featured) {
      query = query.eq('featured', true)
    }

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    const { data, error } = await query

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Add new impact photo
export const addImpactPhoto = async (photoData) => {
  if (!isConfigured()) {
    return { 
      data: null, 
      error: { message: 'Supabase not configured. Please set up your environment variables.' } 
    }
  }

  try {
    const { data, error } = await supabase
      .from('impact_photos')
      .insert([photoData])
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Update impact photo
export const updateImpactPhoto = async (id, updates) => {
  try {
    const { data, error } = await supabase
      .from('impact_photos')
      .update(updates)
      .eq('id', id)
      .select()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

// Delete impact photo
export const deleteImpactPhoto = async (id) => {
  try {
    const { error } = await supabase
      .from('impact_photos')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { error: null }
  } catch (error) {
    return { error }
  }
}
