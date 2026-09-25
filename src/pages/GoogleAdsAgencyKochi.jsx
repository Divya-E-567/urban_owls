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
  MapPin, 
  Code, 
  Cpu, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  AlertTriangle, 
  CheckCircle, 
  Database, 
  Eye, 
  CheckSquare
} from 'lucide-react';

const GoogleAdsAgencyKochi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: 'Under ₹25,000 / month',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const budgetList = [
    'Under ₹25,000 / month',
    '₹25,000 - ₹75,000 / month',
    '₹75,000 - ₹2,000,000 / month',
    'Over ₹2,000,000 / month'
  ];

  useEffect(() => {
    // 1. Technical SEO Metadata Injection
    document.title = "Google Ads Agency in Kochi | PPC Management | Urban Owls Digital";
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.urbanowls.co/google-ads-agency-kochi";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for a Google Ads agency in Kochi? Urban Owls Digital manages PPC campaigns focused on qualified traffic, enquiries, conversions and measurable business growth.";

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow";

    const updateMetaTag = (property, content, attr = 'property') => {
      let tag = document.querySelector(`meta[${attr}="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('og:title', 'Google Ads Agency in Kochi | PPC Management | Urban Owls Digital');
    updateMetaTag('og:description', 'Looking for a Google Ads agency in Kochi? Urban Owls Digital manages PPC campaigns focused on qualified traffic, enquiries, conversions and measurable business growth.');
    updateMetaTag('og:url', 'https://www.urbanowls.co/google-ads-agency-kochi');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:image', 'https://www.urbanowls.co/logo.jpg');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', 'Google Ads Agency in Kochi | PPC Management | Urban Owls Digital', 'name');
    updateMetaTag('twitter:description', 'Looking for a Google Ads agency in Kochi? Urban Owls Digital manages PPC campaigns focused on qualified traffic, enquiries, conversions and measurable business growth.', 'name');
    updateMetaTag('twitter:image', 'https://www.urbanowls.co/logo.jpg', 'name');

    // 2. Structured JSON-LD Schemas Setup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'ppc-kochi-schema-data';

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.urbanowls.co/google-ads-agency-kochi#webpage",
          "url": "https://www.urbanowls.co/google-ads-agency-kochi",
          "name": "Google Ads Agency in Kochi | PPC Management | Urban Owls Digital",
          "description": "Looking for a Google Ads agency in Kochi? Urban Owls Digital manages PPC campaigns focused on qualified traffic, enquiries, conversions and measurable business growth.",
          "breadcrumb": {
            "@id": "https://www.urbanowls.co/google-ads-agency-kochi#breadcrumb"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.urbanowls.co/google-ads-agency-kochi#breadcrumb",
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
              "name": "Services",
              "item": "https://www.urbanowls.co/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Google Ads Agency Kochi",
              "item": "https://www.urbanowls.co/google-ads-agency-kochi"
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
          }
        },
        {
          "@type": "Service",
          "@id": "https://www.urbanowls.co/google-ads-agency-kochi#service",
          "serviceType": "Google Ads & PPC Campaign Management",
          "provider": {
            "@id": "https://www.urbanowls.co/#organization"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Kochi, Kerala, India"
          },
          "description": "Professional setup, tracking, negative keyword filtering, and weekly bid optimizations for Google Search Ads, Display Ads, and Performance Max campaigns."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.urbanowls.co/google-ads-agency-kochi#faq",
          "mainEntity": faqs.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a.replace(/<\/?[^>]+(>|$)/g, "") // strip HTML for schema text
            }
          }))
        }
      ]
    };

    schemaScript.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    return () => {
      const oldSchema = document.getElementById('ppc-kochi-schema-data');
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
      setStatus({ loading: false, success: false, error: 'Please enter Name, Email, and Brief project info.' });
      return;
    }

    const whatsappNumber = '919847040009';
    const whatsappText = `Hello Urban Owls Digital,%0A%0AI'm reaching out from the Google Ads Kochi Page.%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone || 'N/A')}%0ACompany: ${encodeURIComponent(formData.company || 'N/A')}%0AEstimated Ad Budget: ${encodeURIComponent(formData.budget)}%0AProject Brief: ${encodeURIComponent(formData.message)}`;
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
      budget: 'Under ₹25,000 / month',
      message: ''
    });
  };

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      
      {/* 7. HERO SECTION */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)', position: 'relative' }} className="section-padding">
        <div style={{ position: 'absolute', top: 0, right: 0, width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(197, 163, 92, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }} className="hero-grid">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle">High-Intent PPC Traffic</span>
              <h1 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 700 }}>
                Google Ads Agency in Kochi
              </h1>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '24px', fontSize: '20px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                Reach customers who are already searching for your products and services with strategically managed Google Ads campaigns.
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, fontWeight: 300, marginBottom: '32px' }}>
                Urban Owls Digital helps businesses in Kochi build, manage and optimize Google Ads campaigns with a focus on relevant search intent, qualified traffic, conversions and measurable performance.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#consultation-brief" className="btn-primary">
                  Get a Free PPC Consultation <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/919847040009" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px', borderTop: '1px solid rgba(8,17,37,0.06)', paddingTop: '24px' }}>
                {['Search Ads', 'Performance Max', 'Local Map Ads', 'Remarketing'].map(tag => (
                  <span key={tag} style={{ fontSize: '12px', background: 'rgba(8,17,37,0.04)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '30px', fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 8. HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid var(--border-color)',
                height: '400px',
                position: 'relative'
              }}
              className="hero-image-box"
            >
              <img 
                src="/images/hero_mockup.jpeg" 
                alt="Google Ads marketing analytics display showing pay-per-click conversion metrics dashboard" 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 9. DIRECT ANSWER SECTION — AEO */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Core Overview</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              What Does a Google Ads Agency in Kochi Do?
            </h2>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-primary)', fontWeight: 400, borderLeft: '3px solid var(--accent-gold)', paddingLeft: '18px' }}>
              A Google Ads agency helps businesses create, manage and optimize paid search campaigns so their ads can reach relevant customers when they search for products or services.
            </p>
            <p>
              Rather than relying solely on organic visibility, a dedicated agency maps advertising budgets to specific user keywords, designs high-converting ad copy, configures bid optimizations, and sets up transaction tracking. This ensures you acquire prospects at the lowest possible cost-per-lead.
            </p>
            <p>
              Our process covers:
            </p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Keyword Targeting:</strong> Filtering queries to match commercial intent, separating active buyers from casual researchers.</li>
              <li><strong>Campaign Setup:</strong> Creating ad group architectures that improve Quality Scores and lower cost-per-click.</li>
              <li><strong>Ad Creation:</strong> Writing persuasive ad copy variations to improve click-through-rates (CTR).</li>
              <li><strong>Landing Pages:</strong> Auditing redirect pages to ensure the ad copy matches user expectations when they land on the website.</li>
              <li><strong>Conversion Tracking:</strong> Integrating code handlers to measure form fills, call events, and transactions.</li>
              <li><strong>Reporting:</strong> Monitoring weekly metrics to allocate your budget to the highest-performing terms.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 10. WHY GOOGLE ADS? */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }} className="why-grid">
            
            <div>
              <span className="subtitle">PPC Benefits</span>
              <h2>Why Businesses in Kochi Use Google Ads</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.75, fontWeight: 300, marginBottom: '20px' }}>
                Paid search advertising allows brands to reach customers at the exact moment they search for a solution. Unlike other channels that push ads to passive users, Google Ads serves ads based on active search queries.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.75, fontWeight: 300, marginBottom: '24px' }}>
                This is particularly useful for service businesses, local businesses, and e-commerce brands looking to generate high-intent traffic, build visual displays, and track conversions.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Reach buyers search terms directly</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Control campaigns spend budgets daily</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Target specific geographic locations</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Measure conversion actions immediately</span>
                </li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '36px', boxShadow: 'var(--shadow-premium)' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Paid Search vs. Organic SEO</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, marginBottom: '16px' }}>
                It is important to understand that Google Ads and Search Engine Optimization (SEO) are complementary channels with different timelines and dynamics:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize: '14.5px', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>Google Ads (Immediate)</h4>
                  <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 300 }}>
                    Enables you to show ads at the top of search listings immediately upon campaign launch. You pay each time a user clicks your ad. Running paid ads does not directly improve organic website rankings.
                  </p>
                </div>
                
                <div style={{ padding: '16px', background: 'var(--bg-cream)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontSize: '14.5px', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>Organic SEO (Long-Term)</h4>
                  <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 300 }}>
                    Builds authority over months. When you rank organically, you do not pay for clicks, but establishing top rankings requires sustained technical auditing and content strategy.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. GOOGLE ADS SERVICES */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Capabilities</span>
            <h2>Google Ads Services in Kochi</h2>
            <p>Our PPC strategies are designed around your business goals, target locations, and search intent.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={18} style={{ color: 'var(--accent-gold)' }} /> Google Search Ads
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Deliver text advertisements above organic search listings. We target high-intent transactional search terms to attract qualified buyers.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} style={{ color: 'var(--accent-gold)' }} /> Performance Max (PMax)
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Deploy campaigns across Search, Display, YouTube, Discover, and Gmail using Google's machine learning. This optimizes bid placements automatically.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Eye size={18} style={{ color: 'var(--accent-gold)' }} /> Display Advertising
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Build visual awareness. We display image ads on sites within the Google Display Network to reach users in target locations.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={18} style={{ color: 'var(--accent-gold)' }} /> Remarketing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Re-engage past visitors. We show ads to users who previously landed on your site, keeping your brand visible throughout their consideration cycle.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={18} style={{ color: 'var(--accent-gold)' }} /> YouTube Advertising
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Target users with video ads based on search queries, interests, and demographics, building visual trust.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--accent-gold)' }} /> Local Campaign Strategy
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Target local searches. We link Google Business Profiles to show ads in Google Maps and drive local map actions and calls.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Database size={18} style={{ color: 'var(--accent-gold)' }} /> Conversion Tracking
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Set up call events, WhatsApp clicks, and form submissions to measure your campaign's performance.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code size={18} style={{ color: 'var(--accent-gold)' }} /> Landing Page Optimization
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We structure page elements to match ad keywords, improving landing page relevance and conversion metrics.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={18} style={{ color: 'var(--accent-gold)' }} /> Keyword & Negative Audits
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We target commercial intent and compile lists of negative keywords to avoid paying for irrelevant clicks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 12. GOOGLE SEARCH ADS SECTION */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">High Intent Examples</span>
            <h2>Google Search Ads for High-Intent Customers</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              When a prospect searches for a specific service, their search query indicates their immediate intent. If they search for:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', margin: '10px 0' }}>
              <div style={{ padding: '16px', background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center', fontStyle: 'italic', fontWeight: 600, color: 'var(--text-primary)' }}>
                "best pest control company in Kochi"
              </div>
              <div style={{ padding: '16px', background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center', fontStyle: 'italic', fontWeight: 600, color: 'var(--text-primary)' }}>
                "cab service Kochi"
              </div>
              <div style={{ padding: '16px', background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', textAlign: 'center', fontStyle: 'italic', fontWeight: 600, color: 'var(--text-primary)' }}>
                "website development company Kochi"
              </div>
            </div>
            <p>
              They are not looking for general information. They are actively seeking a provider. Strategically managed Google Ads ensure your business appears at the top of search results for these queries, capturing ready-to-buy traffic.
            </p>
            <p>
              At **Urban Owls Digital**, we design search campaigns that map these intents. We group keywords by intent, write specific ad copies, and send traffic to relevant landing pages. This structure improves Quality Scores, lowers cost-per-click, and drives qualified conversions.
            </p>
          </div>

        </div>
      </section>

      {/* 13. KOCHI LOCAL PPC SECTION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '50px', alignItems: 'center' }} className="local-ppc-grid">
            
            <div style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><MapPin size={28} /></div>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Targeted Location Strategy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, marginBottom: '20px' }}>
                We structure location parameters so you only display ads to users in your target regions, preventing waste.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Kakkanad', 'Edappally', 'Kaloor', 'Palarivattom', 'Vyttila', 'Kadavanthra', 'Fort Kochi', 'Panampilly Nagar', 'Thrikkakara', 'Aluva', 'Tripunithura'].map(loc => (
                  <span key={loc} style={{ fontSize: '11px', background: '#ffffff', border: '1px solid var(--border-color)', padding: '5px 10px', borderRadius: '20px', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="subtitle">Geofencing Ads</span>
              <h2>Google Ads Management for Kochi Businesses</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                If you run a local business in Kochi, showing ads to users in other regions is a waste of budget. Google Ads lets you target specific coordinates, cities, or postal codes.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                We configure location targeting for Kochi and Ernakulam businesses. Whether you want to target IT professionals in Kakkanad, shoppers in Edappally, or clinics in Palarivattom and Vyttila, we align campaign location parameters to show ads only where your services can be delivered.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 14. CAMPAIGN PROCESS */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Workflow Method</span>
            <h2>Our Google Ads Management Process</h2>
            <p>We set up, run, and optimize search campaigns according to structured, data-driven steps.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }} className="process-grid">
            
            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>01</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Business Research</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We analyze your business model, services, competitors, target locations, and define conversion objectives.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>02</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Keyword & Intent Mapping</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We separate transactional queries from informational searches and compile lists of negative keywords.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>03</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Campaign Structuring</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We build campaigns, group relevant ad variations, set geographic targets, and define daily budgets.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>04</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Ad & Landing Page Strategy</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We align the search query, ad copy, and landing page content to improve conversions and Quality Scores.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>05</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Conversion Tracking</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We set up tracking for calls, forms, and WhatsApp clicks using Google Tag Manager to trace leads.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>06</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Daily/Weekly Optimization</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We audit search terms, adjust bids, refine landing page layouts, and manage budgets to lower cost-per-lead.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 15. PPC FUNNEL */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Conversion Path</span>
            <h2>The Paid Search Funnel</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }} className="funnel-container">
            {[
              { step: '01', title: 'Search Intent', desc: 'Prospect searches for a specific commercial service.' },
              { step: '02', title: 'Google Ad', desc: 'A relevant, high-CTR text ad displays at the top of Google.' },
              { step: '03', title: 'Relevant Landing Page', desc: 'User redirects to a fast page matching their query.' },
              { step: '04', title: 'Conversion', desc: 'Prospect clicks call, sends a WhatsApp brief, or fills a form.' },
              { step: '05', title: 'Measurement & Optimization', desc: 'We analyze the conversion data to adjust keyword bids.' }
            ].map((item, idx) => (
              <div 
                key={item.step} 
                style={{ 
                  width: `${100 - (idx * 8)}%`, 
                  background: 'var(--bg-cream)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '12px', 
                  padding: '20px 24px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.01)'
                }}
                className="funnel-stage"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '16px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--accent-gold)' }}>{item.step}</span>
                  <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', margin: 0 }}>{item.title}</h4>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '350px', textAlign: 'right' }} className="funnel-desc">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 16. Google Ads + SEO Section */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '50px', alignItems: 'center' }} className="seo-ppc-combo">
            
            <div>
              <span className="subtitle">Search Strategy</span>
              <h2>Google Ads and SEO: Should You Use Both?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                Paid search campaigns and organic SEO work on different timelines. While Google Ads offers immediate visibility, SEO establishes long-term organic authority. A strong search strategy uses both to cover different commercial intents.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Using Google Ads does not directly affect your website's organic search rankings. However, running paid campaigns helps you test keyword conversions. We use search data to optimize copy layouts and focus organic SEO efforts on terms that generate actual conversions.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/best-digital-marketing-kochi" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '13.5px' }}>
                  Explore Kochi SEO
                </Link>
                <Link to="/social-media-marketing-kochi" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '13.5px' }}>
                  Explore Kochi Social Media
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-premium)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>Google Ads (Paid search)</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12.5px', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                  Immediate visibility. Useful for launching new products, testing offers, and generating leads while organic SEO builds authority.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-premium)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>Organic SEO (Unpaid clicks)</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12.5px', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                  Takes months to rank but builds long-term authority. Delivers clicks without a direct cost-per-click media fee.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 17. GOOGLE ADS + AEO */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">AEO Support</span>
            <h2>How AEO Supports Paid Search</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              **Answer Engine Optimization (AEO)** involves structuring your website copy so that search engines can easily extract direct answers to specific user questions. While AEO does not directly affect your Google Ads campaign settings, having clearly structured content helps improve the landing page experience.
            </p>
            <p>
              When a user clicks your search ad and redirects to your landing page, they want to find answers immediately. If the page is structured with clear question-answer blocks, tables, and bullet points, the visitor can locate the information they need without friction, which helps improve conversion metrics.
            </p>
          </div>

        </div>
      </section>

      {/* 18. GOOGLE ADS + GEO */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">AI & Ads</span>
            <h2>Google Ads and GEO: Building a Stronger Search Presence</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              **Generative Engine Optimization (GEO)** focuses on making your brand entity and content clear for AI-powered and generative search interfaces, such as Google AI Overviews and ChatGPT Search. 
            </p>
            <p>
              Paying for Google Ads does not influence ChatGPT, Gemini, or Perplexity recommendations, nor does it guarantee citations in AI search boxes. A comprehensive digital strategy uses paid campaigns to capture active search terms, while using GEO practices to make your entity details clear for AI retrieval models.
            </p>
          </div>

        </div>
      </section>

      {/* 20. TARGET INDUSTRIES */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Sectors We Serve</span>
            <h2>Who Can Benefit From Google Ads?</h2>
            <p>Paid ad strategies depend on your target audience, industry competition, and conversion goals.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-cream)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Clinics & Healthcare</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Targeting local searches like "dentist near me" or "dermatologist Kakkanad" with call-only ads to drive immediate patient bookings.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-cream)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Hotels & Resorts</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Targeting travel search queries to secure direct reservations, lowering OTA commission fees.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-cream)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>E-Commerce Retailers</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Using Google Shopping and Performance Max campaigns to show product prices and drive transaction conversions.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-cream)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Real Estate & Builders</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Targeting property searches with landing pages to capture site visits and qualified project leads.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-cream)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Local Services</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Targeting emergency searches like "pest control Kochi" or "appliance repair Edappally" with mobile-optimized call CTAs.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: 'var(--bg-cream)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>B2B & Tech Startups</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Targeting commercial software and procurement queries to capture corporate accounts and consulting enquiries.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 21. LANDING PAGE OPTIMIZATION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Quality Scores</span>
            <h2>Your Ad Is Only the Beginning</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Many PPC campaigns fail because they redirect all ad traffic to the homepage. A homepage contains general business information, which may not match the specific intent of a search ad.
            </p>
            <p>
              For example, if a user clicks an ad for "custom React web development," they should land on a page focused specifically on React web engineering, not a general listing of your services.
            </p>
            <p>
              At **Urban Owls Digital**, we design dedicated landing pages. We align the ad copy with the page elements to improve conversions and Quality Scores, which lowers your cost-per-click.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <Link to="/services" style={{ fontSize: '14.5px', fontWeight: 600, textDecoration: 'underline' }}>
                View our Web Engineering Capabilities
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 22. METRICS SECTION */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Core Metrics</span>
            <h2>What We Measure</h2>
            <p>We interpret Google Ads campaign data to align with your business objectives.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>CTR</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                Click-Through Rate measures the percentage of users who clicked your ad after seeing it.
              </p>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>CPC</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                Cost-Per-Click is the actual amount you pay Google for each user click.
              </p>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>Conversions</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                The number of users who completed a target action, such as a call or form submission.
              </p>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>CPA</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                Cost-Per-Acquisition measures the media spend required to generate a single conversion.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 23. TRUST SECTION & 24. CASE STUDIES EVALUATION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'center' }} className="trust-ppc-grid">
            
            <div>
              <span className="subtitle">Agency Standards</span>
              <h2>Why Work With Urban Owls Digital?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                We manage campaigns with a focus on data and conversion tracking, avoiding vanity metrics like raw impressions.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Our team adjusts bids, excludes irrelevant queries, and tests landing page layouts weekly to improve campaign yield.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Strategy-first campaign setup</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Weekly search query audits</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Landing page conversion testing</span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>How We Evaluate Campaign Success</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, marginBottom: '20px' }}>
                We evaluate campaign performance by tracking active conversion indicators:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>Lead submissions via form redirects</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>WhatsApp click actions and enquiry details</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>Mobile click-to-call direct dials</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>Cost-per-conversion fluctuations</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 25. AEO FAQ SECTION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div className="section-header">
            <span className="subtitle">FAQ Resource</span>
            <h2>Frequently Asked Questions</h2>
            <p>Direct answers covering PPC campaigns, setup timelines, and management costs for Kochi businesses.</p>
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

      {/* 43. CONVERSION CTA */}
      <section id="consultation-brief" style={{ background: 'var(--bg-cream)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Kickoff Strategy</span>
            <h2>Ready to Make Your Google Ads Work Harder?</h2>
            <p>Submit your details below to schedule a consultation with our PPC leads. We will review your current presence and discuss conversion opportunities.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px' }} className="contact-grid">
            
            {/* Form card */}
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
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '20px', marginBottom: '24px', color: 'var(--text-primary)' }}>PPC Audit Request</h3>

              {status.success && (
                <div style={{ background: 'rgba(0, 128, 0, 0.04)', border: '1px solid green', padding: '16px', borderRadius: '12px', color: 'green', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', fontSize: '14px' }}>
                  <CheckCircle size={20} />
                  <span>Success! Redirecting to WhatsApp to send campaign details...</span>
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
                      placeholder="Brand Name"
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Estimated Monthly Spend *</label>
                  <select
                    name="budget"
                    value={formData.budget}
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
                    {budgetList.map(bg => (
                      <option key={bg} value={bg}>{bg}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Current Ad Channels / Challenges *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Describe your current advertising roadblocks, target audience, and monthly growth goals..."
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
                  {status.loading ? 'Preparing Send...' : 'Send Details via WhatsApp'} <Send size={14} />
                </button>
              </form>
            </motion.div>

            {/* Direct Connect columns */}
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

              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-premium)' }}>
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

      <style>{`
        @media (max-width: 992px) {
          .hero-grid, .why-grid, .local-ppc-grid, .seo-ppc-combo, .trust-ppc-grid, .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-image-box {
            height: 320px !important;
          }
        }
        @media (max-width: 576px) {
          .hero-grid, .why-grid, .local-ppc-grid, .seo-ppc-combo, .trust-ppc-grid, .contact-grid {
            gap: 28px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          .funnel-stage {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .funnel-desc {
            text-align: left !important;
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

// AEO FAQ Questions list
const faqs = [
  {
    q: "What is a Google Ads agency?",
    a: "A Google Ads agency is a company that specializes in building, running, and optimizing pay-per-click advertising campaigns on Google's network. This covers keyword research, copywriting, target page setup, bid adjustments, and budget monitoring."
  },
  {
    q: "What does a Google Ads agency in Kochi do?",
    a: "A Google Ads agency in Kochi sets up and manages paid search campaigns targeting local search queries in Ernakulam. This includes: managing negative keyword exclusions, structuring ad groups, checking landing page relevance, configuring conversion tracking code, and auditing performance metrics weekly."
  },
  {
    q: "How much does Google Ads management cost in Kochi?",
    a: "Google Ads management costs in Kochi vary depending on the scope of your campaign and target budget. Agencies typically charge a monthly retainer starting from ₹15,000 to ₹35,000, or a percentage of the monthly ad spend (usually between 10% and 20%) for managing larger budgets."
  },
  {
    q: "How much should a business spend on Google Ads?",
    a: "A business should set their ad spend budget based on target conversion objectives and keyword cost-per-click metrics in their sector. For small businesses starting in Kochi, we typically suggest a starting budget of ₹15,000 to ₹30,000 per month to gather search queries data, scaling up as campaigns show positive ROI."
  },
  {
    q: "How long does it take for Google Ads campaigns to start generating data?",
    a: "Google Ads campaigns start generating click and impression data immediately after the ads are approved and the campaign launches. Gathering enough conversion data to optimize keyword bids and bids strategies typically requires 14 to 30 days."
  },
  {
    q: "Is Google Ads better than SEO?",
    a: "Google Ads and organic SEO are complementary channels designed for different objectives. Google Ads delivers immediate traffic and leads but requires a direct media fee per click. SEO takes months to establish top rankings but provides long-term search traffic without click fees."
  },
  {
    q: "Can Google Ads help a small business in Kochi?",
    a: "Yes. Google Ads helps small businesses compete by targeting specific service areas (like Kakkanad or Edappally) and buyer search queries. This directs geofenced, high-intent traffic directly to click-to-call buttons and WhatsApp triggers with minimal budget waste."
  },
  {
    q: "How do you measure Google Ads performance?",
    a: "We measure performance by tracking active conversion indicators, including: direct phone calls, WhatsApp enquiry clicks, and form submissions. We analyze metrics like cost-per-lead (CPL), conversion rate, click-through rate (CTR), and Quality Score."
  },
  {
    q: "What is PPC?",
    a: "PPC stands for Pay-Per-Click. It is an online advertising model where advertisers pay a fee each time a user clicks their ad, serving as a method of buying traffic rather than attempting to earn clicks organically."
  },
  {
    q: "What is the difference between Google Ads and SEO?",
    a: "The difference lies in how you acquire traffic: Google Ads involves buying placements above organic search results for immediate visibility, whereas SEO involves optimizing site code, speed, and content to earn placements organically over time."
  },
  {
    q: "Can Google Ads generate leads?",
    a: "Yes. Google Ads is highly effective for lead generation because it displays ads to prospects actively searching for your service. Sending these users to optimized landing pages with clear CTAs converts search intent into sales leads."
  },
  {
    q: "Does Urban Owls Digital manage Google Ads campaigns?",
    a: "Yes. Urban Owls Digital manages Google Ads and PPC campaigns for businesses in Kochi. We manage campaign setup, negative keyword audits, conversion events tracking, landing page auditing, and weekly performance optimization."
  }
];

export default GoogleAdsAgencyKochi;
