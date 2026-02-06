# Images Directory

This directory should contain the following images for the MilesMe landing page:

## Required Images

### Hero Section
- **hero-runner.jpg** (1920x1080px minimum)
  - Outdoor running scene, sunrise/golden hour
  - Runner on scenic trail or mountain path
  - High-quality, inspiring, premium feel

### How It Works Section (Phone Mockups - 9:16 aspect ratio)
- **step-1-preferences.jpg** (750x1624px)
  - Mobile app showing preference selection screen
  - Clean UI with distance, terrain, mood selectors

- **step-2-routes.jpg** (750x1624px)
  - Mobile app showing curated route recommendations
  - List or card view with route photos and details

- **step-3-run.jpg** (750x1624px)
  - Mobile app showing navigation during a run
  - Map view with active route guidance

### Features Section (4:3 aspect ratio)
- **feature-curated.jpg** (800x600px)
  - Community of runners sharing route experiences
  - Multiple runners or route rating UI

- **feature-smart-matching.jpg** (800x600px)
  - AI-powered route matching interface
  - Algorithm/smart matching visualization

- **feature-privacy.jpg** (800x600px)
  - Privacy-focused offline navigation
  - Secure, private running concept

- **feature-explorer.jpg** (800x600px)
  - Explorer discovering new running routes
  - Adventure/exploration theme

## Image Guidelines

- **Format**: JPG (optimized for web)
- **Max file size**: 500KB per image
- **Quality**: High resolution, professionally shot or designed
- **Style**: Editorial outdoor magazine aesthetic
  - Natural lighting
  - Warm outdoor color palette
  - Premium, authentic feel
  - Matches brand colors (Amber, Cream, Green tones)

## Placeholder Images

For development, you can use placeholder images from:
- Unsplash (https://unsplash.com) - Search: "trail running", "outdoor running"
- Pexels (https://pexels.com) - Free stock photos
- Create mockups with Figma/Canva

## Image Optimization

After adding images, optimize them using:
```bash
npm install -g sharp-cli
sharp -i hero-runner.jpg -o hero-runner.jpg -q 85
```

Or use online tools:
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)
