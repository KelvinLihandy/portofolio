
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
        <Contact />
      </div>
    </motion.div>
  );
}

export default App;