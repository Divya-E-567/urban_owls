import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Code, 
  Cpu, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Sparkles,
  CheckCircle
} from 'lucide-react';

const seoFaqs = [
  {
    q: "Who is the best SEO expert in Kochi for ROI-driven organic growth?",
    a: "Urban Owls Digital serves as Kochi's premier engineering-grade SEO consultancy. Unlike traditional digital marketers who rely on low-grade link directories or blog spam, our senior SEO strategists focus on technical crawl efficiency, sub-0.6s Core Web Vitals, semantic entity architecture, and modern Generative Engine Optimization (GEO) to guarantee sustainable organic customer acquisition."
  },
  {
    q: "How much do professional SEO consultant services cost in Kochi, Kerala?",
    a: "Professional SEO consulting retainers in Kochi typically range from ₹25,000 to ₹85,000 per month depending on technical complexity, competitive keyword density, and whether local or international markets are targeted. We provide fully transparent, scope-based sprint and retainer pricing designed to yield a verifiable 3x to 5x return on investment."
  },
  {
    q: "How long does it take an SEO expert to rank my website #1 on Google in Kochi?",
    a: "Technical crawl fixes, schema correction, and Google Business Profile (GBP) optimizations produce initial ranking jumps within 30 to 60 days. Highly competitive commercial keywords typically achieve top-tier Page 1 dominance within 90 to 180 days of systematic topical authority execution."
  },
  {
    q: "What is the difference between an SEO Consultant and a regular Digital Marketing Agency?",
    a: "A general digital marketing agency often spreads resources thin across social media posters, graphic designs, and paid ads. A dedicated SEO Consultant focuses deeply on algorithmic ranking systems: JavaScript rendering performance, log file audits, internal link equity distribution, entity knowledge graphs, and voice/AI search answer extraction."
  },
  {
    q: "Can you guarantee Google Position #1 rankings in Kochi?",
    a: "Google's official Search Essentials explicitly state that no legitimate SEO professional can guarantee a #1 ranking. What Urban Owls Digital guarantees is an uncompromising, white-hat technical methodology: complete crawl efficiency, search intent alignment, technical speed supremacy, and high-authority entity building that systematically outperforms competing websites."
  },
  {
    q: "Do you handle Local SEO and Google Maps 3-Pack rankings in Ernakulam?",
    a: "Yes. Local 3-Pack dominance is one of our primary specialties. We optimize Google Business Profiles with localized geo-signals, structured LocalBusiness JSON-LD schema, consistent NAP citations across Kerala commercial directories, and neighborhood-level content targeting Kakkanad, Edappally, Panampilly Nagar, MG Road, and Aluva."
  },
  {
    q: "What is Generative Engine Optimization (GEO) and why do I need it in 2026?",
    a: "Over 40% of buying queries now bypass traditional search results and go directly through ChatGPT Search, Google Gemini, and Perplexity AI. GEO structures your brand's facts, statistics, and domain entities so that AI models cite your business as the authoritative recommendation."
  },
  {
    q: "How do you track and report SEO revenue results?",
    a: "We do not send vague monthly PDF summaries with vanity keyword metrics. You receive direct access to a 24/7 Looker Studio dashboard connected to server-side GA4 and Google Search Console, measuring organic impressions, high-intent clicks, phone inquiries, WhatsApp clicks, and bottom-line customer acquisition cost (CAC)."
  }
];

