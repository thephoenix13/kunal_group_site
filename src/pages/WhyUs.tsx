import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Award, CheckCircle2, HardHat, Clock, Users, Star, Shield, Target, ChevronRight } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Award size={28} />,
      title: 'Quality Workforce',
      description: 'We deploy only the most qualified and thoroughly vetted workers. Every candidate undergoes rigorous skill assessment, background verification, and reference checking before deployment.',
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: 'Professional Commitment',
      description: 'Dedicated account managers ensure your requirements are met on time, every time. We maintain a 98%+ fulfillment rate across all our client engagements.',
    },
    {
      icon: <HardHat size={28} />,
      title: 'Trained Workers',
      description: 'All deployed workers undergo mandatory safety training, skill upgradation programs, and industry-specific orientation before assignment to your site.',
    },
    {
      icon: <Target size={28} />,
      title: 'Disciplined Approach',
      description: 'Our structured deployment processes, clear SOPs, and dedicated site supervisors ensure minimal disruption to your operations and maximum productivity.',
    },
    {
      icon: <Clock size={28} />,
      title: 'Quick Response',
      description: 'We understand that industrial operations cannot wait. Our rapid mobilization capability ensures workforce deployment within 24-48 hours for urgent requirements.',
    },
    {
      icon: <Users size={28} />,
      title: 'Unwavering Loyalty',
      description: 'Long-term partnerships built on trust, transparency, and consistent service delivery. Many of our clients have been with us for over a decade.',
    },
  ];

  const differentiators = [
    { title: 'Zero Compliance Burden', desc: 'We handle all PF, ESIC, WCI, and statutory filings. You focus on your business.' },
    { title: 'PAN India Reach', desc: 'Deploy workforce anywhere in India with the same quality and compliance standards.' },
    { title: 'Transparent Billing', desc: 'No hidden charges. Clear, itemized billing with complete breakup of wages and overheads.' },
    { title: 'Replacement Guarantee', desc: 'Immediate replacement of underperforming workers at no additional cost.' },
    { title: '24/7 Support', desc: 'Round-the-clock support for urgent requirements and site-level issues.' },
    { title: 'Scalable Solutions', desc: 'Scale your workforce up or down based on project requirements with zero hassle.' },
  ];

  return (
    <>
      <PageBanner
        title="Why Choose Kunal Group"
        subtitle="Discover what makes us the preferred manpower partner for 160+ leading Indian enterprises."
        breadcrumb={[{ label: 'Why Us' }]}
      />

      {/* Core Reasons */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Our Strengths</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              The Kunal Group Advantage
            </h2>
            <p className="text-navy/65 text-lg max-w-3xl mx-auto">
              Six core strengths that have made us the trusted choice for workforce solutions across India's leading manufacturing and industrial enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-light-bg rounded-xl p-8 border border-light-grey hover:border-orange/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-navy font-[Rubik] mb-3">{reason.title}</h3>
                <p className="text-navy/65 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 sm:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">What Sets Us Apart</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Rubik] mb-4">
              Our Key Differentiators
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Beyond our core strengths, these operational advantages make working with us seamless and hassle-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-7 border border-white/10 hover:border-orange/40 transition-all duration-300 group hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/20 rounded-lg flex items-center justify-center text-orange shrink-0 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-[Rubik] mb-2">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Client Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              What Our Clients Say
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

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Rubik] mb-4">
            Experience the Kunal Group Difference
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-8">
            Join 160+ satisfied clients who trust us with their workforce needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded font-semibold hover:bg-orange-dark transition-colors"
          >
            Contact Us Today <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
