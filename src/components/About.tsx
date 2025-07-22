import { motion } from 'framer-motion';
import { GraduationCap, Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Computer Science Student',
      description: 'Currently pursuing my degree with focus on software engineering and algorithms'
    },
    {
      icon: Code,
      title: 'Junior Developer',
      description: 'Building real-world applications and contributing to open-source projects'
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges and finding elegant solutions'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and improving my skills'
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
              Me
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate computer science student and junior developer who loves 
            creating innovative solutions through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  My journey into programming started with curiosity and has evolved into a passion 
                  for creating meaningful digital experiences. As a Computer Science student, 
                  I'm constantly learning and applying new concepts to real-world projects.
                </p>
                <p>
                  Currently working as a Junior Developer, I've had the opportunity to work on 
                  various projects ranging from web applications to mobile apps. I believe in 
                  writing clean, efficient code and always strive to follow best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with fellow developers in the community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-lime-400/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-lime-400/20 to-emerald-400/20 border border-lime-400/30 rounded-2xl mb-4"
                >
                  <item.icon className="text-lime-400" size={24} />
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-4">
            <span className="text-slate-400">Currently available for</span>
            <span className="text-lime-400 font-semibold">Internships & Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;