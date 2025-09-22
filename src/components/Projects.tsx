import { motion } from "framer-motion";
import { projectItems } from "../assets/constants";
import { Github, Globe } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="poppins-regular min-h-screen flex justify-center bg-black text-white py-12 md:py-20"
    >
      <motion.div
        className="flex flex-col gap-8 md:gap-12 lg:gap-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-green-700 poppins-bold text-3xl sm:text-4xl md:text-6xl lg:text-6xl">
            My Projects
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-2"
        >
          {projectItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              whileHover={{ y: -20, transition: { duration: 0.2, delay: 0 } }}
              className="bg-gray-900 rounded-xl mx-2 my-2 border-6 border-green-700 max-w-100 md:max-w-120 lg:max-w-120 
             hover:shadow-[0_40px_60px_-10px_rgba(34,197,94,0.7)] flex flex-col 
             min-h-[300px] lg:min-h-[600px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full min-h-30 max-h-30 md:min-h-45 md:max-h-45 lg:min-h-60 lg:max-h-60 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow justify-between h-full">
                <div>
                  <div className="text-base md:text-xl lg:text-xl font-bold text-white mb-2">
                    {item.title}
                  </div>
                  <div className="text-sm md:text-base lg:text-base text-white poppins-regular-italic mb-4 text-wrap">
                    {item.description}
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(item.stack).map(([name, icon]) => (
                      <span
                        key={name}
                        className="bg-white text-green-400 p-2 rounded-lg flex items-center justify-center"
                      >
                        <img
                          src={icon}
                          alt={name}
                          title={name}
                          className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
                        />
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <motion.div
                      whileTap={{ scale: item.repository ? 0.9 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      onClick={() => {
                        if (item.repository) window.open(item.repository, "_blank");
                      }}
                      className={`border-2 rounded-xl px-2 md:px-6 lg:px-8 py-2 ${item.repository
                        ? "border-white hover:border-green-600 transition-colors duration-300 group cursor-pointer"
                        : "border-red-800 cursor-not-allowed"
                        }`}
                    >
                      <button
                        className={`${item.repository
                          ? "text-green-400 group-hover:text-white transition-colors duration-300 cursor-pointer"
                          : "text-red-800 cursor-not-allowed"
                          } flex gap-2`}
                      >
                        <Github />
                      </button>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: item.deployment ? 0.9 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      onClick={() => {
                        if (item.deployment) window.open(item.deployment, "_blank");
                      }}
                      className={`border-2 rounded-xl px-2 md:px-6 lg:px-8 py-2 ${item.deployment
                        ? "border-white hover:border-green-600 transition-colors duration-300 group cursor-pointer"
                        : "border-red-800 cursor-not-allowed"
                        }`}
                    >
                      <button
                        className={`${item.deployment
                          ? "text-green-400 group-hover:text-white transition-colors duration-300 cursor-pointer"
                          : "text-red-800 cursor-not-allowed"
                          } flex gap-2`}
                      >
                        <Globe />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;