const SeoExpertKochi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    monthlyBudget: '₹25,000 - ₹50,000',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: null });

  useEffect(() => {
    // 1. Dynamic On-Page Meta Injection
    document.title = "SEO Expert Kochi | Senior Technical SEO & Growth Consultant | Urban Owls";
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.urbanowls.co/seo-expert-kochi";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for a verified SEO expert in Kochi? Urban Owls Digital engineers technical SEO, Local 3-Pack supremacy, and AEO/GEO growth to scale organic customer acquisition.";

    // 2. Structured JSON-LD Entity Graph Injection
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'seo-expert-kochi-schema';

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.urbanowls.co/seo-expert-kochi#webpage",
          "url": "https://www.urbanowls.co/seo-expert-kochi",
          "name": "SEO Expert Kochi | Senior Technical SEO & Growth Consultant",
          "description": "Enterprise-grade technical SEO, Google Local 3-Pack dominance, and generative search consulting in Kochi, Kerala.",
          "breadcrumb": { "@id": "https://www.urbanowls.co/seo-expert-kochi#breadcrumb" },
          "inLanguage": "en-US"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.urbanowls.co/seo-expert-kochi#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.urbanowls.co/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.urbanowls.co/services" },
            { "@type": "ListItem", "position": 3, "name": "SEO Expert Kochi", "item": "https://www.urbanowls.co/seo-expert-kochi" }
          ]
        },
        {
          "@type": ["ProfessionalService", "LocalBusiness"],
          "@id": "https://www.urbanowls.co/#organization",
          "name": "Urban Owls Digital - SEO Expert Kochi",
          "telephone": "+919847040009",
          "email": "hello@urbanowls.co",
          "url": "https://www.urbanowls.co/",
          "image": "https://www.urbanowls.co/logo.jpg",
          "priceRange": "₹₹ - ₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Infopark Road, Kakkanad",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "postalCode": "682306",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.9816,
            "longitude": 76.2999
          },
          "areaServed": [
            { "@type": "City", "name": "Kochi" },
            { "@type": "City", "name": "Ernakulam" },
            { "@type": "AdministrativeArea", "name": "Kakkanad" },
            { "@type": "AdministrativeArea", "name": "Panampilly Nagar" },
            { "@type": "AdministrativeArea", "name": "Edappally" },
            { "@type": "State", "name": "Kerala" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Professional SEO Consulting Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical SEO Audits & Core Web Vitals Engineering",
                  "description": "Comprehensive crawl efficiency, indexation debugging, and JavaScript rendering speed optimization."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Business Profile & Local 3-Pack Domination",
                  "description": "Local map citations, geo-targeted landing pages, and regional authority building."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Generative Engine Optimization (GEO) & AEO Strategy",
                  "description": "Structuring knowledge entity vectors for ChatGPT Search, Google Gemini, and Perplexity."
                }
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.urbanowls.co/seo-expert-kochi#faq",
          "mainEntity": seoFaqs.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        }
      ]
    };

    schemaScript.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(schemaScript);

    return () => {
      const existing = document.getElementById('seo-expert-kochi-schema');
      if (existing) existing.remove();
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: null });

    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({ loading: false, success: false, error: 'Please fill in Name, Email, and Phone number.' });
      return;
    }

    const whatsappText = `Hello Urban Owls Digital,%0A%0AI would like to schedule an SEO Strategy Audit for my website.%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AWebsite: ${encodeURIComponent(formData.website || 'Not provided')}%0AMonthly Budget: ${encodeURIComponent(formData.monthlyBudget)}%0AProject Scope: ${encodeURIComponent(formData.message || 'General SEO Growth')}`;
    const whatsappUrl = `https://wa.me/919847040009?text=${whatsappText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormStatus({ loading: false, success: true, error: null });
  };

  return (
    <article style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION: Above-The-Fold Commercial Intent */}
      <section style={{ background: 'var(--bg-cream)', position: 'relative', borderBottom: '1px solid var(--border-color)', padding: '90px 0 80px 0' }}>
        <div style={{ position: 'absolute', top: 0, right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197, 163, 92, 0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }} className="hero-agency-grid">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(8, 17, 37, 0.05)', border: '1px solid rgba(8, 17, 37, 0.08)', marginBottom: '22px' }}>
                <Sparkles size={14} color="var(--accent-gold)" />
                <span style={{ fontSize: '11.5px', fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Senior Technical SEO Consultant • Kochi, Kerala
                </span>
              </div>

              <h1 style={{ color: 'var(--text-primary)', marginBottom: '22px', fontWeight: 700, letterSpacing: '-0.03em', fontSize: 'clamp(34px, 5vw, 56px)', lineHeight: 1.12 }}>
                SEO Expert in Kochi Delivering Predictable Organic Revenue
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: '16.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '32px', maxWidth: '640px' }}>
                Stop burning marketing capital on agencies that report impressions instead of revenue. Urban Owls Digital architects <strong>deep technical audits, sub-0.6s Core Web Vitals, Google Maps 3-Pack supremacy, and Generative AI (GEO) citations</strong> that position your business at the top of commercial intent in Kerala.
              </p>

              {/* Verified Value Metrics */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '36px' }} className="hero-metrics">
                <div style={{ padding: '16px', background: '#ffffff', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: '26px', fontWeight: 700, color: 'var(--accent-navy)' }}>&lt; 0.6s</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Target Core Web Vitals</div>
                </div>
                <div style={{ padding: '16px', background: '#ffffff', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: '26px', fontWeight: 700, color: 'var(--accent-gold)' }}>Top 3</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Local 3-Pack Domination</div>
                </div>
                <div style={{ padding: '16px', background: '#ffffff', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: '26px', fontWeight: 700, color: 'var(--accent-navy)' }}>100%</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>White-Hat Methodology</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="#audit-form" className="btn-primary" style={{ padding: '14px 28px' }}>
                  Request Free SEO Audit <ArrowRight size={16} />
                </a>
                <a 
                  href="https://wa.me/919847040009?text=Hello%20Urban%20Owls%20Digital,%20I%20would%20like%20to%20discuss%20SEO%20consulting%20for%20my%20business." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px' }}
                >
                  <MessageSquare size={16} color="var(--accent-gold)" /> WhatsApp Strategist
                </a>
              </div>
            </motion.div>

            {/* Above-The-Fold Consultation Card */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '36px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontSize: '12px', fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: '0.06em', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                  Direct SEO Consultant Access
                </span>
              </div>
              <h3 style={{ fontSize: '21px', fontFamily: "var(--font-heading)", color: 'var(--text-primary)', marginBottom: '8px' }}>
                Schedule a 30-Min Strategy Call
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '22px' }}>
                Speak directly with our senior SEO specialist in Kochi. We will pull your live Google Search Console & indexing metrics to identify your top ranking bottlenecks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '13.5px', color: 'var(--text-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--accent-gold)" /> Full technical crawl budget analysis</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--accent-gold)" /> Competitor keyword gap identification</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--accent-gold)" /> Google Maps 3-Pack proximity check</div>
              </div>

              <a href="#audit-form" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '14px' }}>
                Claim Your Complimentary Audit
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE AN SEO SPECIALIST OVER A GENERIC MARKETING AGENCY */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
            <span className="subtitle">The Strategic Difference</span>
            <h2>Why Businesses in Kerala Choose an SEO Expert Over a Generic Agency</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '14px' }}>
              Most digital marketing agencies in Kochi assign junior executives to post on social media and buy low-quality directory backlinks. Our senior SEO consultancy engineers technical moats that competitors cannot replicate.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            
            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-cream)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-navy)', marginBottom: '18px' }}>
                <Code size={22} />
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-primary)', marginBottom: '12px' }}>Engineering-Grade Technical SEO</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                We write and debug production code. We fix JavaScript hydration delays, configure server-side rendering (SSR), optimize Core Web Vitals (LCP, INP, CLS), and structure valid JSON-LD schemas.
              </p>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-cream)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '18px' }}>
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-primary)', marginBottom: '12px' }}>Hyper-Local Kerala Entity Domination</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                We ground your brand within Kochi's commercial ecosystem. We capture high-intent buyers searching in Kakkanad, Panampilly Nagar, Edappally, and MG Road while capturing Middle East NRI traffic.
              </p>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-cream)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-navy)', marginBottom: '18px' }}>
                <Cpu size={22} />
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-primary)', marginBottom: '12px' }}>Next-Gen AEO & GEO Optimization</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                We prepare your brand for the AI transition. When clients ask ChatGPT, Gemini, or Claude for top recommendations in Kochi, our structured citation framework ensures you are cited.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE DELIVERABLES */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
            <span className="subtitle">Comprehensive SEO Pillars</span>
            <h2>Our Core SEO Services in Kochi</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '14px' }}>
              From initial crawl architecture to enterprise topical authority, our consultant-led methodology delivers complete execution.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '26px' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>PILLAR 01</div>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Technical SEO & Speed Engineering</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Eliminating crawl budget waste, indexation blocks, and JavaScript execution lag. We achieve sub-0.6s loading speeds that Google rewards.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Core Web Vitals (LCP, INP, CLS) Tuning</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> JavaScript & React Rendering Optimization</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> XML Sitemap & Canonical Hierarchy</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>PILLAR 02</div>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Local SEO & Google Maps 3-Pack</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Dominating the Google Maps 3-Pack for commercial searches in Ernakulam, Kakkanad, and Edappally to drive direct phone calls and visits.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Google Business Profile (GBP) Optimization</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Local Citation Building & NAP Consistency</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Geo-Targeted Schema (LocalBusiness JSON-LD)</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>PILLAR 03</div>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Topical Authority & Content Architecture</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Transforming your domain into the recognized authority in your industry. We build comprehensive topic clusters that capture every search intent.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Commercial Keyword Clustering</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Search Intent Content Optimization</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Semantic Entity Interlinking Networks</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '32px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '8px' }}>PILLAR 04</div>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-navy)', marginBottom: '12px' }}>AEO, GEO & Generative AI Citations</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Formatting your knowledge assets into direct answer blocks, FAQs, and entity graphs for citation by AI search engines.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Position Zero Featured Snippet Formatting</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> ChatGPT, Gemini & Perplexity Seeding</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Speakable Voice Search Schemas</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VERIFIED CLIENT PROOFS: REAL KERALA PLATFORMS */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
            <span className="subtitle">Verified Execution Proof</span>
            <h2>Client Platforms Engineered & Optimized by Our Team</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '14px' }}>
              We build, audit, and scale genuine corporate platforms across Kerala with transparent results.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '28px', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>PEST MANAGEMENT PORTAL</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Eco Pest India</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Service-led booking architecture, multi-district Kerala branch locator, and technical local search schema capturing commercial inquiries across Kerala.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)' }}>Focus: Multi-District Local 3-Pack & Lead Capture</div>
            </div>

            <div style={{ padding: '28px', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>COMMERCIAL SANITIZATION</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Blue Moon Waste Water</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                High-performance portal for septic tank and commercial water tank cleaning across Ernakulam and Kochi with 24/7 direct telephone dispatch integration.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)' }}>Focus: Kochi High-Intent Emergency Call Funnel</div>
            </div>

            <div style={{ padding: '28px', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>SPECIALIZED TERMITE TREATMENT</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>TermiteControl Kerala</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Dedicated anti-termite treatment portal with warranty calculators, localized inspection booking schedulers, and regional technical SEO ranking statewide.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)' }}>Focus: High-Intent Niche Search Dominance</div>
            </div>

            <div style={{ padding: '28px', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>COMMUNITY PLATFORM</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Momhood Kerala</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Mobile-first statewide community portal with district circles, parenting resources, and engagement funnels optimized for clean indexation.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)' }}>Focus: Viral Referral & Organic Engagement</div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. KOCHI REGIONAL EXPERTISE & MICRO-MARKET TARGETING */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'center' }} className="regional-grid">
            
            <div>
              <span className="subtitle">Hyper-Local Ernakulam Authority</span>
              <h2>Deeply Grounded in Kochi's Commercial Micro-Markets</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
                Search behavior in Kochi is hyper-localized. A tech startup searching for an SEO consultant in Kakkanad Infopark operates on a vastly different buying cycle than a retail boutique in Panampilly Nagar or a hospital in Edappally.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, marginBottom: '28px' }}>
                Our localized entity data structures map search queries directly to Ernakulam's highest-converting business corridors, capturing local buyers while expanding reach into GCC NRI investor segments in Dubai, Abu Dhabi, and Doha.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Infopark Kakkanad</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>B2B SaaS, IT, Global Tech Exporters</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Panampilly Nagar</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Luxury Boutiques, Clinics & Architecture</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Edappally & Vyttila</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Retail, Automobile & Real Estate Hubs</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>MG Road & Marine Drive</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Corporate, Legal & Hospitality Brands</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
              <h3 style={{ fontSize: '20px', fontFamily: "var(--font-heading)", color: 'var(--text-primary)', marginBottom: '20px' }}>
                Key Industries We Scale with SEO in Kerala
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '1px solid rgba(8, 17, 37, 0.06)', paddingBottom: '12px' }}>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>1. Real Estate & Luxury Builders</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Capturing high-value NRI property inquiries searching for luxury apartments and villas in Kochi.</p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(8, 17, 37, 0.06)', paddingBottom: '12px' }}>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>2. Healthcare, Dental & Specialty Clinics</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Dominating local symptom-based queries and appointment booking funnels across Ernakulam.</p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(8, 17, 37, 0.06)', paddingBottom: '12px' }}>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>3. B2B IT & SaaS Companies (Infopark)</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Scaling organic search pipeline from enterprise buyers in North America, Europe, and the Middle East.</p>
                </div>
                <div>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>4. High-Growth E-Commerce Brands</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Optimizing product catalog taxonomies, faceted search, and schema for Google Shopping organic rankings.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT COMPARISON TABLE */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle">Agency Comparison</span>
            <h2>How Urban Owls Compares to Traditional Kochi SEO Agencies</h2>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--accent-navy)', color: '#ffffff' }}>
                  <th style={{ padding: '18px 20px', fontSize: '14px', fontFamily: "var(--font-heading)" }}>SEO Growth Capability</th>
                  <th style={{ padding: '18px 20px', fontSize: '14px', fontFamily: "var(--font-heading)", color: 'var(--accent-gold)' }}>Urban Owls Digital</th>
                  <th style={{ padding: '18px 20px', fontSize: '14px', fontFamily: "var(--font-heading)", color: '#cbd5e1' }}>Standard Kochi Agencies</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(8, 17, 37, 0.01)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600 }}>Technical Code Competence</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-navy)', fontWeight: 600 }}>Engineers writing custom React/MERN fixes</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-muted)' }}>Non-technical marketers installing plugins</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: '#ffffff' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600 }}>Modern AI Optimization (GEO)</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-navy)', fontWeight: 600 }}>Active ChatGPT, Gemini & Perplexity Seeding</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-muted)' }}>Ignored completely</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(8, 17, 37, 0.01)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600 }}>Speed Standards</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-navy)', fontWeight: 600 }}>Sub-0.6s Core Web Vitals guarantees</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-muted)' }}>Slow, bloated WordPress templates (3s+)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: '#ffffff' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600 }}>Link Building Methodology</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-navy)', fontWeight: 600 }}>100% White-Hat Editorial & Business PR</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-muted)' }}>Low-tier directory & bookmark spam</td>
                </tr>
                <tr style={{ background: 'rgba(8, 17, 37, 0.01)' }}>
                  <td style={{ padding: '16px 20px', fontWeight: 600 }}>Reporting Transparency</td>
                  <td style={{ padding: '16px 20px', color: 'var(--accent-navy)', fontWeight: 600 }}>Live Looker Studio + Revenue Attribution</td>
                  <td style={{ padding: '16px 20px', color: 'var(--text-muted)' }}>Static monthly PDF snapshots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle">Clear Answers</span>
            <h2>Frequently Asked Questions About SEO in Kochi</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '12px' }}>
              Transparent answers regarding our SEO consulting methodology, deliverables, timelines, and costs.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {seoFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', background: isOpen ? 'rgba(8, 17, 37, 0.02)' : '#ffffff', borderBottom: isOpen ? '1px solid var(--border-color)' : 'none', cursor: 'pointer' }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', paddingRight: '16px' }}>
                      {faq.q}
                    </span>
                    <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                        <div style={{ padding: '22px 24px', fontSize: '14.5px', lineHeight: 1.8, color: 'var(--text-secondary)', background: '#ffffff' }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. HIGH-CONVERSION AUDIT & CONSULTATION FORM */}
      <section style={{ background: 'var(--bg-white)', padding: '90px 0' }} id="audit-form">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ background: 'var(--bg-cream)', borderRadius: '24px', padding: '45px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="subtitle">Complimentary Growth Audit</span>
              <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Request Your 360° SEO Technical Audit</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', margin: 0 }}>
                Our senior SEO consultant will inspect your technical crawl health, backlink profile, and local ranking gaps. No automated generic reports.
              </p>
            </div>

            {formStatus.success ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #10B981' }}>
                <CheckCircle size={48} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '8px' }}>Strategy Request Received</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                  Our senior SEO strategist in Kochi will review your domain and connect within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Menon" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Business Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Website URL</label>
                  <input 
                    type="url" 
                    placeholder="https://yourwebsite.com" 
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Estimated Monthly SEO Budget</label>
                  <select 
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px' }}
                  >
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 / month (Local Business & Growth)</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month (Aggressive Competitor Domination)</option>
                    <option value="₹1,00,000+">₹1,00,000+ / month (Enterprise & Multi-National E-Commerce)</option>
                  </select>
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Primary Business Challenge</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your target keywords, competitors, or current ranking issues..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px' }}
                  />
                </div>

                {formStatus.error && (
                  <div style={{ gridColumn: 'span 2', color: '#EF4444', fontSize: '13px' }}>
                    {formStatus.error}
                  </div>
                )}

                <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '10px' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '16px 36px', fontSize: '15px', cursor: 'pointer' }}>
                    Send Strategy Brief via WhatsApp <ArrowRight size={16} />
                  </button>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '12px' }}>
                    Strict privacy. We respond directly within 12 hours.
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

    </article>
  );
};

export default SeoExpertKochi;
