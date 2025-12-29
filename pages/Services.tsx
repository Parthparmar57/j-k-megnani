
import React from 'react';
import { Layout } from '../components/Layout';
import { SectionTitle, ServiceIcon } from '../components/Shared';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-40 pb-20 bg-corporate-deepGreen text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6">Expert Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive tax, audit, and advisory solutions designed to keep you compliant and financially robust.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group overflow-hidden">
                <div className="p-1 bg-corporate-gold/20 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="p-10 flex-grow">
                  <div className="w-16 h-16 bg-corporate-lightGold rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <ServiceIcon name={s.icon} className="text-corporate-gold w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-corporate-deepGreen mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-8">{s.description}</p>
                  <ul className="space-y-3 mb-10">
                    {s.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <Check size={16} className="text-corporate-gold shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="mt-auto w-full py-3 bg-corporate-softGray text-corporate-deepGreen font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-corporate-gold hover:text-white transition-all"
                  >
                    Consult Our Expert <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-corporate-softGray">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-corporate-gold text-5xl font-serif">"</span>
            <blockquote className="text-3xl font-serif text-corporate-deepGreen italic mb-8 -mt-6">
              Our service isn't just about filing forms; it's about building your legacy with financial wisdom and unwavering ethics.
            </blockquote>
            <div className="h-1 w-16 bg-corporate-gold mx-auto mb-4"></div>
            <p className="font-bold text-gray-800 uppercase tracking-widest">Smith & Associates</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
