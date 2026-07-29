import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';

const pricingPlans = [
  {
    name: 'Custom Landing Page',
    price: '$2,500',
    description: 'Perfect for new campaigns, service product launches, or basic personal brands seeking high conversions.',
    features: [
      'Bespoke visual UI design',
      'Sub-second page speeds',
      'Basic SEO keyword configurations',
      'WhatsApp & Email contact hooks',
      'Secure hosting & Cloudflare SSL',
      '1 Year minor codebase updates'
    ]
  },
  {
    name: 'Corporate Portal',
    price: '$5,500',
    description: 'Ideal for established businesses, hotels, clinics, and brands seeking functional database integrations.',
    features: [
      'Up to 10 custom responsive layouts',
      'Full custom database backend',
      'Custom admin panel controls',
      'Google Maps Pack & GBP setup',
      'Answer Engine schema (AEO)',
      'Secure database schemas'
    ],
    featured: true
  },
  {
    name: 'Headless E-Commerce',
    price: '$8,500',
    description: 'Designed for retail brands seeking rapid checkouts, headless APIs, and high conversions.',
    features: [
      'Bespoke high-speed interface',
      'Online checkout integrations',
      'Fluid micro-interaction motions',
      'Secure payment gateways',
      'GEO optimized AI citation data',
      '24/7 Server uptime support'
    ]
  }
];

const Pricing = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* Pricing Cards Section */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          
          {/* Header */}
          <div className="section-header">
            <span className="subtitle">Pricing Models</span>
            <h2>Investment Options</h2>
            <p>Select a digital architecture plan built to outrank competitors and capture high-value conversion traffic.</p>
          </div>

          {/* Card Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  background: '#ffffff',
                  border: plan.featured ? '2px solid var(--accent-charcoal)' : '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '40px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  boxShadow: plan.featured ? '0 15px 35px rgba(0,0,0,0.04)' : '0 10px 25px rgba(0,0,0,0.01)'
                }}
              >
                {plan.featured && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: 'var(--accent-charcoal)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Recommended
                  </span>
                )}

                <div>
                  <h3 style={{ fontSize: '22px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>{plan.name}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '6px', fontWeight: 300 }}>{plan.description}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '42px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: 'var(--text-primary)' }}>{plan.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>/ project</span>
                </div>

                <hr style={{ border: 0, borderTop: '1px solid var(--border-color)' }} />

                {/* Features */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
                  {plan.features.map((feat) => (
                    <li key={feat} style={{ display: 'flex', gap: '10px', alignItems: 'center', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      <Check size={16} color="var(--accent-charcoal)" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', marginTop: '10px', textAlign: 'center' }}
                >
                  Choose {plan.name} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Embedded 20 FAQs Accordion Component */}
      <FAQ />

    </div>
  );
};

export default Pricing;
