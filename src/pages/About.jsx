import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Brain } from 'lucide-react';
import Process from '../components/Process';

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
                Whether you need a high-converting corporate website, a lightning-fast headless e-commerce store, or visibility campaigns on Google and AI search engines, our team of dedicated designers and software developers delivers Awwwards-quality digital assets.
              </p>
            </motion.div>

            {/* Right Card / Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.02)'
              }}
            >
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', marginBottom: '20px', color: 'var(--text-primary)' }}>Our Core Values</h3>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><Sparkles size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Visual Excellence</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Carefully selected fonts, luxury cream and soft gray backdrops, and fluid transitions.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><Shield size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Absolute Security</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Secure server endpoints, HTTPS setup, database sanitization, and Cloudflare shields.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><Brain size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>AI Search Visibility</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Configuring data anchors and snippets for AEO and GEO compatibility (ChatGPT/Gemini).</p>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Process Workflow Section */}
      <Process />

      <style>{`
        @media (max-width: 992px) {
          .about-intro-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
