import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Sections to monitor
    const sections = document.querySelectorAll('.section');

    // IntersectionObserver callback to detect when a section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section based on the id of the section
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    sections.forEach((section) => observer.observe(section));

    // Cleanup observer when component is unmounted
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <a href="https://github.com/S-125"><FaGithub className='logo' /></a>
        <a href="https://www.linkedin.com/in/sritama-mitra-baa51a290/"><FaLinkedin className="logo" /></a>
        <a href="https://www.instagram.com/sritama_m125/"><FaInstagram className="logo" /></a>
      </div>
      <div className='navbar__right'>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
