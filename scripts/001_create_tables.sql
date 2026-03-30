-- Create seedlings table for the catalogue
CREATE TABLE IF NOT EXISTS public.seedlings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Vegetables', 'Fruits', 'Herbs', 'Trees')),
  price DECIMAL(10, 2) NOT NULL,
  stock_status TEXT NOT NULL CHECK (stock_status IN ('In Stock', 'Low Stock', 'Out of Stock')),
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create feedback table for customer messages
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on both tables
ALTER TABLE public.seedlings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Allow public read access to seedlings (for catalogue display)
CREATE POLICY "Allow public read access to seedlings" 
  ON public.seedlings 
  FOR SELECT 
  USING (true);

-- Allow public insert access to feedback (for form submissions)
CREATE POLICY "Allow public insert access to feedback" 
  ON public.feedback 
  FOR INSERT 
  WITH CHECK (true);
