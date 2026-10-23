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
  CheckCircle,
  Activity,
  Layers,
  ShieldCheck,
  Terminal,
  Globe,
  Zap
} from 'lucide-react';

const seoFaqs = [
  {
    q: "Why hire a dedicated SEO Consultant in Kochi instead of a general marketing agency?",
    a: "Most digital marketing agencies operate as generalists—allocating client retainers across social media graphics, video editing, and paid ads, while treating SEO as an afterthought handled by junior staff. A dedicated SEO Consultant brings specialized algorithmic expertise: diagnosing raw server access logs, rectifying JavaScript hydration bottlenecks in React/Next.js frameworks, structuring multi-layered JSON-LD schema graphs, and executing mathematical internal PageRank distribution. This level of technical depth is essential to rank sustainably in competitive markets."
  },
  {
    q: "How does your technical SEO audit diagnose indexing issues on modern JavaScript websites?",
    a: "Modern web frameworks like React, Vue, and Angular frequently suffer from client-side rendering (CSR) indexation delays because Googlebot processes JavaScript in a two-wave indexing queue. Our audit inspects rendered DOM outputs against initial HTML payloads, evaluates hydration timings, configures dynamic server-side rendering (SSR) or prerendering where necessary, and eliminates crawl-blocking resource scripts to guarantee instant indexation of all critical commercial content."
  },
  {
    q: "What is your methodology for capturing the Google Maps Local 3-Pack in Ernakulam and Kochi?",
    a: "Google's local ranking algorithm relies on three fundamental signals: Relevance, Distance, and Prominence. We optimize your Google Business Profile (GBP) with primary and secondary category precision, establish localized geo-coordinates in schema microdata, enforce 100% consistent Name-Address-Phone (NAP) citations across Kerala business registries, and implement geo-targeted landing pages addressing specific commercial centroids like Kakkanad, Edappally, Panampilly Nagar, and Aluva."
  },
  {
    q: "Can any SEO expert legitimately guarantee a #1 ranking on Google in Kochi?",
    a: "No ethical SEO specialist can guarantee a specific #1 rank, as Google's official Search Essentials explicitly state that no third party holds a priority relationship with Google's indexing algorithms. What Urban Owls Digital guarantees is an uncompromising, engineering-led methodology: complete crawl efficiency, sub-0.6s Core Web Vitals, authoritative topical clustering, and high-trust entity validation that systematically outperforms competitors and sustains top-tier Page 1 rankings."
  },
  {
    q: "How does Generative Engine Optimization (GEO) ensure my business is cited by AI search engines?",
    a: "Over 40% of prospective clients now conduct research via AI-powered engines including ChatGPT Search, Google Gemini, and Perplexity AI. GEO involves structuring your corporate data into verifiable entity statements, embedding machine-readable JSON-LD Knowledge Graph nodes, and establishing multi-source citations across industry publications. When an AI synthesis engine queries its vector database for recommended providers in Kochi, your brand is retrieved as the verified authority."
  },
  {
    q: "What are typical SEO consulting fees and engagement models in Kochi, Kerala?",
    a: "Professional SEO consulting engagements generally range from ₹25,000 to ₹85,000 per month depending on technical architecture, competitive keyword difficulty, and geographic target radius (local Kochi vs. nationwide vs. GCC NRI markets). We offer one-time forensic technical audits, 90-day growth sprints, and monthly retainer models designed to deliver a verifiable 3x to 5x return on investment based on qualified inbound business inquiries."
  },
  {
    q: "How do you handle Google Core Algorithm updates and Helpful Content penalty recovery?",
    a: "When a domain experiences traffic drops following a Google Core or Helpful Content update, we conduct an immediate algorithmic forensic analysis. We isolate affected URL clusters, evaluate query intent alignment, prune low-value or programmatic thin content, eliminate search-intent mismatches, and rebuild first-hand experience (E-E-A-T) signals with verified author entities and authoritative citations to systematically recover lost organic visibility."
  },
  {
    q: "How do you measure and report organic search performance?",
    a: "We avoid sending vanity PDF reports filled with meaningless metric noise. Clients receive access to a 24/7 Looker Studio business intelligence dashboard integrated with Google Search Console API, GA4 server-side events, and call tracking. We report on non-branded search impressions, high-intent commercial keyword rankings, organic telephone inquiries, WhatsApp leads, and customer acquisition cost (CAC)."
  }
];

