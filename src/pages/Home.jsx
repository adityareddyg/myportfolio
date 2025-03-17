import React from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Social media icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css';
import profilePic from '../assets/profilepic.jpg';

const Home = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' } },
    hover: { scale: 1.15, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  // Animation variants for the profile image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { duration: 1, delay: 0.5, ease: 'easeOut' } 
    },
  };

  // Social media links
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/adityareddyg' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/gundaaditya' },
    { icon: <FaTwitter />, url: 'https://x.com/GundaAdityaR?t=4_yg8b-zIQRpz4wnJPVDYA&s=08' },
  ];

  // Handle navigation to About page
  const handleViewWorkClick = () => {
    navigate('/about'); // Navigate to the /about route
  };

  // Handle navigation to Contact page
  const handleHireMeClick = () => {
    navigate('/contact'); // Navigate to the /contact route
  };

  return (
    <div className="home-container">
      <main className="hero-section">
        <div className="hero-content">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            HELLO I'AM
          </motion.h2>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="single-line-name"
          >
            Aditya Reddy Gunda
          </motion.h1>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Typical
              className="typewriter"
              steps={[
                "I'm a Web Developer with extensive experience for over 5 years.",
                2000,
                "My expertise is to create Websites design, graphic design and many more...",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </motion.div>
          <div className="buttons">
            <motion.button
              className="view-work"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={handleViewWorkClick}
            >
              View Work
            </motion.button>
            <motion.button
              className="hire-me"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 1 }}
              onClick={handleHireMeClick}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
        <motion.div
          className="profile-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={profilePic} alt="Aditya Reddy Gunda" />
          <div className="social-overlay">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;