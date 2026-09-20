import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { CheckCircle2, Target, Eye, Shield, ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <>
      <PageBanner
        title="About Kunal Group"
        subtitle="Two decades of excellence in manpower and workforce solutions across India."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Company Overview */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-orange text-xs font-semibold uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-6 leading-tight">
                Building India's Workforce, One Deployment at a Time
              </h2>
              <p className="text-navy/70 text-base leading-relaxed mb-5">
                Established in 2003, Kunal Group has grown from a local manpower supplier in Pune to one of India's most trusted workforce solutions providers. Our journey has been defined by an unwavering commitment to quality, compliance, and client satisfaction.
              </p>
              <p className="text-navy/70 text-base leading-relaxed mb-5">
                We understand that the backbone of Indian manufacturing and industry is its workforce. That's why we've built a systematic approach to manpower management that covers everything from recruitment and skill assessment to deployment, payroll management, and statutory compliance.
              </p>
              <p className="text-navy/70 text-base leading-relaxed mb-8">
                Today, we proudly serve over 160 clients across 70+ MNCs, deploying 15,000+ workers across Pune and PAN India. Our PAN India presence enables us to support clients wherever their operations extend, with the same level of dedication and professionalism.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'PF & ESIC Compliant',
                  'WCI Insured',
                  'PAN India Operations',
                  'ISO Compliant Processes',
                  '24/7 Support',
                  'Zero Liability Model',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-navy/80">
                    <CheckCircle2 size={16} className="text-orange shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                  alt="Kunal Group professional team"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold font-[Rubik] text-orange">20+</p>
                <p className="text-sm font-medium text-white/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-light-grey">
              <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-navy font-[Rubik] mb-4">Our Vision</h3>
              <p className="text-navy/70 leading-relaxed">
                To be India's most trusted and preferred workforce solutions provider, setting the benchmark for quality, compliance, and reliability in manpower services. We envision a future where every Indian enterprise has access to skilled, disciplined, and compliant workforce solutions that drive productivity and growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-md border border-light-grey">
              <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-navy font-[Rubik] mb-4">Our Mission</h3>
              <p className="text-navy/70 leading-relaxed">
                To deliver systematic, compliant, and scalable workforce solutions that empower Indian industries to focus on their core business. We are committed to providing skilled, semi-skilled, and unskilled labour with zero compliance burden to our clients, while ensuring fair treatment and growth opportunities for our workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">What Drives Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Our Core Values
            </h2>
            <p className="text-navy/65 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every deployment we execute.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={28} />, title: 'Compliance First', desc: '100% adherence to all statutory requirements including PF, ESIC, and WCI.' },
              { icon: <CheckCircle2 size={28} />, title: 'Quality Assurance', desc: 'Rigorous screening and skill assessment for every worker before deployment.' },
              { icon: <Target size={28} />, title: 'Client Focus', desc: 'Understanding and exceeding client expectations with every engagement.' },
              { icon: <Eye size={28} />, title: 'Transparency', desc: 'Clear communication, honest pricing, and zero hidden charges.' },
            ].map((value, index) => (
              <div key={index} className="text-center p-8 rounded-xl border border-light-grey hover:border-orange/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-navy/5 rounded-xl flex items-center justify-center text-navy mx-auto mb-5 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-navy font-[Rubik] mb-3">{value.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[Rubik] mb-4">
            Partner with India's Trusted Workforce Solutions Provider
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto mb-8">
            Let us handle your manpower requirements while you focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded font-semibold hover:bg-orange-dark transition-colors"
          >
            Contact Us <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
