import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  Lock, 
  Users, 
  TrendingUp, 
  Target, 
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

// Helper component for count-up animation
const Counter = ({ target, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const intervalTime = 30;
    const step = (end / totalMiliseconds) * intervalTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Lead strategy form state
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map to maximum 10 degree rotation for subtle 3D card tilt
    setRotateX(-y / (rect.height / 2) * 10);
    setRotateY(x / (rect.width / 2) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      const whatsappNumber = '919847040009';
      const whatsappText = `Hello Urban Owls,%0A%0AI'm ${encodeURIComponent(name)}.%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0ABusiness: ${encodeURIComponent(businessName || 'N/A')}%0AGoal: ${encodeURIComponent(goal || 'N/A')}%0A%0APlease send me my free lead strategy consultation.`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      if (!newWindow) {
        window.location.href = whatsappUrl;
      }

      setName('');
      setBusinessName('');
      setEmail('');
      setPhone('');
      setGoal('');
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '140px 0 60px 0',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Background Image Layer */}
      <div className="hero-bg-image" />
      
      {/* Dynamic Gradient Overlay */}
      <div className="hero-bg-overlay" />

      {/* Dynamic Particle Canvas drift (Soft dark particles) */}
      <ParticleBackground />

      <div className="container" style={{ position: 'relative', zIndex: 10, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {/* Main Columns Grid */}
        <div className="hero-grid">
          
          {/* Left Column: Copy & Actions */}
          <div className="hero-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '20px' }}
            >
              <span 
                className="hero-badge"
                style={{
                  padding: '6px 18px',
                  borderRadius: '20px',
                  border: '1px solid rgba(217, 138, 41, 0.3)',
                  background: 'rgba(217, 138, 41, 0.04)',
                  fontSize: '11px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase'
                }}
              >
                #1 LEAD GENERATION PARTNER
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: 'clamp(42px, 5.5vw, 64px)',
                lineHeight: 1.15,
                fontWeight: 800,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
                color: 'var(--accent-navy)',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              More Leads.<br />
              More Customers.<br />
              <span style={{ color: 'var(--accent-gold)' }}>More Growth.</span>
            </motion.h1>

            {/* Underline below title */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                width: '45px',
                height: '3px',
                backgroundColor: 'var(--accent-gold)',
                marginBottom: '28px',
                borderRadius: '2px',
                transformOrigin: 'left'
              }}
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hero-copy"
              style={{
                fontSize: 'clamp(15px, 2vw, 17px)',
                color: 'var(--text-secondary)',
                maxWidth: '540px',
                marginBottom: '36px',
                fontWeight: 400,
                lineHeight: 1.65
              }}
            >
              We help businesses attract, engage and convert high-quality leads through smart digital marketing and performance strategies.
            </motion.p>

            {/* Actions Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
              className="hero-ctas"
            >
              <a 
                href="#strategy-form"
                className="btn-primary-hero"
                style={{
                  background: 'var(--accent-gold)',
                  color: '#ffffff',
                  padding: '16px 28px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(197, 163, 92, 0.25)',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                <span>Get More Leads Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              
              <Link 
                to="/portfolio"
                className="btn-secondary-hero"
                style={{
                  background: 'var(--bg-card)',
                  color: 'var(--accent-navy)',
                  padding: '16px 28px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '15px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(17, 24, 39, 0.12)',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1px solid rgba(17, 24, 39, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '2px'
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--accent-navy)">
                    <polygon points="5,3 19,12 5,21"></polygon>
                  </svg>
                </div>
                <span>See How It Works</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile-Only Company Image (Wall Logo) */}
          <div className="hero-mobile-image-card">
            <img 
              src="/images/hero_office_bg.jpg" 
              alt="Urban Owls Concrete Wall Logo" 
              className="hero-mobile-image"
            />
          </div>

          {/* Right Column: Lead Strategy Form Card */}
          <motion.div
            id="strategy-form"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-wrapper"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              perspective: '1000px',
              marginTop: '-10px'
            }}
          >
            {/* Form Card wrapper with mouse-guided 3D transform */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              style={{
                background: 'linear-gradient(145deg, var(--bg-card) 0%, var(--bg-cream) 100%)',
                border: '1px solid rgba(17, 24, 39, 0.08)',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.05)',
                width: '100%',
                maxWidth: '430px',
                position: 'relative',
                zIndex: 10,
                transform: 'translateZ(0px)'
              }}
              className="lead-strategy-card"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--accent-navy)',
                      marginBottom: '20px',
                      textAlign: 'center',
                      letterSpacing: '-0.01em'
                    }}>
                      Get Your Free Lead Strategy
                    </h3>

                    {/* Name Input */}
                    <div style={{ position: 'relative', marginBottom: '12px' }}>
                      <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888888', display: 'flex', alignItems: 'center' }}>
                        <User size={16} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px 12px 42px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '14px',
                          outline: 'none',
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--accent-navy)',
                          transition: 'border-color 0.2s'
                        }}
                        className="form-input-box"
                      />
                    </div>

                    {/* Business Name Input */}
                    <div style={{ position: 'relative', marginBottom: '12px' }}>
                      <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888888', display: 'flex', alignItems: 'center' }}>
                        <Briefcase size={16} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Your Business Name" 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px 12px 42px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '14px',
                          outline: 'none',
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--accent-navy)',
                          transition: 'border-color 0.2s'
                        }}
                        className="form-input-box"
                      />
                    </div>

                    {/* Email Input */}
                    <div style={{ position: 'relative', marginBottom: '12px' }}>
                      <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888888', display: 'flex', alignItems: 'center' }}>
                        <Mail size={16} />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px 12px 42px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '14px',
                          outline: 'none',
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--accent-navy)',
                          transition: 'border-color 0.2s'
                        }}
                        className="form-input-box"
                      />
                    </div>

                    {/* Phone Input */}
                    <div style={{ position: 'relative', marginBottom: '12px' }}>
                      <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888888', display: 'flex', alignItems: 'center' }}>
                        <Phone size={16} />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px 12px 42px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '14px',
                          outline: 'none',
                          backgroundColor: 'var(--bg-card)',
                          color: 'var(--accent-navy)',
                          transition: 'border-color 0.2s'
                        }}
                        className="form-input-box"
                      />
                    </div>

                    {/* Goal Dropdown select */}
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                      <select 
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 35px 12px 14px',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          fontSize: '14px',
                          outline: 'none',
                          backgroundColor: '#ffffff',
                          color: goal ? 'var(--accent-navy)' : 'var(--text-muted)',
                          appearance: 'none',
                          cursor: 'pointer',
                          transition: 'border-color 0.2s'
                        }}
                        className="form-input-box"
                      >
                        <option value="">What is your main goal?</option>
                        <option value="leads">Increase Leads</option>
                        <option value="brand">Brand Awareness</option>
                        <option value="seo">SEO & Ranking</option>
                        <option value="ecommerce">E-Commerce Growth</option>
                        <option value="custom">Custom Web App</option>
                      </select>
                      <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#888888', display: 'flex', alignItems: 'center' }}>
                        <ChevronDown size={16} />
                      </div>
                    </div>

                    {/* Form submit button */}
                    <button 
                      type="submit"
                      style={{
                        background: 'var(--accent-gold)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '14px',
                        fontSize: '14px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'all 0.3s ease',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}
                      className="form-submit-btn"
                    >
                      <span>Get My Free Strategy</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>

                    {/* Privacy Guarantee footer */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '16px', color: 'var(--text-muted)', fontSize: '11px' }}>
                      <Lock size={12} /> <span>100% Privacy Guaranteed</span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '20px 10px' }}
                  >
                    <div style={{ color: '#27c93f', display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                      <CheckCircle2 size={54} />
                    </div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--accent-navy)', marginBottom: '10px' }}>
                      Strategy Requested!
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, fontWeight: 400, marginBottom: '20px' }}>
                      Thank you, <strong>{name}</strong>! We will review your business presence and reach out to you within 24 hours with your custom strategy.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      style={{
                        background: 'var(--accent-navy)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '10px 20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Request Another Strategy
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </div>

        {/* Trusted Partners Logos Band - Redesigned custom SVG logos */}
        <div className="hero-trust-band">
          <span className="trust-band-label">Trusted by 50+ Businesses</span>
          <div className="trust-logos">
            {/* D'HOMZ */}
            <div className="trust-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V9H22V7L12 2Z" fill="var(--accent-gold)" />
                <rect x="4" y="11" width="2" height="8" fill="var(--accent-gold)" />
                <rect x="11" y="11" width="2" height="8" fill="var(--accent-gold)" />
                <rect x="18" y="11" width="2" height="8" fill="var(--accent-gold)" />
                <rect x="2" y="20" width="20" height="2" fill="var(--accent-gold)" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05, textAlign: 'left' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: 'var(--accent-navy)', letterSpacing: '0.05em' }}>D'HOMZ</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7.5px', fontWeight: 500, color: '#888888', letterSpacing: '0.1em' }}>VILLAS</span>
              </div>
            </div>
            {/* CARE & CURE */}
            <div className="trust-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="4" fill="#0D9488" />
                <path d="M12 7V17M7 12H17" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05, textAlign: 'left' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10.5px', fontWeight: 700, color: 'var(--accent-navy)', letterSpacing: '0.02em' }}>CARE & CURE</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', fontWeight: 600, color: '#0D9488', letterSpacing: '0.08em' }}>PHARMACY</span>
              </div>
            </div>
            {/* BRIGHT MINDS */}
            <div className="trust-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="12" r="6" stroke="var(--accent-gold)" strokeWidth="2.5" />
                <circle cx="15" cy="12" r="6" stroke="#005B94" strokeWidth="2.5" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05, textAlign: 'left' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11px', fontWeight: 700, color: 'var(--accent-navy)', letterSpacing: '0.05em' }}>BRIGHT MINDS</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7px', fontWeight: 500, color: '#888888', letterSpacing: '0.08em' }}>LEARNING CENTRE</span>
              </div>
            </div>
            {/* Greenleaf */}
            <div className="trust-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22C2 22 6 14 14 10C18 8 20 5 22 2C22 2 19 4 17 8C13 16 2 22 2 22Z" fill="#16A34A" />
                <path d="M2 22C5 18 10 14 14 10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05, textAlign: 'left' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '11.5px', fontWeight: 700, color: '#16A34A', letterSpacing: '0.02em' }}>greenleaf</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7.5px', fontWeight: 600, color: '#888888', letterSpacing: '0.1em' }}>INTERIORS</span>
              </div>
            </div>
            {/* MOTOFY */}
            <div className="trust-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" />
                <path d="M12 7V12L15 15" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M18 6L21 3" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05, textAlign: 'left' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', fontWeight: 900, color: '#DC2626', letterSpacing: '0.05em' }}>MOTOFY</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '7.5px', fontWeight: 600, color: '#888888', letterSpacing: '0.1em' }}>RIDE ON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Businesses Choose Heading */}
        <div className="why-choose-bar-header">
          <h2 className="why-choose-bar-title">Why Businesses Choose Urban Owls</h2>
          <div className="why-choose-bar-line" />
        </div>

        {/* Statistics Grid Bar */}
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="stat-card-row">
            <div className="stat-circle-icon">
              <Users size={20} />
            </div>
            <div className="stat-text-block">
              <h4 className="stat-number">
                <Counter target="50" suffix="+" />
              </h4>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div className="stat-card-row">
            <div className="stat-circle-icon">
              <TrendingUp size={20} />
            </div>
            <div className="stat-text-block">
              <h4 className="stat-number">
                <Counter target="120" suffix="+" />
              </h4>
              <p className="stat-label">Projects Completed</p>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div className="stat-card-row">
            <div className="stat-circle-icon">
              <Target size={20} />
            </div>
            <div className="stat-text-block">
              <h4 className="stat-number">
                <Counter target="3" suffix="X" />
              </h4>
              <p className="stat-label">Average ROI</p>
            </div>
          </div>
          
          {/* Stat 4 */}
          <div className="stat-card-row">
            <div className="stat-circle-icon">
              <Headphones size={20} />
            </div>
            <div className="stat-text-block">
              <h4 className="stat-number">
                <Counter target="100" suffix="%" />
              </h4>
              <p className="stat-label">Dedicated Support</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/images/hero_office_bg.jpg') no-repeat center right / cover;
          z-index: 1;
        }
        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255, 255, 255, 0.95) 45%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0) 75%);
          z-index: 2;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          margin-bottom: 20px;
          position: relative;
        }
        .form-input-box:focus {
          border-color: var(--accent-gold) !important;
          box-shadow: 0 0 0 3px rgba(197, 163, 92, 0.1);
        }
        .form-submit-btn:hover {
          background: var(--accent-gold-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(197, 163, 92, 0.35) !important;
        }
        .btn-primary-hero:hover {
          background: var(--accent-gold-hover) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(197, 163, 92, 0.35) !important;
        }
        .btn-secondary-hero:hover {
          background: #f8fbff !important;
          border-color: var(--accent-navy) !important;
          transform: translateY(-2px);
        }
        .hero-trust-band {
          background: linear-gradient(145deg, var(--bg-card) 0%, var(--bg-cream) 100%);
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 16px;
          padding: 16px 28px;
          margin: 40px 0 25px 0;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          z-index: 10;
          position: relative;
          max-width: 720px;
          box-shadow: 0 4px 20px rgba(8, 17, 37, 0.04);
        }
        .trust-band-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .trust-logos {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .trust-logo-item {
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s ease;
        }
        .trust-logo-item:hover {
          transform: translateY(-2px);
        }
        .why-choose-bar-header {
          text-align: center;
          margin-bottom: 30px;
          margin-top: 15px;
          z-index: 10;
          position: relative;
        }
        .why-choose-bar-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--accent-navy);
          margin: 0;
        }
        .why-choose-bar-line {
          width: 48px;
          height: 3px;
          background: var(--accent-gold);
          margin: 10px auto 0 auto;
          border-radius: 2px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          z-index: 10;
          position: relative;
          padding-bottom: 20px;
        }
        .stat-card-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .stat-circle-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-navy);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--accent-navy);
          box-shadow: 0 4px 10px rgba(8, 17, 37, 0.15);
        }
        .stat-text-block {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 26px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          color: var(--accent-navy);
          margin: 0;
          line-height: 1.1;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 11px;
          margin: 2px 0 0 0;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .hero-mobile-image-card {
          display: none;
        }

        @media (min-width: 992px) {
          .hero-image-wrapper {
            margin-top: 90px !important;
            margin-bottom: -80px !important;
            z-index: 20 !important;
            align-self: flex-end !important;
            transform: scale(0.92);
            transform-origin: center top;
          }
        }

        @media (max-width: 1199px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
          .trust-logos {
            gap: 20px !important;
          }
        }

        @media (max-width: 991px) {
          .hero-bg-image {
            display: none !important;
          }
          .hero-bg-overlay {
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.96) 100%) !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center;
          }
          .hero-mobile-image-card {
            display: block !important;
            width: 100%;
            max-width: 440px;
            margin: 0 auto 10px auto;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(8, 17, 37, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.05);
            order: 1;
            background: #ffffff;
            padding: 12px;
          }
          .hero-mobile-image {
            width: 100%;
            height: auto;
            border-radius: 12px;
            display: block;
          }
          .hero-left {
            align-items: center;
            width: 100%;
            order: 2;
          }
          .hero-copy {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-image-wrapper {
            margin-top: 10px !important;
            width: min(100%, 430px);
            margin-left: auto;
            margin-right: auto;
            order: 3;
          }
          .hero-trust-band {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 24px !important;
            margin: 30px auto 0 auto !important;
            max-width: 100% !important;
            display: flex !important;
          }
          .trust-logos {
            justify-content: center !important;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 100px 0 40px 0 !important;
          }
          .hero-title {
            font-size: 34px !important;
            line-height: 1.15 !important;
          }
          .hero-copy {
            font-size: 14.5px !important;
            margin-bottom: 24px !important;
          }
          .hero-ctas {
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .hero-ctas a, .hero-ctas button {
            width: 100% !important;
            max-width: 290px;
            justify-content: center !important;
          }
          .lead-strategy-card {
            padding: 20px !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .stat-card-row {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
