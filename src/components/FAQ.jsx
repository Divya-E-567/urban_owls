import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'What is Urban Owls Digital?',
    answer: 'Urban Owls Digital is an ultra-premium custom digital agency specializing in luxury website design, speed optimization, and search index placement strategies (SEO, AEO, and GEO) for high-growth brands.'
  },
  {
    question: 'What services do you offer?',
    answer: 'We provide full-service digital engineering, including custom web design, website redesigns, corporate portals, e-commerce builds (Shopify integration), Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Google Business Profile management, hosting setup, and monthly maintenance.'
  },
  {
    question: 'What makes your websites feel "ultra-premium"?',
    answer: 'We avoid cheap templates and generic page builders. Our platforms feature Apple-level layout restraint, negative space configurations, custom glassmorphic styling, fluid micro-interactions, and custom database APIs designed specifically for high conversions.'
  },
  {
    question: 'Why do you build custom websites instead of templates?',
    answer: 'Custom builds bypass the heavy code bloat of monolithic template builders and generic page plugins, achieving sub-second loads, bank-grade security, and robust scalability.'
  },
  {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer: <span>GEO is the process of structuring your website content so it is easily ingested, cited, and recommended by Generative AI models like ChatGPT Search, Google Gemini, and Perplexity AI when users ask them questions. Learn more from the <Link to="/best-digital-marketing-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-navy)', fontWeight: 600 }}>best digital marketing company in Kochi</Link>.</span>
  },
  {
    question: 'Why is GEO important for modern websites?',
    answer: 'A significant share of user search query intent is moving away from traditional Google links towards direct AI conversations. Without GEO, your brand will remain invisible inside generative chat references.'
  },
  {
    question: 'What is Answer Engine Optimization (AEO)?',
    answer: <span>AEO focuses on optimizing content to satisfy zero-click queries, voice assistant products (Apple Siri, Amazon Alexa), and featured snippet boxes, positioning your direct answers as the primary search response. Check out our services for the <Link to="/best-digital-marketing-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-navy)', fontWeight: 600 }}>best digital marketing agency in Kochi</Link>.</span>
  },
  {
    question: 'How does AEO differ from traditional SEO?',
    answer: 'Traditional SEO aims to rank lists of links. AEO targets single, direct, factual question-answer pairs that match exact user intent, integrating rich schema markup to declare facts clearly.'
  },
  {
    question: 'Do you handle local search optimization and Google Business Profiles?',
    answer: 'Yes. We configure, verify, and optimize your Google Business Profile (GBP) and syndicate local listing citations to put your brand in the local Map Pack for localized keywords.'
  },
  {
    question: 'Can you redesign my current website?',
    answer: 'Absolutely. We map and migrate your existing pages, preserving your current search rankings with 301 redirects, while updating your visual identity and frontend code to premium modern standards.'
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'A premium landing page or single service site is delivered in 2–3 weeks. Larger custom corporate portals or databases take between 6–10 weeks, depending on integration scopes.'
  },
  {
    question: 'Do you write copy and design assets for the website?',
    answer: 'Yes. We offer complete copywriting services matching your brand voice, and we design high-resolution vector assets and custom images to ensure visual consistency.'
  },
  {
    question: 'What is your design feedback process?',
    answer: 'We provide interactive design files (e.g. Figma) where you can leave comments. We iterate on the feedback before writing the first line of code, ensuring alignment with your expectations.'
  },
  {
    question: 'Do you offer hosting and server management?',
    answer: 'Yes. We deploy client applications onto high-speed clouds (Vercel, AWS, Hostinger), configure secure SSL certificates, set up Cloudflare protection, and manage domain name parameters.'
  },
  {
    question: 'What maintenance packages are available?',
    answer: 'Our premium support plans cover weekly server security updates, regular database backups, uptime monitoring, minor visual edits, content updates, and SEO health audits.'
  },
  {
    question: 'How do you guarantee sub-second page load speeds?',
    answer: 'We use optimized server assets, server-side caching, modern web code splitting, and content delivery networks (CDNs). This achieves 95+ ratings on Google PageSpeed Insights.'
  },
  {
    question: 'Are your websites secure against hackers and exploits?',
    answer: 'Yes. Our custom database configurations utilize secure API validation tokens, sanitized requests to avoid injection attacks, encrypted passwords, and Cloudflare firewall shields to block malicious traffic.'
  },
  {
    question: 'Do you build custom e-commerce stores?',
    answer: 'Yes, we build both custom online shops for bespoke checkout systems and headless Shopify stores, combining Shopify backend security with premium custom frontend displays.'
  },
  {
    question: 'How much does a project with Urban Owls Digital cost?',
    answer: 'Bespoke projects start around $3,500 for landing pages and scale to $15,000+ for enterprise databases and SEO campaigns, depending on complexity.'
  },
  {
    question: 'How do we start a project together?',
    answer: 'Simply fill out our contact form below or click the WhatsApp CTA. We will schedule a brief kickoff call, map your project requirements, and send you a detailed design proposal.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ background: 'var(--bg-gray)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="subtitle">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p>Read through our 20 comprehensive answers covering custom design, search engines, timelines, and security setups.</p>
        </div>

        {/* Accordion list */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: isOpen ? '1px solid var(--accent-charcoal)' : '1px solid var(--border-color)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 5px 15px rgba(0, 0, 0, 0.02)' : 'none'
                }}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="faq-btn"
                  style={{
                    width: '100%',
                    padding: '22px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion panel content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div
                        className="faq-content"
                        style={{
                          padding: '0 30px 24px 30px',
                          color: 'var(--text-secondary)',
                          fontSize: '14px',
                          lineHeight: 1.6,
                          fontWeight: 300,
                          borderTop: '1px solid rgba(0, 0, 0, 0.02)'
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>

      </div>
      <style>{`
        @media (max-width: 576px) {
          .faq-btn {
            padding: 16px 20px !important;
            font-size: 15px !important;
          }
          .faq-content {
            padding: 0 20px 16px 20px !important;
            font-size: 13.5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
