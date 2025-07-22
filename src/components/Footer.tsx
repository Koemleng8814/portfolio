import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Code2 className="text-lime-400" size={24} />
            <span className="text-white font-bold text-xl">Va Koemleng</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 mb-6 max-w-md mx-auto"
          >
            Crafting digital experiences with passion and precision. 
            Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-slate-400"
          >
            <span>Made with</span>
            <span>by Va Koemleng</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 pt-6 border-t border-slate-800 text-slate-500 text-sm"
          >
            © 2025 Va Koemleng. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;