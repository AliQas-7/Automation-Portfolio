
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';

interface ExperienceItemProps {
  exp: Experience;
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, isLast }) => {
  return (
    <div className="relative pl-12 pb-16">
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/50 to-transparent" />
      )}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-indigo-500 bg-[#050505] flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-colors"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
            <p className="text-indigo-400 font-medium">{exp.company}</p>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-gray-400 mono border border-white/5">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-3 mb-8">
          {exp.description.map((desc, i) => (
            <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
              <span className="text-indigo-500 shrink-0 mt-1.5">▹</span>
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 bg-white/5 text-[10px] text-gray-500 uppercase tracking-widest font-bold border border-white/5 rounded-md">
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceItem;
