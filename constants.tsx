
import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  PieChart, 
  Briefcase, 
  Scale, 
  TrendingUp,
  UserCheck,
  Award,
  History,
  Target
} from 'lucide-react';
import { Service, TeamMember, Testimonial, FAQItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'income-tax',
    title: 'Income Tax Services',
    description: 'Expert planning and compliance for individuals and businesses.',
    details: [
      'Individual & Business Tax Returns',
      'Tax Planning & Saving Strategies',
      'Notice & Assessment Handling',
      'International Taxation Advisory'
    ],
    icon: 'FileText'
  },
  {
    id: 'gst',
    title: 'Sales Tax Compliance',
    description: 'Complete Sales and Use Tax management and advisory.',
    details: [
      'Sales Tax Registration & Cancellation',
      'Monthly & Annual Returns Filing',
      'Sales Tax Audit Support',
      'Compliance Advisory & Legal Opinion'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'auditing',
    title: 'Auditing Services',
    description: 'Rigorous examination of financial records to ensure accuracy.',
    details: [
      'Statutory Audit',
      'Tax Audit (u/s 44AB)',
      'Internal & Management Audit',
      'Due Diligence Reviews'
    ],
    icon: 'Scale'
  },
  {
    id: 'accounting',
    title: 'Accounting & Bookkeeping',
    description: 'Professional maintenance of financial books and reporting.',
    details: [
      'Day-to-day Bookkeeping',
      'Financial Statement Preparation',
      'MIS Reporting & Analysis',
      'Budgeting & Forecasting'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'business-reg',
    title: 'Business Registration',
    description: 'Seamless entity formation for your entrepreneurial journey.',
    details: [
      'Proprietorship & Partnership Firm',
      'Private Limited & LLP Registration',
      'MSME & Startup India Registration',
      'Import-Export Code (IEC)'
    ],
    icon: 'Target'
  },
  {
    id: 'investment',
    title: 'Investment Advisory',
    description: 'Tax-efficient wealth creation and financial planning.',
    details: [
      'Tax-Saving Investment Planning',
      'Wealth Management Advisory',
      'Retirement & Estate Planning',
      'Portfolio Analysis'
    ],
    icon: 'TrendingUp'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Mr. John Smith',
    role: 'Founder & Senior Tax Consultant',
    bio: 'With over 40 years of experience, Mr. Smith established the legacy of trust and ethics that the firm stands on today.',
    image: 'https://picsum.photos/400/500?random=1',
    specialization: 'Taxation & Advisory'
  },
  {
    id: '2',
    name: 'CPA Michael Johnson',
    role: 'Managing Partner',
    bio: 'Leading the firm into the modern era with expertise in complex tax laws and corporate auditing standards.',
    image: 'https://picsum.photos/400/500?random=2',
    specialization: 'Tax & Corporate Audit'
  },
  {
    id: '3',
    name: 'Ms. Sarah Davis',
    role: 'Accounts Manager',
    bio: 'Managing client compliance and day-to-day accounting operations with precision and dedication.',
    image: 'https://picsum.photos/400/500?random=3',
    specialization: 'Bookkeeping & Compliance'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Robert Wilson',
    company: 'Wilson Enterprises',
    quote: 'Smith & Associates has been our trusted partner for over a decade. Their integrity is unmatched in New York.'
  },
  {
    id: '2',
    name: 'Emily Chen',
    company: 'Creative Solutions Inc.',
    quote: 'Starting my business was easy thanks to their expert guidance on tax registration and compliance. Highly recommended!'
  },
  {
    id: '3',
    name: 'David Rodriguez',
    company: 'Individual Investor',
    quote: 'Their tax planning strategies helped me save significantly while staying 100% compliant. Real experts.'
  },
  {
    id: '4',
    name: 'Jennifer Thompson',
    company: 'Thompson Logistics',
    quote: 'Professional, timely, and ethical. They handle our complex audits with remarkable efficiency.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'When should I file my Income Tax Return?',
    answer: 'The standard deadline for individuals is April 15th, while for businesses, it depends on the entity type and fiscal year end.'
  },
  {
    question: 'What documents are required for business tax registration?',
    answer: 'Key documents include EIN number, business license, proof of business address, bank account details, and identity verification for owners.'
  },
  {
    question: 'How often do I need to file business tax returns?',
    answer: 'Most businesses file quarterly estimated taxes and annual returns. Corporations file Form 1120 annually, while partnerships file Form 1065.'
  },
  {
    question: 'Is a Tax Audit mandatory for my business?',
    answer: 'A tax audit may be required if your business income exceeds certain thresholds or if the IRS selects your return for examination.'
  }
];
