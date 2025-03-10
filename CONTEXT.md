# Personal Portfolio Website (UI/UX Specification)

This document outlines the **UI/UX** structure for a single-page portfolio website built with:
- **Next.js** (using **TypeScript**)
- **Tailwind CSS**
- **Framer Motion** (for subtle animations)

The design references the attached images:
- **Image 1**: Showcases the homepage with "DIVIK DHIMAN" prominently displayed.
- **Image 2**: Shows the four sections (About, Experience, Projects, Contact).

Below is a breakdown of how each section should look and function, along with guidelines on styling, layout, and sample content.

---

## 1. Overall Design & Color Palette

- **Color Scheme**:
  - **Background**: `#EEE5DA` (light, cream-like)
  - **Primary Text/Elements**: `#262424` (dark, charcoal-like)
- **Typography**:
  - A modern, bold typeface for headings (similar to the style in the images).
  - A clean, readable sans-serif for body text.
- **Layout**:
  - Single-page layout with distinct sections for Home, About, Experience, Projects, and Contact.
  - Smooth scrolling transitions to each section.
- **Navigation**:
  - On larger screens, a side navigation bar (aligned left or right) remains visible, with links to each section.
  - On mobile/tablet screens, the navigation bar collapses into a **toggleable/hamburger** menu.
  - Clicking each nav item triggers a smooth scroll animation to the corresponding section.

---

## 2. Homepage (Image 1)

### Structure
- **Hero Section**:
  - A full-screen (or nearly full-screen) hero area.
  - Centered text: **DIVIK DHIMAN** (large, bold).
  - Subtle background shapes or borders that mirror Image 1's design.

### Animation
- **Framer Motion** fade/slide:
  - Text appears with a slight fade-in and upward slide.
  - Possibly a slight delay to create a staggered entrance effect.

### Sample Content
```tsx
// Example: pages/index.tsx (or /app/page.tsx if using Next.js App Router)
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-[#EEE5DA]"
    >
      <motion.h1
        className="text-5xl font-bold text-[#262424]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        DIVIK DHIMAN
      </motion.h1>
    </section>
  );
}

# Navigation Bar Specifications  

## Desktop Navigation  

- **Type**: Vertical bar (either on the left or right)  
- **Links**:  
  - About  
  - Experience  
  - Projects  
  - Contact  
- **Functionality**:   
  - Clicking a link smoothly scrolls to that section.  
  
### Style  
- **Background Color**: `#262424` or a semi-transparent overlay.  
- **Text Color**: `#EEE5DA`.  
- **Hover Effect**:   
  - Subtle highlight or underline on hover.  

---  

## Mobile Navigation  

- **Icon**: Hamburger icon located in the top-left or top-right corner.  
- **Functionality**:   
  - On click, a dropdown or slide-in menu appears with the same section links.  
  
