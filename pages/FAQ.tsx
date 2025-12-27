
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/Shared';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

/**
 * Fix: Updated props to explicitly use FAQItem type to resolve excess property checking errors
 * when passing 'key' during mapping.
 */
const AccordionItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-corporate-lightGold transition-colors"
      >
        <span className="font-bold text-lg text-corporate-deepGreen pr-4">{question}</span>
        <div className={`shrink-0 text-corporate-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-corporate-deepGreen text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about taxation, compliance, and our services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-corporate-softGray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="w-16 h-16 bg-corporate-gold rounded-full flex items-center justify-center text-white shadow-lg">
                <HelpCircle size={32} />
              </div>
            </div>
            
            {/* Fix: Explicitly pass props to avoid spread property assignment issues with 'key' */}
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}

            <div className="mt-16 bg-white p-10 rounded-3xl shadow-lg border-l-8 border-corporate-gold text-center">
              <h3 className="text-2xl font-bold text-corporate-deepGreen mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-8">
                Every tax situation is unique. Book a personalized consultation to get expert advice specific to your case.
              </p>
              <a 
                href="/#/contact" 
                className="inline-block bg-corporate-deepGreen text-white px-10 py-4 rounded-full font-bold hover:bg-corporate-gold transition-all"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
