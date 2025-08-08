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

-- Create policy to allow all operations for now (we'll secure this later)
CREATE POLICY "Allow all operations" ON public.impact_photos
    FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX idx_impact_photos_category ON public.impact_photos(category);
CREATE INDEX idx_impact_photos_featured ON public.impact_photos(featured);
CREATE INDEX idx_impact_photos_date ON public.impact_photos(date DESC);

-- Insert some sample data for testing
INSERT INTO public.impact_photos (title, description, category, location, date, featured, image_path) VALUES
('Sample Hospital Service', 'This is a sample entry showing our laundry services at a local hospital. Once you upload real photos, you can delete this sample.', 'Hospital', 'Mulago Hospital', '2024-12-01', true, 'sample/hospital.jpg'),
('Community Outreach', 'Sample community outreach activity in local slums. Replace with your actual photos.', 'Slum', 'Katanga Slum', '2024-11-15', true, 'sample/community.jpg'),
('Volunteer Training', 'Sample volunteer training session. Upload your real volunteer photos to replace this.', 'Volunteer', 'LIFo Office', '2024-11-30', false, 'sample/volunteer.jpg');
