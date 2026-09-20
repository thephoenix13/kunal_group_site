import { useState, useEffect, useRef } from 'react';
import {
  Phone, Menu, X, ChevronUp, Users, Building2, Globe, Award,
  HardHat, GraduationCap, FileCheck, UserCheck, Car, Wrench,
  Truck, Building, Factory, FlaskConical, CheckCircle2, Star,
  MapPin, Mail, Clock, Send
} from 'lucide-react';

// ============ HEADER COMPONENT ============
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-[Rubik] text-navy">KUNAL</span>
            <span className="text-2xl font-bold font-[Rubik] text-orange">GROUP</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy font-medium hover:text-orange transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+91962342777" className="flex items-center gap-2 text-navy font-semibold text-sm">
              <Phone size={16} className="text-orange" />
              +91-962342777
            </a>
            <a
              href="#contact"
              className="bg-orange text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-orange-dark transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Get Manpower
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-navy p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-light-grey animate-fade-in">
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-navy font-medium hover:text-orange transition-colors py-2 text-sm uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-orange text-white px-5 py-2.5 rounded-md font-semibold text-sm text-center mt-2"
              >
                Get Manpower
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Industrial workers in factory"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="animate-fade-in-up">
          <p className="text-orange font-semibold text-sm sm:text-base uppercase tracking-wider mb-4">
            Trusted Workforce Partner Since 2003
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Rubik] leading-tight mb-6 max-w-4xl mx-auto">
            Comprehensive Workforce Solutions for Indian Industry
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed">
            20+ years of uninterrupted supply of skilled, semi-skilled, and unskilled labour.
            <span className="text-orange font-semibold"> 15,000+ workers</span> deployed across Pune and PAN India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-orange text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Manpower Support
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// ============ STATS SECTION ============
function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Clock size={32} />, value: 20, suffix: '+', label: 'Years in Business' },
    { icon: <Users size={32} />, value: 160, suffix: '+', label: 'Happy Clients' },
    { icon: <Globe size={32} />, value: 70, suffix: '+', label: 'MNC Network' },
    { icon: <HardHat size={32} />, value: 15000, suffix: '+', label: 'Labours on Contract' },
  ];

  return (
    <section ref={sectionRef} className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-xl text-center border border-light-grey hover:border-orange/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-orange mb-3 flex justify-center">{stat.icon}</div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy font-[Rubik]">
              {isVisible ? <Counter end={stat.value} /> : '0'}{stat.suffix}
            </div>
            <p className="text-sm sm:text-base text-navy/70 mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Counter Component
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
}

