
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import SectionHeading from './SectionHeading';

const Skills: React.FC = () => {
  const categories = ['Automation', 'AI & LLM', 'Development', 'Tools'];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Arsenal" subtitle="Skills" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {category}
              </h3>
              <div className="space-y-5">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-600 mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
