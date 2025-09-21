import { motion } from 'framer-motion';
import { experienceItems } from '../assets/constants';

const Experience = () => {

  return (
    <section
      id="experience"
      className="poppins-regular min-h-screen flex justify-center bg-black text-white py-12 md:py-20"
    >
      <div className='flex flex-col w-150'>
        <div className="text-center text-green-700 poppins-bold text-6xl py-20">
          My Journey
        </div>
        <div>
          <div className=''>
            {[...experienceItems].reverse().map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="lg:mb-12 lg:relative lg:pl-8 lg:border-l-2 lg:border-green-500"
              >
                <div className="hidden lg:block absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0" />
                <motion.div
                  whileHover={{ x: 20 }}
                  transition={{ type: 'tween', stiffness: 300 }}
                  className="bg-gray-900 p-6 rounded-lg hover:shadow-[60px_0_80px_-10px_rgba(34,197,94,0.7)] transition-all duration-100"
                >
                  <div className="text-green-400 text-lg font-semibold flex gap-2">
                    <div>{item.period}</div>
                    <div className="text-white flex">
                      <div>(</div>
                      <div className="poppins-regular-italic">{item.type}</div>
                      <div>)</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mt-2">{item.position}</div>
                  <div className="text-gray-400 mb-4">{item.company}</div>
                  <ul className="space-y-2">
                    {item.description.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="text-gray-300"
                      >
                        •&nbsp;&nbsp;{point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;