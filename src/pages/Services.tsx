import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { HardHat, GraduationCap, FileCheck, UserCheck, Shield, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <HardHat size={36} />,
      title: 'Labour Contracting',
      description: 'Complete supply of skilled, semi-skilled, and unskilled labour for manufacturing and infrastructure projects.',
      details: [
        'Skilled, semi-skilled, and unskilled workforce deployment',
        'End-to-end recruitment and screening process',
        'Complete payroll management and statutory compliance',
        'PF, ESIC, and WCI coverage for all deployed workers',
        'Flexible scaling based on project requirements',
        'Dedicated site supervisors and team leaders',
      ],
      contact: { dept: 'Labour Supply', email: 'hr@kunalgroup.net', phone: '+91-9623427777' },
    },
    {
      icon: <GraduationCap size={36} />,
      title: 'NAPS',
      subtitle: 'National Apprenticeship Promotion Scheme',
      description: 'End-to-end management of apprentice hiring, training coordination, and government compliance under the NAPS framework.',
      details: [
        'Apprentice sourcing and screening as per scheme guidelines',
        'Complete portal registration and documentation',
        'Training schedule coordination with client requirements',
        'Stipend disbursement and reimbursement processing',
        'Government compliance and periodic reporting',
        'Performance tracking and certification support',
      ],
      contact: { dept: 'Government Schemes', email: 'portal@kunalgroup.net', phone: '+91-9145172777' },
    },
    {
      icon: <FileCheck size={36} />,
      title: 'NATS',
      subtitle: 'National Apprenticeship Training Scheme',
      description: 'Technical and vocational trainee deployment with complete documentation, stipend management, and regulatory filings.',
      details: [
        'Technical and vocational trainee identification and deployment',
        'Complete documentation and agreement management',
        'Training module coordination with industry standards',
        'Stipend management and government subsidy processing',
        'Regular compliance audits and reporting',
        'Post-training placement support and certification',
      ],
      contact: { dept: 'Government Schemes', email: 'portal@kunalgroup.net', phone: '+91-9145172777' },
    },
    {
      icon: <UserCheck size={36} />,
      title: 'Staffing Contract',
      description: 'Flexible staffing solutions for short-term projects, peak seasons, and permanent workforce placements.',
      details: [
        'Short-term project staffing with rapid mobilization',
        'Peak season workforce augmentation',
        'Permanent placement and recruitment services',
        'Contract-to-hire staffing models',
        'Complete background verification and skill testing',
        'Performance management and replacement guarantee',
      ],
      contact: { dept: 'Labour Supply', email: 'hr@kunalgroup.net', phone: '+91-9623427777' },
    },
  ];

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive workforce solutions designed to meet the diverse needs of Indian industry."
        breadcrumb={[{ label: 'Services' }]}
      />

      {/* Services Detail */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-start ${index > 0 ? 'pt-16 border-t border-light-grey' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy font-[Rubik] mb-2">
                    {service.title}
                  </h2>
                  {service.subtitle && (
                    <p className="text-orange text-sm font-semibold mb-4">{service.subtitle}</p>
                  )}
                  <p className="text-navy/70 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-navy/75">
                        <CheckCircle2 size={16} className="text-orange mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-light-bg rounded-2xl p-8 border border-light-grey ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-light-grey">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-sm">{service.title}</h3>
                      <p className="text-navy/50 text-xs">Service Details</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield size={16} className="text-orange shrink-0" />
                      <span className="text-sm text-navy/70">Full statutory compliance (PF, ESIC, WCI)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-orange shrink-0" />
                      <span className="text-sm text-navy/70">Rapid deployment within 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-orange shrink-0" />
                      <span className="text-sm text-navy/70">Zero liability model for clients</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-light-grey">
                    <p className="text-xs text-navy/50 uppercase tracking-wider font-semibold mb-3">
                      Contact for {service.contact.dept}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`tel:${service.contact.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex items-center gap-2 text-navy text-sm font-medium hover:text-orange transition-colors"
                      >
                        <i className="fas fa-phone text-orange text-xs"></i>
                        {service.contact.phone}
                      </a>
                      <a
                        href={`mailto:${service.contact.email}`}
                        className="flex items-center gap-2 text-navy text-sm font-medium hover:text-orange transition-colors"
                      >
                        <i className="fas fa-envelope text-orange text-xs"></i>
                        {service.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Our Deployment Process
            </h2>
            <p className="text-navy/65 text-lg max-w-2xl mx-auto">
              A systematic approach to ensure the right workforce reaches your site on time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Requirement Analysis', desc: 'Understanding your specific manpower needs, skill requirements, and timeline.' },
              { step: '02', title: 'Workforce Sourcing', desc: 'Recruitment, screening, skill assessment, and background verification.' },
              { step: '03', title: 'Deployment', desc: 'Mobilization of workers to your site with complete documentation and compliance.' },
              { step: '04', title: 'Ongoing Management', desc: 'Continuous payroll, compliance management, and performance monitoring.' },
            ].map((item, index) => (
              <div key={index} className="relative bg-white rounded-xl p-8 border border-light-grey hover:border-orange/20 hover:shadow-lg transition-all duration-300 group">
                <span className="text-5xl font-bold text-navy/5 font-[Rubik] absolute top-4 right-6 group-hover:text-orange/10 transition-colors">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center text-white font-bold text-sm mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy font-[Rubik] mb-3">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Rubik] mb-4">
            Need Workforce Solutions?
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-8">
            Contact our dedicated teams for labour supply or government scheme management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919623427777" className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3.5 rounded font-semibold hover:bg-orange-dark transition-colors">
              <i className="fas fa-phone text-sm"></i> Labour: +91-9623427777
            </a>
            <a href="tel:+919145172777" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded font-semibold hover:bg-white/20 transition-colors">
              <i className="fas fa-phone text-sm"></i> Schemes: +91-9145172777
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
