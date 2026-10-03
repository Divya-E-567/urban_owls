import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const localBackupProjects = [
  {
    _id: '1',
    title: 'Eco Pest India',
    category: 'Corporate Website',
    image: '/images/ecopest_india.jpg',
    description: 'A high-converting digital platform engineered for Eco Pest India Pest Management, featuring service-led booking funnels, district branch locators, local trust signals, and SEO lead capture across Kerala.',
    liveUrl: 'https://ecopestindia.com/',
    caseStudyUrl: 'https://ecopestindia.com/',
    tags: ['Pest Management', 'Kerala Branches', 'SEO Growth', 'Lead Capture']
  },
  {
    _id: '2',
    title: 'Blue Moon Waste Water Management',
    category: 'Service Website',
    image: '/images/bluemoon_cleaning.jpg',
    description: 'A high-performance commercial portal for professional septic tank cleaning, water tank sanitization, and waste water management across Ernakulam and Kochi with 24/7 emergency dispatch integration.',
    liveUrl: 'https://www.bluemooncleaningservice.com/',
    caseStudyUrl: 'https://www.bluemooncleaningservice.com/',
    tags: ['Septic Tank Cleaning', 'Water Tank Service', 'Ernakulam & Kochi', '24/7 Helpline']
  },
  {
    _id: '3',
    title: 'Greenline Pest Management',
    category: 'Service Website',
    image: '/images/greenline_pest.jpg',
    description: 'A streamlined, mobile-first business website built for Greenline Pest Management in Palakkad. Features comprehensive pest control packages, termite inspection booking, and local search optimization.',
    liveUrl: 'https://www.greenlinepest.in/',
    caseStudyUrl: 'https://www.greenlinepest.in/',
    tags: ['Pest & Termite Control', 'Palakkad Service', 'Local SEO', 'Quick Booking']
  },
  {
    _id: '4',
    title: 'GrassPro Kerala',
    category: 'Web Application',
    image: '/images/grasspro_kerala.jpg',
    description: 'An interactive web portal and operator directory for the Kerala Grass Cutters & Landscaping Professionals Association, connecting lawn care specialists, brush cutter operators, and garden designers statewide.',
    liveUrl: 'https://grass-cutting-five.vercel.app/',
    caseStudyUrl: 'https://grass-cutting-five.vercel.app/',
    tags: ['Landscaping Association', 'Operator Directory', 'District Search', 'Member Network']
  },
  {
    _id: '5',
    title: 'Cleaning Service Kochi',
    category: 'Service Website',
    image: '/images/cleaning_kochi.jpg',
    description: 'A modern, high-conversion deep cleaning and sanitization booking website tailored for apartments, villas, and commercial spaces in Kochi and Ernakulam with instant quote calculators and WhatsApp lead capture.',
    liveUrl: 'https://cleaningservicekochi.com/',
    caseStudyUrl: 'https://cleaningservicekochi.com/',
    tags: ['Deep Cleaning', 'Sanitization', 'Kochi & Ernakulam', 'Instant Quote']
  },
  {
    _id: '6',
    title: 'BioGrowers India',
    category: 'Corporate Website',
    image: '/images/biogrowers.jpg',
    description: 'A sustainable organic bio-agriculture and green technology platform showcasing organic farm inputs, soil enhancers, high-yield biological nutrients, and eco-friendly farming solutions for Indian growers.',
    liveUrl: 'https://www.biogrowers.in/',
    caseStudyUrl: 'https://www.biogrowers.in/',
    tags: ['Organic Bio-Farming', 'Sustainable Agritech', 'Crop Health', 'Green Solutions']
  },
  {
    _id: '7',
    title: 'BOC Connect',
    category: 'Web Application',
    image: '/images/bocconnect.jpg',
    description: 'An enterprise business networking and connectivity platform designed to facilitate secure B2B collaborations, professional partner discovery, and streamlined operational communications.',
    liveUrl: 'https://bocconnect.in/',
    caseStudyUrl: 'https://bocconnect.in/',
    tags: ['Business Networking', 'Enterprise Portal', 'B2B Connectivity', 'Secure Platform']
  },
  {
    _id: '8',
    title: 'TermiteControl Kerala',
    category: 'Service Website',
    image: '/images/termite_control.jpg',
    description: 'A hyper-targeted anti-termite treatment and wood borer eradication portal in Kerala, engineered with pre-construction & post-construction termite warranty guides, free inspection schedulers, and regional technical SEO.',
    liveUrl: 'https://termitecontrol.me/',
    caseStudyUrl: 'https://termitecontrol.me/',
    tags: ['Anti-Termite Treatment', 'Wood Borer Control', 'Warranty Guarantee', 'Free Inspection']
  },
  {
    _id: '9',
    title: 'Pest Control Kakkanad',
    category: 'Service Website',
    image: '/images/pest_control_kakkanad.jpg',
    description: 'A hyper-localized pest control portal engineered for Kakkanad, Infopark, and Edachira. Built with instant technician booking, odorless gel baiting features, termite warranties, and local search dominance.',
    liveUrl: 'https://pestcontrolkakkanad.com/',
    caseStudyUrl: 'https://pestcontrolkakkanad.com/',
    tags: ['Pest Control Kakkanad', 'Infopark & Edachira', 'Termite Treatment', 'Same-Day Service']
  },
  {
    _id: '10',
    title: 'Momhood Kerala',
    category: 'Community Platform',
    image: '/images/momhood_kerala.jpg',
    description: 'A welcoming digital community portal and support network empowering mothers and women across Kerala, featuring district-wise Mom Circles, parenting resources, expert workshops, and micro-business collaboration spaces.',
    liveUrl: 'https://momhoodkerala.org/',
    caseStudyUrl: 'https://momhoodkerala.org/',
    tags: ['Motherhood Community', 'Women Empowerment', 'Mom Circles', 'Kerala Network']
  }
];

const Portfolio = () => {
  const [projects, setProjects] = useState(localBackupProjects);
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

  const categories = ['All', 'Corporate Website', 'Service Website', 'Web Application', 'Community Platform'];

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
