import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, 100]);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900 to-black"></div>

      {/* Animated background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-20 h-20 border border-violet-900/30 rounded-full"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-120 right-130 w-20 h-20 border border-violet-900/50 rounded-full"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute mix-blend-differnce bottom-70 right-220 w-40 z-100 h-40 border border-violet-900/50 rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-32 h-32 border border-violet-900 rounded-lg rotate-45"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-50 right-10 w-32 h-32 border border-violet-900 rounded-lg rotate-45"
      />

      <div className="text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xl md:text-2xl font-bold ">
            <Typewriter
              options={{
                strings: ["Hey...", "I am Jaseel"],
                autoStart: true,
                loop: true,
                html: true, // 👈 important!
              }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {/* Top text animation */}
            <motion.span
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-violet-400 via-violet-600 to-violet-900 bg-clip-text text-transparent inline-block"
            >
              MERN Stack
            </motion.span>

            <br />

            {/* Bottom text animation */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-white inline-block"
            >
              Developer
            </motion.span>
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
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r  hover:bg-none hover:border-6-violet-900 border border-violet-900 from-violet-600 to-violet-900 hover:bg-transparent  px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="border border-violet-600 hover:bg-violet-600/80 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
