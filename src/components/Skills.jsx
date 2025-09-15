import { motion } from "framer-motion";

import SkillCom from "./SkillCom";

const Skills = () => {
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
            className="text-4xl md:text-4xl font-bold mb-4 text-center pb-10"
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

          <SkillCom />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
