import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Name',
      period: '2023 - Present',
      description: [
        'Led development of key features resulting in 40% increase in user engagement',
        'Managed a team of 5 developers and implemented agile methodologies',
        'Architected and deployed scalable microservices using Node.js and AWS'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Previous Company Name',
      period: '2021 - 2023',
      description: [
        'Developed and maintained multiple full-stack applications using React and Node.js',
        'Improved application performance by 60% through code optimization',
        'Collaborated with UX team to implement responsive designs'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'First Company Name',
      period: '2019 - 2021',
      description: [
        'Built and maintained client-facing web applications',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Participated in code reviews and contributed to team documentation'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 border-l-2 border-green-500"
              >
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0" />
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <span className="text-green-400 text-sm font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-gray-400 mb-4">
                    {exp.company}
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                        className="text-gray-300"
                      >
                        • {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;