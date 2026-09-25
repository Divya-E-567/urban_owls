import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  ArrowRight, 
  Search, 
  MessageSquare, 
  HelpCircle, 
  MapPin, 
  Code, 
  Sparkles, 
  Cpu, 
  Phone, 
  Mail, 
  BarChart3,
  ChevronDown,
  ChevronUp,
  Send,
  AlertTriangle,
  CheckCircle,
  Building,
  Layers,
  Database
} from 'lucide-react';

const BestDigitalMarketingKochi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Lead brief form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Digital Marketing & Growth',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const servicesList = [
    'Digital Marketing & Growth',
    'Search Engine Optimization (SEO)',
    'Answer Engine Optimization (AEO)',
    'Generative Engine Optimization (GEO)',
    'Google Ads (PPC) Management',
    'Social Media Marketing',
    'Performance Marketing',
    'Website Design & UX',
    'E-Commerce Development',
    'Other Services'
  ];

  useEffect(() => {
    // 1. Technical SEO - Meta Tags Configuration
    document.title = "Best Digital Marketing Company in Kochi | Urban Owls Digital";
    
    // Set canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.urbanowls.co/best-digital-marketing-kochi";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for the best digital marketing company in Kochi? Urban Owls Digital provides SEO, Local SEO, AEO, GEO, Google Ads, social media and performance marketing services.";

    // Set robots tag
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow";

    // Open Graph / Twitter metadata setups
    const updateMetaTag = (property, content, attr = 'property') => {
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('og:title', 'Best Digital Marketing Company in Kochi | Urban Owls Digital');
    updateMetaTag('og:description', 'Looking for the best digital marketing company in Kochi? Urban Owls Digital provides SEO, Local SEO, AEO, GEO, Google Ads, social media and performance marketing services.');
    updateMetaTag('og:url', 'https://www.urbanowls.co/best-digital-marketing-kochi');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:image', 'https://www.urbanowls.co/logo.jpg');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', 'Best Digital Marketing Company in Kochi | Urban Owls Digital', 'name');
    updateMetaTag('twitter:description', 'Looking for the best digital marketing company in Kochi? Urban Owls Digital provides SEO, Local SEO, AEO, GEO, Google Ads, social media and performance marketing services.', 'name');
    updateMetaTag('twitter:image', 'https://www.urbanowls.co/logo.jpg', 'name');

    // 2. Structured JSON-LD Schema Injection
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'seo-kochi-schema-data';

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.urbanowls.co/best-digital-marketing-kochi#webpage",
          "url": "https://www.urbanowls.co/best-digital-marketing-kochi",
          "name": "Best Digital Marketing Company in Kochi | Urban Owls Digital",
          "description": "Looking for the best digital marketing company in Kochi? Urban Owls Digital provides SEO, Local SEO, AEO, GEO, Google Ads, social media and performance marketing services.",
          "breadcrumb": {
            "@id": "https://www.urbanowls.co/best-digital-marketing-kochi#breadcrumb"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.urbanowls.co/best-digital-marketing-kochi#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.urbanowls.co/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Digital Marketing",
              "item": "https://www.urbanowls.co/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Best Digital Marketing Company Kochi",
              "item": "https://www.urbanowls.co/best-digital-marketing-kochi"
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://www.urbanowls.co/#organization",
          "name": "Urban Owls Digital",
          "image": "https://www.urbanowls.co/logo.jpg",
          "telephone": "+919847040009",
          "email": "hello@urbanowls.co",
          "url": "https://www.urbanowls.co/",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "postalCode": "682306",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.9816",
            "longitude": "76.2999"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.urbanowls.co/best-digital-marketing-kochi#faq",
          "mainEntity": faqs.map(item => ({
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

    schemaScript.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    return () => {
      const oldSchema = document.getElementById('seo-kochi-schema-data');
      if (oldSchema) oldSchema.remove();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in Name, Email, and Project Details.' });
      return;
    }

    const whatsappNumber = '919847040009';
    const whatsappText = `Hello Urban Owls Digital,%0A%0AI'm reaching out from the Kochi Landing Page.%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone || 'N/A')}%0ACompany: ${encodeURIComponent(formData.company || 'N/A')}%0AService Interest: ${encodeURIComponent(formData.service)}%0AProject Brief: ${encodeURIComponent(formData.message)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }

    setStatus({ loading: false, success: true, error: null });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Digital Marketing & Growth',
      message: ''
    });
  };

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      
      {/* PHASE 5 — HERO SECTION */}
      <section style={{ background: 'var(--bg-cream)', position: 'relative', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center' }} className="section-padding">
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197, 163, 92, 0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '50px', alignItems: 'center' }} className="hero-grid">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(8, 17, 37, 0.04)', border: '1px solid rgba(8, 17, 37, 0.05)', marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', fontFamily: "var(--font-heading)", fontWeight: 700, letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                  SEO • Local SEO • AEO • GEO • Google Ads • Social Media • Web
                </span>
              </div>

              <h1 style={{ color: 'var(--text-primary)', marginBottom: '24px', fontWeight: 700, letterSpacing: '-0.03em' }}>
                Best Digital Marketing Company in Kochi
              </h1>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '17.5px', lineHeight: 1.7, fontWeight: 300, marginBottom: '36px', maxWidth: '650px' }}>
                Urban Owls Digital helps businesses in Kochi and across Kerala build stronger online visibility, attract qualified customers and grow through SEO, Local SEO, AEO, GEO, performance marketing, social media and conversion-focused digital experiences.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#consultation-brief" className="btn-primary">
                  Get a Free Consultation <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/919847040009" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={16} /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Hero Office Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid var(--border-color)',
                height: '420px'
              }}
              className="hero-image-box"
            >
              <img 
                src="/images/hero_office_bg.jpg" 
                alt="Urban Owls Digital strategic marketing team planning local search campaign layouts for Kochi businesses" 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8, 17, 37, 0.5) 0%, rgba(8, 17, 37, 0) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '30px'
              }}>
                <div style={{ color: '#ffffff' }}>
                  <h4 style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: '17px', fontFamily: 'var(--font-heading)' }}>Urban Owls Digital</h4>
                  <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '12.5px', fontWeight: 300 }}>Premium agency services serving Kochi and Ernakulam districts.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PHASE 7 — INTRODUCTION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Core Overview</span>
            <h2 style={{ fontFamily: "var(--font-heading)", color: 'var(--text-primary)', marginBottom: '20px' }}>
              Looking for the Best Digital Marketing Company in Kochi?
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px', lineHeight: '1.8', color: 'var(--text-secondary)', fontWeight: 300 }}>
            <p>
              Finding an online marketing partner requires looking beyond simple templates and generic strategies. **Urban Owls Digital** serves as a specialized, premium digital marketing agency in Kochi, helping local enterprises, startups, and luxury brands capture high-intent search traffic and turn visitors into enquiries.
            </p>
            <p>
              We combine advanced organic strategies like **Search Engine Optimization (SEO)**, **Answer Engine Optimization (AEO)**, and **Generative Engine Optimization (GEO)** with geo-targeted performance ads and custom-coded React/Node frontends. This integrated approach ensures your business is discoverable whether a user is scrolling through Google search results, asking Siri a question, or consulting ChatGPT for a recommendation.
            </p>
            <p>
              In today's competitive commercial landscape across Kochi and Kerala, having a digital presence is no longer just about having a website. It is about building topical authority, securing technical code parameters that load instantly on mobile, and providing structured, snippet-ready information that search engines and AI recommendation systems can easily extract.
            </p>
          </div>
        </div>
      </section>

      {/* PHASE 8 — WHY URBAN OWLS DIGITAL */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Strategic Advantages</span>
            <h2>Why Choose Urban Owls Digital?</h2>
            <p>We build digital campaigns on transparent data parameters and performance-driven code, ensuring every marketing rupee yields business value.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div className="luxury-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><Search size={24} /></div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>Search-First Strategy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We design website structures, write copy, and build links based on rigorous commercial keyword research. This aligns your pages directly with high-volume search parameters.
              </p>
            </div>

            <div className="luxury-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><MapPin size={24} /></div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>SEO + Local SEO Integration</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We synchronize your core website search rankings with geofenced map listings optimization, ensuring maximum local footprint for searches targeting Kochi and Ernakulam.
              </p>
            </div>

            <div className="luxury-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><Cpu size={24} /></div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>AEO-Ready Architectures</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We structure data using Q&A formats and rich schema configurations so voice assistants (Siri, Alexa, Google Assistant) can fetch your website as the definitive direct answer.
              </p>
            </div>

            <div className="luxury-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><Sparkles size={24} /></div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>GEO / AI Engine Optimization</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We build brand entity citations across digital indexes to increase your website's visibility and recommendation likelihood in AI search engines.
              </p>
            </div>

            <div className="luxury-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><Code size={24} /></div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>Conversion-Focused Web</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We write clean, lightweight code (avoiding slow page builders) to deliver pages that load in milliseconds, retaining mobile visitors and driving higher conversions.
              </p>
            </div>

            <div className="luxury-card">
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><BarChart3 size={24} /></div>
              <h3 style={{ fontSize: '18px', marginBottom: '10px', color: 'var(--text-primary)' }}>Transparent Data & Reporting</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We configure Google Analytics and events tracking to record actual client submissions, reviews, and clicks, providing clear, jargon-free weekly briefings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PHASE 9 — DIGITAL MARKETING SERVICES */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Core Services</span>
            <h2>Digital Marketing Services in Kochi</h2>
            <p>We deploy custom-crafted technical search optimization and performance marketing campaigns that direct intent-based traffic directly to your CTAs.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            {/* Service 1: SEO */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={20} style={{ color: 'var(--accent-gold)' }} /> SEO
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We perform comprehensive on-page audits, structure logical crawl paths, resolve page speed bottlenecks, and build authoritative local links. This ensures your key services rank organically for competitive business searches in Kochi.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Sustainable Free Traffic</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 2: Local SEO */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building size={20} style={{ color: 'var(--accent-gold)' }} /> Local SEO
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We manage and optimize Google Business Profiles (GBP), syndicate accurate name-address-phone citations, and map localized keyword patterns to place your business in Google Map Packs.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Drive Nearby Foot Traffic</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 3: AEO */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={20} style={{ color: 'var(--accent-gold)' }} /> AEO
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                Answer Engine Optimization formats your content into concise question-answer pairs, tables, and bullet listings. This makes your brand highly crawlable for voice search queries on Siri, Alexa, and Google Assistant.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Voice & Featured Snippet Ranks</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 4: GEO */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={20} style={{ color: 'var(--accent-gold)' }} /> GEO
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                Generative Engine Optimization prepares your entity relationships, backlink context, and content architecture so that conversational AI interfaces cite your company as a primary solution.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Visibility in ChatGPT & Gemini</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 5: Google Ads / PPC */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={20} style={{ color: 'var(--accent-gold)' }} /> Google Ads / PPC
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We structure search, display, and Performance Max ad campaigns. By filtering negative search strings and optimizing bids daily, we secure high conversion metrics with minimal budget waste.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Immediate Lead Acquisitions</span>
                <Link to="/google-ads-agency-kochi" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 6: Social Media Marketing */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={20} style={{ color: 'var(--accent-gold)' }} /> Social Media Marketing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We design custom layouts, plan editorial calendars, and manage paid campaigns on Instagram, Facebook, and LinkedIn. This builds active community trust and targets geofenced audiences.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Active Brand Communities</span>
                <Link to="/social-media-marketing-kochi" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 7: Performance Marketing */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={20} style={{ color: 'var(--accent-gold)' }} /> Performance Marketing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We design direct-response paid ad funnels focused on cost-per-lead and acquisition margins. By using retargeting cookies and custom audience segments, we maximize campaign efficiency.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Scalable Client Base</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 8: Content Marketing */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={20} style={{ color: 'var(--accent-gold)' }} /> Content Marketing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We write authoritative blog entries, whitepapers, and guides that address real customer pain points. This establishes topical authority and secures natural backlinks.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Industry Authority Mappings</span>
                <Link to="/blog" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Visit Blog <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 9: Website Design & Development */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code size={20} style={{ color: 'var(--accent-gold)' }} /> Web Design & Development
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We engineer bespoke corporate sites and e-commerce stores using custom code (React/Node). This avoids slow plugins, secures database structures, and ensures mobile layouts.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Fast, Responsive UX</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

            {/* Service 10: CRO */}
            <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Database size={20} style={{ color: 'var(--accent-gold)' }} /> CRO
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, flexGrow: 1, fontWeight: 300 }}>
                We inspect user paths and analyze form fields to identify friction. This doubles the conversion yield of your current traffic without increasing ad spend.
              </p>
              <div style={{ borderTop: '1px solid rgba(8, 17, 37, 0.05)', paddingTop: '14px', marginTop: '14px' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Business Benefit: Maximize Traffic Value</span>
                <Link to="/services" style={{ fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Learn More <ArrowRight size={12} /></Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PHASE 10 — SEO + AEO + GEO */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'center' }} className="search-grid">
            
            <div>
              <span className="subtitle">Modern Frameworks</span>
              <h2 style={{ marginBottom: '24px' }}>SEO, AEO & GEO for Modern Search</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.75, fontWeight: 300, marginBottom: '20px' }}>
                Search visibility is no longer limited to blue links on a desktop screen. The evolution of search engines has split discovery pathways into traditional ranking slots, zero-click answer boxes, and generative AI answers.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.75, fontWeight: 300, marginBottom: '24px' }}>
                At **Urban Owls Digital**, we build integrated search strategies. By optimizing your site speed, formatting clear answer snippets, and establishing consistent brand entity tags, we prepare your business to capture visitors across all modern search landscapes.
              </p>

              <blockquote style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '18px', color: 'var(--text-secondary)', fontSize: '13.5px', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                **Important Disclaimer:** While we leverage technical optimizations and semantic structured data to align with modern platforms, there is no guaranteed formula to appear in ChatGPT, Gemini or Google AI Overviews. We focus on enhancing content quality and crawl signals to maximize index eligibility.
              </blockquote>

              <a href="#consultation-brief" className="btn-primary">
                Audit Your Site's Search Readiness
              </a>
            </div>

            {/* Comparison Grid card */}
            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '36px', boxShadow: 'var(--shadow-premium)' }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '19px', marginBottom: '24px', color: 'var(--text-primary)' }}>The Modern Visibility Matrix</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ borderBottom: '1px solid rgba(8,17,37,0.05)', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>SEO (Traditional Search)</h4>
                    <span style={{ fontSize: '11px', background: 'rgba(8,17,37,0.05)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Search Visibility</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                    Focuses on meta configurations, HTML semantic structures, codebase speed optimizations, and backlinks to rank links on standard search engines.
                  </p>
                </div>

                <div style={{ borderBottom: '1px solid rgba(8,17,37,0.05)', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>AEO (Answer Engine Optimization)</h4>
                    <span style={{ fontSize: '11px', background: 'rgba(8,17,37,0.05)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>Answer Visibility</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                    Structures copy into direct, Q&A question patterns, lists, and tables to populate voice search responses and Google Featured Snippets.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>GEO (Generative Engine Optimization)</h4>
                    <span style={{ fontSize: '11px', background: 'rgba(8,17,37,0.05)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>AI / Generative Visibility</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                    Optimizes entity tags, brand citations, and semantic authority contexts to ensure AI search recommendation tools cite your brand.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PHASE 11 — KOCHI LOCAL SEO */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '50px', alignItems: 'center' }} className="local-grid">
            
            {/* Left Location List box */}
            <div style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><MapPin size={28} /></div>
              <h3 style={{ fontSize: '21px', color: 'var(--text-primary)', margin: '0 0 16px 0', fontFamily: 'var(--font-heading)' }}>Ernakulam & Kochi Coverage</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.7, fontWeight: 300, marginBottom: '24px' }}>
                We structure maps metadata, business listings, and page layouts to secure search visibility for brands across all primary commercial zones in Kochi.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Kakkanad', 'Edappally', 'Kaloor', 'Palarivattom', 'Vyttila', 'Kadavanthra', 'MG Road', 'Fort Kochi', 'Panampilly Nagar', 'Tripunithura', 'Thrikkakara', 'Aluva'].map(loc => (
                  <span key={loc} style={{ fontSize: '12px', background: '#ffffff', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '30px', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Explanatory Copy */}
            <div>
              <span className="subtitle">Local Relevance</span>
              <h2>Digital Marketing Company Serving Kochi Businesses</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                Kochi has developed into a commercial center and tech startup landscape in Kerala. Standard generic search strategies often fall short here because they overlook localized consumer behavior and regional competition.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                At **Urban Owls Digital**, we build local search presence. We optimize local maps citations, compile authentic reviews, structure geographic metadata nodes, and run geofenced ad campaigns targeting commercial zones across Kakkanad, Edappally, Vyttila, Palarivattom, and Kadavanthra. This ensures your services appear when nearby buyers search.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Google Map Pack ranking configuration for high-intent nearby query terms</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Geographic schema markup structures aligning entity locations with Google maps</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Localized search ads and Instagram/Facebook campaigns built on regional intent</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PHASE 12 — INDUSTRY RELEVANCE */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Sectors We Serve</span>
            <h2>Digital Marketing for Businesses in Kochi</h2>
            <p>Digital strategies differ depending on how your clients purchase. We custom-configure lead funnels to match customer pathways across various sectors.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Restaurants & Cafes</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Local listing trust mapping, menu schemas, review accumulation systems, and Instagram geotargeting to capture weekend diners and drive bookings.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Hotels & Resorts</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                High-quality property imagery, local travel query mapping, and PPC ad bid adjustments to capture direct reservations and lower booking commissions.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Travel & Tourism</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Informational blog content mapping, itinerary schemas, and Google search ad configurations targeting vacation query strings to secure bookings.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Healthcare & Clinics</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Appointment booking structures, medical information schemas, and local GBP review drives to position patient trust and drive consultations.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Real Estate & Builders</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Interactive lead captures, project detail micro-sites, and geofenced Facebook/Instagram ads to secure site visits and property inquiries.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Education & Centers</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Course information schemas, lead generation forms, and search ads matching professional training terms to scale enrollments.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>E-Commerce Brands</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Custom React storefronts, product schemas, merchant listings, and shopping ad integrations designed to maximize checkout conversions.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Home & Local Services</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Mobile-first call CTAs, maps rankings, and geofenced local ads matching repair/maintenance keywords to drive instant calls and bookings.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Professional Services</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Trust indicator highlights, case study layouts, and LinkedIn lead generation ad forms targeting corporate clients.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Startups & Tech</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Product value copy, SEO entity authority structures, and media releases to build visibility and attract early adopters.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>B2B Enterprise</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                In-depth educational content, detailed search terms matching procurement queries, and retargeting ads to qualify and convert business accounts.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px' }}>Local Retail Stores</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                GBP optimizations, localized citation listings, and geofenced store promotion ads on Instagram to drive foot traffic.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PHASE 26 — OUR DIGITAL MARKETING PROCESS */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Workflow Details</span>
            <h2>Our Digital Marketing Process</h2>
            <p>We follow a rigorous campaign framework designed to secure stable search rankings and drive qualified client conversions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            <div className="luxury-card" style={{ padding: '30px' }}>
              <span style={{ fontSize: '32px', fontFamily: "var(--font-heading)", fontWeight: 700, color: 'rgba(197, 163, 92, 0.15)', display: 'block', marginBottom: '12px' }}>01</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Business & Competitor Analysis</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                We analyze your site speed parameters, locate crawl bugs, and evaluate competitors ranking for your keywords in Kochi.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '30px' }}>
              <span style={{ fontSize: '32px', fontFamily: "var(--font-heading)", fontWeight: 700, color: 'rgba(197, 163, 92, 0.15)', display: 'block', marginBottom: '12px' }}>02</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Keyword & Search Intent Research</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                We target high-intent commercial keywords. This maps campaign copy to queries used by buyers close to making a purchase.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '30px' }}>
              <span style={{ fontSize: '32px', fontFamily: "var(--font-heading)", fontWeight: 700, color: 'rgba(197, 163, 92, 0.15)', display: 'block', marginBottom: '12px' }}>03</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>SEO / AEO / GEO Strategy</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                We structure copy into direct Q&A parameters, list matrices, and integrate schema nodes to align with crawlers and AI recommendation systems.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '30px' }}>
              <span style={{ fontSize: '32px', fontFamily: "var(--font-heading)", fontWeight: 700, color: 'rgba(197, 163, 92, 0.15)', display: 'block', marginBottom: '12px' }}>04</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Content & Campaign Execution</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                We optimize code speed metrics, compile geofenced search ads, publish targeted copy, and refine local maps coordinates.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '30px' }}>
              <span style={{ fontSize: '32px', fontFamily: "var(--font-heading)", fontWeight: 700, color: 'rgba(197, 163, 92, 0.15)', display: 'block', marginBottom: '12px' }}>05</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Conversion Optimization</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                We deploy click-to-call options and direct WhatsApp form handlers. This converts search traffic into sales briefs.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '30px' }}>
              <span style={{ fontSize: '32px', fontFamily: "var(--font-heading)", fontWeight: 700, color: 'rgba(197, 163, 92, 0.15)', display: 'block', marginBottom: '12px' }}>06</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Tracking & Improvement</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                We monitor Google Search Console impressions and event logs, adjusting bids and copy to maximize ROI.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PHASE 26 — HOW WE MEASURE DIGITAL MARKETING GROWTH */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }} className="metrics-grid">
            
            <div>
              <span className="subtitle">Analytics Framework</span>
              <h2>How We Measure Digital Marketing Growth</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                We avoid vanity metrics like raw impressions or unqualified clicks that do not generate commercial business value.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Instead, our team maps tracking parameters to record direct inquiries. This confirms that your media spend generates tangible business value.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)', marginTop: '3px' }} />
                  <div>
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '14.5px', color: 'var(--text-primary)' }}>Sales Enquiries</h5>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300 }}>Recorded WhatsApp briefs, direct calls, and consultation form fills.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)', marginTop: '3px' }} />
                  <div>
                    <h5 style={{ margin: '0 0 4px 0', fontSize: '14.5px', color: 'var(--text-primary)' }}>Search Visibility</h5>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 300 }}>Organic keyword position tracking, maps placements, and AI citations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="metrics-cards">
              
              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
                <div style={{ color: 'var(--accent-navy)', marginBottom: '12px' }}><TrendingUp size={24} /></div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '26px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>ROI Focus</h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cost Per Enquiry</span>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
                <div style={{ color: 'var(--accent-navy)', marginBottom: '12px' }}><Search size={24} /></div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '26px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>Keywords</h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Top SERP Placements</span>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
                <div style={{ color: 'var(--accent-navy)', marginBottom: '12px' }}><MapPin size={24} /></div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '26px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>Local SEO</h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Map Pack Leads</span>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: 'var(--shadow-premium)' }}>
                <div style={{ color: 'var(--accent-navy)', marginBottom: '12px' }}><Cpu size={24} /></div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '26px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>AEO/GEO</h4>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Citation Signals</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PHASE 26 — FREQUENTLY ASKED QUESTIONS */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div className="section-header">
            <span className="subtitle">Snippet Resource</span>
            <h2>Frequently Asked Questions</h2>
            <p>Detailed explanations regarding SEO parameters, campaign setup details, pricing metrics, and next-generation search configurations in Kochi.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                style={{ 
                  background: 'var(--bg-cream)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                className="faq-box"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontFamily: "var(--font-heading)",
                    fontSize: '15.5px',
                    fontWeight: 600,
                    outline: 'none',
                    border: 'none',
                    background: 'none'
                  }}
                >
                  <span style={{ paddingRight: '20px' }}>{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={18} style={{ flexShrink: 0 }} /> : <ChevronDown size={18} style={{ flexShrink: 0 }} />}
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 28px 24px 28px', color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.7, fontWeight: 300, borderTop: '1px solid rgba(8, 17, 37, 0.04)' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PHASE 26 — GROW YOUR BUSINESS WITH URBAN OWLS DIGITAL */}
      <section id="consultation-brief" style={{ background: 'var(--bg-cream)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Get Started</span>
            <h2>Grow Your Business With Urban Owls Digital</h2>
            <p>Outline your digital marketing objectives. Our strategy leads will analyze your presence and follow up with a technical audit briefing.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px' }} className="contact-grid">
            
            {/* Lead Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-premium)'
              }}
            >
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '21px', marginBottom: '24px', color: 'var(--text-primary)' }}>Project Growth Brief</h3>

              {status.success && (
                <div style={{ background: 'rgba(0, 128, 0, 0.04)', border: '1px solid green', padding: '16px', borderRadius: '12px', color: 'green', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', fontSize: '14px' }}>
                  <CheckCircle size={20} />
                  <span>Success! Redirecting to WhatsApp to send project details...</span>
                </div>
              )}

              {status.error && (
                <div style={{ background: 'rgba(255, 0, 0, 0.04)', border: '1px solid #FF3B30', padding: '16px', borderRadius: '12px', color: '#FF3B30', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', fontSize: '14px' }}>
                  <AlertTriangle size={20} />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter name"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="email@example.com"
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98470 40009"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Name"
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Service Focus *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="luxury-input"
                    style={{
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23081125' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 20px center',
                      backgroundSize: '16px',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    {servicesList.map(serv => (
                      <option key={serv} value={serv}>{serv}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Brief Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Describe your digital objectives, current roadblocks, and business growth targets..."
                    className="luxury-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {status.loading ? 'Preparing Send...' : 'Send Brief via WhatsApp'} <Send size={14} />
                </button>
              </form>
            </motion.div>

            {/* Direct Connect channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                <a href="https://wa.me/919847040009" target="_blank" rel="noreferrer" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'all 0.3s ease', boxShadow: 'var(--shadow-premium)' }} className="contact-card">
                  <MessageSquare size={20} style={{ color: 'var(--accent-gold)' }} />
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>WhatsApp</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>+91 98470 40009</span>
                </a>

                <a href="tel:+919847040009" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'all 0.3s ease', boxShadow: 'var(--shadow-premium)' }} className="contact-card">
                  <Phone size={20} style={{ color: 'var(--accent-gold)' }} />
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>Call Direct</h4>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>+91 98470 40009</span>
                </a>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: 'var(--shadow-premium)' }}>
                <Mail size={20} style={{ color: 'var(--accent-gold)' }} />
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>Email Us</h4>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>hello@urbanowls.co</span>
              </div>

              <div style={{ height: '240px', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', position: 'relative' }}>
                <iframe
                  title="Kochi Office Location Map"
                  src="https://maps.google.com/maps?q=Kochi,Kerala,682306&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 0,
                    filter: 'grayscale(1) contrast(1.1) brightness(1.02) sepia(0.1)'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Style blocks */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid, .search-grid, .local-grid, .metrics-grid, .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-image-box {
            height: 320px !important;
          }
        }
        @media (max-width: 576px) {
          .hero-grid, .search-grid, .local-grid, .metrics-grid, .contact-grid {
            gap: 28px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
        .contact-card:hover {
          border-color: var(--accent-gold) !important;
          transform: translateY(-3px);
        }
        .faq-box:hover {
          border-color: rgba(197,163,92,0.4) !important;
        }
      `}</style>

    </div>
  );
};

// Complete list of answers for FAQs & FAQ Schema nodes
const faqs = [
  {
    q: "What is the best digital marketing company in Kochi?",
    a: "Urban Owls Digital is widely recognized as one of the best digital marketing companies in Kochi for businesses seeking performance-focused web designs and search-engine configurations. We reject simple template setups and write bespoke React/Node code to maximize conversion metrics."
  },
  {
    q: "How do I choose the best digital marketing agency in Kochi?",
    a: "To choose the best digital marketing agency in Kochi, check if the agency builds custom designs rather than templates, verify their tracking setup (Google Analytics event tracking), audit their organic keywords and speed parameters, inspect their verified client records, and avoid teams that guarantee #1 rankings or make fake claims."
  },
  {
    q: "What services does a digital marketing company in Kochi provide?",
    a: "A professional digital marketing company in Kochi provides Search Engine Optimization (SEO), Local SEO maps configurations, Google Ads (PPC) setups, Social Media Marketing, Performance media buying, Content creation, conversion auditing (CRO), and custom web design and application engineering."
  },
  {
    q: "How much does digital marketing cost in Kochi?",
    a: "The cost of digital marketing in Kochi varies based on your target audience and industry competition. Local SEO setups typically range from ₹15,000 to ₹35,000 per month. Custom enterprise campaigns that cover multi-channel ads management, advanced AEO schemas, and page optimization are budgeted based on specific requirements."
  },
  {
    q: "How can digital marketing help a business in Kochi?",
    a: "Digital marketing puts your brand directly in front of buyers at the exact moment they search for your products. Geotargeted search ads, Maps Pack optimizations, and conversion triggers like click-to-calls direct local traffic into your sales pipeline, helping scale business revenue."
  },
  {
    q: "What is the difference between SEO, AEO and GEO?",
    a: "Traditional SEO (Search Engine Optimization) optimizes website copy for standard lists of links on search engine results. AEO (Answer Engine Optimization) structures facts in Q&A form for voice search and snippets. GEO (Generative Engine Optimization) aligns content entities so AI search systems like ChatGPT cite your brand."
  },
  {
    q: "Does local SEO help businesses in Kochi?",
    a: "Yes. By optimizing Google Business Profiles, structuring local schemas, and listing business details in citation directories, local SEO places your business in the Google Maps Pack for searches targeting Kochi and Ernakulam, driving store walk-ins and phone calls."
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a medium-to-long-term digital strategy. While code speed optimizations and local citation cleanups can yield positive Google Maps results in 30 to 45 days, competitive commercial keywords typically require 3 to 6 months of technical optimization to rank."
  },
  {
    q: "Can a digital marketing agency manage Google Ads?",
    a: "Yes. A professional digital marketing agency like Urban Owls Digital configures and optimizes Google Ads campaigns. We map search terms, refine ad copies, exclude negative search queries, and track conversion events weekly to improve return on ad spend (ROAS)."
  },
  {
    q: "Can digital marketing help a small business get more leads?",
    a: "Yes. Digital marketing helps small businesses build cost-effective lead paths by focusing geofenced budgets on local maps search terms, Google Search ads, and conversion-optimized landing pages. This captures high-intent prospects without excessive ad spend."
  }
];

export default BestDigitalMarketingKochi;
