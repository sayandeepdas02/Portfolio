# Developer Portfolio

A minimal, professional developer portfolio website built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**.

![Portfolio Preview](https://via.placeholder.com/1200x630/ffffff/000000?text=Developer+Portfolio)

## 🚀 Features

- ✅ **Modern Stack**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- ✅ **Minimal Design**: Clean, professional aesthetic with generous spacing
- ✅ **Data-Driven**: All content in typed TypeScript files for easy customization
- ✅ **SEO Optimized**: Proper metadata and semantic HTML
- ✅ **Responsive**: Mobile-first design that works on all devices
- ✅ **Visitor Counter**: Track portfolio visits with built-in API
- ✅ **Smooth Animations**: Subtle Framer Motion effects
- ✅ **Production Ready**: Optimized build for Vercel deployment

## 📋 Sections

1. **Navbar** - Sticky header with resume and call-to-action buttons
2. **Hero** - Name, tagline, and social links
3. **Skills** - Technical skills grid with icons
4. **Experience** - Work history timeline
5. **Projects** - Portfolio projects with tech stack and links
6. **Education** - Educational background
7. **Visitor Counter** - Real-time visitor tracking
8. **Footer** - Copyright and social links

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## ✏️ Customization

### 1. Update Personal Information

Edit the data files in the `data/` directory:

- **`data/social.ts`** - Social media links, resume URL, booking link
- **`data/skills.ts`** - Your technical skills
- **`data/experience.ts`** - Work experience
- **`data/projects.ts`** - Portfolio projects
- **`data/education.ts`** - Educational background

### 2. Update Hero Section

Edit `components/Hero.tsx`:
- Change "Your Name" to your actual name
- Update the tagline/description

### 3. Update SEO Metadata

Edit `app/layout.tsx`:
- Update title, description, keywords
- Change author name

### 4. Add Your Resume

Replace `public/resume.pdf` with your actual resume file.

### 5. Add Project Images

Add project screenshots to `public/images/` and update the `image` field in `data/projects.ts`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Click "Deploy"

Your portfolio will be live in seconds!

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/visit/          # Visitor counter API
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/             # React components
├── data/                   # Content data files
├── public/                 # Static assets
└── package.json
```

## 🎨 Design Philosophy

This portfolio follows a **minimal, professional** design approach:

- **White background** with neutral colors
- **Large spacing** for readability
- **Subtle animations** that don't distract
- **Clean typography** using Inter font
- **Mobile-first** responsive design

Inspired by modern developer portfolios with a focus on content over decoration.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔧 Upgrading the Visitor Counter

The visitor counter currently uses file-based storage. For production, consider upgrading to:

- **Vercel KV** (Redis)
- **MongoDB**
- **PostgreSQL**
- **Supabase**

Update `app/api/visit/route.ts` to use your preferred database.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

**Built with ❤️ using Next.js and TypeScript**
