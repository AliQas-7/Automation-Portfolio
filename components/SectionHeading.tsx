
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[2px] w-8 bg-indigo-500" />
          <span className="text-indigo-400 font-medium tracking-widest uppercase text-xs mono">
            {subtitle || "Section"}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
      </motion.div>
    </div>
  );
};

export default SectionHeading;
