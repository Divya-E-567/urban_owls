import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: '#000000', borderTop: '1px solid #222222', padding: '80px 0 30px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #222222', overflow: 'hidden', background: '#111111' }}>
                <img src="/logo.jpg" alt="Urban Owls" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
                URBAN <span style={{ color: '#a0a0a0' }}>OWLS</span>
              </span>
            </div>
            <p style={{ color: '#8E8E93', fontSize: '14px', marginBottom: '24px', maxWidth: '300px', fontWeight: 300 }}>
              Building ultra-premium custom digital channels that scale, rank, and convert. We craft elite corporate websites for ambitious brands.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://www.instagram.com/" className="social-icon" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #222222', color: '#8e8e93', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/" className="social-icon" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #222222', color: '#8e8e93', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/" className="social-icon" aria-label="Twitter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #222222', color: '#8e8e93', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#8E8E93' }}>
              <li><Link to="/services">Website Design & UX</Link></li>
              <li><Link to="/services">Google Ranking & SEO</Link></li>
              <li><Link to="/services">AEO & GEO Optimization</Link></li>
              <li><Link to="/services">Bespoke Brand Identities</Link></li>
              <li><Link to="/services">Custom Web Applications</Link></li>
            </ul>
          </div>

          {/* Resources & Portfolio */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#8E8E93' }}>
              <li><Link to="/portfolio">Portfolio Case Studies</Link></li>
              <li><Link to="/blog">SEO & Tech Blog</Link></li>
              <li><Link to="/pricing">Frequently Asked Questions</Link></li>
              <li><Link to="/about">Why Choose Owls</Link></li>
              <li><Link to="/pricing">Pricing Estimations</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>Stay Updated</h4>
            <p style={{ color: '#8E8E93', fontSize: '14px', marginBottom: '20px', fontWeight: 300 }}>
              Subscribe to get exclusive guides on GEO, SEO hacks, and custom engineering.
            </p>
            {subscribed ? (
              <p style={{ color: '#ffffff', fontSize: '14px', fontWeight: 500 }}>
                Thank you! You have subscribed to the newsletter.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    backgroundColor: '#0c0c0c',
                    border: '1px solid #222222',
                    borderRadius: '12px',
                    padding: '14px 45px 14px 16px',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    outline: 'none',
                    transition: 'border-color 0.3s ease'
                  }}
                  className="newsletter-input"
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider line */}
        <hr style={{ border: 0, borderTop: '1px solid #111111', margin: '40px 0 30px 0' }} />

        {/* Copyright block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', color: '#444444', fontSize: '13px' }}>
          <span>© {new Date().getFullYear()} Urban Owls Digital. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/contact" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/contact" style={{ color: 'inherit' }}>Terms of Service</Link>
            <Link to="/contact" style={{ color: 'inherit' }}>Sitemap</Link>
          </div>
        </div>
      </div>
      <style>{`
        .social-icon:hover {
          color: #ffffff !important;
          border-color: #ffffff !important;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        .newsletter-input:focus {
          border-color: #ffffff !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
