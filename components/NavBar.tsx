import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

interface NavBarProps {
  activeSection: string;
  onSectionChange: Dispatch<SetStateAction<string>>;
}

export default function NavBar({ activeSection, onSectionChange }: NavBarProps) {
  const navItems = ['about', 'projects', 'home', 'experience', 'contact'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Desktop Navigation */}
      {activeSection !== 'home' && (
        <motion.nav 
          className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionChange(item);
                  }}
                  className="group flex items-center"
                >
                  <span className="hidden group-hover:block mr-2 text-xs uppercase text-white bg-black px-2 py-1 rounded-lg">
                    {item}
                  </span>
                  <span 
                    className={`block w-3 h-3 rounded-full 
                      ${item === activeSection ? 'bg-accent' : 'bg-gray-400'} 
                      hover:bg-accent transition-all`}
                    aria-label={item}
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-background p-2 rounded-full"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-primary"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 md:hidden flex items-center justify-center">
          <motion.ul 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSectionChange(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xl uppercase ${item === activeSection ? 'text-accent' : 'text-white'} hover:text-accent transition-colors`}
                >
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      )}

      {/* Back to Home button - only shown in content pages */}
      {activeSection !== 'home' && (
        <motion.button
          className="fixed top-4 left-4 z-50 bg-background p-2 rounded-full text-primary hover:bg-accent hover:text-white transition-colors"
          onClick={() => onSectionChange('home')}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to Home"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 12L9 6M3 12l6 6"/>
          </svg>
        </motion.button>
      )}
    </>
  );
} 