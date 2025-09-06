import { motion } from "framer-motion";


// React Icons - you need to install: npm install react-icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26", // Official HTML5 orange
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      color: "#1572B6", // Official CSS3 blue
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E", // Official JS yellow
      category: "Programming",
    },
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB", // Official React cyan
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933", // Official Node.js green
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#f1eded", // Official Express black
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248", // Official MongoDB green
      category: "Database",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "#7952B3", // Official Bootstrap purple
      category: "CSS Framework",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4", // Official Tailwind cyan
      category: "CSS Framework",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032", // Official Git orange-red
      category: "Version Control",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "#f2f1f1", // Official GitHub dark
      category: "Version Control",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-violet-900/40 to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center pb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My{" "}
            <span className="text-violet-800 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text">
              Skills
            </span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 ">
        
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                  }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-violet-900/10 w-60 h-40 to-black border border-violet-900/30 rounded-xl p-6 text-center hover:border-violet-600/50 transition-all duration-300"
                >
                  <motion.div
                    className="flex justify-center mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent
                      size={48}
                      className="transition-all duration-300 filter drop-shadow-lg group-hover:brightness-110"
                      style={{
                        color: skill.color,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      }}
                    />
                  </motion.div>
                  <h3 className="font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                    {skill.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
