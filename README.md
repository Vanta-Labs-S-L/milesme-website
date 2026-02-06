# MilesMe Website

A lightweight Next.js application with Supabase authentication and Roux CSS styling.

## Stack

- **Next.js 14+** with App Router
- **TypeScript**
- **Supabase** for authentication and database
- **Roux CSS** by Thoughtbot for base styling
- **CSS Modules** for component-scoped styles

## Project Structure

```
app/
├── (public)/          # Public pages
│   ├── page.tsx       # Landing page
│   ├── privacy/       # Privacy policy
│   └── terms/         # Terms of service
├── (dashboard)/       # Protected admin area
│   └── dashboard/
├── login/             # Admin login page
└── layout.tsx         # Root layout
components/            # Shared components
lib/
└── supabase/          # Supabase utilities
    ├── client.ts      # Client-side helper
    ├── server.ts      # Server-side helper
    └── middleware.ts  # Middleware helper
css/                   # Roux CSS base styles
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key
3. Update `.env.local` with your credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Create Admin User

In your Supabase project dashboard:

1. Go to Authentication → Users
2. Create a new user with email and password
3. This user will have admin access to the dashboard

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Routes

- `/` - Landing page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/login` - Admin login (email/password)
- `/dashboard` - Protected admin dashboard

## Authentication Flow

- Admin logs in at `/login` with email/password
- Middleware protects `/dashboard` routes
- Server-side session handling using `@supabase/ssr`
- Unauthenticated users are redirected to `/login`

## Styling

- **Roux CSS** provides base reset and typography
- **CSS Modules** for component-specific styles
- No additional CSS tooling or frameworks

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Notes

- Keep dependencies minimal
- No placeholder content or lorem ipsum
- Clean separation of concerns with route groups
- Server and client Supabase utilities are separated
