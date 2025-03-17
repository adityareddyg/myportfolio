import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { FaPython } from 'react-icons/fa'; // For Python icon
import './Experience.css';

const Experience = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const experienceRef = useRef(null);

  // Dynamically set padding-top based on navbar height
  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    if (experienceRef.current) {
      experienceRef.current.style.paddingTop = `${navbarHeight}px`;
    }
  }, []);

  return (
    <motion.div
      className="experience"
      ref={experienceRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="experience-wrapper">
        <motion.h1
          className="experience-title"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Experience
        </motion.h1>
        <motion.div
          className="experience-item"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <div className="experience-header">
            <h2>Machine Learning Intern</h2>
            <p className="company">Intrainz · Internship</p>
            <p className="duration">Oct 2023 - Jan 2024 · 4 mos</p>
            <p className="location">Bengaluru, Karnataka, India · Remote</p>
          </div>
          <div className="experience-details">
            <ul>
              <li>
                Developed and optimized machine learning models using Python, focusing on data preprocessing and feature engineering.
              </li>
              <li>
                Designed and implemented ETL (Extract, Transform, Load) pipelines to streamline data workflows for model training and evaluation.
              </li>
              <li>
                Collaborated remotely with a team to deploy ML solutions, enhancing data-driven decision-making processes.
              </li>
            </ul>
            <div className="skills">
              <span className="skill-tag">
                <FaPython /> Python
              </span>
              <span className="skill-tag">ETL</span>
              <span className="skill-tag">Machine Learning</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;