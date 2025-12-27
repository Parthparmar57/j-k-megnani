
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialization?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
