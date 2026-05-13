import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Music', href: '#music' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6" id="navbar-container">
        <div className={`glass flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`} id="navbar-inner">
          <div className="flex items-center gap-2" id="navbar-logo-group">
            <div className="p-2 bg-black rounded-lg" id="navbar-logo-icon">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter outfit uppercase" id="navbar-brand-name">RoveR</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8" id="desktop-menu">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="text-sm font-bold text-black hover:opacity-70 transition-opacity uppercase"
              >
                {link.name}
              </a>
            ))}
            <button id="nav-cta-button" className="px-5 py-2 bg-black text-white text-sm font-bold transition-all duration-300 hover:bg-zinc-800">
              Listen Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            id="mobile-menu-toggle"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X id="icon-close" /> : <Menu id="icon-menu" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
          >
            <div className="glass bg-black/90 p-6 flex flex-col gap-4" id="mobile-menu-content">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  id={`mobile-nav-link-${link.name.toLowerCase()}`}
                  className="text-lg font-medium text-text-secondary hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button id="mobile-nav-cta" className="w-full py-3 bg-accent-primary text-white font-bold rounded-xl mt-2">
                Listen Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
