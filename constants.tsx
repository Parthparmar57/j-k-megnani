
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
    title: 'GST Compliance',
    description: 'Complete Goods and Services Tax management and advisory.',
    details: [
      'GST Registration & Cancellation',
      'Monthly & Annual Returns Filing',
      'GST Audit Support',
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
    name: 'Mr. J.K. Megnani',
    role: 'Founder & Senior Tax Consultant',
    bio: 'With over 65 years of experience, Mr. Megnani established the legacy of trust and ethics that the firm stands on today.',
    image: 'https://picsum.photos/400/500?random=1',
    specialization: 'Taxation & Advisory'
  },
  {
    id: '2',
    name: 'CA Rajesh Megnani',
    role: 'Managing Partner',
    bio: 'Leading the firm into the modern era with expertise in complex GST laws and corporate auditing standards.',
    image: 'https://picsum.photos/400/500?random=2',
    specialization: 'GST & Corporate Audit'
  },
  {
    id: '3',
    name: 'Ms. Amita Kothari',
    role: 'Accounts Manager',
    bio: 'Managing client compliance and day-to-day accounting operations with precision and dedication.',
    image: 'https://picsum.photos/400/500?random=3',
    specialization: 'Bookkeeping & Compliance'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Suresh Patel',
    company: 'Patel Engineering',
    quote: 'J.K. Megnani & Co. has been our trusted partner for three generations. Their integrity is unmatched in Bhuj.'
  },
  {
    id: '2',
    name: 'Meera Shah',
    company: 'Creative Designs',
    quote: 'Starting my business was easy thanks to their expert guidance on registration and GST. Highly recommended!'
  },
  {
    id: '3',
    name: 'Arjun Singh',
    company: 'Individual Investor',
    quote: 'Their tax planning strategies helped me save significantly while staying 100% compliant. Real experts.'
  },
  {
    id: '4',
    name: 'Vikram Mehta',
    company: 'Mehta Logistics',
    quote: 'Professional, timely, and ethical. They handle our complex audits with remarkable efficiency.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'When should I file my Income Tax Return?',
    answer: 'The standard deadline for individuals is 31st July, while for audit cases, it is typically 30th September or 31st October depending on the financial year and regulations.'
  },
  {
    question: 'What documents are required for GST registration?',
    answer: 'Key documents include PAN card of the business/owner, proof of business address (Electricity bill/Rent agreement), bank account details, and identity/address proof of promoters.'
  },
  {
    question: 'How often do I need to file GST returns?',
    answer: 'Most regular taxpayers file GSTR-1 and GSTR-3B monthly, though smaller businesses under the QRMP scheme can opt for quarterly filing with monthly tax payments.'
  },
  {
    question: 'Is a Tax Audit mandatory for my business?',
    answer: 'A Tax Audit is mandatory if your business turnover exceeds ₹1 Crore (or ₹10 Crores if cash transactions are under 5%) or if professional receipts exceed ₹50 Lakhs.'
  }
];
