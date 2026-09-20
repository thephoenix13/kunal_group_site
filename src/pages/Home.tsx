import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Globe, HardHat, ChevronRight, Award, CheckCircle2, Star, Phone } from 'lucide-react';

// Counter Component
function Counter({ end, isVisible }: { end: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
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
  }, [end, isVisible]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Clock size={28} />, value: 20, suffix: '+', label: 'Years in Business', sublabel: 'Since 2003' },
    { icon: <Users size={28} />, value: 160, suffix: '+', label: 'Happy Clients', sublabel: 'Across India' },
    { icon: <Globe size={28} />, value: 70, suffix: '+', label: 'MNC Network', sublabel: 'Trusted Partners' },
    { icon: <HardHat size={28} />, value: 15000, suffix: '+', label: 'Workers Deployed', sublabel: 'On Contract' },
  ];

  const services = [
    {
      icon: <HardHat size={32} />,
      title: 'Labour Contracting',
      description: 'Complete supply of skilled, semi-skilled, and unskilled labour for manufacturing and infrastructure projects with full compliance management.',
      link: '/services',
    },
    {
      icon: <Award size={32} />,
      title: 'NAPS',
      subtitle: 'National Apprenticeship Promotion Scheme',
      description: 'End-to-end management of apprentice hiring, training coordination, and government compliance under the NAPS framework.',
      link: '/services',
    },
    {
      icon: <CheckCircle2 size={32} />,
      title: 'NATS',
      subtitle: 'National Apprenticeship Training Scheme',
      description: 'Technical and vocational trainee deployment with complete documentation, stipend management, and regulatory filings.',
      link: '/services',
    },
    {
      icon: <Users size={32} />,
      title: 'Staffing Contract',
      description: 'Flexible staffing solutions for short-term projects, peak seasons, and permanent workforce placements across industries.',
      link: '/services',
    },
  ];

  const industries = [
    { icon: 'fa-car', name: 'Automobile & Allied' },
    { icon: 'fa-cogs', name: 'Engineering / Project' },
    { icon: 'fa-truck', name: 'Logistics' },
    { icon: 'fa-building', name: 'Construction' },
    { icon: 'fa-industry', name: 'Casting & Forging' },
    { icon: 'fa-flask', name: 'Rubber & Plastic' },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Industrial workforce"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Trusted Workforce Partner Since 2003</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[Rubik] leading-[1.1] mb-6">
              Comprehensive
              <span className="text-orange"> Workforce</span>
              <br />Solutions for
              <span className="text-orange"> Indian Industry</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
              Over 20 years of uninterrupted supply of skilled, semi-skilled, and unskilled labour. 
              <span className="text-white font-semibold"> 15,000+ workers</span> deployed across Pune and PAN India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white px-8 py-4 rounded font-semibold text-base hover:bg-orange-dark transition-all duration-200 shadow-lg"
              >
                Explore Our Services
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                About Kunal Group
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-xl text-center border border-light-grey hover:border-orange/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center text-orange mx-auto mb-4 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik]">
                {statsVisible ? <Counter end={stat.value} isVisible={statsVisible} /> : '0'}{stat.suffix}
              </div>
              <p className="text-navy font-medium text-sm mt-1">{stat.label}</p>
              <p className="text-navy/50 text-xs mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Industrial workforce management"
                  className="w-full h-[400px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange text-white p-6 rounded-xl shadow-xl hidden sm:block">
                <p className="text-4xl font-bold font-[Rubik]">20+</p>
                <p className="text-sm font-medium opacity-90">Years of Trust</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-orange/20 rounded-xl hidden sm:block"></div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-orange text-xs font-semibold uppercase tracking-wider">About Kunal Group</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-6 leading-tight">
                Systematic Approach to Workforce Management
              </h2>
              <p className="text-navy/70 text-base leading-relaxed mb-5">
                For over two decades, Kunal Group has been the trusted manpower partner for India's leading manufacturing and industrial enterprises. Our systematic approach ensures seamless deployment of workforce across diverse sectors.
              </p>
              <p className="text-navy/70 text-base leading-relaxed mb-8">
                We take complete responsibility for legal compliance including PF, ESIC, and Workmen's Compensation Insurance (WCI), providing our clients with peace of mind and zero liability concerns.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['PF Compliant', 'ESIC Covered', 'WCI Insured', 'PAN India Presence'].map(tag => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-navy/80">
                    <CheckCircle2 size={16} className="text-orange shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn More About Us <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Our Core Services
            </h2>
            <p className="text-navy/65 text-lg max-w-2xl mx-auto">
              Comprehensive workforce solutions tailored to meet the unique demands of Indian industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="service-card bg-white rounded-xl p-8 border border-light-grey hover:border-orange/30 group block"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-navy font-[Rubik] mb-1">{service.title}</h3>
                {service.subtitle && (
                  <p className="text-[11px] text-orange font-medium mb-2">{service.subtitle}</p>
                )}
                <p className="text-navy/60 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-orange font-semibold text-sm mt-5 group-hover:gap-2 transition-all duration-200">
                  Learn More <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES PREVIEW */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Sectors We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Industries We Cater To
            </h2>
            <p className="text-navy/65 text-lg max-w-2xl mx-auto">
              Specialized workforce solutions across multiple industrial verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Link
                to="/industries"
                key={index}
                className="bg-light-bg rounded-xl p-6 text-center border border-light-grey hover:border-orange/30 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1 block"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mx-auto mb-3 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  <i className={`fas ${industry.icon} text-xl`}></i>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-navy font-[Rubik]">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US PREVIEW */}
      <section className="py-20 sm:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Our Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Rubik] mb-4">
              Why Choose Kunal Group
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              What sets us apart as the preferred manpower partner for leading Indian enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Award size={22} />, title: 'Quality Workforce', desc: 'Only the most qualified and vetted workers deployed for every project.' },
              { icon: <CheckCircle2 size={22} />, title: 'Professional Commitment', desc: 'Dedicated account management and on-time delivery, every time.' },
              { icon: <HardHat size={22} />, title: 'Trained Workers', desc: 'Skill assessment and safety training before every deployment.' },
              { icon: <Clock size={22} />, title: 'Quick Response', desc: 'Rapid mobilization within 24-48 hours for urgent requirements.' },
              { icon: <Users size={22} />, title: 'Disciplined Approach', desc: 'Structured processes ensuring minimal disruption to operations.' },
              { icon: <Star size={22} />, title: 'Unwavering Loyalty', desc: 'Long-term partnerships built on trust and consistent delivery.' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-7 border border-white/10 hover:border-orange/40 transition-all duration-300 group hover:bg-white/10"
              >
                <div className="w-11 h-11 bg-orange/20 rounded-lg flex items-center justify-center text-orange mb-4 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white font-[Rubik] mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Client Voices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Kunal Group's disciplined workforce has reduced our downtime significantly. Their quick response to manpower requirements has been invaluable for our production schedules.", author: 'Plant Head', company: 'Auto Component Manufacturer, Chakan' },
              { quote: "We've been working with Kunal Group for over 8 years. Their compliance management and transparent billing make them our most reliable manpower partner.", author: 'HR Director', company: 'Engineering Solutions Pvt. Ltd., Pune' },
              { quote: "The NAPS programme management by Kunal Group has been exceptional. They handled everything from apprentice sourcing to government documentation seamlessly.", author: 'VP Operations', company: 'Leading FMCG Company, Maharashtra' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-light-grey hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute top-6 right-8 text-5xl text-orange/10 font-serif">"</div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-orange fill-orange" />)}
                </div>
                <p className="text-navy/70 text-sm leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-light-grey pt-4">
                  <p className="font-bold text-navy text-sm">{testimonial.author}</p>
                  <p className="text-navy/50 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange rounded-full translate-x-1/3 -translate-y-1/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Rubik] mb-3">
                Ready to Scale Your Workforce?
              </h2>
              <p className="text-white/60 text-base max-w-xl">
                Get in touch with our team to discuss your manpower requirements. We respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919623427777" className="inline-flex items-center gap-3 bg-orange text-white px-6 py-3.5 rounded font-semibold hover:bg-orange-dark transition-colors">
                <Phone size={18} />
                <div className="text-left">
                  <p className="text-[10px] font-normal opacity-80 uppercase">Labour Supply</p>
                  <p className="text-sm font-bold">+91-9623427777</p>
                </div>
              </a>
              <a href="tel:+919145172777" className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded font-semibold hover:bg-white/20 transition-colors">
                <Phone size={18} />
                <div className="text-left">
                  <p className="text-[10px] font-normal opacity-80 uppercase">Govt. Schemes</p>
                  <p className="text-sm font-bold">+91-9145172777</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
