import React, { useState, useEffect } from "react";
import { motion, m } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-violet-900/30 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent mb-2">
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
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/jaseeljazc"
              className="text-gray-400 hover:text-violet-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/muhammed-jaseel-923610376"
              className="text-gray-400 hover:text-violet-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            {/* <motion.a
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a> */}
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
            © 2025 MERN Stack Developer Portfolio. Built with React & Tailwind
            CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
