import React, { useState, useEffect } from 'react';
import { RiMenuLine } from 'react-icons/ri';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      role="navigation"
      className={`p-5 fixed top-0 w-full z-10 ${
        scrolling ? 'bg-[rgb(138,75,175)]' : 'bg-white'
      } transition-all duration-300`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="#home" className="text-white text-2xl font-bold" onClick={() => scrollToSection('home')}>
            PRACHI
          </a>
        </div>
        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <RiMenuLine size={24} />
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <NavItem href="#home" label="Home" onClick={() => scrollToSection('home')} />
          <NavItem href="#about" label="About" onClick={() => scrollToSection('about')} />
          <NavItem href="#skills" label="Skills" onClick={() => scrollToSection('skills')} />
          <NavItem href="#experience" label="Experience" onClick={() => scrollToSection('experience')} />
          <NavItem href="#education" label="Education" onClick={() => scrollToSection('education')} />
          <NavItem href="#projects" label="Projects" onClick={() => scrollToSection('projects')} />
          <NavItem href="#certificates" label="Certificates" onClick={() => scrollToSection('certificates')} />
          <NavItem href="#contact" label="Contact" onClick={() => scrollToSection('contact')} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, label, onClick }) => (
  <li>
    <a href={href} className="text-white text-lg font-medium" onClick={onClick}>
      {label}
    </a>
  </li>
);

export default Navbar;
