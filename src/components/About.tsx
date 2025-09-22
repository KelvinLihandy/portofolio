import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillItems } from '../assets/constants';

const About = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { amount: 0.25, once: true });

  return (
    <section
      id="about"
      className="poppins-regular min-h-screen flex items-center justify-center bg-black text-white py-12 md:py-20"
    >
      <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 lg:p-20 p-10 sm:gap-30 md:gap-30">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-16 md:px-20 lg:px-5">
            <motion.div
              className="text-center text-green-700 poppins-bold text-3xl sm:text-4xl md:text-6xl lg:text-6xl"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.div>
            <div className="flex flex-col text-center mx-1 lg:mx-10 text-lg lg:text-xl md:text-xl gap-12">
              <motion.div
                className="poppins-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hi, I'm Kelvin, a full stack developer with leaning interest and skills in backend development
                while balancing in frontend side. Using experience in my skills, I aim to deliver high-quality solutions
                that meet current world needs.
              </motion.div>
              <motion.div
                className="poppins-medium-italic text-green-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
              >
                While not working on projects, I'm always open to collaboration, new challenges, and opportunities
                to grow both personally and professionally.
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={skillsRef}
          className="border-3 border-green-700 rounded-xl w-full lg:w-1/2 flex flex-col lg:gap-10 gap-5 lg:py-10 md:py-6 sm:py-6 py-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center text-green-700 poppins-bold text-3xl sm:text-4xl md:text-6xl lg:text-6xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.div>
          <div className="text-center px-4 pt-2 justify-center">
            {skillItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ rotateY: 180, opacity: 0 }}
                animate={
                  isInView
                    ? { rotateY: 0, opacity: 1 }
                    : { rotateY: 180, opacity: 0 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ y: -6 }}
                className="inline-block mx-1 my-0 md:mx-2 md:my-1 lg:mx-2 lg:my-1 p-2 md:p-3 lg:p-4 bg-white rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-[0_0_40px_10px_rgba(34,197,94,0.7)] group"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  title={item.name}
                  className=" w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 object-fill"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;