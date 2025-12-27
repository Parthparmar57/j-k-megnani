
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SectionTitle, Counter, ServiceIcon } from '../components/Shared';
import { SERVICES, TESTIMONIALS } from '../constants';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
          className="w-full h-full object-cover scale-105" 
          alt="Professional modern corporate building"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-deepGreen via-corporate-deepGreen/90 to-transparent"></div>
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-corporate-gold/20 text-corporate-gold px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-corporate-gold/30 backdrop-blur-sm">
            Established in 1959
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Trusted Financial <br/>
            Advisors <span className="text-corporate-gold">Since 1959</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
            Providing expert taxation, auditing, and investment consultancy with a 65-year legacy of integrity in Kutch, Gujarat.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/contact" 
              className="bg-corporate-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-corporate-deepGreen transition-all shadow-2xl text-center transform hover:-translate-y-1"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-corporate-deepGreen transition-all text-center transform hover:-translate-y-1"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-corporate-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <Layout>
      <Hero />

      {/* Experience Counters */}
      <section className="py-12 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl grid grid-cols-1 md:grid-cols-3 -mt-32 p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-corporate-gold"></div>
            <Counter label="Years Experience" value="65" />
            <Counter label="Clients Served" value="5000" />
            <Counter label="Compliance Focus" value="100" suffix="%" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-corporate-softGray">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Core Services" 
            subtitle="Providing comprehensive financial and legal solutions tailored to your needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-corporate-gold/5 rounded-bl-full transition-all group-hover:bg-corporate-gold/10"></div>
                <div className="w-16 h-16 bg-corporate-lightGold rounded-lg flex items-center justify-center mb-6 group-hover:bg-corporate-deepGreen transition-colors relative z-10">
                  <ServiceIcon name={service.icon} className="text-corporate-gold w-8 h-8 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-corporate-deepGreen mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>
                <Link to="/services" className="text-corporate-gold font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionTitle 
                centered={false}
                title="Why Choose J.K. Megnani & Co.?" 
                subtitle="We combine traditional values with modern expertise to ensure your peace of mind."
              />
              <div className="space-y-6">
                {[
                  { title: "Trust Since 1959", desc: "A legacy of transparency and ethical practice across three generations." },
                  { title: "Local Expertise", desc: "Deep understanding of regional laws and business landscape in Bhuj & Gujarat." },
                  { title: "Personalized Advisory", desc: "We don't just process papers; we provide strategic advice for your growth." },
                  { title: "Timely Compliance", desc: "State-of-the-art systems to ensure you never miss a deadline." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="bg-corporate-deepGreen/10 p-2 rounded-lg h-fit group-hover:bg-corporate-deepGreen transition-colors">
                      <CheckCircle2 className="text-corporate-deepGreen group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-corporate-deepGreen mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img src="https://images.unsplash.com/photo-1573164060897-4259418d77b8?auto=format&fit=crop&q=80&w=800" alt="Office team" className="rounded-2xl shadow-2xl" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-corporate-gold/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-corporate-deepGreen/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-corporate-gold/20 flex items-center gap-4 z-20">
                <div className="text-4xl font-serif font-bold text-corporate-deepGreen">65+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-tighter leading-tight">Years of<br/>Dedicated Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Testimonial Slider */}
      <section className="py-24 bg-corporate-deepGreen overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <SectionTitle 
            inverse 
            title="Trusted by Professionals" 
            subtitle="Don't take our word for it. Hear from the businesses and individuals we serve."
          />
        </div>
        
        <div className="relative">
          <div className="animate-slide-infinite">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div key={idx} className="w-[400px] shrink-0 px-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full hover:border-corporate-gold/50 transition-colors group">
                  <div className="flex text-corporate-gold mb-4 group-hover:scale-110 transition-transform origin-left">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-200 italic mb-6 leading-relaxed">"{t.quote}"</p>
                  <div>
                    <h5 className="text-white font-bold">{t.name}</h5>
                    <p className="text-corporate-gold text-sm font-semibold">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-24 relative overflow-hidden bg-corporate-gold group">
        {/* Decorative background image for CTA */}
        <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-1000 group-hover:scale-110">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
            alt="Accounting documents background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-corporate-gold/80 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Ready to secure your financial future?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
            Expert compliance is the foundation of business scaling. Let us handle the complexities while you focus on your core mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="bg-corporate-deepGreen text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-corporate-deepGreen transition-all shadow-2xl transform hover:-translate-y-1"
            >
              Contact Us Now
            </Link>
            <a 
              href="tel:+9198252XXXXX" 
              className="bg-white text-corporate-deepGreen px-12 py-5 rounded-full font-bold text-xl hover:bg-corporate-deepGreen hover:text-white transition-all shadow-2xl transform hover:-translate-y-1"
            >
              Call: +91 98252 XXXXX
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
