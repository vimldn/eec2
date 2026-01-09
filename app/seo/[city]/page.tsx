import Link from 'next/link';
import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';

const service = getServiceBySlug('seo')!;

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    city: `seo-agency-${slug}`,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const citySlug = params.city.replace('seo-agency-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) return {};
  
  return {
    title: `SEO Agency ${city.name} | Organic Search Growth`,
    description: `Expert SEO services in ${city.name}. We help ${city.region} businesses grow organic traffic, rankings and revenue. Trusted since 2011.`,
  };
}

export default function SEOCityPage({ params }: { params: { city: string } }) {
  const citySlug = params.city.replace('seo-agency-', '');
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const relatedCities = cities.filter(c => c.slug !== city.slug).slice(0, 6);

  return (
    <>
      {/* Hero with city image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.8) 50%, rgba(10,10,15,0.5) 100%), url('${city.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>→</span>
            <Link href="/seo/" className="hover:text-white transition-colors">SEO</Link>
            <span>→</span>
            <span className="text-brand">{city.name}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            SEO Agency in <span className="text-brand">{city.name}</span>
          </h1>
          
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            {city.seo.intro}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['14+ Years Experience', `${city.name} Market Experts`, 'ROI Focused'].map((badge) => (
              <span key={badge} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md text-sm">
                ✓ {badge}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact/"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3.5 rounded-lg font-semibold transition-all"
            >
              Get Your Free {city.name} SEO Audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/case-studies/"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-brand text-white px-6 py-3.5 rounded-lg font-semibold transition-all backdrop-blur-sm"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why SEO Matters - Unique Content */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label">Why SEO Matters in {city.name}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Grow your organic presence in {city.description}
            </h2>
            <div className="text-text-muted space-y-4 leading-relaxed">
              <p>{city.seo.why}</p>
              <p>{city.seo.industries}</p>
            </div>
            
            <div className="mt-8 space-y-3">
              {city.economyFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-brand mt-1">✓</span>
                  <span className="text-text-secondary">{fact}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
              <h3 className="font-semibold mb-4">{city.name} Business Landscape</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-text-muted">Population</span>
                  <span className="font-medium">{city.population}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-text-muted">Region</span>
                  <span className="font-medium">{city.region}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-text-muted">Key Industries</span>
                  <span className="font-medium text-right text-sm">{city.industries.slice(0, 3).join(', ')}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-text-muted">Business Hubs</span>
                  <span className="font-medium text-right text-sm">{city.areas.slice(0, 3).join(', ')}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '53%', label: 'of traffic comes from organic search' },
                { number: '14.6%', label: 'close rate for SEO leads' },
                { number: '5.3x', label: 'ROI compared to paid ads' },
                { number: '70%', label: 'of marketers see SEO better than PPC' }
              ].map((stat, i) => (
                <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-brand mb-1">{stat.number}</div>
                  <div className="text-xs text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-center">What's Included</p>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Our {city.name} SEO Service
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
            A comprehensive SEO strategy tailored to {city.name} businesses and the {city.region} market
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.includes.map((item, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6 hover:border-brand/50 transition-colors">
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 py-20 bg-dark-lighter">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-center">FAQs</p>
          <h2 className="text-3xl font-bold mb-10 text-center">
            SEO Questions for {city.name} Businesses
          </h2>
          
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-dark-card border border-white/[0.08] rounded-xl p-6">
                <h3 className="font-semibold mb-2">{faq.question.replace('{city}', city.name)}</h3>
                <p className="text-text-secondary text-sm">{faq.answer.replace(/{city}/g, city.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title={`Ready to grow organic traffic in ${city.name}?`}
        description={`Get a comprehensive SEO audit and discover untapped opportunities in the ${city.name} market.`}
        buttonText={`Get Your Free ${city.name} SEO Audit`}
      />

      <section className="px-6 py-12 bg-dark-lighter border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-sm font-semibold text-text-secondary mb-4">
            SEO services in other UK cities
          </h3>
          <div className="flex flex-wrap gap-3">
            {relatedCities.map((relatedCity) => (
              <Link
                key={relatedCity.slug}
                href={`/seo/seo-agency-${relatedCity.slug}/`}
                className="bg-dark-card border border-white/[0.08] rounded-md px-4 py-2 text-sm hover:border-brand transition-colors"
              >
                {relatedCity.name}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/seo/" className="text-brand hover:underline text-sm">
              View all 30 locations →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
