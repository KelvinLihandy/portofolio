import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://via.placeholder.com/500x300',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Real-time chat application with WebSocket integration',
      tech: ['Next.js', 'Socket.io', 'TailwindCSS', 'PostgreSQL'],
      image: 'https://via.placeholder.com/500x300',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'AI-powered content management system',
      tech: ['TypeScript', 'Python', 'TensorFlow', 'AWS'],
      image: 'https://via.placeholder.com/500x300',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;