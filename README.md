# Elias Willnat — Projects Showcase Portfolio

A fast, sleek, and minimalist personal projects portfolio website crafted for **`eliaswillnat.com`**.

## Features

- **Minimalist Brand Header**: Elias Willnat anchored at top-left with live status and role indicator.
- **Direct App Launch**: Click any project card to immediately open the live web app in a new tab.
- **Cover-image cards**: Gallery-style cards with screenshots, rounded corners, subtle border, and hover wash.
- **Easy Project Management**: Add, update, or remove projects simply by editing `src/data/projects.ts`.
- **Category Filtering**: Category filter pills with live counts.
- **Dark / Light Mode**: Dark theme default with clean light mode toggle.
- **Responsive & Fast**: Built with React, TypeScript, Tailwind CSS, and Vite for instant load times.

## How to Add or Edit Your Apps

Open [`src/data/projects.ts`](./src/data/projects.ts) and customize the `projects` array:

```ts
{
  id: "your-app-id",
  title: "Your App Name",
  description: "What your app does and who it's for.",
  url: "https://your-app-domain.com",
  category: "Web Apps",
  tags: ["React", "TypeScript"],
  coverImage: yourCoverImport, // import from src/assets/
  status: "Live", // 'Live' | 'Beta' | 'New'
  year: "2026"
}
```

You can also update your name, role, status, and social profiles in `profileConfig` in the same file.

## Local Development

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

## Deploying to `eliaswillnat.com`

This project outputs a static site in the `dist` folder and includes Firebase Hosting config (`firebase.json`, `.firebaserc` → project `eliaswillnat`).

### Firebase Hosting

```bash
npm run build
npx firebase deploy --only hosting
```

Requires Firebase CLI auth and access to the `eliaswillnat` Firebase project.
