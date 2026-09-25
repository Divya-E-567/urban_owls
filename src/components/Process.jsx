import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Search, Palette, Code, TrendingUp, CheckCircle, Rocket, Shield } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: <Compass size={22} />,
    title: 'Discover',
    description: 'We align with your corporate values, identify target demographics, set baseline KPIs, and draft functional design scopes.'
  },
  {
    step: '02',
    icon: <Search size={22} />,
    title: 'Research',
    description: 'Niche competitor benchmarking, search intent categorization, keyword map outlines, and initial AI semantic architecture mapping.'
  },
  {
    step: '03',
    icon: <Palette size={22} />,
    title: 'UI Design',
    description: 'Apple-level minimalist interfaces. High-fidelity glassmorphism, responsive layout structures, and interactive prototypes.'
  },
  {
    step: '04',
    icon: <Code size={22} />,
    title: 'Development',
    description: 'Clean, lightweight custom programming. Modular frontends combined with robust security protocols and structured, high-speed data pipelines.'
  },
  {
    step: '05',
    icon: <TrendingUp size={22} />,
    title: 'SEO Optimization',
    description: 'Schema integrations, semantic HTML outlines, Alt texts, internal linking configurations, and localized metadata setups.'
  },
  {
    step: '06',
    icon: <CheckCircle size={22} />,
    title: 'Rigorous Testing',
    description: 'Cross-browser compatibility reviews, form validations, API responses logs, speed optimizations, and 95+ PageSpeed scores validation.'
  },
  {
    step: '07',
    icon: <Rocket size={22} />,
    title: 'Launch',
    description: 'Safe web hosting deployments, Cloudflare SSL/DNS set up, CDN caches activation, and Google Search Console index submissions.'
  },
  {
    step: '08',
    icon: <Shield size={22} />,
    title: 'Growth',
    description: 'AEO/GEO optimization sweeps, citation sweeps, Google Business Profile tracking, and analytical review setups to accelerate client traffic.'
  }
];

const Process = () => {
  return (
    <section id="process" style={{ background: 'var(--bg-white)', borderTop: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }} className="section-padding">
      {/* Background design accents */}
      <div style={{ position: 'absolute', right: '-20%', top: '30%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,0,0,0.01) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '-20%', bottom: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,0,0,0.01) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="subtitle">Workflow Timeline</span>
          <h2>Our Process</h2>
          <p>How we engineer elite, search-optimized web channels that turn visitors into high-value clients.</p>
        </div>

        {/* Timeline body */}
        <div className="timeline-container">
          
          {/* Timeline Center Line */}
          <div className="timeline-center-line" />

          {/* Timeline Nodes */}
          {processSteps.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.step}
                className={`timeline-row ${isEven ? 'row-even' : 'row-odd'}`}
              >
                {/* Node Box */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="timeline-card"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="process-icon-box" style={{ color: 'var(--accent-gold)', background: 'rgba(8, 17, 37, 0.04)', border: '1px solid rgba(8, 17, 37, 0.08)', width: '38px', height: '38px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                        {item.icon}
                      </div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</h4>
                    </div>
                    <span className="process-step-num" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '32px', fontWeight: 700, opacity: 0.08, color: 'var(--text-primary)', transition: 'all 0.3s ease' }}>
                      {item.step}
                    </span>
                  </div>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, fontWeight: 300 }}>
                    {item.description}
                  </p>
                </motion.div>

                {/* Timeline center bullet point */}
                <div className="timeline-bullet" />
              </div>
            );
          })}
        </div>

      </div>
      <style>{`
        .timeline-card:hover .process-icon-box {
          background-color: var(--accent-navy) !important;
          color: #ffffff !important;
          transform: scale(1.05);
        }
        .timeline-card:hover .process-step-num {
          opacity: 0.25 !important;
          color: var(--accent-gold) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Process;
