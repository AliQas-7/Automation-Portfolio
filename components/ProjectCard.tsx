
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Terminal, BrainCircuit, Workflow } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.category === 'AI Agent' ? BrainCircuit : 
               project.category === 'Automation' ? Workflow : Terminal;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
        <Icon size={80} />
      </div>

      <div className="mb-6 relative">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-white/5 text-[10px] font-bold tracking-wider text-gray-500 uppercase rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
