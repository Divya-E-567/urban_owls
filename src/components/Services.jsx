import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, RefreshCw, Briefcase, Building, FolderGit, 
  User, Layout, ShoppingCart, Cpu, Search, TrendingUp, 
  MapPin, Shield, Sparkles
} from 'lucide-react';

const servicesData = [
  {
    icon: <Palette size={24} />,
    title: 'Website Design',
    description: 'Bespoke, high-converting layouts tailored for premium brands. We align typography, color physics, and visual aesthetics to tell your brand story.'
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Website Redesign',
    description: 'Transform outdated systems into sleek, modern, fast, and interactive frontends. Retain your search rankings while offering an Awwwards-quality experience.'
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Business Website',
    description: 'Establish absolute authority in your niche. Custom web platforms designed to educate your prospects, build instant trust, and drive high-intent leads.'
  },
  {
    icon: <Building size={24} />,
    title: 'Corporate Website',
    description: 'Secure, scalable, and responsive platforms for enterprises. Complete with custom integrations, investor relations pages, and compliance-level speed.'
  },
  {
    icon: <FolderGit size={24} />,
    title: 'Portfolio Website',
    description: 'Designed specifically for luxury architects, premium designers, agencies, and high-end artists who want to display their work in cinematic layouts.'
  },
  {
    icon: <User size={24} />,
    title: 'Personal Website',
    description: 'Elevate your personal brand. Designed for key speakers, executives, authors, and industry pioneers seeking a premium digital resume.'
  },
  {
    icon: <Layout size={24} />,
    title: 'Landing Pages',
    description: 'Hyper-focused single page sales machines. Optimized copy, premium visual cues, and lightning-fast loading speeds designed to maximize campaign conversions.'
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'E-Commerce Website',
    description: 'Headless, ultra-fast online shopping stores. Custom filters, frictionless checkout integrations, and beautiful presentation of your luxury goods.'
  },
  {
    icon: <Search size={24} />,
    title: 'SEO (Search Engine Optimization)',
    description: <span>Technical audits, site-architecture optimization, and premium copywriting designed to position pages at the top of organic search results. We help brands establish authority to be recognized as the <Link to="/best-digital-marketing-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-gold)' }}>best digital marketing company in Kochi</Link>.</span>
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Google Ranking',
    description: 'Continuous optimization campaigns, link networks, and domain authority acceleration designed to claim and secure competitive search terms.'
  },
  {
    icon: <MapPin size={24} />,
    title: 'GBP Creation & Setup',
    description: 'Complete setup of your Google Business Profile with premium assets, category mapping, and correct verification to lock in your maps entry.'
  },
  {
    icon: <Building size={24} />,
    title: 'Local SEO & Maps Optimization',
    description: <span>Dominate local maps grids. Structured citation syndication, local keyword targeting, and automated review strategies for local market dominance. We help regional entities position their maps visibility to rank as the <Link to="/best-digital-marketing-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-gold)' }}>best digital marketing agency in Kochi</Link>.</span>
  },
  {
    icon: <Cpu size={24} />,
    title: 'Answer Engine Optimization (AEO)',
    description: 'Optimize content to be delivered as voice answers and direct snippets by Google, Apple Siri, Amazon Alexa, and smart assistant products.'
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Generative Engine Optimization (GEO)',
    description: 'Structure content specifically to be cited by AI models (ChatGPT Search, Gemini, Perplexity), keeping your brand visible in generative search.'
  },
  {
    icon: <Shield size={24} />,
    title: 'Website Maintenance',
    description: '24/7 premium support, security patches, regular backups, server uptime monitoring, and ongoing codebase adjustments so you focus on growth.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const Services = () => {
  return (
    <section id="services" style={{ background: 'var(--bg-white)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Core Competencies</span>
          <h2>Our Primary Services</h2>
          <p>We combine premium engineering with visibility marketing to build solutions that dominate search queries and captivate visitors.</p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px',
            marginBottom: '50px'
          }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="luxury-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              {/* Brand Navy/Gold Icon container */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(8, 17, 37, 0.04)',
                  border: '1px solid rgba(8, 17, 37, 0.08)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="service-icon-box"
              >
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 style={{ fontSize: '21px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, fontWeight: 300 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/contact" className="btn-primary">
            Need a Custom Solution? Start a Project
          </Link>
        </div>

      </div>
      <style>{`
        .luxury-card:hover .service-icon-box {
          background-color: var(--accent-navy) !important;
          color: #ffffff !important;
          transform: scale(1.05);
        }
        @media (max-width: 576px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          .luxury-card {
            padding: 24px !important;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
