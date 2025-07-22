import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Junior Developer',
      company: 'Tech Solutions Inc.',
      period: '2024 - Present',
      description: 'Developing web applications using React and Node.js. Collaborating with senior developers on client projects and contributing to code reviews.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Git'],
      icon: Briefcase
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      period: '2022 - 2026',
      description: 'Currently pursuing my degree with focus on software engineering, algorithms, and data structures. Maintaining a strong GPA while working on various projects.',
      technologies: ['Java', 'Python', 'C++', 'Data Structures'],
      icon: GraduationCap
    },
    {
      type: 'internship',
      title: 'Frontend Developer Intern',
      company: 'StartupXYZ',
      period: 'Summer 2023',
      description: 'Built responsive web interfaces and improved user experience. Worked closely with the design team to implement pixel-perfect designs.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
      icon: Award
    },
    {
      type: 'project',
      title: 'Freelance Web Developer',
      company: 'Various Clients',
      period: '2023 - Present',
      description: 'Creating custom websites and web applications for small businesses. Managing projects from conception to deployment.',
      technologies: ['WordPress', 'React', 'PHP', 'MySQL'],
      icon: Briefcase
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-lime-400 to-emerald-400';
      case 'education':
        return 'from-blue-400 to-blue-600';
      case 'internship':
        return 'from-purple-400 to-purple-600';
      case 'project':
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              Journey
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            My educational background and professional experience in the world of technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lime-400 via-emerald-400 to-lime-400 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-lime-400/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-2xl flex items-center justify-center`}>
                        <exp.icon className="text-white" size={20} />
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-lime-400 font-semibold mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 bg-gradient-to-br ${getTypeColor(exp.type)} rounded-full border-4 border-slate-900`}
                  />
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              What's Next?
            </h3>
            <p className="text-slate-400 mb-6">
              I'm always looking for new opportunities to grow and contribute to exciting projects. 
              Let's connect and see how we can work together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-lime-400/25 transition-all duration-300"
            >
              <span>Let's Talk</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;