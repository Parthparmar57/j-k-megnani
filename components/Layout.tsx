
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-corporate-deepGreen text-corporate-gold w-10 h-10 flex items-center justify-center font-serif text-xl font-bold rounded group-hover:bg-corporate-gold group-hover:text-corporate-deepGreen transition-colors">SA</div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-corporate-deepGreen' : 'text-corporate-deepGreen md:text-white'}`}>Smith & Associates</span>
            <span className={`text-[10px] tracking-widest uppercase font-semibold ${isScrolled ? 'text-corporate-gold' : 'text-corporate-gold'}`}>Tax & Investment Advisors</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-medium transition-colors hover:text-corporate-gold ${location.pathname === link.path ? 'text-corporate-gold' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-corporate-gold text-white px-6 py-2.5 rounded-full font-semibold hover:bg-corporate-deepGreen transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            Consult Expert
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-corporate-deepGreen' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium border-b border-gray-100 pb-2 ${location.pathname === link.path ? 'text-corporate-gold' : 'text-gray-700'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-corporate-deepGreen text-white text-center py-3 rounded-lg mt-2 font-bold"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-corporate-deepGreen text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-corporate-gold text-corporate-deepGreen w-10 h-10 flex items-center justify-center font-serif text-xl font-bold rounded">SA</div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Smith & Associates</span>
                <span className="text-[10px] tracking-widest uppercase text-corporate-gold">Est. 1980</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading tax consultants and investment advisors in New York City. Providing expert financial guidance with integrity since 1980.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-corporate-gold hover:border-corporate-gold transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-corporate-gold hover:border-corporate-gold transition-all"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-corporate-gold hover:border-corporate-gold transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-l-4 border-corporate-gold pl-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-corporate-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-corporate-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-corporate-gold transition-colors">Our Services</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-corporate-gold transition-colors">Expert Team</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-corporate-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-l-4 border-corporate-gold pl-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Income Tax Filing</li>
              <li className="text-gray-300">Sales Tax Registration & Returns</li>
              <li className="text-gray-300">Auditing & Assurance</li>
              <li className="text-gray-300">Accounting Services</li>
              <li className="text-gray-300">Investment Advisory</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-l-4 border-corporate-gold pl-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-corporate-gold shrink-0 mt-1" size={20} />
                <span className="text-gray-300">123 Wall Street, Suite 500, New York, NY 10005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-corporate-gold shrink-0" size={20} />
                <span className="text-gray-300">(212) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-corporate-gold shrink-0" size={20} />
                <span className="text-gray-300">info@smithassociates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Smith & Associates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-corporate-gold">Privacy Policy</a>
            <a href="#" className="hover:text-corporate-gold">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-corporate-gold p-3 rounded-full text-white shadow-xl hover:bg-white hover:text-corporate-deepGreen transition-all transform hover:-translate-y-1"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

/**
 * Fix: Made children optional to resolve "Property 'children' is missing" errors in page components
 * that return this Layout.
 */
export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
