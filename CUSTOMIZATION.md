# Quick Customization Guide

This guide will help you personalize your portfolio in **5 minutes**.

## Step 1: Update Your Information (2 minutes)

### Edit `data/social.ts`

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME", // ← Change this
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_USERNAME", // ← Change this
    icon: "Linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/YOUR_USERNAME", // ← Change this
    icon: "Code2",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/YOUR_USERNAME", // ← Change this
    icon: "Twitter",
  },
];

export const resumeUrl = "/resume.pdf"; // ← Make sure you add your resume.pdf to public/
export const bookCallUrl = "https://cal.com/YOUR_USERNAME"; // ← Change to your booking link
```

### Edit `components/Hero.tsx`

Find lines 24-30 and update:

```typescript
<h1>Hi, I'm John Doe</h1> {/* ← Change to your name */}

<p>
  A Full Stack Developer building modern web applications... {/* ← Change to your tagline */}
</p>
```

### Edit `app/layout.tsx`

Update the SEO metadata (lines 10-28):

```typescript
export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer", // ← Your name
  description: "Professional portfolio of John Doe...", // ← Your description
  authors: [{ name: "John Doe" }], // ← Your name
  // ...
};
```

### Edit `components/Navbar.tsx`

Update the avatar initials (line 33):

```typescript
<div className="...">
  JD {/* ← Change to your initials */}
</div>
```

---

## Step 2: Update Your Content (3 minutes)

### Skills - Edit `data/skills.ts`

Add/remove/modify your skills:

```typescript
export const skills: Skill[] = [
  { name: "React", icon: "Atom" },
  { name: "Python", icon: "FileCode" },
  // Add more skills...
];
```

**Available Icons**: Check [Lucide Icons](https://lucide.dev/icons/) for icon names.

### Experience - Edit `data/experience.ts`

Update with your work history:

```typescript
export const experiences: Experience[] = [
  {
    role: "Senior Developer",
    company: "Tech Corp",
    duration: "Jan 2023 - Present",
    responsibilities: [
      "Built scalable applications",
      "Led team of 5 developers",
      // 3-5 bullet points
    ],
  },
  // Add more experiences...
];
```

### Projects - Edit `data/projects.ts`

Showcase your best projects:

```typescript
export const projects: Project[] = [
  {
    name: "Awesome Project",
    description: "A cool project that does X",
    image: "/images/project-1.jpg", // Add image to public/images/
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://project.com",
  },
  // Add more projects...
];
```

### Education - Edit `data/education.ts`

Add your degrees:

```typescript
export const education: Education[] = [
  {
    degree: "BS in Computer Science",
    institution: "University Name",
    year: "2016 - 2020",
  },
  // Add more...
];
```

---

## Step 3: Add Your Files

### Resume

```bash
# Add your resume PDF
cp ~/path/to/your/resume.pdf public/resume.pdf
```

### Project Images

```bash
# Create images directory
mkdir -p public/images

# Add project screenshots
cp ~/path/to/project1.jpg public/images/project-1.jpg
cp ~/path/to/project2.jpg public/images/project-2.jpg
# etc...
```

**Recommended image size**: 1200x630px (16:9 ratio)

---

## Step 4: Test Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and verify everything looks good!

---

## Step 5: Deploy to Vercel

```bash
# Option 1: Push to GitHub and import on Vercel
git add .
git commit -m "Personalize portfolio"
git push

# Option 2: Deploy directly with Vercel CLI
npx vercel
```

---

## 🎨 Optional Customization

### Change Colors

Edit `app/globals.css` to customize colors:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  /* Add more custom colors */
}
```

### Change Font

Edit `app/layout.tsx` to use a different Google Font:

```typescript
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
```

### Adjust Spacing

Edit component files to adjust padding/margins:
- Sections use `py-20` (padding-y: 5rem)
- Containers use `max-w-6xl` or `max-w-4xl`

---

## 🆘 Need Help?

- **Icons**: Browse [Lucide Icons](https://lucide.dev/icons/)
- **Fonts**: Browse [Google Fonts](https://fonts.google.com/)
- **Colors**: Use [Coolors](https://coolors.co/) for palettes
- **Images**: Use [Unsplash](https://unsplash.com/) for placeholders

---

## ✅ Checklist

Before deploying, make sure you've:

- [ ] Updated all social links in `data/social.ts`
- [ ] Changed name in `components/Hero.tsx`
- [ ] Updated SEO metadata in `app/layout.tsx`
- [ ] Changed avatar initials in `components/Navbar.tsx`
- [ ] Added your skills to `data/skills.ts`
- [ ] Added your work experience to `data/experience.ts`
- [ ] Added your projects to `data/projects.ts`
- [ ] Added your education to `data/education.ts`
- [ ] Added `resume.pdf` to `public/`
- [ ] Added project images to `public/images/`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`

**You're ready to deploy! 🚀**
