# Supabase Setup for Impact Gallery

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Note down your Project URL and Anon Key from Settings > API

## 2. Update Environment Variables

Add these to your `.env.local` file:

```
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 3. Create Database Table

In Supabase SQL Editor, run this script:

```sql
-- Create impact_photos table
CREATE TABLE IF NOT EXISTS public.impact_photos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Hospital', 'Slum', 'Equipment', 'Volunteer', 'Community')),
    location TEXT NOT NULL,
    date DATE NOT NULL,
    featured BOOLEAN DEFAULT FALSE,
    image_path TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.impact_photos ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to read all photos
CREATE POLICY "Allow anonymous read access" ON public.impact_photos
    FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated full access" ON public.impact_photos
    FOR ALL USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_impact_photos_category ON public.impact_photos(category);
CREATE INDEX idx_impact_photos_featured ON public.impact_photos(featured);
CREATE INDEX idx_impact_photos_date ON public.impact_photos(date DESC);
```

## 4. Create Storage Bucket

1. Go to Storage in Supabase Dashboard
2. Create a new bucket called `impact-photos`
3. Make it public by updating the bucket policy:

```sql
-- Allow anonymous users to view images
CREATE POLICY "Allow anonymous read access" ON storage.objects
    FOR SELECT USING (bucket_id = 'impact-photos');

-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated upload access" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'impact-photos' AND auth.role() = 'authenticated');
```

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Go to `/admin` and login
3. Try uploading a test photo in the "Upload Impact Photos" tab
4. Check if the photo appears on the `/impact` page

## 6. Deployment Notes

- Make sure to add the environment variables to your Netlify deployment settings
- The public bucket policy allows anyone to view images (which is what we want for a public gallery)
- Only authenticated users can upload (you'll need to implement auth if you want multiple admins)

## 7. Optional Enhancements

- Set up Supabase Auth for multiple admin users
- Add image optimization/resizing
- Implement image deletion from storage when records are deleted
- Add pagination for large galleries
