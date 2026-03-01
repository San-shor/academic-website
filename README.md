# Evergreen University — Academic Website

A modern, fully responsive academic website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## 🌐 Live Demo

**[academic-website-blue.vercel.app](https://academic-website-blue.vercel.app)**

## 📸 Pages

- **Home** — Hero section, stats, announcements, research spotlight, CTA banner
- **Courses** — Program listings with colored accent cards
- **Faculty** — Faculty profiles with avatar badges and research focus
- **Admissions** — Timeline steps, important dates, scholarships & financial aid
- **Research** — Focus areas, research stats, lab tags
- **Contact** — Contact info cards, inquiry form with subject dropdown

## ⚡ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/academic-website.git
cd academic-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (header, footer, mobile nav)
│   ├── page.tsx            # Homepage
│   ├── courses/page.tsx    # Courses & Programs
│   ├── faculty/page.tsx    # Faculty & Staff
│   ├── admissions/page.tsx # Admissions
│   ├── research/page.tsx   # Research & Discovery
│   ├── contact/page.tsx    # Contact Us
│   └── globals.css         # Global styles & animations
├── components/
│   └── MobileNav.tsx       # Mobile hamburger menu (client component)
└── lib/
    └── site-data.ts        # Shared content, types, and data
```

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- Glassmorphism sticky header
- Animated hamburger mobile menu with slide-in drawer
- Smooth fade-in and stagger animations
- Gradient accents and hover lift effects on cards
- Accessible navigation with semantic HTML
- Clean, maintainable data layer (`site-data.ts`)


