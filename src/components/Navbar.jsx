import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  // Handle mouse movement for the glow orb effect
  const handleMouseMove = (e) => {
    const rect = navRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const navElement = navRef.current;
    navElement.addEventListener('mousemove', handleMouseMove);
    return () => navElement.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
    hover: { scale: 1.1, color: '#d4a017', transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      ref={navRef}
      className="navbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="glow-orb"
        style={{ transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)` }}
      />
      <div className="container">
        <motion.h1
          className="logo"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          My Portfolio
        </motion.h1>
        <div className="nav-links">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/services', label: 'Services' },
            { to: '/contact', label: 'Contact' },
          ].map((link, index) => (
            <motion.div
              key={link.label}
              className="nav-link-wrapper"
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            className="nav-link-wrapper"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={5}
            whileHover="hover"
            whileTap="tap"
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;