import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Internship', path: '/internship' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '10px 0' : '18px 0',
        background: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Brand Logo - Stylized Owl SVG & Text matching the reference image */}
        <Link 
          to="/"
          className="brand-link"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flexShrink: 0 }}
        >
          {/* Custom SVG Owl face */}
          <svg viewBox="0 0 100 100" style={{ width: '42px', height: '42px' }} xmlns="http://www.w3.org/2000/svg">
            {/* Minimalist eyebrows/horns matching reference image */}
            <path 
              d="M 22,23 C 35,32 45,39 50,46 C 55,39 65,32 78,23 C 74,31 68,36 60,37 C 56,38 52,43 50,47 C 48,43 44,38 40,37 C 32,36 26,31 22,23 Z" 
              fill="var(--accent-navy)" 
            />
            {/* Left Eye */}
            <circle cx="37" cy="58" r="13" fill="var(--accent-navy)" />
            <circle cx="37" cy="58" r="9.5" fill="#FFFFFF" />
            <circle cx="39.5" cy="58" r="6" fill="var(--accent-navy)" />
            <circle cx="41.5" cy="56" r="2" fill="#FFFFFF" />
            
            {/* Right Eye */}
            <circle cx="63" cy="58" r="13" fill="var(--accent-navy)" />
            <circle cx="63" cy="58" r="9.5" fill="#FFFFFF" />
            <circle cx="60.5" cy="58" r="6" fill="var(--accent-navy)" />
            <circle cx="58.5" cy="56" r="2" fill="#FFFFFF" />
            
            {/* Beak - Diamond shape */}
            <polygon points="50,56 55,64 50,72 45,64" fill="var(--accent-gold)" />
          </svg>

          {/* Logo Brand Text */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span className="brand-text" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--accent-navy)' }}>
              URBAN <span style={{ color: 'var(--accent-gold)' }}>OWLS</span>
            </span>
            <span className="brand-tagline" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <span style={{ color: 'var(--accent-gold)', fontWeight: 900 }}>—</span> GROWING BRANDS DIGITALLY <span style={{ color: 'var(--accent-gold)', fontWeight: 900 }}>—</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '28px', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.path} style={{ position: 'relative' }}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => ({
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14.5px',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)',
                    padding: '8px 0',
                    display: 'block',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  })}
                  className="nav-item-link"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={13} style={{ opacity: 0.8 }} />}
                  </div>
                  {location.pathname === link.path && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--accent-gold)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA Button matching the reference image layout */}
          <Link 
            to="/contact"
            className="navbar-cta-btn" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 6px 6px 16px',
              fontSize: '13.5px',
              fontWeight: 600,
              borderRadius: '30px', 
              background: 'var(--accent-navy)', 
              color: 'var(--text-light)',
              fontFamily: "'Space Grotesk', sans-serif",
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(8, 17, 37, 0.15)'
            }}
          >
            <span>Get More Leads</span>
            <div 
              className="arrow-circle"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>
        </nav>

        {/* Mobile Menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none', color: 'var(--accent-navy)' }}
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-menu-panel"
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              width: '100%',
              height: 'calc(100vh - 60px)',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '50px',
              gap: '24px',
              borderTop: '1px solid rgba(0, 0, 0, 0.05)',
              overflowY: 'auto',
              paddingBottom: '40px'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="mobile-menu-link"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '20px',
                  fontWeight: 500,
                  color: location.pathname === link.path ? 'var(--accent-navy)' : 'var(--text-secondary)',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="navbar-cta-btn"
              style={{ 
                marginTop: '15px', 
                padding: '12px 30px', 
                width: '80%', 
                background: 'var(--accent-navy)', 
                color: 'var(--text-light)', 
                borderRadius: '30px',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '15px',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Get More Leads
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline styles for responsive and hover interactions */}
      <style>{`
        .mobile-toggle-btn {
          display: none;
        }
        .brand-link {
          min-width: 0;
        }
        .nav-item-link:hover {
          color: var(--accent-gold) !important;
        }
        .navbar-cta-btn:hover {
          background: var(--accent-gold) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-gold-glow) !important;
        }
        .navbar-cta-btn:hover .arrow-circle {
          background: var(--accent-navy) !important;
          transform: translateX(3px);
        }
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        @media (max-width: 576px) {
          .brand-text {
            font-size: 17px !important;
          }
          .brand-tagline {
            font-size: 6.5px !important;
          }
          .mobile-menu-panel {
            padding-top: 30px !important;
            gap: 20px !important;
          }
          .mobile-menu-link {
            font-size: 18px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