### Animation  
- **Animation Library**: Use Framer Motion for a slide-in animation from the side.  

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full md:w-auto">
      {/* Hamburger Button */}
      <div className="md:hidden p-4">
        <button onClick={toggleMenu} className="text-[#262424]">
          {/* Icon can be a simple SVG or a library icon */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col p-4 bg-[#262424] h-screen">
        <NavLinks />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 w-3/4 h-screen bg-[#262424]"
          >
            <div className="p-4">
              <NavLinks onLinkClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const links = ["home", "about", "experience", "projects", "contact"];

  return (
    <ul className="space-y-4 text-[#EEE5DA]">
      {links.map((link) => (
        <li key={link}>
          <a
            href={`#${link}`}
            onClick={onLinkClick}
            className="hover:underline"
          >
            {link.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}

# About Section Specifications  

## Structure  

- **Heading**: "About"  
- **Content**: A brief introduction about you as a student software developer.  

### Layout  
- **Type**: Two-column or single-column layout (depending on screen size).  
- **Left Column**:  
  - A short bio or story about your journey.  
- **Right Column**:  
  - Possibly an image or any relevant graphic.  


<section id="about" className="min-h-screen p-8 bg-[#EEE5DA] text-[#262424]">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-semibold mb-4"
  >
    About
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-xl leading-relaxed"
  >
    Hi, I'm Divik Dhiman, a passionate student developer currently pursuing 
    a degree in Computer Science. My journey into coding started with a 
    simple "Hello World" and has since grown into a quest to build 
    meaningful applications. I love exploring new technologies, tackling 
    coding challenges, and contributing to open-source projects.
  </motion.p>
</section>


# Experience Section Specifications  

## Structure  

- **Heading**: "Experience"  
- **Content**: A chronological list of any relevant internships, part-time roles, or notable coursework/projects.  

### Layout  
- **Type**: A vertical timeline or cards summarizing each experience.  

<section id="experience" className="min-h-screen p-8 bg-[#EEE5DA] text-[#262424]">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-semibold mb-6"
  >
    Experience
  </motion.h2>

  <div className="space-y-4">
    <motion.div
      className="bg-white rounded-lg p-4 shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-bold text-[#262424]">
        Intern - XYZ Tech Solutions
      </h3>
      <p className="text-sm text-gray-600">June 2024 - Aug 2024</p>
      <p className="mt-2 text-[#262424]">
        Contributed to front-end development using React and Tailwind CSS, 
        collaborated with a team to implement user-friendly features, 
        and optimized application performance.
      </p>
    </motion.div>

    <motion.div
      className="bg-white rounded-lg p-4 shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-bold text-[#262424]">
        Course Project - Advanced Web Development
      </h3>
      <p className="text-sm text-gray-600">Jan 2025 - May 2025</p>
      <p className="mt-2 text-[#262424]">
        Built a full-stack application using Next.js and Node.js, 
        incorporating real-time functionalities and secure authentication.
      </p>
    </motion.div>
  </div>
</section>

# Projects Section Specifications  

## Structure  

- **Heading**: "Projects"  

### Layout  
- **Type**: A grid of project cards showcasing personal or academic projects.  

### Each Card Includes:  
- **Project Name**  
- **Short Description**  
- **Tech Stack Used**  
- **Link to GitHub Repo/Demo** (if available)  

<section id="projects" className="min-h-screen p-8 bg-[#EEE5DA] text-[#262424]">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-semibold mb-6"
  >
    Projects
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Project Card */}
    <motion.div
      className="bg-white rounded-lg p-4 shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl font-bold">Portfolio Website</h3>
      <p className="text-sm text-gray-600">Next.js, Tailwind, Framer Motion</p>
      <p className="mt-2 text-[#262424]">
        A single-page portfolio site showcasing my work and experience. 
        Implements smooth animations and a mobile-friendly design.
      </p>
      <div className="mt-2">
        <a
          href="#"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </motion.div>

    {/* Add more project cards as needed */}
  </div>
</section>

# Contact Section Specifications  

## Structure  

- **Heading**: "Contact"  

### Content  
- A short invitation to get in touch.  
- **Social Media Links**:  
  - GitHub  
  - LinkedIn  
  - Instagram  
- **Contact Options**:  
  - An email link or a contact form.  

  <section id="contact" className="min-h-screen p-8 bg-[#EEE5DA] text-[#262424]">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-semibold mb-6"
  >
    Contact
  </motion.h2>
  
  <p className="max-w-xl mb-4">
    I'd love to connect and discuss any opportunities or collaborations. 
    Feel free to reach out through any of the platforms below:
  </p>
  
  <ul className="space-y-2">
    <li>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        GitHub
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Instagram
      </a>
    </li>
    <li>
      <a
        href="mailto:youremail@example.com"
        className="text-blue-600 hover:underline"
      >
        Email
      </a>
    </li>
  </ul>
</section>

# Footer Specifications  

## Structure  

- A minimal footer with your name or a simple credit line.  
- Could contain:  
  - Quick links  
  - Copyright information  

  <footer className="bg-[#262424] text-[#EEE5DA] p-4 text-center">
  © 2025 Divik Dhiman. All rights reserved.
</footer>

# Putting It All Together  

## File/Folder Structure (Example)  

my-portfolio/
├─ pages/
│   ├─ _app.tsx          // Tailwind & global styles
│   └─ index.tsx         // Main entry for the single-page site
├─ components/
│   ├─ NavBar.tsx        // Navigation bar component
│   └─ Footer.tsx        // Footer component
├─ public/
│   └─ images/           // Any static images
├─ styles/
│   └─ globals.css       // Tailwind base imports
├─ package.json
├─ tailwind.config.js
└─ tsconfig.json

# Final Notes & UX Considerations  

## Smooth Scrolling  
- Ensure that internal links use smooth scrolling:  
  - Use `scroll-behavior: smooth;` in CSS or a Framer Motion scroll effect.  

## Mobile Responsiveness  
- All sections should adapt to smaller screens:  
  - Utilize stacked layouts and full-width elements.  
  - Navigation should collapse into a hamburger menu.  

## Animations  
- Use Framer Motion for subtle fade and slide transitions:  
  - Keep transitions snappy but not distracting (duration ~0.5-0.8s).  

## Performance  
- Optimize images and lazy-load any large media.  
- Consider incremental static regeneration (ISR) or server-side rendering if needed, but a static export is often sufficient for a portfolio.  

## Accessibility  
- Use semantic HTML tags for each section:  
  - Examples: `<section>`, `<header>`, `<footer>`.  
- Ensure color contrast meets accessibility guidelines (e.g., dark text on light background).  

## Personal Touch  
- Replace placeholder text with your real experiences, projects, and contact details.  
- Insert personal branding elements (e.g., logo, custom illustrations) if desired.  