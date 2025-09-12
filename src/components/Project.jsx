import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const Project = () => {
 const projects = [
  {
    id: 1,
    title: "Mini Spotify-clone Website",
    description: "A modern, animated personal portfolio to showcase projects and skills.",
    tags: ["React", "Tailwind"],
    github: "#",
    live: "#",
    image: "/images/Screenshot (136).png", // ✅ image path
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "A full-stack MERN application with product filtering, cart, and checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/e-ComImage.webp", // ✅ image path
  },
  {
    id: 3,
    title: "Chat Application",
    description: "A real-time chat app with authentication and WebSocket messaging.",
    tags: ["React", "Firebase", "Socket.io"],
    github: "#",
    live: "#",
    // ❌ no image → will show <Code /> icon instead
  },
];


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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-violet-900/20 to-black border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-600/50 transition-all duration-300"
              >
                <div className="sm:h-51  flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                        style={{ imageRendering: "crisp-edges" }}

                    />
                  ) : (
                    <Code className="w-16 h-16 text-violet-400" />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
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
