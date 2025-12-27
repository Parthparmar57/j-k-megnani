
import React from 'react';
import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/Shared';
import { History, Award, Target, Users } from 'lucide-react';

export const About = () => {
  const milestones = [
    { year: '1959', title: 'Foundation', desc: 'J.K. Megnani started the practice in Bhuj with a vision to provide ethical tax advisory.' },
    { year: '1985', title: 'Growth Era', desc: 'The firm expanded services to include Corporate Auditing and Investment Advisory.' },
    { year: '2005', title: 'New Leadership', desc: 'Integration of modern digital standards and expanded GST/VAT consultancy.' },
    { year: 'Present', title: 'Trusted Legacy', desc: 'Serving over 5000+ satisfied clients across multiple generations.' }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-corporate-deepGreen text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Legacy</h1>
          <p className="text-xl text-corporate-gold font-medium">Serving Bhuj with integrity since 1959</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle 
                centered={false}
                title="65 Years of Dedication" 
                subtitle="From a single desk to one of Bhuj's most respected firms."
              />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Established by Mr. J.K. Megnani in 1959, our firm was born out of a commitment to provide clear, honest, and expert tax guidance to the local community in Kutch. Over the decades, we have witnessed the economic transformation of the region and have evolved our practices to meet global standards while maintaining our deep-rooted local values.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, J.K. Megnani & Co. stands as a symbol of reliability. We are not just service providers; we are long-term partners in our clients' growth, ensuring every individual and business we touch is compliant, tax-efficient, and financially secure.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-corporate-lightGold rounded-full flex items-center justify-center text-corporate-gold">
                    <History size={24} />
                  </div>
                  <span className="font-bold text-corporate-deepGreen">Deep Heritage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-corporate-lightGold rounded-full flex items-center justify-center text-corporate-gold">
                    <Award size={24} />
                  </div>
                  <span className="font-bold text-corporate-deepGreen">Expert Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" alt="Legacy" className="rounded-2xl shadow-2xl relative z-10" />
              <div className="absolute -inset-4 border-2 border-corporate-gold rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-corporate-softGray">
        <div className="container mx-auto px-4">
          <SectionTitle title="The Journey" subtitle="Our path of excellence through the decades." />
          <div className="max-w-4xl mx-auto mt-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            <div className="space-y-24">
              {milestones.map((m, idx) => (
                <div key={idx} className={`relative flex items-center justify-between ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-corporate-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className={`w-5/12 bg-white p-8 rounded-xl shadow-md border-t-4 border-corporate-deepGreen transform transition-all hover:scale-105`}>
                    <span className="text-3xl font-serif font-bold text-corporate-gold mb-2 block">{m.year}</span>
                    <h3 className="text-xl font-bold text-corporate-deepGreen mb-3">{m.title}</h3>
                    <p className="text-gray-600">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Our Mission', text: 'To empower businesses and individuals through transparent financial guidance and expert compliance services.' },
              { icon: Users, title: 'Client First', text: 'We believe in building relationships, not just processing returns. Your growth is our priority.' },
              { icon: Award, title: 'Integrity', text: 'Maintaining the highest ethical standards in every audit, filing, and advisory session.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-corporate-lightGold rounded-2xl group hover:bg-corporate-deepGreen transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:bg-corporate-gold transition-colors">
                  <item.icon className="text-corporate-deepGreen group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-corporate-deepGreen mb-4 group-hover:text-white">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
