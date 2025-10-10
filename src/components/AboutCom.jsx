import { motion } from "framer-motion";

const AboutCom = () => {
  return (
    <div className=" md:flex gap-5">
      <div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className=" w-80 sm:w-100 bg-gradient-to-br mb-7 from-violet-900/10 to-black/20 backdrop-blur-sm border border-violet-900/50 rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-violet-500/30"
        >
          <h3 className="text-2xl font-semibold mb-4 text-violet-400">
            Education
          </h3>
          <div className="space-y-2">
            <p className="text-lg font-medium">
              Bachelor of Computer Applications
            </p>
            <p className="text-violet-300">
              ISS Arts and Science College, Perinthalmanna
            </p>
            <p className="text-gray-400">Graduated: 2025</p>
          </div>
        </motion.div>
      </div>

      <div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-80  sm:w-100 bg-gradient-to-br from-violet-900/10 to-black/20 backdrop-blur-sm border border-violet-900/50 rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-violet-500/30"
        >
          <h3 className="text-2xl font-semibold mb-4 text-violet-400">
            Current Role
          </h3>
          <div className="space-y-2">
            <p className="text-lg font-medium">MERN Stack Developer Intern</p>
            <p className="text-violet-300">Zoople Technologies</p>
            <p className="text-gray-400">Kochi, Kerala</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCom;
