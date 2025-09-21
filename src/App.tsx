import { Analytics } from '@vercel/analytics/react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <div>
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
      <Analytics />
    </motion.div>
  );
}

export default App;