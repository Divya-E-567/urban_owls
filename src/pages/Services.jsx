import React from 'react';
import ServicesComponent from '../components/Services';
import { Layout, Server, ShoppingBag, Cloud } from 'lucide-react';

const capabilitiesPillars = [
  {
    category: 'High-Performance Interfaces',
    icon: <Layout size={20} />,
    skills: ['Custom Visual Layouts', 'Responsive Screen Stacking', 'Micro-Interaction Physics', 'Render Speed Optimization', 'Apple-Level Typography']
  },
  {
    category: 'Secure Infrastructure',
    icon: <Server size={20} />,
    skills: ['Encrypted Data Streams', 'Secure Form Ingestion', 'Autoscaling Cloud Nodes', 'Automated Daily Backups']
  },
  {
    category: 'E-Commerce Integrations',
    icon: <ShoppingBag size={20} />,
    skills: ['Frictionless Cart Checkouts', 'Product Catalog Filters', 'Secure Multi-Currency Rails', 'Order Management Synergies']
  },
  {
    category: 'Cloud Deployments & CDNs',
    icon: <Cloud size={20} />,
    skills: ['Global Content Caching', 'SSL Security Certifications', 'DNS Failover Protection', 'Server Uptime Guarantee']
  }
];

const Services = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* Main Services Grid Component */}
      <ServicesComponent />

      {/* Kochi Local SEO, Google Ads & Social Media Internal Link Section */}
      <section style={{ background: 'var(--bg-white)', borderTop: '1px solid var(--border-color)', padding: '50px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
          <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', margin: '0 0 12px 0', fontWeight: 300 }}>
            Seeking to capture geofenced leads, organic search visibility, and creative social engagement in Kochi and Ernakulam?
          </p>
          <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', margin: '0 0 20px 0', lineHeight: 1.4 }}>
            Partner with the <a href="/best-digital-marketing-kochi" style={{ color: 'var(--accent-gold)', textDecoration: 'underline', fontWeight: 700 }}>best digital marketing company in Kochi</a>, configure paid search via our <a href="/google-ads-agency-kochi" style={{ color: 'var(--accent-gold)', textDecoration: 'underline', fontWeight: 700 }}>Google Ads Agency in Kochi</a>, or build brand awareness with our specialized <a href="/social-media-marketing-kochi" style={{ color: 'var(--accent-gold)', textDecoration: 'underline', fontWeight: 700 }}>Social Media Marketing Agency in Kochi</a>.
          </h3>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/best-digital-marketing-kochi" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '13.5px' }}>
              Explore Kochi SEO & GEO
            </a>
            <a href="/google-ads-agency-kochi" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '13.5px' }}>
              Explore Kochi Google Ads
            </a>
            <a href="/social-media-marketing-kochi" className="btn-secondary" style={{ padding: '12px 24px', fontSize: '13.5px' }}>
              Explore Kochi Social Media
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Technology Stack Section */}
      <section style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          
          {/* Header */}
          <div className="section-header">
            <span className="subtitle">Core Pillars</span>
            <h2>Our Capabilities & Performance Standards</h2>
            <p>We engineer digital channels according to elite performance and security guidelines, ensuring your platforms are fast, secure, and ready for search engines.</p>
          </div>

          {/* Tech Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {capabilitiesPillars.map((group) => (
              <div
                key={group.category}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '30px',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)'
                }}
                className="tech-group-card"
              >
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', marginBottom: '20px' }}>
                  {group.icon}
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {group.category}
                  </h4>
                </div>

                {/* Items List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'var(--bg-gray)',
                        border: '1px solid var(--border-color)',
                        transition: 'all 0.3s ease'
                      }}
                      className="tech-item"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        <style>{`
          .tech-group-card:hover {
            border-color: var(--accent-charcoal) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
            transform: translateY(-5px);
          }
          .tech-item:hover {
            color: var(--text-primary) !important;
            border-color: #999999 !important;
            background: #ffffff !important;
          }
        `}</style>
      </section>

    </div>
  );
};

export default Services;
