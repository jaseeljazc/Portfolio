import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, GitBranch, Server, Layers } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const skills = [
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', icon: '⚡', category: 'Programming' },
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Express.js', icon: '🚀', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Bootstrap', icon: '🅱️', category: 'CSS Framework' },
    { name: 'Tailwind CSS', icon: '💨', category: 'CSS Framework' },
    { name: 'Git', icon: '📚', category: 'Version Control' },
    { name: 'GitHub', icon: '🐙', category: 'Version Control' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-violet-900/30"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.h1>
            <div className="flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 transition-colors ${
                    activeSection === item.toLowerCase() 
                      ? 'text-violet-400' 
                      : 'text-gray-300 hover:text-violet-400'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-black"></div>
        
        {/* Animated background elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-20 h-20 border border-violet-900/30 rounded-full"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-32 h-32 border border-violet-900/20 rounded-lg rotate-45"
        />
        
        <div className="text-center z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-violet-600 to-violet-800 bg-clip-text text-transparent">
                MERN Stack
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Building modern web applications with passion and precision
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-violet-400 mb-8"
            >
              Currently Intern at Zoople Technologies, Kochi
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="border border-violet-600 hover:bg-violet-600/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              About <span className="text-violet-400">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-violet-900/20 to-black border border-violet-900/30 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-violet-400">Education</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">Bachelor of Computer Applications</p>
                    <p className="text-violet-300">ISS Arts and Science College, Perinthalmanna</p>
                    <p className="text-gray-400">Graduated: 2025</p>
                  </div>
                </motion.div>
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-violet-900/20 to-black border border-violet-900/30 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-violet-400">Current Role</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-medium">MERN Stack Developer Intern</p>
                    <p className="text-violet-300">Zoople Technologies</p>
                    <p className="text-gray-400">Kochi, Kerala</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Passionate MERN stack developer with a strong foundation in modern web technologies. 
                Currently gaining valuable industry experience as an intern at Zoople Technologies, 
                where I'm working on real-world projects and expanding my technical expertise. 
                I enjoy creating user-friendly applications and am always eager to learn new technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-violet-900/5 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              My <span className="text-violet-400">Skills</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' 
                  }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-violet-900/10 to-black border border-violet-900/30 rounded-xl p-6 text-center hover:border-violet-600/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-sm text-violet-400">{skill.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              My <span className="text-violet-400">Projects</span>
            </h2>
            
            {/* Project placeholder - You can add your actual projects here */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: project * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-violet-900/20 to-black border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-600/50 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-violet-600/20 to-violet-900/40 flex items-center justify-center">
                    <Code className="w-16 h-16 text-violet-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">Project {project}</h3>
                    <p className="text-gray-400 mb-4">
                      Add your project description here. This is a placeholder for your actual projects.
                    </p>
                    <div className="flex gap-2 mb-4">
                      <span className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full">React</span>
                      <span className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full">Node.js</span>
                      <span className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full">MongoDB</span>
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-violet-900/5 to-black">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16">
              Get In <span className="text-violet-400">Touch</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-violet-400">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p>your.email@example.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p>+91 XXXXX XXXXX</p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p>Kochi, Kerala, India</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.form
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-violet-900/30 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent mb-2">
                Portfolio
              </h3>
              <p className="text-gray-400">MERN Stack Developer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex gap-6 mt-6 md:mt-0"
            >
              <motion.a
                whileHover={{ scale: 1.1, color: '#a855f7' }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#a855f7' }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#a855f7' }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-violet-900/30 mt-8 pt-8 text-center"
          >
            <p className="text-gray-400">
              © 2025 MERN Stack Developer Portfolio. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;