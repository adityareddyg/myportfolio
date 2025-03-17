import { motion } from 'framer-motion';
import './Projects.css';
import { FaBrain, FaCreditCard, FaGamepad } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { DiPython, DiJavascript1, DiReact, DiNodejs } from 'react-icons/di';

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const projects = [
    {
      title: 'Brain Tumor Detection',
      description: 'Developed a CNN model with 90% accuracy on 1,100 MRI images, speeding up diagnosis by 40%.',
      publication: 'Publication: "Use of Support Vector Machine to Detect Brain Tumour," International Research Journal of Modernization in Engineering Technology and Science, May 2024.',
      icon: <FaBrain />,
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Achieved 93% accuracy on 60,000 records, reducing false positives by 30%.',
      publication: 'Publication: "Analysis of Credit Card Fraud Detection Using Machine Learning," International Journal of Scientific Research in Engineering and Management (IJSREM), Dec 2023.',
      icon: <FaCreditCard />,
    },
    {
      title: 'Hangman Game',
      description: 'Developed a Python GUI game with 1,000+ words, engaging kids with positive feedback.',
      publication: 'Publication: "Development of Hangman Game Using Python," International Journal of Scientific Research in Engineering and Management (IJSREM), Jun 2023.',
      icon: <FaGamepad />,
    },
  ];

  const skills = [
    { name: 'Python', icon: <DiPython /> },
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'React', icon: <DiReact /> },
    { name: 'Node.js', icon: <DiNodejs /> },
  ];

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-wrapper">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="projects-intro"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <p className="intro-text">
              Explore my key <strong>academic projects</strong> and publications, showcasing my expertise in AI, Machine Learning, and software development. Each project reflects my passion for innovative solutions and real-world impact.
            </p>
          </motion.div>
        </motion.div>
        <div className="projects-main-content">
          <motion.div className="projects-content">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index + 1}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="project-section"
              >
                <h3>
                  {project.icon} {project.title}
                </h3>
                <p>{project.description}</p>
                <p className="publication">{project.publication}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="skills-section"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            custom={1}
          >
            <h3>Skills & Technologies</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index}>
                  {skill.icon} {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="social-bar">
          <a href="https://www.linkedin.com/in/gundaaditya" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://www.linkedin.com/in/gundaaditya" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;