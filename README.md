# Rishab Raj Kumar Singh — Premium Portfolio (2026)

> A production-grade, cinematic personal developer portfolio engineered for **Rishab Raj Kumar Singh** — Full-Stack Developer specializing in the MERN Stack, Java, REST APIs, Machine Learning, and IoT.

---

## 🌟 Overview

This portfolio delivers a high-end, responsive web experience showcasing Rishab's engineering projects, academic coursework at Chandigarh University, authentic Coursera certifications, and technical proficiencies.

### Key Highlights
- **Cinematic Video Hero**: Video background with custom Play/Pause reel controls, audio toggle, and poster fallback.
- **Right-Side Hero Social Bar**: Fast-access floating icon bar on the right side connecting directly to **Gmail** (`24686rishu@gmail.com`), **LinkedIn**, and **GitHub**.
- **Typographic Harmony**: Crisp plain typography (**Inter**) for high readability and technical labels, paired with an elegant cursive font (**Caveat**) for expressive highlights and handwritten accents.
- **3D Lanyard ID Badge**: Physics-inspired drop-bounce lanyard badge holding Rishab's verified avatar and academic stats.
- **Interactive Technology Ecosystem**: Dynamic category filter pills (`Full-Stack`, `Java`, `Frontend`, `Database`, `AI/ML & IoT`, `Tools`) with floating glass capsules and status indicators (`Core`, `Proficient`, `Familiar`).
- **Scroll-Driven Engineering Journey**: 5-step roadmap featuring an animated SVG curve that fills dynamically as the user scrolls, lighting up interactive TagCards.
- **Featured Projects Lab**: Unique architectural blueprints and data pipeline visualizations for every project:
  - *E-Commerce Web Application (MERN)*
  - *Rainfall Prediction System (Python & TensorFlow)*
  - *Smart City Solution (IoT Research Paper)*
  - Interactive deep-dive modal lightbox for each project.
- **Dedicated Credentials & Certifications**: Authentic Coursera certificate previews (UC San Diego, IBM, Packt) with a fullscreen image lightbox and direct verification URLs.
- **Academic Foundation**: Clean education timeline highlighting Chandigarh University (B.E. CSE, 7.34 CGPA), Heritage International School, and Sacred Heart School.
- **Parallax Contact Card**: Seamless contact overlay with quick channels and a functional form with instant `mailto:` fallback + EmailJS support.
- **Interactive Cursor Canvas**: High-performance crimson particle trail and radial spotlight with automatic touch-device optimization.

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (version 9 or higher)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/mdyusuf0/risabh-portfolio.git
cd risabh-portfolio
npm install
```

### 2. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 3. Build for Production
Generate an optimized production build:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Structure

```
risabh-portfolio/
├── index.html                           # Main HTML entry with SEO metadata and Google Fonts
├── package.json                         # Project dependencies and npm scripts
├── vite.config.js                       # Vite configuration with React and Tailwind v4 plugins
├── .gitignore                           # Git ignore rules for clean deployment
├── README.md                            # Complete documentation & client handover guide
├── public/                              # Static assets served at the root
│   ├── Rishab_Raj_Resume.pdf            # Rishab's verified resume PDF
│   ├── favicon.svg                      # Custom 'R' monogram SVG favicon
│   ├── rishab-avatar.png                # Avatar poster fallback
│   ├── videos/
│   │   └── rishab-hero.mp4              # Cinematic hero loop video
│   └── certificates/                    # Real Coursera certificate images
│       ├── data-structures.jpeg
│       ├── databases-sql.jpeg
│       └── ethical-hacking.jpeg
└── src/
    ├── App.jsx                          # Main application layout
    ├── main.jsx                         # React 19 root mount point
    ├── index.css                        # Tailwind directives, keyframes, and custom utilities
    ├── assets/
    │   └── rishab-avatar.png            # Photo for lanyard ID badge
    ├── components/
    │   ├── Preloader.jsx                # Cinematic entrance preloader with water-fill animation
    │   ├── InteractiveCanvas.jsx        # Subtle crimson cursor particle trail and spotlight
    │   ├── Navbar.jsx                   # Sticky glass navigation with mobile drawer
    │   ├── Hero.jsx                     # Video hero with right-side social icon bar
    │   ├── About.jsx                    # Lanyard ID badge, bio, stats, and torn paper divider
    │   ├── Skills.jsx                   # Modern interactive Technology Ecosystem
    │   ├── Journey.jsx                  # 5-step engineering roadmap with animated SVG curve
    │   ├── Projects.jsx                 # Architectural visualizations & modal lightbox
    │   ├── Certifications.jsx           # Credentials grid with fullscreen image lightbox
    │   ├── Education.jsx                # Academic timeline (Chandigarh University, etc.)
    │   ├── Contact.jsx                  # Parallax CONNECT text, crimson form card
    │   └── Footer.jsx                   # Minimalist tech footer with brand watermark
    └── data/
        └── portfolioData.js             # Centralized source of truth for all content
```

---

## 🛠️ Client Customization Guide

All portfolio content is centralized in **`src/data/portfolioData.js`**. You can update any information without touching JSX code:

### Updating Personal Information
Open `src/data/portfolioData.js` and modify:
- `personalInfo.name`, `personalInfo.title`, `personalInfo.location`, `personalInfo.phone`, `personalInfo.emails.primary`.
- Social URLs under `socialLinks.github`, `socialLinks.linkedin`.

### Updating the Resume
1. Place your new resume PDF inside `public/`.
2. Name it `Rishab_Raj_Resume.pdf` (or update `personalInfo.resumeUrl` in `portfolioData.js`).
3. All "Download Resume" buttons across the Navbar, Hero, and Footer will automatically link to the new file.

### Adding New Certificates
1. Save your certificate image inside `public/certificates/`.
2. Add a new entry to the `certificates` array in `src/data/portfolioData.js`:
```javascript
{
  id: "new-certificate",
  title: "Certificate Title",
  issuer: "Issuing Organization",
  platform: "Coursera / Udemy",
  issueDate: "Month Year",
  verifyUrl: "https://...",
  imageUrl: "/certificates/new-certificate.jpeg",
  category: "Computer Science / Development",
  tags: ["Skill 1", "Skill 2"],
  hasImage: true,
}
```

### Configuring EmailJS (Optional)
The contact form works out of the box with an instant `mailto:` draft fallback. To enable direct serverless email delivery:
1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import `risabh-portfolio`.
4. Framework Preset: **Vite** (detected automatically).
5. Click **"Deploy"**.

### Deploying to Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or
2. Connect your GitHub repository to Netlify with build command `npm run build` and publish directory `dist`.

---

## 📞 Verified Contact Information

- **Name**: Rishab Raj Kumar Singh
- **Email**: [24686rishu@gmail.com](mailto:24686rishu@gmail.com)
- **Phone**: +91 6201748080
- **GitHub**: [github.com/Rishab620174](https://github.com/Rishab620174)
- **LinkedIn**: [linkedin.com/in/rishabsingh19](https://linkedin.com/in/rishabsingh19)
- **Location**: Mohali / Chandigarh, India (Open to Relocation)
- **Education**: B.E. Computer Science — Chandigarh University (CGPA: 7.34)

---

## 📄 License
Created for **Rishab Raj Kumar Singh**. All rights reserved.
