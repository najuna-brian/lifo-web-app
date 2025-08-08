-- Storage bucket policies
-- Note: Create the bucket 'impact-photos' first in the Supabase Dashboard under Storage

-- Allow anonymous users to view images
INSERT INTO storage.buckets (id, name, public) VALUES ('impact-photos', 'impact-photos', true);

-- Allow anonymous read access to images
CREATE POLICY "Allow anonymous read access" ON storage.objects
    FOR SELECT USING (bucket_id = 'impact-photos');

-- Allow authenticated upload access (for admin)
CREATE POLICY "Allow upload access" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'impact-photos');

-- Allow update access
CREATE POLICY "Allow update access" ON storage.objects
    FOR UPDATE USING (bucket_id = 'impact-photos');

-- Allow delete access
CREATE POLICY "Allow delete access" ON storage.objects
    FOR DELETE USING (bucket_id = 'impact-photos');
