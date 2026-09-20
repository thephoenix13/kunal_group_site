import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronUp } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img
                src="https://kunalgroup.net/wp-content/uploads/2025/06/kg_logo_png-120x28.png"
                alt="Kunal Group"
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's trusted manpower solutions provider. Delivering skilled, semi-skilled, and unskilled workforce across manufacturing and industrial sectors for over two decades.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-orange hover:text-white transition-all duration-200" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-orange hover:text-white transition-all duration-200" aria-label="Facebook">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://wa.me/919623427777" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-green-500 hover:text-white transition-all duration-200" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white font-[Rubik] text-sm uppercase tracking-wider mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Our Services' },
                { to: '/industries', label: 'Industries' },
                { to: '/why-us', label: 'Why Choose Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`text-sm transition-colors duration-200 flex items-center gap-2 ${
                      location.pathname === link.to ? 'text-orange' : 'text-white/60 hover:text-orange'
                    }`}
                  >
                    <i className="fas fa-chevron-right text-[8px] text-orange/50"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white font-[Rubik] text-sm uppercase tracking-wider mb-5 pb-3 border-b border-white/10">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Labour Contracting',
                'NAPS Management',
                'NATS Management',
                'Staffing Solutions',
                'Compliance Management',
              ].map(link => (
                <li key={link}>
                  <Link to="/services" className="text-white/60 text-sm hover:text-orange transition-colors duration-200 flex items-center gap-2">
                    <i className="fas fa-chevron-right text-[8px] text-orange/50"></i>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white font-[Rubik] text-sm uppercase tracking-wider mb-5 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Kohinoor Centre, Office No. 2, Chakan, Pune - 410501, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919623427777" className="text-white/60 hover:text-orange transition-colors block">+91-9623427777</a>
                  <a href="tel:+919145172777" className="text-white/60 hover:text-orange transition-colors block">+91-9145172777</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange shrink-0" />
                <div className="text-sm">
                  <a href="mailto:hr@kunalgroup.net" className="text-white/60 hover:text-orange transition-colors block">hr@kunalgroup.net</a>
                  <a href="mailto:portal@kunalgroup.net" className="text-white/60 hover:text-orange transition-colors block">portal@kunalgroup.net</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Kunal Group. All Rights Reserved. | CIN: U74999PN2003PTCXXXXX
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white/40 text-xs hover:text-orange transition-colors"
          >
            Back to Top <ChevronUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
