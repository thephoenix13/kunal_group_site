import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { ChevronRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: 'fa-car',
      title: 'Automobile & Allied',
      description: 'Comprehensive workforce solutions for automobile manufacturing plants, ancillary units, and allied industries. From assembly line operators to quality inspectors, we provide skilled manpower for every role in the automotive value chain.',
      roles: ['Assembly Line Workers', 'Quality Inspectors', 'Machine Operators', 'Paint Shop Workers', 'Welding Technicians'],
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
    },
    {
      icon: 'fa-cogs',
      title: 'Engineering & Projects',
      description: 'Skilled and semi-skilled workforce for engineering firms, project sites, and heavy fabrication units. Our workers are trained to handle complex machinery and follow strict safety protocols on project sites.',
      roles: ['Fitters & Turners', 'Fabricators', 'Project Helpers', 'Rigging Workers', 'Safety Officers'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    },
    {
      icon: 'fa-truck',
      title: 'Logistics & Warehousing',
      description: 'Dedicated workforce for logistics operations, warehousing, and supply chain management. Our workers are trained in material handling, inventory management, and modern warehouse operations.',
      roles: ['Warehouse Operators', 'Material Handlers', 'Loading/Unloading Staff', 'Inventory Assistants', 'Forklift Operators'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
    {
      icon: 'fa-building',
      title: 'Construction',
      description: 'Reliable manpower for construction projects of all scales. From residential complexes to industrial infrastructure, we provide trained construction workers who understand site safety and quality standards.',
      roles: ['Masons', 'Bar Bending Workers', 'Shuttering Carpenters', 'Site Helpers', 'Safety Marshals'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    },
    {
      icon: 'fa-industry',
      title: 'Casting & Forging',
      description: 'Specialized workforce for foundries, forging units, and metal processing facilities. Our workers are experienced in high-temperature environments and understand the precision required in casting operations.',
      roles: ['Furnace Operators', 'Moulding Workers', 'Finishers', 'Heat Treatment Operators', 'Quality Checkers'],
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80',
    },
    {
      icon: 'fa-flask',
      title: 'Rubber & Plastic',
      description: 'Trained manpower for rubber and plastic manufacturing units. Our workforce is familiar with injection moulding, extrusion, and compounding processes specific to polymer industries.',
      roles: ['Machine Operators', 'Moulding Technicians', 'Quality Inspectors', 'Mixing Operators', 'Packaging Staff'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    },
  ];

  return (
    <>
      <PageBanner
        title="Industries We Serve"
        subtitle="Specialized workforce solutions across multiple industrial sectors with deep domain expertise."
        breadcrumb={[{ label: 'Industries' }]}
      />

      {/* Industries Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Sector Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Diverse Industry Experience
            </h2>
            <p className="text-navy/65 text-lg max-w-3xl mx-auto">
              With over 20 years of experience, we have developed deep domain expertise across six major industrial verticals. Each sector has its unique requirements, and our workforce is specifically trained to meet those demands.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index > 0 ? 'pt-12 border-t border-light-grey' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center text-orange">
                      <i className={`fas ${industry.icon} text-2xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-navy font-[Rubik]">{industry.title}</h3>
                  </div>
                  <p className="text-navy/70 text-base leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div>
                    <p className="text-xs text-navy/50 uppercase tracking-wider font-semibold mb-3">Key Roles We Fill</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.roles.map((role, i) => (
                        <span key={i} className="bg-light-bg text-navy/70 px-3 py-1.5 rounded-full text-xs font-medium border border-light-grey">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={industry.image}
                    alt={`${industry.title} industry workforce`}
                    className="w-full h-[300px] lg:h-[350px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '6+', label: 'Industry Verticals' },
              { value: '160+', label: 'Active Clients' },
              { value: '15,000+', label: 'Workers Deployed' },
              { value: '20+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl sm:text-4xl font-bold text-orange font-[Rubik]">{stat.value}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy font-[Rubik] mb-4">
            Need Workforce for Your Industry?
          </h2>
          <p className="text-navy/65 text-base max-w-2xl mx-auto mb-8">
            Whatever your sector, we have the expertise and workforce to meet your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded font-semibold hover:bg-orange-dark transition-colors"
          >
            Get In Touch <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