const SeoExpertKochi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
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
    metaDesc.content = "Work with a senior SEO expert in Kochi specializing in technical search audits, Core Web Vitals <0.6s, React JS crawlability, Google Local 3-Pack, and Generative Engine Optimization (GEO).";

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
            { "@type": "AdministrativeArea", "name": "Palarivattom" },
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
                  "name": "Technical SEO & JavaScript Rendering Audits",
                  "description": "Comprehensive crawl efficiency diagnostics, server log file inspection, and Core Web Vitals optimization."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Maps 3-Pack & Local Search Proximity",
                  "description": "Local citation engineering, NAP consistency, and geo-targeted schema architecture across Ernakulam."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Generative Engine Optimization (GEO) & AEO",
                  "description": "Entity knowledge graph modeling and vector search alignment for ChatGPT Search, Gemini, and Perplexity."
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
      setFormStatus({ loading: false, success: false, error: 'Please enter your Name, Email, and Phone number.' });
      return;
    }

    const whatsappText = `Hello Urban Owls Digital,%0A%0AI would like to schedule a Technical SEO Strategy Audit with your senior consultant in Kochi.%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone)}%0AWebsite: ${encodeURIComponent(formData.website || 'Not specified')}%0AChallenge: ${encodeURIComponent(formData.message || 'Technical SEO Consultation')}`;
    const whatsappUrl = `https://wa.me/919847040009?text=${whatsappText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormStatus({ loading: false, success: true, error: null });
  };

  return (
    <article style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION: Senior Technical SEO Consultant Positioning */}
      <section style={{ background: 'var(--bg-cream)', position: 'relative', borderBottom: '1px solid var(--border-color)', padding: 'clamp(50px, 8vw, 95px) 0 clamp(40px, 7vw, 85px) 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: '8%', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197, 163, 92, 0.08) 0%, transparent 70%)', pointerEvents: 'none', maxWidth: '100%' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-agency-grid">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', background: 'rgba(8, 17, 37, 0.05)', border: '1px solid rgba(8, 17, 37, 0.08)', marginBottom: '20px', maxWidth: '100%', flexWrap: 'wrap' }}>
                <Sparkles size={14} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  Independent Technical SEO Consultant • Kochi, Kerala
                </span>
              </div>

              <h1 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontWeight: 700, letterSpacing: '-0.03em', fontSize: 'clamp(30px, 5.5vw, 56px)', lineHeight: 1.15 }}>
                SEO Expert in Kochi Engineering Predictable Organic Search Revenue
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(15px, 2vw, 16.5px)', lineHeight: 1.75, fontWeight: 300, marginBottom: '28px', maxWidth: '650px' }}>
                Search engines do not reward surface-level marketing tricks. As a senior technical SEO consultant based in Kochi, I diagnose raw server logs, optimize JavaScript rendering pipelines, sculpt internal PageRank equity, and construct entity knowledge graphs that secure enduring top-tier rankings on Google, Google Maps, and Generative AI engines.
              </p>

              {/* Verified Value Metrics */}
              <div className="hero-metrics">
                <div className="metric-box">
                  <div className="metric-num">&lt; 0.6s</div>
                  <div className="metric-lbl">Target Core Web Vitals (LCP)</div>
                </div>
                <div className="metric-box">
                  <div className="metric-num text-gold">Top 3</div>
                  <div className="metric-lbl">Local 3-Pack Proximity</div>
                </div>
                <div className="metric-box">
                  <div className="metric-num">100%</div>
                  <div className="metric-lbl">White-Hat Engineering</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="hero-action-btns">
                <a href="#audit-form" className="btn-primary" style={{ padding: '14px 28px' }}>
                  Claim Your Technical SEO Audit <ArrowRight size={16} />
                </a>
                <a 
                  href="https://wa.me/919847040009?text=Hello%20Urban%20Owls%20Digital,%20I%20would%20like%20to%20discuss%20an%20SEO%20consultancy%20engagement." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px' }}
                >
                  <MessageSquare size={16} color="var(--accent-gold)" /> WhatsApp Senior Strategist
                </a>
              </div>
            </motion.div>

            {/* Direct Consultant Consultation Card */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="consultant-diagnostic-card" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '24px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontSize: '12px', fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: '0.06em', color: 'var(--text-primary)', textTransform: 'uppercase' }}>
                  Senior SEO Architect Available
                </span>
              </div>
              <h3 style={{ fontSize: '21px', fontFamily: "var(--font-heading)", color: 'var(--text-primary)', marginBottom: '10px' }}>
                Schedule a 30-Min Forensic Search Diagnostic
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '22px' }}>
                Review your live indexing health directly with our senior consultant. We inspect Google Search Console index coverage, JavaScript rendering bottlenecks, and localized Ernakulam competitor gaps.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '13.5px', color: 'var(--text-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--accent-gold)" /> Raw crawl budget & log file inspection</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--accent-gold)" /> JavaScript SPA rendering & hydration checks</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle2 size={16} color="var(--accent-gold)" /> Google Maps 3-Pack geo-grid ranking audit</div>
              </div>

              <a href="#audit-form" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '14px' }}>
                Book Your Technical Review
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THE STRATEGIC PARADIGM: WHY HIRE AN SEO CONSULTANT OVER A GENERAL AGENCY */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px auto' }}>
            <span className="subtitle">Algorithmic Precision</span>
            <h2>Why Forward-Thinking Kerala Brands Partner with an SEO Specialist</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '14px' }}>
              Generic digital agencies distribute retainer budgets across graphic designers, social media managers, and junior copywriters. SEO cannot be treated as a creative sidecar—it is an algorithmic and software engineering discipline that determines commercial visibility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            
            <div style={{ padding: 'clamp(22px, 3.5vw, 34px)', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-cream)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-navy)', marginBottom: '18px' }}>
                <Code size={22} />
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-primary)', marginBottom: '12px' }}>Code-Level Architectural Optimization</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                We write and debug code directly within your production repository. We optimize Next.js/React rendering pipelines, eliminate render-blocking stylesheets, fix hydration mismatches, and compress server response times (TTFB) to sub-millisecond thresholds.
              </p>
            </div>

            <div style={{ padding: 'clamp(22px, 3.5vw, 34px)', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-cream)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '18px' }}>
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-primary)', marginBottom: '12px' }}>Semantic Entity Modeling & Schema Graphs</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Google evaluates websites through Knowledge Graphs, not just strings of text. We build structured JSON-LD entity architectures connecting your organization to verified Wikidata entries, geographical coordinates, and industry taxonomy standards.
              </p>
            </div>

            <div style={{ padding: 'clamp(22px, 3.5vw, 34px)', borderRadius: '20px', border: '1px solid var(--border-color)', background: 'var(--bg-cream)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-navy)', marginBottom: '18px' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--text-primary)', marginBottom: '12px' }}>Penalty-Proof, White-Hat Equity</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                We never engage in toxic PBN link schemes or low-tier directory spam that trigger Google Helpful Content or Core Algorithm penalties. Every link, citation, and asset earned is backed by genuine editorial relevance and regional commercial trust.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 6 PILLARS OF MODERN TECHNICAL SEO CONSULTING */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px auto' }}>
            <span className="subtitle">Consultant Deliverables</span>
            <h2>The 6 Pillars of Our Technical SEO Consulting Framework</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '14px' }}>
              A systematic engineering methodology designed to identify crawl friction, establish topical authority, and convert organic searchers into paying clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: 'clamp(22px, 3.5vw, 32px)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Terminal size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>PILLAR 01</span>
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Crawl Forensics & JavaScript SPA SEO</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Diagnosing and resolving crawl budget wastage, indexation deadlocks, and client-side rendering bottlenecks in React, Next.js, and headless platforms.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Raw Server Log File & Crawl Rate Analysis</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> JavaScript DOM Hydration & SSR Tuning</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Canonical Tag Hierarchy & Facet Navigation Control</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: 'clamp(22px, 3.5vw, 32px)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Zap size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>PILLAR 02</span>
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Core Web Vitals & Speed Engineering</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Achieving pristine real-world performance metrics that Google uses as direct mobile ranking signals across competitive search sectors.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Largest Contentful Paint (LCP) Under 0.6s</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Interaction to Next Paint (INP) Under 100ms</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Zero Cumulative Layout Shift (CLS &lt; 0.05)</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: 'clamp(22px, 3.5vw, 32px)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <MapPin size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>PILLAR 03</span>
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Google Maps 3-Pack Centroid Engineering</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Dominating the high-intent local map pack for commercial buyers searching across Kakkanad, Panampilly Nagar, Edappally, and Ernakulam.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Google Business Profile (GBP) Primary Category Tuning</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Geo-Targeted LocalBusiness JSON-LD Coordinates</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> 100% Consistent Kerala NAP Citation Building</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: 'clamp(22px, 3.5vw, 32px)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Layers size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>PILLAR 04</span>
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Topical Authority & Semantic Clusters</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Transforming your domain into the undeniable authority in your niche by constructing deep topic clusters that answer all intent dimensions.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> High-Intent Commercial Query Clustering</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Mathematical Internal PageRank Sculpting</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Competitor Semantic Gap Identification</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: 'clamp(22px, 3.5vw, 32px)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Cpu size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>PILLAR 05</span>
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Generative Engine Optimization (GEO & AEO)</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Positioning your brand for authoritative citation by AI answer engines such as ChatGPT Search, Google Gemini, and Perplexity AI.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Vector Information Density Optimization</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Position Zero Direct-Answer Formatting</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Speakable & Entity Schema Node Integration</li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: 'clamp(22px, 3.5vw, 32px)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <Globe size={18} color="var(--accent-gold)" />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase' }}>PILLAR 06</span>
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '12px' }}>Digital PR & Editorial Authority Building</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Acquiring high-tier, contextual backlinks through thought leadership, regional business media features, and genuine institutional partnerships.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Kerala Commercial PR & Media Citations</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> High-Relevance Industry Partner Backlinks</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--accent-gold)" /> Toxic Link Audit & Disavow Maintenance</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FORENSIC CASE INTERVENTIONS: PROVEN TECHNICAL SUCCESSES */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 60px auto' }}>
            <span className="subtitle">Real Forensic Results</span>
            <h2>Technical SEO Intervention Case Breakdowns</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '14px' }}>
              Specific engineering bottlenecks diagnosed and resolved for high-value web platforms operating across Kerala and global markets.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '22px' }}>
            
            <div style={{ padding: 'clamp(20px, 3.5vw, 30px)', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>CASE STUDY 01 • E-COMMERCE</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Faceted Crawl Trap Remediation</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Diagnosed 14,000+ auto-generated parameter URLs depleting crawl budget. Implemented self-referential canonicals, robots meta-tag rules, and parameter filtering, freeing bot capacity and accelerating core category rankings by 280%.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} color="var(--accent-gold)" /> +280% Non-Brand Organic Revenue
              </div>
            </div>

            <div style={{ padding: 'clamp(20px, 3.5vw, 30px)', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>CASE STUDY 02 • REACT / SPA</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Client-Side Rendering Recovery</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                A custom React application was completely invisible to Googlebot due to client-side hydration delays. Re-architected with Next.js dynamic server-side rendering (SSR), recovering 95+ first-page commercial keyword positions within 60 days.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} color="var(--accent-gold)" /> 95+ Page-1 Commercial Keywords
              </div>
            </div>

            <div style={{ padding: 'clamp(20px, 3.5vw, 30px)', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>CASE STUDY 03 • MULTI-BRANCH SERVICE</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Kerala Local 3-Pack Dominance</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Engineered programmatic LocalBusiness JSON-LD schema across 14 Kerala service hubs with consistent geo-coordinates and review funnels, achieving sustained top-3 Google Maps rankings in Kochi, Kakkanad, and Calicut.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} color="var(--accent-gold)" /> +310% Direct Inbound Calls
              </div>
            </div>

            <div style={{ padding: 'clamp(20px, 3.5vw, 30px)', borderRadius: '18px', border: '1px solid var(--border-color)', background: 'var(--bg-gray)' }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '8px' }}>CASE STUDY 04 • ALGORITHM RECOVERY</div>
              <h3 style={{ fontSize: '18px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Helpful Content Penalty Reversal</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Audited a healthcare portal impacted by an unannounced Google Core update. Pruned 40% of unranked thin pages, aligned search intent, added verified medical author credentials, and restored organic traffic above pre-update baselines.
              </p>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={14} color="var(--accent-gold)" /> 100% Traffic & Lead Recovery
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. KOCHI COMMERCIAL SEARCH DYNAMICS & GCC NRI CORRIDORS */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="regional-grid">
            
            <div>
              <span className="subtitle">Micro-Market Search Intelligence</span>
              <h2>Decoding Kochi's Commercial Search Behavior & NRI Corridors</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '22px' }}>
                Search intent in Ernakulam cannot be tackled with a generic pan-India SEO template. A prospective client querying from Kakkanad Infopark operates on a fundamentally different buying cycle than a family searching in Panampilly Nagar or an NRI searching from Dubai.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, marginBottom: '28px' }}>
                Our localized algorithmic models map search queries directly to specific commercial centroids across Kochi, while simultaneously capturing high-value Middle East NRI search corridors where major investment decisions are made.
              </p>

              <div className="regional-sub-grid">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Kakkanad & Infopark</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>B2B SaaS, IT outsourcing & global enterprise procurement</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Panampilly Nagar & Ravipuram</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>Architecture, luxury clinics & boutique professional services</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Edappally, Vyttila & Palarivattom</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>High-velocity retail, medical specialty & regional transport hubs</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>GCC NRI Search Channels</strong>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>High-ticket real estate, healthcare & asset management from UAE/Qatar</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="regional-card">
              <h3 style={{ fontSize: '20px', fontFamily: "var(--font-heading)", color: 'var(--text-primary)', marginBottom: '20px' }}>
                Algorithmic Search Dimensions We Target
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '1px solid rgba(8, 17, 37, 0.06)', paddingBottom: '12px' }}>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>1. High-Value Commercial Intent</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Filtering out informational tire-kickers and ranking for bottom-of-funnel transactional queries.</p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(8, 17, 37, 0.06)', paddingBottom: '12px' }}>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>2. Bilingual & Colloquial Query Intent</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Capturing regional Kerala vernacular queries paired with English commercial terms seamlessly.</p>
                </div>
                <div style={{ borderBottom: '1px solid rgba(8, 17, 37, 0.06)', paddingBottom: '12px' }}>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>3. Proximity-Sensitive Mobile Searches</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Securing #1 map visibility when prospective buyers search 'near me' within Ernakulam district.</p>
                </div>
                <div>
                  <strong style={{ fontSize: '14.5px', color: 'var(--accent-navy)' }}>4. Cross-Border Middle East Demand</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>Geo-targeting searchers in Dubai, Abu Dhabi, and Riyadh planning investments in Kerala.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DETAILED COMPARISON TABLE: CONSULTANT VS. STANDARD AGENCY */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle">The Clear Difference</span>
            <h2>How a Technical SEO Consultant Outperforms a Traditional Agency</h2>
          </div>

          <div className="table-responsive-wrapper">
            <div className="table-scroll-hint">
              <span>⇄ Swipe horizontally to see full technical comparison</span>
            </div>
            <table className="seo-comparison-table">
              <thead>
                <tr style={{ background: 'var(--accent-navy)', color: '#ffffff' }}>
                  <th>Technical Capability</th>
                  <th style={{ color: 'var(--accent-gold)' }}>Urban Owls SEO Consultant</th>
                  <th style={{ color: '#cbd5e1' }}>Standard Kochi Agency</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-primary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(8, 17, 37, 0.01)' }}>
                  <td style={{ fontWeight: 600 }}>Crawl & Code Troubleshooting</td>
                  <td style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>Hands-on code execution in React, Next.js, and server configs</td>
                  <td style={{ color: 'var(--text-muted)' }}>Non-technical staff relying entirely on generic WordPress plugins</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: '#ffffff' }}>
                  <td style={{ fontWeight: 600 }}>Speed Standards (Core Web Vitals)</td>
                  <td style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>Guaranteed sub-0.6s LCP & sub-100ms INP metrics</td>
                  <td style={{ color: 'var(--text-muted)' }}>Heavy templates with 3s+ load times that trigger Google penalties</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(8, 17, 37, 0.01)' }}>
                  <td style={{ fontWeight: 600 }}>Generative Engine Optimization (GEO)</td>
                  <td style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>Structured entity graphs for ChatGPT, Gemini & Perplexity</td>
                  <td style={{ color: 'var(--text-muted)' }}>Completely overlooked; limited to old meta tags</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)', background: '#ffffff' }}>
                  <td style={{ fontWeight: 600 }}>Link Equity Acquisition</td>
                  <td style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>High-authority Kerala business PR & contextual editorial features</td>
                  <td style={{ color: 'var(--text-muted)' }}>Spam directory submissions and risky private blog networks (PBNs)</td>
                </tr>
                <tr style={{ background: 'rgba(8, 17, 37, 0.01)' }}>
                  <td style={{ fontWeight: 600 }}>Account Governance & Reporting</td>
                  <td style={{ color: 'var(--accent-navy)', fontWeight: 600 }}>Direct senior consultant access with live Looker Studio dashboards</td>
                  <td style={{ color: 'var(--text-muted)' }}>Junior account managers sending static monthly PDF snapshots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. 90-DAY SYSTEMATIC SEO SPRINT ROADMAP */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle">Structured Execution</span>
            <h2>Our 90-Day Systematic SEO Sprint Roadmap</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '12px' }}>
              How we systematically diagnose, engineer, and scale organic search dominance within 3 focused sprints.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '22px' }}>
            
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: 'clamp(20px, 3.5vw, 32px)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--accent-navy)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '18px' }}>01</div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Days 1–30: Forensic Diagnostic</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Complete log file audit, crawl budget reclamation, Core Web Vitals remediation, JavaScript rendering fixes, and structured JSON-LD entity graph deployment.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: 'clamp(20px, 3.5vw, 32px)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--accent-gold)', color: '#081125', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '18px' }}>02</div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Days 31–60: Topical Authority</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                High-intent commercial keyword clustering, mathematical internal link sculpting, conversion-optimized landing page deployment, and competitor content gap capture.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: 'clamp(20px, 3.5vw, 32px)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--accent-navy)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '18px' }}>03</div>
              <h3 style={{ fontSize: '19px', color: 'var(--accent-navy)', marginBottom: '10px' }}>Days 61–90: Local & AI Scale</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Google Maps 3-Pack centroid dominance across Ernakulam, high-trust Kerala business media link acquisition, and Generative AI (GEO) citation seeding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="subtitle">Honest Answers</span>
            <h2>Frequently Asked Questions About SEO in Kochi</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginTop: '12px' }}>
              Direct, transparent answers regarding technical requirements, deliverable roadmaps, and commercial outcomes.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {seoFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '16px', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{ width: '100%', padding: 'clamp(16px, 3vw, 20px) clamp(16px, 3.5vw, 24px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', background: isOpen ? '#ffffff' : 'transparent', borderBottom: isOpen ? '1px solid var(--border-color)' : 'none', cursor: 'pointer' }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: 'clamp(15px, 2.5vw, 16px)', fontWeight: 600, color: 'var(--text-primary)', paddingRight: '14px' }}>
                      {faq.q}
                    </span>
                    <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                        <div style={{ padding: 'clamp(16px, 3vw, 22px) clamp(16px, 3.5vw, 24px)', fontSize: '14px', lineHeight: 1.75, color: 'var(--text-secondary)', background: '#ffffff' }}>
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

      {/* 9. FORENSIC AUDIT & CONSULTATION REQUEST FORM */}
      <section style={{ background: 'var(--bg-cream)', padding: 'clamp(50px, 8vw, 95px) 0' }} id="audit-form">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="audit-card">
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="subtitle">Complimentary Search Review</span>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', marginBottom: '10px' }}>Request Your 360° Technical SEO Audit</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', margin: 0 }}>
                Our senior SEO consultant will inspect your live Search Console metrics, server crawl logs, and local Ernakulam ranking gaps. No automated software fluff.
              </p>
            </div>

            {formStatus.success ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', background: 'var(--bg-cream)', borderRadius: '16px', border: '1px solid #10B981' }}>
                <CheckCircle size={48} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '8px' }}>Technical Audit Request Received</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                  Our senior SEO specialist in Kochi will review your domain and connect within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="audit-form-grid">
                
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Menon" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }}
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
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }}
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
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Website URL</label>
                  <input 
                    type="url" 
                    placeholder="https://yourwebsite.com" 
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Current Ranking Bottlenecks or Project Goals</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your current ranking challenges, indexing problems, target keywords, or upcoming website migrations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-color)', background: '#ffffff', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                {formStatus.error && (
                  <div style={{ gridColumn: 'span 2', color: '#EF4444', fontSize: '13px' }}>
                    {formStatus.error}
                  </div>
                )}

                <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '10px' }}>
                  <button type="submit" className="btn-primary" style={{ padding: '16px 36px', fontSize: '15px', cursor: 'pointer', width: '100%', maxWidth: '360px' }}>
                    Send Brief to Senior Consultant <ArrowRight size={16} />
                  </button>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '12px' }}>
                    Confidential audit. We reply directly via WhatsApp within 12 hours.
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
