# Drashti Patel — Frontend Developer Portfolio

A dark, high-performance developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. Inspired by modern editorial developer aesthetics with deep charcoal backgrounds (`#1B2025`, `#252D34`), vibrant turquoise accents (`#00E5D4`), topographic contour patterns, and responsive typography.

---

## 🚀 Live Demo & Links

- **GitHub Repository**: [https://github.com/Dr1507](https://github.com/Dr1507)
- **LinkedIn Profile**: [Drashti Patel](https://www.linkedin.com/in/drashti-patel-48834724b?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Email**: [drashti8042@gmail.com](mailto:drashti8042@gmail.com)

---

## ✨ Features & Sections

- **Header / Navigation**: Clean, sticky glassmorphic navbar with brand mark (`<C/> DrashtiPatel`), section anchor links, and quick-access social profiles.
- **Desktop Vertical Name Sidebar**: Editorial vertical rotated brand banner (`DrashtiPatel`) on desktop screens.
- **Hero & Developer Profile**: 
  - Dynamic ID profile card with organic leaf curvature and DP avatar ring.
  - Headline: *"Hey, I'm Drashti, Frontend Developer"*.
  - Direct email contact and GitHub / LinkedIn action buttons.
  - Key focus badges (React Frontend, 6 Months Internship, MSc IT Degree).
- **About Me & Integrated Core Skills**:
  - Interactive terminal code editor card on the left displaying background and education.
  - Compact **Core Skills** grid on the right showcasing React, JavaScript, Tailwind CSS, Redux, HTML5, CSS3, Node.js, Express.js, MongoDB, and Git/GitHub.
  - Topographic contour line SVG pattern background.
- **Featured Projects**:
  1. **Role-Based Quiz Management System**: Full-stack platform featuring drag-and-drop question ordering, bulk CSV/Excel ingestion, timer attempt limits, instant auto-scoring, and JWT-authenticated dashboards.
  2. **Location QR Generator**: Responsive React utility converting addresses or Google Maps pins into scannable, downloadable high-resolution QR codes with instant preview and native PNG export.
- **Education & Experience**: Compact 2-column grid highlighting the **Master of Science in Information Technology (MSc IT)** postgraduation and **MERN Stack Developer Internship** experience.
- **Minimalist Footer**: Slim single-line footer with copyright information, brand identity, and social links.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS custom utilities
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Headings) & Inter (Body)

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dr1507/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.tsx           # Narrative terminal + Core Skills grid
│   │   ├── Experience.tsx      # Compact 2-column education & experience cards
│   │   ├── Footer.tsx          # Slim, responsive footer
│   │   ├── Hero.tsx            # Developer headline, profile badge card, and stats
│   │   ├── Navbar.tsx          # Sticky glassmorphic top navigation
│   │   └── Projects.tsx        # 2 featured project cards with GitHub links
│   ├── data/
│   │   └── portfolioData.ts    # Centralized personal info & career details
│   ├── App.tsx                 # Main layout structure & vertical desktop sidebar
│   ├── index.css               # Design system tokens, topographic patterns & themes
│   └── main.tsx                # React application entry point
├── index.html                  # SEO metadata, favicon, and Google Fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

---

## 📄 License

This project is personal and open-source under the Apache-2.0 / MIT license.
