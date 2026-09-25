import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const localBackupProjects = [
  {
    _id: '1',
    title: 'EcoPest',
    category: 'Corporate Website',
    image: '/images/pest_control.jpg',
    description: 'A high-converting pest control website built for EcoPest, featuring service-led content, local trust signals, and a polished experience tailored for Kerala homeowners and businesses.',
    liveUrl: 'https://ecopestindia.com/',
    caseStudyUrl: 'https://ecopestindia.com/',
    tags: ['Corporate Portal', 'Local Trust', 'SEO Growth', 'Lead Capture']
  },
  {
    _id: '2',
    title: 'San Travels',
    category: 'Custom Web Application',
    image: '/images/san_travels.jpg',
    description: 'A custom-engineered travel booking portal built to facilitate bookings, tour itineraries tracking, and interactive cab reservation integrations.',
    liveUrl: 'https://santravels.in',
    caseStudyUrl: 'https://santravels.in',
    tags: ['Cab Reservations', 'Itinerary Trackers', 'Booking Engines', 'Custom API']
  },
  {
    _id: '3',
    title: 'Artivert',
    category: 'Portfolio Website',
    image: '/images/artivert_portfolio.jpg',
    description: 'A high-end luxury creative portfolio and art directory displaying bespoke graphic designs and high-fidelity vector illustrations inside a fluid React layout.',
    liveUrl: 'https://artivert.in',
    caseStudyUrl: 'https://artivert.in',
    tags: ['Creative Portfolio', 'Fluid Animations', 'Custom Design', 'Branding']
  },
  {
    _id: '4',
    title: 'Coolwing Online',
    category: 'E-Commerce Website',
    image: '/images/coolwing_ecommerce.jpg',
    description: 'A premium, fast headless e-commerce ecosystem built for modern retail. Features smart filtering, custom checkout flows, and Stripe API integration.',
    liveUrl: 'https://coolwing.online',
    caseStudyUrl: 'https://coolwing.online',
    tags: ['E-Commerce Shop', 'Secure Checkout', 'Smart Filters', 'Product Displays']
  },
  {
    _id: '5',
    title: 'Skillhub Digital',
    category: 'Business Website',
    image: '/images/skillhub_digital.jpg',
    description: 'A professional digital marketing agency website designed to capture high-value leads, display client portfolios, and rank at the top of local SEO searches.',
    liveUrl: 'https://skillhubdigital.in',
    caseStudyUrl: 'https://skillhubdigital.in',
    tags: ['Business Site', 'Local Search Rank', 'Maps Placement', 'Lead Ingestion']
  }
];

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setProjects(data.data);
        } else {
          setProjects(localBackupProjects);
        }
      } catch (err) {
        console.warn('API connection failed. Loading local backup projects.');
        setProjects(localBackupProjects);
      }
    };
    fetchProjects();
  }, []);

  const categories = ['All', 'E-Commerce Website', 'Corporate Website', 'Custom Web Application', 'Portfolio Website', 'Business Website'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="subtitle">Selected Work</span>
          <h2>Featured Projects</h2>
          <p>Explore a collection of our recently engineered luxury websites, custom corporate platforms, and performance SEO cases.</p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                padding: '10px 24px',
                borderRadius: '30px',
                background: filter === cat ? 'var(--accent-charcoal)' : '#ffffff',
                border: filter === cat ? '1px solid var(--accent-charcoal)' : '1px solid var(--border-color)',
                color: filter === cat ? '#ffffff' : 'var(--text-primary)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
              }}
            >
              {cat === 'All' ? 'All Works' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }} className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-premium)',
                  transition: 'var(--transition-smooth)'
                }}
                className="portfolio-card"
              >
                {/* Large Project Image Container */}
                <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }} className="portfolio-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                    className="portfolio-image"
                  />
                  {/* Category Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1.5px solid var(--accent-charcoal)',
                      color: 'var(--text-primary)',
                      fontSize: '11px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Details */}
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1, gap: '14px' }}>
                  <h3 style={{ fontSize: '24px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, fontWeight: 300, flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '8px 0' }}>
                    {project.tags && project.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '11px',
                          fontWeight: 500,
                          color: 'var(--accent-gold)',
                          background: 'rgba(217, 138, 41, 0.05)',
                          border: '1px solid rgba(217, 138, 41, 0.15)',
                          padding: '4px 10px',
                          borderRadius: '6px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '8px 0' }} />

                  {/* Action links */}
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        color: 'var(--text-primary)'
                      }}
                      className="live-link"
                    >
                      Live Preview <ExternalLink size={14} />
                    </a>
                    
                    <a
                      href={project.caseStudyUrl}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '14px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        color: 'var(--text-secondary)'
                      }}
                      className="case-link"
                    >
                      Case Study <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .portfolio-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
          }
        }
        @media (max-width: 576px) {
          .portfolio-filters {
            justify-content: flex-start !important;
            gap: 8px !important;
          }
          .portfolio-filters button {
            flex: 1 1 calc(50% - 8px) !important;
            justify-content: center !important;
          }
          .portfolio-img-wrapper {
            height: 220px !important;
          }
          .portfolio-card {
            text-align: left !important;
          }
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-gold) !important;
          box-shadow: var(--shadow-gold-glow) !important;
        }
        .portfolio-card:hover .portfolio-image {
          transform: scale(1.05);
        }
        .live-link:hover {
          color: var(--accent-gold) !important;
        }
        .case-link:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
