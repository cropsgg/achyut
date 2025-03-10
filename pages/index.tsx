import { motion } from "framer-motion";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverEdge, setHoverEdge] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const pageVariants = {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const contentVariants = {
    initial: { 
      opacity: 0,
      y: 20,
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle edge detection for home page
  useEffect(() => {
    if (activeSection !== 'home') return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Define edge detection thresholds (pixels from edge)
      const threshold = 80;
      
      // Determine which edge (if any) the cursor is close to
      if (clientY < threshold) {
        setHoverEdge("top");
      } else if (clientX > windowWidth - threshold) {
        setHoverEdge("right");
      } else if (clientX < threshold) {
        setHoverEdge("left");
      } else if (clientY > windowHeight - threshold) {
        setHoverEdge("bottom");
      } else {
        setHoverEdge(null);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (mainElement) {
        mainElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [activeSection]);

  // Navigate to a specific section
  const navigateToSection = (section: string) => {
    setActiveSection(section);
  };

  // Render the proper section content
  const renderSection = () => {
    switch(activeSection) {
      case "about":
        return (
          <div className="section-content">
            <div className="section-inner">
              <h1 className="section-title">About Me</h1>
              <div className="section-body">
                <p>
                  I'm a passionate full-stack developer who loves creating beautiful and functional web applications.
                  With a strong foundation in both frontend and backend technologies, I strive to build seamless
                  experiences that users love.
                </p>
                
                <h2 className="section-heading mt-8">My Background</h2>
                <p>
                  With several years of experience in web development, I've worked on a variety of projects from
                  small business websites to complex enterprise applications. My journey in technology began with...
                </p>
              </div>
              
              <div className="home-button" onClick={() => navigateToSection("home")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </div>
            </div>
          </div>
        );
      case "projects":
        return (
          <div className="section-content">
            <div className="section-inner">
              <h1 className="section-title">Projects</h1>
              <div className="section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="section-heading">Project 1</h2>
                    <p>A description of your first project and what technologies you used.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="section-heading">Project 2</h2>
                    <p>A description of your second project and what technologies you used.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="section-heading">Project 3</h2>
                    <p>A description of your third project and what technologies you used.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="section-heading">Project 4</h2>
                    <p>A description of your fourth project and what technologies you used.</p>
                  </div>
                </div>
              </div>
              
              <div className="home-button" onClick={() => navigateToSection("home")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </div>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="section-content">
            <div className="section-inner">
              <h1 className="section-title">Experience</h1>
              <div className="section-body">
                <div className="mt-8">
                  <div className="mb-10">
                    <h2 className="section-heading">Senior Developer at Company A</h2>
                    <p className="text-gray-700">2020 - Present</p>
                    <p className="mt-2">
                      Led the development of multiple web applications using React and Node.js.
                      Managed a team of 5 developers and implemented CI/CD pipelines.
                    </p>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="section-heading">Full-Stack Developer at Company B</h2>
                    <p className="text-gray-700">2018 - 2020</p>
                    <p className="mt-2">
                      Developed and maintained web applications using Next.js and Express.
                      Improved application performance by 40% through code optimization.
                    </p>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="section-heading">Junior Developer at Company C</h2>
                    <p className="text-gray-700">2016 - 2018</p>
                    <p className="mt-2">
                      Assisted in frontend development using HTML, CSS, and JavaScript.
                      Created responsive designs for mobile-first web applications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="home-button" onClick={() => navigateToSection("home")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="section-content">
            <div className="section-inner">
              <h1 className="section-title">Contact</h1>
              <div className="section-body">
                <div className="mt-8 max-w-2xl">
                  <p className="mb-6">
                    Feel free to reach out to me via email or through my social media profiles.
                    I'm always open to discussing new projects, creative ideas, or opportunities.
                  </p>
                  
                  <div className="mb-6">
                    <h2 className="section-heading">Email</h2>
                    <p><a href="mailto:achyut.mukund@example.com" className="text-blue-600 hover:underline">achyut.mukund@example.com</a></p>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="section-heading">Social Media</h2>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                      <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                      <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="home-button" onClick={() => navigateToSection("home")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-primary">
      <Meta title="Achyut Mukund | Portfolio" />
      
      <main className="flex flex-col items-center justify-between min-h-screen" ref={mainRef}>
        {activeSection === "home" ? (
          <div className="flex items-center justify-center w-full h-screen">
            {/* Main center container */}
            <div className="content-container">
              <div className="profile-content">
                <div className="profile-text">
                  <h1 className="profile-name">Achyut<br/>Mukund</h1>
                  <p className="profile-title">Full-Stack Developer & UI/UX Enthusiast</p>
                  <div className="profile-skills">
                    <span className="skill-pill">Web</span>
                    <span className="skill-pill">React</span>
                    <span className="skill-pill">UI/UX</span>
                  </div>
                </div>
                <div className="profile-image">
                  <img 
                    src="/images/profile-placeholder.jpg" 
                    alt="Achyut Mukund" 
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Achyut+Mukund';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation pills - wider edge-spanning versions */}
            <div 
              className={`nav-pill nav-pill-top ${hoverEdge === 'top' ? 'active' : ''}`}
              onClick={() => navigateToSection("about")}
              onMouseEnter={() => setHoverEdge('top')}
              onMouseLeave={() => setHoverEdge(null)}
            >
              About
            </div>
            
            <div 
              className={`nav-pill nav-pill-left ${hoverEdge === 'left' ? 'active' : ''}`}
              onClick={() => navigateToSection("projects")}
              onMouseEnter={() => setHoverEdge('left')}
              onMouseLeave={() => setHoverEdge(null)}
            >
              Project
            </div>
            
            <div 
              className={`nav-pill nav-pill-right ${hoverEdge === 'right' ? 'active' : ''}`}
              onClick={() => navigateToSection("experience")}
              onMouseEnter={() => setHoverEdge('right')}
              onMouseLeave={() => setHoverEdge(null)}
            >
              <span className="experience-text">Experience</span>
            </div>
            
            <div 
              className={`nav-pill nav-pill-bottom ${hoverEdge === 'bottom' ? 'active' : ''}`}
              onClick={() => navigateToSection("contact")}
              onMouseEnter={() => setHoverEdge('bottom')}
              onMouseLeave={() => setHoverEdge(null)}
            >
              Contact
            </div>
          </div>
        ) : (
          renderSection()
        )}
        
        <Footer />
      </main>
    </div>
  );
} 