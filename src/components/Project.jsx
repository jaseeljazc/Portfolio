import { motion } from "framer-motion";
import ProjectCom from "./ProjectCom";


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
            My <span className="text-violet-600">Projects</span>
          </h2>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
 <ProjectCom/>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
