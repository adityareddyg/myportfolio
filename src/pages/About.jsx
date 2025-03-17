import { motion } from 'framer-motion';
import profilePic from '../assets/profilepic.jpg';
import './About.css';
import { FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiPytorch } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const certificationsRef = useRef(null);
  const aboutRef = useRef(null);

  // Dynamically set padding-top based on navbar height
  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    if (aboutRef.current) {
      aboutRef.current.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);

  const handleCertificationClick = () => {
    if (certificationsRef.current) {
      certificationsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="about"
      ref={aboutRef} // Attach ref to dynamically adjust padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-wrapper">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="about-profile"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img src={profilePic} alt="Aditya Reddy Gunda" className="profile-pic" />
          </motion.div>
          <motion.div
            className="about-intro"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <p className="intro-text">
              Hello! I am <strong>Aditya Reddy Gunda</strong>, a passionate and self-motivated Computer Science student at Pittsburg State University (2021-2025, GPA: 3.7). I specialize in Data Science, AI, DevOps, and Cloud technologies, with a keen interest in developing innovative solutions.
            </p>
            <div className="achievements">
              <span className="badge">GPA: 3.7</span>
              <span
                className="badge certification-link"
                onClick={handleCertificationClick}
                style={{ cursor: 'pointer' }}
              >
                12 Certifications
              </span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="about-content">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="about-section education"
          >
            <h3>Education</h3>
            <p>Bachelor's in Computer Science</p>
            <p>Pittsburg State University, Pittsburg, KS, USA (2021-2025)</p>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="about-section technical-skills"
          >
            <h3>Technical Skills</h3>
            <div className="skills-progress">
              <div className="skill-item">
                <span><FaPython /> Programming (Python, R, SQL)</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span><SiTensorflow /> <SiPytorch /> ML Frameworks (TensorFlow, PyTorch)</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span><FaAws /> Cloud Platforms (AWS)</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <span><FaDocker /> Deployment (Docker, CI/CD)</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="about-section soft-skills"
          >
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem-solving</li>
              <li>Time management</li>
              <li>Team collaboration</li>
            </ul>
          </motion.div>
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="about-section certifications"
            ref={certificationsRef}
          >
            <h3>Certifications</h3>
            <ul>
              <li>The Full Stack</li>
              <li>Introduction to Artificial Intelligence (with Honors)</li>
              <li>Solving Problems with Creative and Critical Thinking</li>
              <li>Data Analysis with Python & R Programming</li>
              <li>Building AI Applications with APIs</li>
              <li>Introduction to Machine Learning (NPTEL)</li>
              <li>Python for DS, AI & Development</li>
              <li>Introduction to Cloud Computing</li>
              <li>Introduction to Data Engineering</li>
              <li>Introduction to Data Analytics</li>
              <li>HTML, CSS, JavaScript</li>
              <li>AWS</li>
            </ul>
          </motion.div>
        </motion.div>
        <div className="social-bar">
          <a href="https://www.linkedin.com/in/gundaaditya" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/adityareddyg" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;