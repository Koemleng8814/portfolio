import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Page from '../assets/Page.png'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(225, 252, 2, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Code Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-lime-400/30 text-6xl font-mono hidden lg:block"
      >
        {'</>'}
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-20 text-lime-400/20 text-4xl font-mono hidden lg:block"
      >
        {'{ }'}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-lime-400/50 shadow-2xl shadow-lime-400/25">
              <img
                src={Page}
                alt="Va Koemleng - Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-white rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight"
        > 
          Hi, I'm{' '}
          <span className="text-lime-400 font-semibold">Va Koemleng</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-slate-300 mb-8"
        >
          <span className="text-lime-400">Web Developer</span> & 
          <span className="text-emerald-400"> Digital Creator</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I craft beautiful, responsive websites and web applications 
          that deliver exceptional user experiences and drive results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
            <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-lime-400 text-lime-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-400 hover:text-slate-900 transition-all duration-300"
          >
            View my work
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center space-x-6"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' }
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-lime-400 hover:bg-slate-700/50 transition-all duration-300"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;