
import { Project, Experience, Skill, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'n8n', level: 98, category: 'Automation' },
  { name: 'Zapier', level: 95, category: 'Automation' },
  { name: 'Make.com', level: 92, category: 'Automation' },
  { name: 'GoHighLevel', level: 88, category: 'Tools' },
  { name: 'OpenAI / Anthropic APIs', level: 90, category: 'AI & LLM' },
  { name: 'LangChain', level: 85, category: 'AI & LLM' },
  { name: 'Node.js', level: 90, category: 'Development' },
  { name: 'Python', level: 85, category: 'Development' },
  { name: 'PostgreSQL / MongoDB', level: 80, category: 'Development' },
  { name: 'REST & GraphQL APIs', level: 95, category: 'Development' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'AutoFlow Solutions',
    role: 'Lead Automation Architect',
    period: '2022 - Present',
    description: [
      'Architected complex n8n workflows for Fortune 500 clients, reducing manual operations by 70%.',
      'Developed custom AI agents using GPT-4 and LangChain to automate customer support and lead qualification.',
      'Integrated diverse tech stacks (Salesforce, HubSpot, Slack, Stripe) into unified automation ecosystems.'
    ],
    tools: ['n8n', 'Node.js', 'PostgreSQL', 'OpenAI']
  },
  {
    id: 'exp2',
    company: 'Streamline Digital',
    role: 'Senior Zapier Specialist',
    period: '2020 - 2022',
    description: [
      'Managed over 500 active Zaps for high-growth e-commerce startups.',
      'Built custom Zapier CLI integrations for proprietary software APIs.',
      'Consulted on GHL (GoHighLevel) automation funnels for marketing agencies.'
    ],
    tools: ['Zapier', 'Make', 'GHL', 'Python']
  },
  {
    id: 'exp3',
    company: 'TechOps Systems',
    role: 'Backend Developer & Automator',
    period: '2018 - 2020',
    description: [
      'Developed microservices in Node.js to handle high-frequency data syncing between CRMs.',
      'Maintained legacy automation scripts and migrated them to modern low-code platforms.'
    ],
    tools: ['Node.js', 'Express', 'MySQL', 'Integromat']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Enterprise AI Sales Agent',
    description: 'An autonomous AI agent that monitors incoming emails, qualifies leads via n8n, and schedules meetings in Google Calendar without human intervention.',
    tags: ['n8n', 'GPT-4', 'LangChain', 'Gmail API'],
    category: 'AI Agent'
  },
  {
    id: 'p2',
    title: 'Multi-Cloud CRM Sync Engine',
    description: 'A robust bidirectional sync system using Make.com and custom Webhooks to keep Salesforce, Pipedrive, and HubSpot data in perfect harmony.',
    tags: ['Make', 'Webhooks', 'API Design'],
    category: 'Automation'
  },
  {
    id: 'p3',
    title: 'Automated Content Engine',
    description: 'End-to-end content pipeline that fetches trending topics, generates articles using AI, creates social media assets, and schedules posts across 5 platforms.',
    tags: ['Zapier', 'Python', 'OpenAI', 'Buffer'],
    category: 'Automation'
  },
  {
    id: 'p4',
    title: 'Custom API Middleware',
    description: 'Node.js backend serving as a middleware for GHL and proprietary legacy systems to enable real-time data streaming.',
    tags: ['Node.js', 'Express', 'Redis'],
    category: 'Backend'
  }
];
