-- Create delete_requests table
CREATE TABLE IF NOT EXISTS delete_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  user_id UUID NULL,
  reason TEXT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Indexes for efficient lookup and sorting
CREATE INDEX IF NOT EXISTS idx_delete_requests_email ON delete_requests(email);
CREATE INDEX IF NOT EXISTS idx_delete_requests_created_at ON delete_requests(created_at DESC);

-- Enable Row Level Security
ALTER TABLE delete_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to submit a delete request
CREATE POLICY "Anyone can submit delete request"
  ON delete_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy to allow only authenticated users to read delete requests
CREATE POLICY "Only authenticated users can read delete requests"
  ON delete_requests
  FOR SELECT
  TO authenticated
  USING (true);