// ============ ABOUT SECTION ============
function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">About Kunal Group</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-6">
              Systematic Approach to Workforce Management
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              For over two decades, Kunal Group has been the trusted manpower partner for India's leading manufacturing and industrial enterprises. Our systematic approach to workforce management ensures seamless deployment of skilled, semi-skilled, and unskilled labour across diverse sectors.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              We take complete responsibility for legal compliance including PF, ESIC, and Workmen's Compensation Insurance (WCI), giving our clients peace of mind and zero liability concerns. Our PAN India presence enables us to serve clients wherever their operations extend.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {['PF Compliant', 'ESIC Covered', 'WCI Insured', 'PAN India'].map(tag => (
                <span key={tag} className="bg-light-bg text-navy px-4 py-2 rounded-full text-sm font-medium border border-light-grey">
                  <CheckCircle2 size={14} className="inline mr-1.5 text-orange" />
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors duration-200"
            >
              Learn More
              <i className="fas fa-arrow-right text-sm"></i>
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Professional workforce team"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange text-white p-6 rounded-xl shadow-lg hidden sm:block">
              <p className="text-3xl font-bold font-[Rubik]">20+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES SECTION ============
function ServicesSection() {
  const services = [
    {
      icon: <HardHat size={36} />,
      title: 'Labour Contracting',
      description: 'Supply of skilled, semi-skilled, and unskilled labour for manufacturing and infrastructure projects. We handle recruitment, deployment, payroll, and compliance end-to-end.',
    },
    {
      icon: <GraduationCap size={36} />,
      title: 'NAPS',
      subtitle: 'National Apprenticeship Promotion Scheme',
      description: 'End-to-end management of apprentice hiring, training, and compliance under government schemes. We streamline the entire process from onboarding to certification.',
    },
    {
      icon: <FileCheck size={36} />,
      title: 'NATS',
      subtitle: 'National Apprenticeship Training Scheme',
      description: 'Trainee deployment and documentation for technical and vocational apprenticeships. Complete management of training schedules, stipends, and regulatory filings.',
    },
    {
      icon: <UserCheck size={36} />,
      title: 'Staffing Contract',
      description: 'Flexible staffing solutions for short-term projects, peak seasons, and permanent placements. Scale your workforce up or down based on project requirements.',
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
            Complete Workforce Solutions
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            From contract labour to apprenticeship management, we offer comprehensive staffing solutions tailored to your industry needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-xl p-8 border border-light-grey hover:border-orange/30 group"
            >
              <div className="w-16 h-16 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy font-[Rubik] mb-1">{service.title}</h3>
              {service.subtitle && (
                <p className="text-xs text-orange font-medium mb-3">{service.subtitle}</p>
              )}
              <p className="text-navy/65 text-sm leading-relaxed mb-6">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Get Quote <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ INDUSTRIES SECTION ============
function IndustriesSection() {
  const industries = [
    { icon: <Car size={32} />, name: 'Automobile & Allied' },
    { icon: <Wrench size={32} />, name: 'Engineering / Project' },
    { icon: <Truck size={32} />, name: 'Logistics' },
    { icon: <Building size={32} />, name: 'Construction' },
    { icon: <Factory size={32} />, name: 'Casting & Forging' },
    { icon: <FlaskConical size={32} />, name: 'Rubber & Plastic' },
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
            Diverse Industry Expertise
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Our workforce solutions span across multiple industrial sectors, each with specialized understanding and tailored approaches.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-light-bg rounded-xl p-6 text-center border border-light-grey hover:border-orange/30 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mx-auto mb-4 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {industry.icon}
              </div>
              <h3 className="text-sm font-bold text-navy font-[Rubik]">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ WHY CHOOSE US SECTION ============
function WhyUsSection() {
  const reasons = [
    { icon: <Award size={24} />, title: 'Quality Material', desc: 'We source and deploy only the most qualified and vetted workforce for every project.' },
    { icon: <CheckCircle2 size={24} />, title: 'Professional Commitment', desc: 'Dedicated account management and on-time delivery of manpower requirements.' },
    { icon: <GraduationCap size={24} />, title: 'Trained Workers', desc: 'All deployed workers undergo skill assessment and safety training before assignment.' },
    { icon: <Building2 size={24} />, title: 'Disciplined Approach', desc: 'Structured deployment processes ensuring minimal disruption to your operations.' },
    { icon: <Clock size={24} />, title: 'Quick Response', desc: 'Rapid mobilization of workforce within 24-48 hours for urgent requirements.' },
    { icon: <Users size={24} />, title: 'Unwavering Loyalty', desc: 'Long-term partnerships built on trust, transparency, and consistent service delivery.' },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Rubik] mb-4">
            The Kunal Group Advantage
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            What sets us apart from other manpower suppliers in the industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange/40 transition-all duration-300 group hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-orange/20 rounded-lg flex items-center justify-center text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-[Rubik] mb-2">{reason.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS SECTION ============
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Kunal Group's disciplined workforce has reduced our downtime significantly. Their quick response to manpower requirements has been invaluable for our production schedules.",
      author: 'Plant Head',
      company: 'Auto Component Manufacturer, Chakan',
      rating: 5,
    },
    {
      quote: "We've been working with Kunal Group for over 8 years. Their compliance management and transparent billing make them our most reliable manpower partner.",
      author: 'HR Director',
      company: 'Engineering Solutions Pvt. Ltd., Pune',
      rating: 5,
    },
    {
      quote: "The NAPS programme management by Kunal Group has been exceptional. They handled everything from apprentice sourcing to government documentation seamlessly.",
      author: 'VP Operations',
      company: 'Leading FMCG Company, Maharashtra',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">Client Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-light-grey hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-orange fill-orange" />
                ))}
              </div>
              <p className="text-navy/75 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-light-grey pt-4">
                <p className="font-bold text-navy text-sm">{testimonial.author}</p>
                <p className="text-navy/60 text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT SECTION ============
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
            Request Manpower Support
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            Tell us about your workforce requirements and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-light-bg rounded-2xl p-8 sm:p-10 border border-light-grey">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-navy/70">We've received your enquiry. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-light-grey bg-white text-navy text-sm"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-light-grey bg-white text-navy text-sm"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-light-grey bg-white text-navy text-sm"
                      placeholder="email@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-light-grey bg-white text-navy text-sm"
                      placeholder="+91 XXXXXXXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Service Required *</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-light-grey bg-white text-navy text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="labour-contracting">Labour Contracting</option>
                    <option value="naps">NAPS - Apprenticeship Promotion</option>
                    <option value="nats">NATS - Apprenticeship Training</option>
                    <option value="staffing">Staffing Contract</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-light-grey bg-white text-navy text-sm resize-none"
                    placeholder="Tell us about your manpower requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange text-white py-3.5 rounded-lg font-semibold text-base hover:bg-orange-dark transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy font-[Rubik] mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Registered Office</p>
                    <p className="text-navy/65 text-sm">Kohinoor Centre, Office No. 2,<br />Chakan, Pune - 410501,<br />Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Phone</p>
                    <a href="tel:+91962342777" className="text-navy/65 text-sm hover:text-orange transition-colors">+91-962342777</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Email</p>
                    <a href="mailto:marketing@kunalgroup.in" className="text-navy/65 text-sm hover:text-orange transition-colors">marketing@kunalgroup.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center text-orange shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Working Hours</p>
                    <p className="text-navy/65 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-light-grey shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.8!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChakan%2C+Pune!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kunal Group Location - Chakan, Pune"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold font-[Rubik] text-white">KUNAL</span>
              <span className="text-xl font-bold font-[Rubik] text-orange">GROUP</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              India's trusted manpower solutions provider. Delivering skilled workforce across manufacturing and industrial sectors for over 20 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-orange transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-orange transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="https://wa.me/91962342777" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-orange transition-colors" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white font-[Rubik] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Services', 'Industries', 'Why Choose Us', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/60 text-sm hover:text-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white font-[Rubik] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Labour Contracting', 'NAPS Management', 'NATS Management', 'Staffing Solutions', 'Compliance Management'].map(link => (
                <li key={link}>
                  <a href="#services" className="text-white/60 text-sm hover:text-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white font-[Rubik] mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-white/60 text-sm flex items-start gap-2">
                <MapPin size={14} className="text-orange mt-0.5 shrink-0" />
                Chakan, Pune - 410501
              </li>
              <li className="text-white/60 text-sm flex items-center gap-2">
                <Phone size={14} className="text-orange shrink-0" />
                <a href="tel:+91962342777" className="hover:text-orange transition-colors">+91-962342777</a>
              </li>
              <li className="text-white/60 text-sm flex items-center gap-2">
                <Mail size={14} className="text-orange shrink-0" />
                <a href="mailto:marketing@kunalgroup.in" className="hover:text-orange transition-colors">marketing@kunalgroup.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Kunal Group. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center text-white hover:bg-orange-dark transition-colors shadow-lg"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}

// ============ WHATSAPP BUTTON ============
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91962342777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
