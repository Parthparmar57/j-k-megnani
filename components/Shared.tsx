
import React from 'react';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  inverse = false
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  inverse?: boolean;
}) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${inverse ? 'text-white' : 'text-corporate-deepGreen'}`}>
      {title}
      <div className={`h-1 w-20 mt-4 bg-corporate-gold ${centered ? 'mx-auto' : 'ml-0'}`}></div>
    </h2>
    {subtitle && <p className={`text-lg ${inverse ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

export const ServiceIcon = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name] as LucideIcon;
  return Icon ? <Icon className={className} /> : null;
};

export const Counter = ({ label, value, suffix = "+" }: { label: string, value: string, suffix?: string }) => (
  <div className="text-center p-6 border-r border-gray-100 last:border-0 group">
    <div className="text-4xl md:text-5xl font-serif font-bold text-corporate-deepGreen mb-2 group-hover:text-corporate-gold transition-colors">
      {value}{suffix}
    </div>
    <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">{label}</div>
  </div>
);
