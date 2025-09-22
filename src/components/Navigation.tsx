import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X
} from 'lucide-react';
import type { INavClick } from '../assets/interface';
import { menuItems } from '../assets/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = ({ e, targetId }: INavClick) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop =
        targetId === "home"
          ? 0
          : targetId === "about"
            ? targetElement.offsetTop
            : targetElement.offsetTop - 32;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-24">
          <div className="w-full flex justify-center ">
            <div className="hidden md:flex space-x-16 align-middle justify-center">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={(e) => handleNavClick({ e, targetId: item.id })}
                  className="size-14 flex items-center justify-center rounded-full hover:shadow-[0_0_20px_6px_rgba(34,197,94,0.7)] hover:bg-green-100 transition-all duration-300 group"
                >
                  <item.icon
                    size={32}
                    className="stroke-green-500 transition-all duration-300 group-hover:stroke-green-800 group-hover:scale-110"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.button
            className="md:hidden text-gray-300 hover:text-white absolute right-4"
            onClick={() => setIsOpen(!isOpen)}
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      handleNavClick({ e, targetId: item.id });
                    }, 100);
                  }}

                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;