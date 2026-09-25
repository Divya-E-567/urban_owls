import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Process from '../components/Process';
import Team from '../components/Team';

const About = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* Intro Header Section */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }} className="about-intro-grid">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle">Who We Are</span>
              <h1 style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>Bespoke Architecture, Clean Code.</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300, marginBottom: '24px' }}>
                Urban Owls Digital was founded on a simple principle: businesses deserve websites that look stunning and perform flawlessly. We refuse to use cheap, bloated templates. Instead, we write clean, proprietary platforms and design interfaces with Apple-level minimalist restraint.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, fontWeight: 300 }}>
                Whether you need a high-converting corporate website, a lightning-fast headless e-commerce store, or visibility campaigns on Google and AI search engines, our team of dedicated designers and software developers delivers Awwwards-quality digital assets. We are proud to serve as a leading <Link to="/best-digital-marketing-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-gold)' }}>digital marketing company in Kochi</Link>, helping brands grow organically.
              </p>
            </motion.div>

            {/* Right Image / Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                minHeight: '420px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                border: '1px solid var(--border-color)'
              }}
            >
              <img
                src="/images/hero_mockup.jpeg"
                alt="Urban Owls Digital workspace"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

            </motion.div>

          </div>

        </div>
      </section>

      {/* Process Workflow Section */}
      <Process />

      {/* Team Members Section */}
      <Team />

      <style>{`
        @media (max-width: 992px) {
          .about-intro-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }

        @media (max-width: 576px) {
          .about-intro-grid {
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
