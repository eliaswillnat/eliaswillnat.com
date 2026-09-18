# Elias Willnat — Projects Showcase Portfolio

A fast, sleek, and minimalist personal projects portfolio website crafted for **`eliaswillnat.com`**.

## ✨ Features

- **Minimalist Brand Header**: Elias Willnat anchored at top-left with live status and role indicator.
- **Direct App Launch**: Click any project card to immediately open the live web app in a new tab.
- **Easy Project Management**: Add, update, or remove projects simply by editing `src/data/projects.ts`.
- **Search & Filtering**: Real-time search across titles, descriptions, and tags + category filter pills with live counts.
- **Dark / Light Mode**: Beautiful dark theme default with clean light mode toggle.
- **Responsive & Fast**: Built with React, TypeScript, Tailwind CSS, and Vite for instant load times.

## 🚀 How to Add or Edit Your Apps

Open [`src/data/projects.ts`](./src/data/projects.ts) and customize the `projects` array:

```ts
{
  id: "your-app-id",
  title: "Your App Name",
  description: "What your app does and who it's for.",
  url: "https://your-app-domain.com", // Clicking the card opens this link
  category: "Web Apps", // 'AI & Tools' | 'Web Apps' | 'Productivity' | 'Developer Tools' | 'Experiments'
  tags: ["React", "TypeScript", "Tailwind"],
  icon: "🚀", // Emoji or image URL
  status: "Live", // 'Live' | 'Beta' | 'New' | 'Open Source'
  githubUrl: "https://github.com/...", // Optional GitHub link
  year: "2026"
}
```

You can also update your name, role, status, and social profiles in `profileConfig` in the same file.

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deploying to `eliaswillnat.com`

This project outputs a static site in the `dist` folder:

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repo on [Vercel](https://vercel.com).
3. Under **Project Settings > Domains**, add `eliaswillnat.com`.

### Option 2: Netlify / Cloudflare Pages / GitHub Pages
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- Add custom domain `eliaswillnat.com` in your provider's DNS dashboard.
