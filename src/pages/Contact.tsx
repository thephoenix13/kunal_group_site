import PageBanner from '../components/PageBanner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our dedicated teams for workforce solutions and government scheme management."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Contact Departments */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-orange text-xs font-semibold uppercase tracking-wider">Reach Our Teams</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-[Rubik] mb-4">
              Department-wise Contacts
            </h2>
            <p className="text-navy/65 text-lg max-w-2xl mx-auto">
              Connect with the right team for your specific requirement. We ensure prompt response to all enquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Labour Supply */}
            <div className="bg-light-bg rounded-2xl p-8 sm:p-10 border border-light-grey hover:border-orange/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange/10 rounded-xl flex items-center justify-center text-orange mb-6">
                <HardHatIcon />
              </div>
              <h3 className="text-2xl font-bold text-navy font-[Rubik] mb-2">Labour Supply</h3>
              <p className="text-navy/60 text-sm mb-8 leading-relaxed">
                For skilled, semi-skilled, and unskilled manpower requirements, staffing contracts, and workforce deployment enquiries.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+919623427777"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-light-grey hover:border-orange/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-orange/10 rounded-lg flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-navy/50 uppercase tracking-wider font-medium">Phone</p>
                    <p className="text-navy font-bold text-lg">+91-9623427777</p>
                  </div>
                </a>

                <a
                  href="mailto:hr@kunalgroup.net"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-light-grey hover:border-orange/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-orange/10 rounded-lg flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-navy/50 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-navy font-bold">hr@kunalgroup.net</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Government Schemes */}
            <div className="bg-light-bg rounded-2xl p-8 sm:p-10 border border-light-grey hover:border-orange/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-6">
                <GovtIcon />
              </div>
              <h3 className="text-2xl font-bold text-navy font-[Rubik] mb-2">Government Schemes</h3>
              <p className="text-navy/60 text-sm mb-8 leading-relaxed">
                For NAPS (National Apprenticeship Promotion Scheme) and NATS (National Apprenticeship Training Scheme) related enquiries.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+919145172777"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-light-grey hover:border-orange/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center text-navy group-hover:bg-orange group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-navy/50 uppercase tracking-wider font-medium">Phone</p>
                    <p className="text-navy font-bold text-lg">+91-9145172777</p>
                  </div>
                </a>

                <a
                  href="mailto:portal@kunalgroup.net"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-light-grey hover:border-orange/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-navy/5 rounded-lg flex items-center justify-center text-navy group-hover:bg-orange group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-navy/50 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-navy font-bold">portal@kunalgroup.net</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Address & Map */}
      <section className="py-20 sm:py-28 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Address Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange/5 border border-orange/20 rounded-full px-4 py-1.5 mb-5">
                <span className="text-orange text-xs font-semibold uppercase tracking-wider">Visit Us</span>
              </div>
              <h2 className="text-3xl font-bold text-navy font-[Rubik] mb-8">
                Our Office
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">Registered Office</h4>
                    <p className="text-navy/65 text-sm leading-relaxed">
                      Kohinoor Centre, Office No. 2,<br />
                      Chakan, Pune - 410501,<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">Working Hours</h4>
                    <p className="text-navy/65 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-navy/45 text-xs mt-1">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">Phone Numbers</h4>
                    <div className="space-y-1">
                      <a href="tel:+919623427777" className="text-navy/65 text-sm hover:text-orange transition-colors block">
                        Labour Supply: +91-9623427777
                      </a>
                      <a href="tel:+919145172777" className="text-navy/65 text-sm hover:text-orange transition-colors block">
                        Govt. Schemes: +91-9145172777
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">Email Addresses</h4>
                    <div className="space-y-1">
                      <a href="mailto:hr@kunalgroup.net" className="text-navy/65 text-sm hover:text-orange transition-colors block">
                        Labour Supply: hr@kunalgroup.net
                      </a>
                      <a href="mailto:portal@kunalgroup.net" className="text-navy/65 text-sm hover:text-orange transition-colors block">
                        Govt. Schemes: portal@kunalgroup.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-light-grey">
                <p className="text-xs text-navy/50 uppercase tracking-wider font-semibold mb-4">Connect With Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy hover:bg-orange hover:text-white transition-all duration-200" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy hover:bg-orange hover:text-white transition-all duration-200" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://wa.me/919623427777" className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy hover:bg-green-500 hover:text-white transition-all duration-200" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-light-grey h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.6!2d73.85!3d18.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a0bfffffff%3A0x5a1e5e6e4f0d0c0!2sChakan%2C+Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kunal Group Office Location - Chakan, Pune"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 bg-orange/20 rounded-xl flex items-center justify-center text-orange mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-white font-bold font-[Rubik] mb-2">Quick Response</h3>
              <p className="text-white/55 text-sm">We respond to all enquiries within 24 hours during business days.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-orange/20 rounded-xl flex items-center justify-center text-orange mx-auto mb-4">
                <HardHatIcon />
              </div>
              <h3 className="text-white font-bold font-[Rubik] mb-2">Site Visit Available</h3>
              <p className="text-white/55 text-sm">Schedule a meeting at our Chakan office or request a site visit from our team.</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-orange/20 rounded-xl flex items-center justify-center text-orange mx-auto mb-4">
                <ShieldIcon />
              </div>
              <h3 className="text-white font-bold font-[Rubik] mb-2">Free Consultation</h3>
              <p className="text-white/55 text-sm">Get a free assessment of your manpower requirements from our experts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Custom icon components
function HardHatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/>
      <path d="M10 15V6.5a3.5 3.5 0 0 1 7 0V15"/>
      <path d="M4 15v-4a8 8 0 0 1 16 0v4"/>
    </svg>
  );
}

function GovtIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l7-4 7 4v14"/>
      <path d="M9 21v-6h6v6"/>
      <path d="M10 10h.01M14 10h.01"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
