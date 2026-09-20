import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/why-us', label: 'Why Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-white/80 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-map-marker-alt text-orange text-[10px]"></i>
              Kohinoor Centre, Office No. 2, Chakan, Pune - 410501
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-clock text-orange text-[10px]"></i>
              Mon - Sat: 9:00 AM - 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hr@kunalgroup.net" className="hover:text-orange transition-colors">
              <i className="fas fa-envelope text-[10px] mr-1"></i>hr@kunalgroup.net
            </a>
            <div className="flex items-center gap-2 ml-3 border-l border-white/20 pl-4">
              <a href="#" className="hover:text-orange transition-colors"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="hover:text-orange transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="https://wa.me/919623427777" className="hover:text-orange transition-colors"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="https://kunalgroup.net/wp-content/uploads/2025/06/kg_logo_png-120x28.png"
                alt="Kunal Group - Manpower & Workforce Solutions"
                className="h-8 sm:h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 rounded ${
                    isActive(link.to)
                      ? 'text-orange bg-orange/5'
                      : 'text-navy hover:text-orange hover:bg-navy/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+919623427777" className="flex items-center gap-2 text-navy font-semibold text-sm group">
                <div className="w-9 h-9 bg-orange/10 rounded-full flex items-center justify-center group-hover:bg-orange transition-colors">
                  <Phone size={15} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] text-navy/50 font-normal uppercase tracking-wider">Call Us Now</p>
                  <p className="text-sm font-bold">+91-9623427777</p>
                </div>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-navy p-2 rounded-lg hover:bg-light-bg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-light-grey shadow-xl">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 text-sm font-medium uppercase tracking-wide rounded-lg transition-colors ${
                    isActive(link.to)
                      ? 'text-orange bg-orange/5 border-l-2 border-orange'
                      : 'text-navy hover:text-orange hover:bg-light-bg'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-light-grey">
                <a href="tel:+919623427777" className="flex items-center gap-3 px-4 py-3 text-navy">
                  <Phone size={16} className="text-orange" />
                  <span className="font-semibold">+91-9623427777</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
