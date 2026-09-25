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
    <footer style={{ background: 'linear-gradient(135deg, #0b0f17 0%, #111827 100%)', borderTop: '1px solid rgba(127, 184, 255, 0.18)', padding: '80px 0 30px 0' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.06)' }}>
                <svg viewBox="0 0 100 100" style={{ width: '24px', height: '24px' }} xmlns="http://www.w3.org/2000/svg">
                  {/* Minimalist eyebrows/horns matching reference image */}
                  <path 
                    d="M 22,23 C 35,32 45,39 50,46 C 55,39 65,32 78,23 C 74,31 68,36 60,37 C 56,38 52,43 50,47 C 48,43 44,38 40,37 C 32,36 26,31 22,23 Z" 
                    fill="#FFFFFF" 
                  />
                  {/* Left Eye */}
                  <circle cx="37" cy="58" r="13" fill="#FFFFFF" />
                  <circle cx="37" cy="58" r="9.5" fill="#0b0f17" />
                  <circle cx="39.5" cy="58" r="6" fill="#FFFFFF" />
                  <circle cx="41.5" cy="56" r="2" fill="#0b0f17" />
                  
                  {/* Right Eye */}
                  <circle cx="63" cy="58" r="13" fill="#FFFFFF" />
                  <circle cx="63" cy="58" r="9.5" fill="#0b0f17" />
                  <circle cx="60.5" cy="58" r="6" fill="#FFFFFF" />
                  <circle cx="58.5" cy="56" r="2" fill="#0b0f17" />
                  
                  {/* Beak - Diamond shape */}
                  <polygon points="50,56 55,64 50,72 45,64" fill="var(--accent-gold)" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
                URBAN <span style={{ color: 'var(--accent-gold)' }}>OWLS</span>
              </span>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '24px', maxWidth: '300px', fontWeight: 300 }}>
              Building ultra-premium custom digital channels that scale, rank, and convert. We craft elite corporate websites for ambitious brands.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://www.facebook.com/profile.php?id=61592565035440&sk=photos" className="social-icon" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.16)', color: '#f3f4f6', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/urban_owls_digital/" className="social-icon" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.16)', color: '#f3f4f6', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/urban-owls-digital/" className="social-icon" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.16)', color: '#f3f4f6', transition: 'all 0.3s ease' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
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
              <li><Link to="/best-digital-marketing-kochi">Digital Marketing Kochi</Link></li>
              <li><Link to="/google-ads-agency-kochi">Google Ads Kochi</Link></li>
              <li><Link to="/social-media-marketing-kochi">Social Media Kochi</Link></li>
            </ul>
          </div>

          {/* Resources & Portfolio */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>Resources</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#8E8E93' }}>
              <li><Link to="/portfolio">Portfolio Case Studies</Link></li>
              <li><Link to="/blog">SEO & Tech Blog</Link></li>
              <li><Link to="/internship">Internship Program</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/about">Why Choose Owls</Link></li>
              <li><Link to="/pricing">Pricing Estimations</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.05em' }}>Stay Updated</h4>
            <p style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '20px', fontWeight: 300 }}>
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
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
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
        <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.12)', margin: '40px 0 30px 0' }} />

        {/* Copyright block */}
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', color: '#cbd5e1', fontSize: '13px' }}>
          <span>© {new Date().getFullYear()} Urban Owls Digital. All Rights Reserved.</span>
          <div className="footer-links" style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy" style={{ color: 'inherit' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'inherit' }}>Terms of Service</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Sitemap</a>
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
        @media (max-width: 576px) {
          .footer-grid {
            gap: 32px !important;
            margin-bottom: 40px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .footer-links {
            gap: 12px !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
