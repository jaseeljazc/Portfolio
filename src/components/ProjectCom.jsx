import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
const ProjectCom = () => {
      const projects = [
    {
      id: 1,
      title: "Mini Spotify-clone Website",
      description:
        "A mini Spotify clone built with React for browsing and playing music.",
      tags: ["React", "Tailwind"],
      github: "https://github.com/jaseeljazc/Mini-Spotify-Clone",
      live: "https://mini-spotify-clone.vercel.app/",
      image: "/images/Spotify-clone.png", 
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description:
        "A full-stack MERN application with product filtering, cart, and checkout.",
      tags: ["React", "Node.js", "MongoDB","Express.js"],
      github: "https://github.com/jaseeljazc/CtrlHub",
      live: "https://ctrl-hub-iipi.vercel.app/",
      image: "/images/e-ComImage.webp", 
    },
    {
      id: 3,
      title: "Chat App",
      description:
        "MERN chat app with Socket.IO, private chats, and online users",
      tags: ["React", "Node.js", "MongoDB","Express.js"],
      github: "https://github.com/jaseeljazc/MyFlashChat",
      live: "https://my-flash-chat.vercel.app/",
      image: "/images/chat-app.webp", 
    },
    {
      id: 4,
      title: "YouTube Clone",
      description:
        "A responsive React app that replicates YouTube’s core features using the YouTube Data API v3.",
      tags: ["React","Tailwind CSS"],
      github: "https://github.com/jaseeljazc/Youtube-clone",
      live: "https://jasyoutube-clone.netlify.app/",
      image: "/images/YouTube.png", 
    },
    
  ];
  return (
         <div className=" flex flex-col flex-wrap lg:flex-row justify-center items-center  sm:mx-5 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className="min-w-75 sm:w-92 w-50 min-h-[420px] h-[450px] hover:scale-105 bg-gradient-to-br from-violet-900/30 to-black border border-violet-900/30 rounded-xl overflow-hidden hover:border-violet-600/50 transition-all duration-300"
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
                  <div className="flex flex-col self-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-violet-900/30 text-violet-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 ">
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
                </div>
              </motion.div>
            ))}
          </div>  )
}

export default ProjectCom