
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: 'Automation' | 'AI Agent' | 'Backend';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  tools: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Automation' | 'AI & LLM' | 'Development' | 'Tools';
}

export interface NavLink {
  name: string;
  href: string;
}
