
import React from 'react';
import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/Shared';
import { TEAM } from '../constants';
import { Linkedin, Mail, Phone } from 'lucide-react';

export const Team = () => {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-corporate-deepGreen text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Experts</h1>
          <p className="text-xl text-corporate-gold">Professional minds dedicated to your financial success.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Leadership & Vision" 
            subtitle="Meet the experienced consultants leading Smith & Associates."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl aspect-[3/4]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-deepGreen to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-corporate-gold rounded-full flex items-center justify-center text-white hover:bg-white hover:text-corporate-deepGreen transition-all"><Linkedin size={18} /></a>
                      <a href="#" className="w-10 h-10 bg-corporate-gold rounded-full flex items-center justify-center text-white hover:bg-white hover:text-corporate-deepGreen transition-all"><Mail size={18} /></a>
                      <a href="#" className="w-10 h-10 bg-corporate-gold rounded-full flex items-center justify-center text-white hover:bg-white hover:text-corporate-deepGreen transition-all"><Phone size={18} /></a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-corporate-deepGreen mb-1">{member.name}</h3>
                  <p className="text-corporate-gold font-bold uppercase text-xs tracking-widest mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="inline-block bg-corporate-softGray px-4 py-1 rounded-full text-xs font-bold text-corporate-deepGreen">
                    Expertise: {member.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-corporate-softGray">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Join Our Team" 
            subtitle="Are you a passionate CA or Tax Expert? We are always looking for ethical professionals."
          />
          <button className="bg-corporate-deepGreen text-white px-10 py-4 rounded-full font-bold hover:bg-corporate-gold transition-all shadow-xl">
            View Career Opportunities
          </button>
        </div>
      </section>
    </Layout>
  );
};
