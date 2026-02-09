# MilesMe

Marketing site and waitlist for MilesMe. Single-page landing with a waitlist signup form.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**, TypeScript
- **Supabase** for waitlist form submissions
- **Roux CSS** (Thoughtbot) for base styles + CSS Modules for component styles

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

Get these from your Supabase project dashboard. The waitlist table schema is in `supabase/migrations/001_create_waitlist.sql`.

## Scripts

```bash
npm run dev      # Dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Deployment

Deploy to Vercel (or any platform that supports Next.js). Set the environment variables above in your hosting provider's dashboard.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (hero, how it works, features, waitlist, footer) |
| `/legal` | Privacy Policy and Terms of Service |

## Project Structure

```
app/
  (public)/         Public routes (landing, legal)
  layout.tsx        Root layout
components/         React components (each with co-located .module.css)
css/                Roux CSS base styles (reset, variables, typography, etc.)
lib/supabase/       Supabase client helpers
public/images/      Static assets
supabase/           Database migrations
```

## TODO / Known Limitations

- **Waitlist form is frontend-only.** The submit handler currently simulates success with a timeout. Before launch, wire it up to Supabase (`supabase.from("waitlist").insert(...)`) to actually capture email submissions. The migration and Supabase client helpers are already in place.
- Images in `public/images/` are unoptimized originals. Consider using Next.js `<Image>` with proper sizing before launch.

## Reference Docs

Brand guidelines, user research, and product principles are maintained separately and available from the team.
