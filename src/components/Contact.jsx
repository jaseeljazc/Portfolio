import { motion } from "framer-motion";
import { Mail,Phone, MapPin } from "lucide-react"
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-violet-900/5 to-black"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="text-violet-400">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-violet-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology. Feel free to
                reach out!
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>your.email@example.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p>+91 XXXXX XXXXX</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="w-10 h-10 bg-violet-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>Kochi, Kerala, India</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-black border border-violet-900/30 rounded-lg focus:border-violet-600 focus:outline-none text-white transition-colors resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
