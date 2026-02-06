# MilesMe Website Setup Guide

## Prerequisites

- Node.js 18+ installed
- Supabase account
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd milesme-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your Supabase credentials in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Set up Supabase database**

   You have two options:

   **Option A: Using Supabase CLI (Recommended)**

   Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

   Login and link your project:
   ```bash
   supabase login
   supabase link --project-ref your-project-ref
   ```

   Run the migrations:
   ```bash
   supabase db push
   ```

   **Option B: Manual Setup**

   1. Go to your Supabase project dashboard
   2. Navigate to the SQL Editor
   3. Copy and paste the contents of `supabase/migrations/001_create_waitlist.sql`
   4. Run the SQL query

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

### Waitlist Table

The `waitlist` table stores email addresses from users who want early access:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
```

**Row Level Security (RLS) Policies:**
- Anyone (including anonymous users) can INSERT to join the waitlist
- Only authenticated users (admin) can SELECT/read waitlist entries

## Admin Access

To access the admin dashboard at `/dashboard`:

1. Create an admin user in your Supabase project:
   - Go to Authentication → Users
   - Create a new user with email/password

2. Navigate to `/login`
3. Sign in with your admin credentials
4. You'll be redirected to the dashboard

## Project Structure

```
milesme-website/
├── app/
│   ├── (public)/          # Public pages (landing, privacy, terms)
│   ├── (dashboard)/       # Protected admin dashboard
│   └── login/             # Admin login page
├── components/            # React components
├── css/                   # Roux CSS + custom styles
│   └── base/              # Brand tokens and base styles
├── lib/
│   └── supabase/          # Supabase utilities
└── supabase/
    └── migrations/        # Database migrations
```

## Customization

### Brand Colors

All brand colors are defined in `css/base/_variables.css`. Key colors:

- Amber (#F3A72A) - Primary interactive color
- Orange (#E8762C) - Hover states
- Cream (#F5E6CE) - Background
- Green (#5DA777) - Success states
- Dark (#2D2F26) - Text and dark sections

### Typography

- **Bebas Neue** - Used for all headings (H1-H5) and display text
- **Switzer Variable** - Used for body text and UI elements

See `BRAND_TOKENS.md` for complete brand guidelines.

## Images

The landing page requires the following images in the `public/images/` directory:

- `hero-runner.jpg` - Hero section background
- `step-1-preferences.jpg` - How It Works step 1
- `step-2-routes.jpg` - How It Works step 2
- `step-3-run.jpg` - How It Works step 3
- `feature-curated.jpg` - Features section
- `feature-smart-matching.jpg` - Features section
- `feature-privacy.jpg` - Features section
- `feature-explorer.jpg` - Features section

**Image Specifications:**
- Hero: 1920x1080px minimum, outdoor running scene
- Steps: 750x1624px (9:16 aspect ratio for phone mockups)
- Features: 800x600px (4:3 aspect ratio)
- Format: JPG, optimized for web
- Max file size: 500KB per image

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This is a standard Next.js 14 app and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Troubleshooting

### Supabase Connection Issues

- Verify your environment variables are correct
- Check that your Supabase project is active
- Ensure RLS policies are properly configured

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

## Support

For issues or questions:
- Check the [BRAND_TOKENS.md](BRAND_TOKENS.md) for design guidelines
- Review Supabase documentation: https://supabase.com/docs
- Review Next.js documentation: https://nextjs.org/docs

## License

© 2026 MilesMe. All rights reserved.
