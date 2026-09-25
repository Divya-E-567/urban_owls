import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  ArrowRight, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  AlertTriangle, 
  CheckCircle, 
  CheckSquare,
  Layers,
  Sparkles,
  Users,
  Video,
  Palette
} from 'lucide-react';

const SocialMediaMarketingKochi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'Instagram & Facebook Branding',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const interestsList = [
    'Instagram & Facebook Branding',
    'Short-form Video & Reels Strategy',
    'Paid Social Lead Generation Ads',
    'Full-service Social Media Management',
    'Other Service'
  ];

  useEffect(() => {
    // 1. Technical SEO Meta Elements Injection
    document.title = "Social Media Marketing Agency in Kochi | Urban Owls Digital";
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.urbanowls.co/social-media-marketing-kochi";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Looking for a social media marketing agency in Kochi? Urban Owls Digital helps businesses build stronger brands through social media strategy, content, Instagram, Facebook and performance-focused campaigns.";

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

    updateMetaTag('og:title', 'Social Media Marketing Agency in Kochi | Urban Owls Digital');
    updateMetaTag('og:description', 'Looking for a social media marketing agency in Kochi? Urban Owls Digital helps businesses build stronger brands through social media strategy, content, Instagram, Facebook and performance-focused campaigns.');
    updateMetaTag('og:url', 'https://www.urbanowls.co/social-media-marketing-kochi');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:image', 'https://www.urbanowls.co/logo.jpg');

    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', 'Social Media Marketing Agency in Kochi | Urban Owls Digital', 'name');
    updateMetaTag('twitter:description', 'Looking for a social media marketing agency in Kochi? Urban Owls Digital helps businesses build stronger brands through social media strategy, content, Instagram, Facebook and performance-focused campaigns.', 'name');
    updateMetaTag('twitter:image', 'https://www.urbanowls.co/logo.jpg', 'name');

    // 2. Structured JSON-LD Schemas Setup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'social-kochi-schema-data';

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.urbanowls.co/social-media-marketing-kochi#webpage",
          "url": "https://www.urbanowls.co/social-media-marketing-kochi",
          "name": "Social Media Marketing Agency in Kochi | Urban Owls Digital",
          "description": "Looking for a social media marketing agency in Kochi? Urban Owls Digital helps businesses build stronger brands through social media strategy, content, Instagram, Facebook and performance-focused campaigns.",
          "breadcrumb": {
            "@id": "https://www.urbanowls.co/social-media-marketing-kochi#breadcrumb"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.urbanowls.co/social-media-marketing-kochi#breadcrumb",
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
              "name": "Social Media Marketing Kochi",
              "item": "https://www.urbanowls.co/social-media-marketing-kochi"
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
          "@id": "https://www.urbanowls.co/social-media-marketing-kochi#service",
          "serviceType": "Social Media Marketing & Creative Management",
          "provider": {
            "@id": "https://www.urbanowls.co/#organization"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Kochi, Kerala, India"
          },
          "description": "Creative visual layout planning, monthly editorial calendars, reels shoot coordination, audience monitoring, and paid social campaign management across Instagram and Facebook."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.urbanowls.co/social-media-marketing-kochi#faq",
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
      const oldSchema = document.getElementById('social-kochi-schema-data');
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
    const whatsappText = `Hello Urban Owls Digital,%0A%0AI'm reaching out from the Social Media Kochi Page.%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone || 'N/A')}%0ACompany: ${encodeURIComponent(formData.company || 'N/A')}%0AInterest: ${encodeURIComponent(formData.interest)}%0AProject Brief: ${encodeURIComponent(formData.message)}`;
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
      interest: 'Instagram & Facebook Branding',
      message: ''
    });
  };

  return (
    <div style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      
      {/* 6. HERO SECTION */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)', position: 'relative' }} className="section-padding">
        <div style={{ position: 'absolute', top: 0, right: 0, width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(197, 163, 92, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }} className="hero-grid">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle">Creative Branding & Engagement</span>
              <h1 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 700 }}>
                Social Media Marketing Agency in Kochi
              </h1>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '24px', fontSize: '20px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                Build a stronger social presence, connect with the right audience and turn attention into meaningful business growth.
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, fontWeight: 300, marginBottom: '32px' }}>
                Urban Owls Digital helps businesses in Kochi create strategic social media campaigns across platforms such as Instagram and Facebook, combining content, creative direction, audience targeting and performance measurement.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#consultation-brief" className="btn-primary">
                  Get a Free Social Media Consultation <ArrowRight size={16} />
                </a>
                <a href="https://wa.me/919847040009" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MessageSquare size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '40px', borderTop: '1px solid rgba(8,17,37,0.06)', paddingTop: '24px' }}>
                {['Instagram Strategy', 'Creative Content', 'Reels & Video', 'Social Advertising'].map(tag => (
                  <span key={tag} style={{ fontSize: '12px', background: 'rgba(8,17,37,0.04)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '30px', fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 7. HERO VISUAL */}
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
                src="/images/hero_office_bg.jpg" 
                alt="Social media management planning team planning creative Instagram grids and Reels content schedules" 
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

      {/* 8. DIRECT ANSWER — AEO */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Core Overview</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
              What Is Social Media Marketing?
            </h2>
          </div>

          <div style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-primary)', fontWeight: 400, borderLeft: '3px solid var(--accent-gold)', paddingLeft: '18px' }}>
              Social media marketing involves using platforms such as Instagram, Facebook and other relevant channels to build brand awareness, engage audiences, distribute content, generate enquiries, support sales, and build customer relationships.
            </p>
            <p>
              Rather than simply posting daily without a plan, a professional agency approaches social marketing strategically. This requires defining target audiences, choosing content pillars, creating custom visual assets, filming engaging short-form video/Reels, monitoring community interactions, and running conversion-focused ad campaigns.
            </p>
            <p>
              Our strategic framework focuses on:
            </p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Audience Mapping:</strong> Identifying where your potential customers spend their time online.</li>
              <li><strong>Content Pillars:</strong> Structuring your brand's messaging across educational, promotional, and behind-the-scenes assets.</li>
              <li><strong>Platform Adaptation:</strong> Adjusting visual creative structures to match the specific layout requirements of Instagram, Facebook, and LinkedIn.</li>
              <li><strong>Paid Social:</strong> Supplementing organic visibility with targeted ads to scale lead generation campaigns.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 9. KOCHI-SPECIFIC VALUE PROPOSITION */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '50px', alignItems: 'center' }} className="local-social-grid">
            
            <div style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><MapPin size={28} /></div>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Kochi Regional Context</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, marginBottom: '20px' }}>
                We customize visual styles and content themes to align with consumer habits across primary areas in Kochi.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Kakkanad', 'Edappally', 'Kaloor', 'Palarivattom', 'Vyttila', 'Kadavanthra', 'Panampilly Nagar', 'Fort Kochi', 'Thrikkakara', 'Aluva', 'Tripunithura'].map(loc => (
                  <span key={loc} style={{ fontSize: '11px', background: '#ffffff', border: '1px solid var(--border-color)', padding: '5px 10px', borderRadius: '20px', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="subtitle">Regional Strategy</span>
              <h2>Social Media Marketing for Businesses in Kochi</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                Consumer behavior in Kochi is shaped by a mix of regional culture, a fast-growing tech sector, and retail development. A generic posting plan won't resonate here.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                At **Urban Owls Digital**, we customize campaigns based on local behavior. Whether targeting tech professionals in Kakkanad with professional LinkedIn setups, shoppers in Edappally with engaging Instagram Reels, or premium demographics in Panampilly Nagar with minimalist design layouts, we structure content to capture the right attention.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 10. SERVICES SECTION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Core Offerings</span>
            <h2>Social Media Marketing Services in Kochi</h2>
            <p>We combine design assets, content planning, platform management, and social advertising to build your brand online.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} style={{ color: 'var(--accent-gold)' }} /> Social Media Strategy
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                We analyze your audience, audit competitors, and define visual layout standards to align social campaigns with business goals.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} style={{ color: 'var(--accent-gold)' }} /> Social Media Management
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Full calendar planning, scheduling, caption writing, and publishing workflows across Instagram and Facebook.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Instagram Marketing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Focusing on visually cohesive grid designs, reels planning, storytelling carousels, and hashtag structures.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook Marketing
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Managing pages, syndicating content, optimizing for local searches, and running local lead generation campaigns.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Video size={18} style={{ color: 'var(--accent-gold)' }} /> Reels & Short-Form Content
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Scripting, editing, and planning mobile vertical video content to maximize engagement on Instagram.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Palette size={18} style={{ color: 'var(--accent-gold)' }} /> Creative Layout Design
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Bespoke layout design, illustrations, and color palettes that match your brand identity across all platforms.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={18} style={{ color: 'var(--accent-gold)' }} /> Paid Social Advertising
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Creating geofenced lead campaigns, conversion ads, and remarketing setups on Meta to acquire enquiries.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} style={{ color: 'var(--accent-gold)' }} /> Community Engagement
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Monitoring user comments, responding to direct messages, and tracking community feedback to build brand loyalty.
              </p>
            </div>

            <div className="luxury-card">
              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrendingUp size={18} style={{ color: 'var(--accent-gold)' }} /> Performance Analytics
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300 }}>
                Detailed monthly audits tracking reach, click-through rates, follower metrics, and lead conversions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 11. SOCIAL MEDIA STRATEGY */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Workflow Layout</span>
            <h2>Strategy Before Posting</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Posting content daily without a clear plan rarely produces business value. Effective social media marketing is built on structured strategic parameters, research, and optimization loops.
            </p>
            <p>
              At **Urban Owls Digital**, we design campaign structures that define:
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
              {[
                { step: '01', title: 'Research', desc: 'Analyzing target audience habits, competitor profiles, and platform trends.' },
                { step: '02', title: 'Strategy', desc: 'Defining content pillars, visual direction, visual tones, and campaign objectives.' },
                { step: '03', title: 'Content', desc: 'Designing layouts, scripting reels, writing captions, and planning calendars.' },
                { step: '04', title: 'Distribution', desc: 'Optimizing publishing times and using targeted social ads to reach more users.' },
                { step: '05', title: 'Engagement', desc: 'Responding to direct messages, answering comments, and building customer trust.' },
                { step: '06', title: 'Measurement', desc: 'Tracking reach metrics, profile visits, clicks, and lead conversion rates.' },
                { step: '07', title: 'Optimization', desc: 'Refining the strategy based on weekly analytics to lower cost-per-lead.' }
              ].map(stage => (
                <div key={stage.step} style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px 20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-gold)' }}>{stage.step}</span>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{stage.title}</h4>
                    <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 300 }}>{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 12. CONTENT STRATEGY */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Content Pillars</span>
            <h2>Content That Gives Your Brand a Reason to Be Followed</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              To build brand loyalty, your social media accounts should deliver value to the user. We structure content calendars across specific messaging pillars:
            </p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><strong>Educational:</strong> Sharing industry tips, tutorials, and infographics to show your expertise.</li>
              <li><strong>Engaging:</strong> Using polls, questions, and interactive carousels to prompt user responses.</li>
              <li><strong>Entertaining:</strong> Using creative Reels and behind-the-scenes content to showcase your brand personality.</li>
              <li><strong>Trust-building:</strong> Sharing client testimonials, process reviews, and verified results to build credibility.</li>
              <li><strong>Promotional:</strong> Showcasing specific products or service offers with clear call-to-actions.</li>
            </ul>
            <p>
              *We focus on content relevance and quality. Social media reach depends on platform algorithms, viewer behavior, and user engagement, which is why we optimize content to match your target audience's habits.*
            </p>
          </div>

        </div>
      </section>

      {/* 13. INSTAGRAM & 14. FACEBOOK SECTIONS */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }} className="platforms-grid">
            
            {/* Instagram */}
            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Instagram Marketing in Kochi</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.7, fontWeight: 300, marginBottom: '20px' }}>
                Instagram is a key visual branding channel in Kochi. It requires cohesive grids, custom color palettes, and engaging video formats to connect with users.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                We plan Reels, structure educational carousels, schedule daily Stories, and write specific captions. Using targeted Instagram ads helps you reach geofenced locations and convert attention into product enquiries.
              </p>
            </div>

            {/* Facebook */}
            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-premium)' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>Facebook Marketing for Kochi Businesses</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.7, fontWeight: 300, marginBottom: '20px' }}>
                Facebook remains a powerful channel for local visibility, customer communities, and paid lead generation ads.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                We set up business pages, post regular updates, run local community groups, and build custom Meta lead form ads. This target parameters help local service providers reach homeowners and families.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 15. PAID SOCIAL ADVERTISING */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">Meta Advertising</span>
            <h2>Social Media Advertising</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Organic content builds community trust, but scaling enquiries often requires paid social advertising. We design Meta campaigns (Instagram & Facebook Ads) targeting specific demographics, interests, and geofenced locations.
            </p>
            <p>
              We configure:
            </p>
            <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Audience Targeting:</strong> Geofencing ads to specific zones (such as Edappally, Palarivattom, Kakkanad) and interest metrics.</li>
              <li><strong>Campaign Objectives:</strong> Aligning budgets for traffic, lead generation forms, or direct conversion purchases.</li>
              <li><strong>Creative Testing:</strong> Testing different visual styles and copywriting versions to find the lowest cost-per-lead.</li>
              <li><strong>Retargeting:</strong> Showing ads to users who previously engaged with your profile or visited your website, keeping your brand visible.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 16. Social Media + SEO Section */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '50px', alignItems: 'center' }} className="seo-social-combo">
            
            <div>
              <span className="subtitle">Search & Social</span>
              <h2>How Social Media Supports Your Wider Digital Strategy</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                Followers and likes on social media do not serve as direct Google search ranking factors. However, social media supports your overall search presence in other ways.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15.5px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Social channels distribute content, drive referral traffic, and build brand discovery. As more users search for your brand name after seeing you on Instagram, Google records higher brand search volume, which supports your authority.
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to="/best-digital-marketing-kochi" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '13.5px' }}>
                  Explore Kochi SEO Services
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-premium)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>Organic Social Discovery</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12.5px', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                  Builds brand search metrics. Visitors find you on Instagram, search for your company name on Google, and land on your website.
                </p>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-premium)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '8px' }}>Content Distribution</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12.5px', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                  Distributes blog links and guides, driving initial referral visits and encouraging natural backlink profiles.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 17. SOCIAL MEDIA + AEO & 18. SOCIAL MEDIA + GEO */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="subtitle">AI & AEO Optimization</span>
            <h2>Social Media, AEO, and GEO</h2>
          </div>

          <div style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-secondary)', fontWeight: 300, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              **Answer Engine Optimization (AEO)** and **Generative Engine Optimization (GEO)** focus on organizing your business details so search systems and AI recommenders (like ChatGPT and Gemini) can understand your services.
            </p>
            <p>
              While posting on Instagram does not directly affect ChatGPT or AI Overview search rankings, maintaining a consistent brand presence across social platforms contributes to your brand's digital footprints. Clearly structuring your entity information across Facebook, LinkedIn, and your website helps search engines identify **Urban Owls Digital** as a verified provider of social media marketing in Kochi.
            </p>
          </div>

        </div>
      </section>

      {/* 20. INDUSTRIES */}
      <section style={{ background: 'var(--bg-gray)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Sectors We Serve</span>
            <h2>Social Media Marketing for Different Industries</h2>
            <p>Content styles should match the customer journey and purchase behavior in your sector.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Restaurants & Hospitality</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Using high-quality food Reels, menu displays, customer reviews, and geotargeting ads to drive weekend bookings.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Hotels & Tourism</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Sharing destination imagery, property reels, travel tips, and seasonal promo ads to secure direct direct bookings.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Real Estate & Builders</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Using virtual project walk-throughs, construction updates, and Facebook lead forms to capture property buyers.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>Beauty & Wellness</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Sharing before-and-after results, service tutorials, and local Instagram promotion campaigns to drive booking appointments.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>E-Commerce Retailers</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Using aesthetic product carousels, unboxing videos, customer reviews, and catalog ads to drive website purchases.
              </p>
            </div>

            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '20px', background: '#ffffff' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16.5px', color: 'var(--text-primary)', marginBottom: '10px' }}>B2B & Tech Startups</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Sharing case studies, founder insights, and employee highlights on LinkedIn and Facebook to build credibility.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 21. SOCIAL MEDIA PROCESS */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Workflow</span>
            <h2>Our Social Media Marketing Process</h2>
            <p>We plan, schedule, publish, and optimize content campaigns using structured management steps.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }} className="process-grid">
            
            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>01</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Discovery</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We analyze your business goals, target audience profiles, competitors, and visual brand identity.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>02</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Strategy Setup</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We define content pillars, platform selections, design rules, captions style guidelines, and metrics targets.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>03</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Content Planning</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We build monthly calendars mapping graphic themes, reels scripts, stories hooks, and conversion promo offers.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>04</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Creative Development</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                Our team designs layout assets, plans reels video captures, writes copy, and edits mobile vertical videos.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>05</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Publishing & Inbox</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We schedule updates at optimal engagement times and monitor DM folders to direct inquiries to your sales leads.
              </p>
            </div>

            <div className="luxury-card">
              <span style={{ fontSize: '32px', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'rgba(197,163,92,0.15)', display: 'block', marginBottom: '12px' }}>06</span>
              <h4 style={{ fontSize: '17px', color: 'var(--text-primary)', marginBottom: '10px' }}>Performance Analytics</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300 }}>
                We track reach parameters, link click actions, profile visits, and leads monthly to refine campaigns.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 22. METRICS SECTION */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Campaign Tracking</span>
            <h2>What We Measure</h2>
            <p>We analyze performance data to adjust copy layouts and creative formats.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            
            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>Reach</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                The total number of unique social profiles that viewed your posts or ads.
              </p>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>Engagement Rate</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                The percentage of reach that interacted with your post (likes, comments, shares, saves).
              </p>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>Profile Visits</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                The number of users who navigated to your brand bio after seeing a post.
              </p>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--border-color)', borderRadius: '16px', background: '#ffffff', textAlign: 'center' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '8px' }}>Enquiries</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>
                The number of direct DMs, WhatsApp clicks, and form submissions driven by campaign calls.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 23. TRUST SECTION & 25. CASE EVALUATION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '50px', alignItems: 'center' }} className="trust-social-grid">
            
            <div>
              <span className="subtitle">Agency Standards</span>
              <h2>Why Choose Urban Owls Digital?</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>
                We design social media campaigns based on structured content pillars and conversion metrics, avoiding generic templates and passive posting.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Our team handles visual layout design, Reels planning, caption writing, and Meta ad targeting to ensure your profiles attract relevant business interest.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Strategy-first platform setups</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Creative visual design layouts</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span>Transparent analytics monthly reports</span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '16px' }}>How We Measure Social Media Growth</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, fontWeight: 300, marginBottom: '20px' }}>
                We track campaign progress across several key parameters:
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>Follower growth metrics and demographics</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>Profile visits and website referral clicks</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>DM inquiries and recorded phone calls</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckSquare size={16} style={{ color: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>Paid social ad conversion cost</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 26. AEO FAQ SECTION */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ maxWidth: '850px' }}>
          
          <div className="section-header">
            <span className="subtitle">FAQ Resource</span>
            <h2>Frequently Asked Questions</h2>
            <p>Direct answers covering content strategy, platform setups, and management budgets for Kochi businesses.</p>
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

      {/* 46. CONVERSION CTA */}
      <section id="consultation-brief" style={{ background: 'var(--bg-cream)' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Kickoff Strategy</span>
            <h2>Ready to Build a Stronger Social Presence?</h2>
            <p>Outline your brand goals below to schedule a campaign consultation with our social leads. We will review your current setups and discuss conversion options.</p>
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
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: '20px', marginBottom: '24px', color: 'var(--text-primary)' }}>Social Media Consultation Request</h3>

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
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '6px', fontWeight: 500 }}>Campaign Focus *</label>
                  <select
                    name="interest"
                    value={formData.interest}
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
                    {interestsList.map(item => (
                      <option key={item} value={item}>{item}</option>
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
                    placeholder="Describe your current brand presence challenges, target audience profiles, and social goals..."
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
          .hero-grid, .local-social-grid, .platforms-grid, .seo-social-combo, .trust-social-grid, .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-image-box {
            height: 320px !important;
          }
        }
        @media (max-width: 576px) {
          .hero-grid, .local-social-grid, .platforms-grid, .seo-social-combo, .trust-social-grid, .contact-grid {
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

// AEO FAQ Questions list
const faqs = [
  {
    q: "What is social media marketing?",
    a: "Social media marketing involves using platforms such as Instagram, Facebook, and LinkedIn to build brand visibility, distribute creatives, engage audiences, and generate sales leads."
  },
  {
    q: "What does a social media marketing agency in Kochi do?",
    a: "A social media marketing agency in Kochi builds local audience campaigns on Instagram and Facebook. This includes: calendar scheduling, custom layout design, reels video planning, caption writing, DM checking, and target social ads optimization."
  },
  {
    q: "How much does social media marketing cost in Kochi?",
    a: "Social media marketing costs in Kochi depend on visual design needs and ad budgets. Retainers typical start around ₹15,000 to ₹30,000 per month for design templates and publishing, scaling for full custom reels scripting, video shooting, and daily Meta ads optimization."
  },
  {
    q: "Which social media platform is best for a business?",
    a: "The best platform depends on your target audience. Visual retail and local consumer brands see higher engagement on Instagram and Facebook. B2B firms and consulting agencies achieve better outcomes on LinkedIn."
  },
  {
    q: "Is Instagram marketing useful for local businesses?",
    a: "Yes. By using geotags, local hashtags, Reels, and geofenced ads targeting Kochi areas (such as Kakkanad or Edappally), local brands can build high local visibility and drive direct messages (DMs) and walk-in leads."
  },
  {
    q: "Can social media marketing generate leads?",
    a: "Yes. Campaigns can drive leads when you combine organic branding with paid social lead forms or send users to optimized landing pages with clear call-to-actions (CTAs)."
  },
  {
    q: "How often should a business post on social media?",
    a: "We suggest posting high-quality content consistently rather than spamming. A frequency of 3 to 5 times per week (including 2 to 3 Reels) is typically sufficient to build audience engagement without compromising content quality."
  },
  {
    q: "What is the difference between social media marketing and social media management?",
    a: "Social media management focuses on keeping profiles updated (calendars, publishing, comment replies). Social media marketing covers a wider strategy, including paid ad campaigns, influencer collaborations, lead funnels, and performance tracking."
  },
  {
    q: "Does social media help SEO?",
    a: "Social media does not directly influence Google search rankings. However, it supports SEO indirectly by distributing content, driving referral traffic, and building brand search volume."
  },
  {
    q: "Can social media marketing help businesses in Kochi?",
    a: "Yes. Social media campaigns help Kochi brands target regional consumers directly, showing products and services to local buyers in Ernakulam."
  },
  {
    q: "Does Urban Owls Digital provide social media marketing in Kochi?",
    a: "Yes. Urban Owls Digital provides social media marketing and management for Kochi businesses, managing campaign strategies, layout assets design, reels editing, and paid social ads."
  },
  {
    q: "How do you measure social media marketing results?",
    a: "We measure campaign progress by tracking active conversion indicators, including: reach, engagement rate, website clicks, direct DM enquiries, and cost-per-lead for paid ads."
  }
];

export default SocialMediaMarketingKochi;
