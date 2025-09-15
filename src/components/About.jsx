import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutCom from "./AboutCom";

const About = () => {
  const [stars, setStars] = useState([]);

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 4,
          animationDuration: Math.random() * 3 + 2,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b to-violet-900/40 from-black overflow-hidden"
    >
      {/* Static Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Static Constellation Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <path
            d="M 100 200 Q 200 100 300 250 Q 400 150 500 300"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            d="M 600 150 Q 700 250 800 100 Q 900 200 1000 180"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="3,7"
          />
          <path
            d="M 50 400 Q 150 350 250 450 Q 350 380 450 420"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="2,4"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center mb-5">
            About <span className="text-violet-400">Me</span>
          </h2>
          <div className="mb-13 text-2xl md:text-6xl font- text-center">
            <h2>
              {" "}
              Hi, I'm <span className="text-violet-600">
                {" "}
                Muhammed Jaseel
              </span>{" "}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 items-center justify-center">
<AboutCom/>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Passionate MERN stack developer with a strong foundation in modern
              web technologies. A recent graduate from ISS Arts and Science
              College, Perinthalmanna, I'm currently gaining valuable industry
              experience as an intern at Zoople Technologies in Kochi. Based in
              Malappuram, Perinthalmanna, I'm working on real-world projects and
              continuously expanding my technical expertise. I enjoy creating
              user-friendly applications and am always eager to learn new
              technologies and contribute to innovative solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;