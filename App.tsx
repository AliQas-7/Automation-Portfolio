
import React from 'react';
import { motion, ScrollRestoration } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeading from './components/SectionHeading';
import ExperienceItem from './components/ExperienceItem';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WorkflowBackground from './components/WorkflowBackground';
import { EXPERIENCES, PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <WorkflowBackground />
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10">
                  <img src="https://picsum.photos/seed/automation/800/1000" alt="About Me" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
              </motion.div>
              
              <div className="lg:w-1/2">
                <SectionHeading title="Turning Chaos into Code." subtitle="About Me" />
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                  <p>
                    I am a solutions architect focused on the intersection of automation and artificial intelligence. My mission is to bridge the gap between complex legacy systems and futuristic autonomous workflows.
                  </p>
                  <p>
                    With over 6 years of experience in backend development and enterprise automation, I specialize in building "digital brains" for businesses using platforms like <span className="text-white font-semibold">n8n, Zapier, and Make</span>.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                      <h4 className="text-indigo-400 font-bold mb-1">200+</h4>
                      <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Successful Audits</p>
                    </div>
                    <div>
                      <h4 className="text-indigo-400 font-bold mb-1">10k+</h4>
                      <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">Hours of Automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeading title="Work History" subtitle="Experience" />
            <div className="mt-12">
              {EXPERIENCES.map((exp, idx) => (
                <ExperienceItem 
                  key={exp.id} 
                  exp={exp} 
                  isLast={idx === EXPERIENCES.length - 1} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-6">
            <SectionHeading title="Selected Integrations" subtitle="Portfolio" />
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="font-bold tracking-tighter text-white">AUTOLAB © 2024</span>
          </div>
          
          <div className="text-sm text-gray-500 mono">
            Designed for the future of work.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
