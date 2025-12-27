
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/Shared';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-corporate-deepGreen text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-corporate-gold">Connect with our tax experts for professional advice.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-12">
              <SectionTitle 
                centered={false}
                title="Get in Touch" 
                subtitle="Reach out via any of the channels below."
              />
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-corporate-lightGold rounded-xl flex items-center justify-center text-corporate-gold shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-corporate-deepGreen mb-1">Our Location</h4>
                    <p className="text-gray-600">Opp. Hotel Prince, Station Road, Bhuj, Gujarat – 370001</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-corporate-lightGold rounded-xl flex items-center justify-center text-corporate-gold shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-corporate-deepGreen mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 98252 XXXXX</p>
                    <p className="text-gray-600">+91 2832 XXXXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-corporate-lightGold rounded-xl flex items-center justify-center text-corporate-gold shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-corporate-deepGreen mb-1">Email Address</h4>
                    <p className="text-gray-600">info@jkmegnani.com</p>
                    <p className="text-gray-600">tax@jkmegnani.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-corporate-lightGold rounded-xl flex items-center justify-center text-corporate-gold shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-corporate-deepGreen mb-1">Office Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-corporate-softGray p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-corporate-deepGreen mb-8">Send a Message</h3>
                {submitted ? (
                  <div className="bg-white p-12 rounded-2xl text-center shadow-inner border border-green-100 flex flex-col items-center">
                    <CheckCircle2 size={64} className="text-green-500 mb-6" />
                    <h4 className="text-2xl font-bold text-corporate-deepGreen mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Full Name</label>
                      <input required type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input required type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Phone Number</label>
                      <input required type="tel" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-all" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Service Required</label>
                      <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-all bg-white">
                        <option>Income Tax Filing</option>
                        <option>GST Advisory</option>
                        <option>Business Audit</option>
                        <option>Investment Planning</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-gray-700">How can we help you?</label>
                      <textarea required className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-corporate-gold transition-all h-32" placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button type="submit" className="w-full bg-corporate-deepGreen text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-corporate-gold transition-all shadow-lg transform hover:-translate-y-1">
                        Send Message <Send size={20} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[500px] w-full bg-gray-200 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905664152062!2d69.66444837593256!3d23.246538008272846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511ef5f053530f%3A0xc3f166113824f2b1!2sStation%20Rd%2C%20Bhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
};
