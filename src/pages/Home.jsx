import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />

      {/* Kochi Local SEO Signal Section */}
      <section style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', margin: '0 0 16px 0', fontWeight: 700 }}>
            Digital Marketing Company in Kochi
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, margin: '0 0 24px 0' }}>
            Urban Owls Digital helps businesses in Kochi grow through SEO, Local SEO, AEO, GEO, performance marketing, social media and conversion-focused digital solutions. We align technical page speed metrics and structured schemas to match commercial search intent. If you need immediate, geofenced leads, explore our dedicated <Link to="/google-ads-agency-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-gold)' }}>Google Ads Agency in Kochi</Link> services to launch paid search campaigns. Or, configure creative campaigns to build brand visibility using our specialized <Link to="/social-media-marketing-kochi" style={{ textDecoration: 'underline', color: 'var(--accent-gold)' }}>Social Media Marketing in Kochi</Link> services.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
            <Link 
              to="/best-digital-marketing-agency-kochi" 
              style={{ 
                fontSize: '15px', 
                fontFamily: 'var(--font-heading)', 
                color: 'var(--text-primary)', 
                fontWeight: 700, 
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Best Digital Marketing Agency in Kochi <ArrowRight size={14} style={{ color: 'var(--accent-gold)' }} />
            </Link>
            <span style={{ color: 'var(--border-color)' }}>•</span>
            <Link 
              to="/best-digital-marketing-kochi" 
              style={{ 
                fontSize: '15px', 
                fontFamily: 'var(--font-heading)', 
                color: 'var(--text-primary)', 
                fontWeight: 700, 
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Digital Marketing Company Kochi <ArrowRight size={14} style={{ color: 'var(--accent-gold)' }} />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Home;
