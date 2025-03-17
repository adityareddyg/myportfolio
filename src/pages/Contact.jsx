import { motion } from 'framer-motion';
import './Contact.css';
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/profilepic.jpg'; // Adjust path based on your project structure

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const contactDetails = [
    {
      title: 'Phone',
      value: '+1 (620) 719-9296',
      icon: <FaPhone />,
      link: 'tel:+16207199296',
    },
    {
      title: 'Email',
      value: 'adityagundareddy@gmail.com',
      icon: <FaEnvelope />,
      link: 'mailto:adityagundareddy@gmail.com',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/gundaaditya',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/gundaaditya',
    },
  ];

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-wrapper">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="profile-container"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <img src={profilePic} alt="Aditya Gunda" className="profile-pic" />
            <h1 className="profile-name">Aditya Reddy Gunda</h1>
            <p className="profile-title">Data Scientist | AI Engineer | DevOps Specialist</p>
          </motion.div>
          
          <motion.div
            className="contact-intro"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <p className="intro-text">
              Let's connect! I'm passionate about driving innovation through <strong>Data Science</strong>, 
              <strong> Artificial Intelligence</strong>, <strong>DevOps</strong>, and <strong>Cloud Technologies</strong>. 
              Reach out to discuss potential collaborations or opportunities.
            </p>
          </motion.div>
        </motion.div>

        <div className="contact-main-content">
          <motion.div className="contact-content">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                custom={index + 2}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                className="contact-section"
              >
                <h3>
                  {detail.icon} {detail.title}
                </h3>
                <p>
                  <a href={detail.link} target="_blank" rel="noopener noreferrer">
                    {detail.value}
                  </a>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="social-bar">
          <a href="https://www.linkedin.com/in/gundaaditya" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;