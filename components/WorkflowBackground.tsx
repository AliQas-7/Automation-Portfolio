
import React from 'react';
import { motion } from 'framer-motion';

const WorkflowBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-20">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Workflow Paths */}
        <motion.path
          d="M -100 200 Q 300 100 600 400 T 1200 200"
          fill="transparent"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 1400 600 Q 900 800 600 500 T -100 700"
          fill="transparent"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          strokeDasharray="10 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Node Points */}
        {[
          { x: '10%', y: '20%' },
          { x: '45%', y: '15%' },
          { x: '80%', y: '40%' },
          { x: '30%', y: '70%' },
          { x: '60%', y: '85%' },
          { x: '90%', y: '65%' },
        ].map((point, idx) => (
          <motion.circle
            key={idx}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#4f46e5"
            filter="url(#glow)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(5,5,5,1)_100%)]" />
    </div>
  );
};

export default WorkflowBackground;
