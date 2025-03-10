# Achyut Mukund - Portfolio Website

This is a personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The site features a modern, responsive design with smooth animations and transitions.

## Features

- Modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Fully responsive design
- Edge-based navigation system
- SEO optimized
- TypeScript integration

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) to view the website

## Profile Image

To add your profile image:

1. Replace the placeholder image at `/public/images/profile-placeholder.jpg` with your own image
2. Recommended size: 400x500 pixels
3. Make sure to optimize the image for web (using tools like [TinyPNG](https://tinypng.com/))

## Customization

The site can be easily customized by editing:

- Content in `pages/index.tsx`
- Styles in `styles/globals.css`
- Meta data in `components/Meta.tsx`

## License

MIT License

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

- `/pages` - Next.js pages
- `/components` - Reusable React components
- `/styles` - Global styles and Tailwind imports
- `/public` - Static assets

## Deployment

This portfolio is configured for static export, making it easy to deploy to various platforms:

### Build for Production

```
npm run build
```

This will create a static export in the `out` directory.

### Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will automatically detect Next.js and deploy your site

### Deploy to GitHub Pages

1. Update `next.config.js` with your repository name:
   ```js
   basePath: '/your-repo-name',
   ```
2. Build your project
3. Push the `out` directory to the `gh-pages` branch

## Accessibility

This portfolio follows accessibility best practices:
- Semantic HTML structure
- Proper color contrast
- Keyboard navigation support
- Screen reader-friendly content

## Performance

The site is optimized for performance:
- Static generation for fast loading
- Optimized images
- Minimal CSS with Tailwind's JIT compiler
- Code splitting through Next.js