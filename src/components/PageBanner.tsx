import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; to?: string }[];
}

export default function PageBanner({ title, subtitle, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border-[40px] border-white rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-[30px] border-white rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      {/* Geometric Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-4">
            <Link to="/" className="text-white/50 hover:text-orange transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <i className="fas fa-chevron-right text-[8px] text-white/30"></i>
                {item.to ? (
                  <Link to={item.to} className="text-white/50 hover:text-orange transition-colors">{item.label}</Link>
                ) : (
                  <span className="text-orange">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[Rubik] mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-lg max-w-2xl">{subtitle}</p>
          )}
        </div>
        
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-orange/50 to-transparent"></div>
      </div>
    </section>
  );
}
