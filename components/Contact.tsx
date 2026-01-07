
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Let's build something automated." subtitle="Get In Touch" />
            <p className="text-xl text-gray-400 mb-12">
              Ready to eliminate manual workflows and scale with AI? I'm available for consultations and full-cycle development.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@autoflow.ai', icon: Mail, link: 'mailto:hello@autoflow.ai' },
                { label: 'LinkedIn', value: 'linkedin.com/in/automator', icon: Linkedin, link: '#' },
                { label: 'GitHub', value: 'github.com/autoflow', icon: Github, link: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                  <ArrowUpRight size={20} className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#050505] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-[#050505] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-[#050505] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                  <option>New Project Inquiry</option>
                  <option>Consulting Session</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} placeholder="Tell me about your automation needs..." className="w-full bg-[#050505] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white font-bold py-5 rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">
                Initiate Sequence
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
