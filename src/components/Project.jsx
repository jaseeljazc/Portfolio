import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';


const Project = () => {
  return (
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
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Project {project}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Add your project description here. This is a placeholder for
                    your actual projects.
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full">
                      MongoDB
                    </span>
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
  );
};

export default Project;
