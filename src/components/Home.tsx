import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Profile from '../assets/image.png';
import { contactItems, skillItems } from '../assets/constants';
import { MapPin } from 'lucide-react';

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const containerAnim = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.75, ease: 'easeOut' } };
  const entranceLeft = { initial: { opacity: 0, x: -80 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.75, delay: 0.2, ease: 'easeOut' } };
  const entranceRight = { initial: { opacity: 0, x: 80 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.75, delay: 0.35, ease: 'easeOut' } };

  const DataCardContent = (
    <div className="flex flex-col items-center gap-6 w-full">
      <motion.div
        className="text-5xl font-bold poppins-bold text-center"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        Kelvin Lihandy
      </motion.div>
      <motion.div
        className="flex flex-col gap-3 w-full items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.35 } }
        }}
      >
        {skillItems.map((item) => (
          <motion.div
            key={item.name}
            className="border rounded-xl p-3 flex flex-row gap-3 items-center cursor-pointer"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <item.icon className="stroke-green-500" />
            <span>{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col gap-4 items-center w-full"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.6 }}
      >
        <div className="flex flex-row gap-3 flex-wrap justify-center md:justify-start">
          {contactItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 220, delay: 0.05 }}
              className="border-green-100 bg-green-100 rounded-2xl size-16 justify-center items-center flex hover:shadow-[0_0_20px_6px_rgba(34,197,94,0.7)] group"
              onClick={() => window.open(item.link, '_blank')}
            >
              <item.icon size={32} className="stroke-green-700" />
            </motion.button>
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center border-green-700 border-3 p-3 rounded-xl group-hover:scale-110">
          <MapPin /> Jakarta, Indonesia
        </div>
        {isMobile && (
          <button
            onClick={() => setShowImage(true)}
            className="mt-2 px-4 py-2 bg-green-600 rounded-md hover:bg-green-500 text-white"
          >
            View Profile Photo
          </button>
        )}
      </motion.div>
    </div>
  );

  const ImageCardContent = (
    <div className="flex justify-center items-center w-full">
      <motion.div
        className={`inline-flex rounded-xl p-1 bg-green-800 ${isMobile ? "cursor-pointer" : ""}`}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        onClick={() => isMobile && setShowImage(false)}
      >
        <div className="rounded-xl p-1 bg-green-500 shadow-[0_0_100px_10px_rgba(34,197,94,0.12)]">
          <img
            src={Profile}
            alt="Profile"
            className="w-auto h-auto max-w-[90vw] max-h-[70vh] md:max-h-[80vh] rounded-xl bg-white"
          />
        </div>
      </motion.div>
    </div>
  );

  return (
    <section id="home" className="poppins-regular min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-12 md:py-20">
      <motion.div
        className="w-full px-6 md:px-20 py-10 flex justify-center"
        initial={containerAnim.initial}
        animate={containerAnim.animate}
        transition={containerAnim.transition}
      >
        {isMobile ? (
          <div className="w-full max-w-lg">
            <AnimatePresence mode="wait" initial={false}>
              {!showImage ? (
                <motion.div
                  key="data"
                  initial={{ opacity: 0, rotateY: -80 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 80 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {DataCardContent}
                </motion.div>
              ) : (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, rotateY: 80 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -80 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {ImageCardContent}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <motion.div className="w-full lg:w-1/2" {...entranceLeft}>
              {DataCardContent}
            </motion.div>
            <motion.div className="w-full lg:w-1/2 flex justify-center" {...entranceRight}>
              {ImageCardContent}
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Home;
