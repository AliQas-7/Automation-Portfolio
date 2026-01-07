
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Database, Bot, Zap, Network } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 tracking-wider uppercase mono">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Automations, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">n8n, Zapier, Make</span> & AI Agents Expert.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl"
          >
            I architect intelligent workflows that connect your stack, eliminate manual work, and deploy AI agents that think and act for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25 group"
            >
              View Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Floating Stat Boxes (Visual decoration) */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 space-y-4">
          {[
            { Icon: Zap, label: 'Automations', val: '500+' },
            { Icon: Bot, label: 'AI Agents', val: '20+' },
            { Icon: Network, label: 'Integrations', val: '1k+' },
            { Icon: Database, label: 'Data Synced', val: '1M+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md w-48 hover:border-indigo-500/50 transition-colors"
            >
              <stat.Icon className="w-6 h-6 text-indigo-500 mb-2" />
              <div className="text-2xl font-bold text-white leading-none mb-1">{stat.val}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
