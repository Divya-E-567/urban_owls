import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Design',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const servicesList = [
    'Website Design',
    'Website Redesign',
    'Business Website',
    'Corporate Website',
    'Portfolio Website',
    'Personal Website',
    'Landing Page',
    'E-Commerce Website',
    'SEO & Google Ranking',
    'Local SEO & GBP Optimization',
    'AEO & GEO Optimization',
    'Website Maintenance & Support',
    'Brand Identity & UI/UX Design',
    'Custom Web Application',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please enter Name, Email, and Message.' });
      return;
    }

    const whatsappNumber = '919847040009';
    const whatsappText = `Hello Urban Owls,%0A%0AMy name is ${encodeURIComponent(formData.name)}.%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(formData.phone || 'N/A')}%0ACompany: ${encodeURIComponent(formData.company || 'N/A')}%0AService: ${encodeURIComponent(formData.service)}%0AMessage: ${encodeURIComponent(formData.message)}%0A%0APlease get back to me with a suitable plan and timeline.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }

    setStatus({ loading: false, success: true, error: null });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Website Design',
      message: ''
    });
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-white)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="subtitle">Start a Conversation</span>
          <h2>Let's Grow Your Brand</h2>
          <p>Fill out your luxury project brief or contact us directly via WhatsApp, Call, or Email. We respond within 12 hours.</p>
        </div>

        {/* Dual Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px' }} className="contact-grid">
          
          {/* Column 1: Luxury Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form-card"
            style={{
              background: 'var(--bg-cream)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.02)'
            }}
          >
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>Project Inquiry Form</h3>

            {/* Notification messages */}
            {status.success && (
              <div style={{ background: 'rgba(0, 128, 0, 0.05)', border: '1px solid green', padding: '16px', borderRadius: '12px', color: 'green', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <CheckCircle size={20} />
                <span>Thank you! Your inquiry was sent successfully. We will reach out to you shortly.</span>
              </div>
            )}

            {status.error && (
              <div style={{ background: 'rgba(255, 0, 0, 0.05)', border: '1px solid #FF3B30', padding: '16px', borderRadius: '12px', color: '#FF3B30', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <AlertTriangle size={20} />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="luxury-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="email@example.com"
                    className="luxury-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row-2">
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98470 40009"
                    className="luxury-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Ltd."
                    className="luxury-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>Required Service *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="luxury-input"
                  style={{
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23111111' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 20px center',
                    backgroundSize: '16px',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {servicesList.map(serv => (
                    <option key={serv} value={serv} style={{ background: '#ffffff', color: '#111827' }}>{serv}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your brand goals, required timeline, and feature requirements..."
                  className="luxury-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="btn-primary"
                style={{ width: '100%', marginTop: '10px' }}
              >
                {status.loading ? 'Opening WhatsApp...' : 'Send Inquiry via WhatsApp'} <Send size={16} />
              </button>
            </form>
          </motion.div>

          {/* Column 2: Maps + Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="contact-side-column"
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            {/* Quick Contact Cards */}
            <div className="contact-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              
              <a href="https://wa.me/919847040009" target="_blank" rel="noreferrer" style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.01)' }} className="contact-info-card">
                <div style={{ color: 'var(--text-primary)' }}><MessageSquare size={20} /></div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: 'var(--text-primary)' }}>Chat WhatsApp</h4>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>+91 9847040009</span>
              </a>

              <a href="tel:+919847040009" style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.01)' }} className="contact-info-card">
                <div style={{ color: 'var(--text-primary)' }}><Phone size={20} /></div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: 'var(--text-primary)' }}>Call Direct</h4>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>+91 9847040009</span>
              </a>

              <a href="mailto:hello@urbanowls.co" style={{ background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.01)' }} className="contact-info-card">
                <div style={{ color: 'var(--text-primary)' }}><Mail size={20} /></div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', color: 'var(--text-primary)' }}>Send Email</h4>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', overflow: 'hidden', textOverflow: 'ellipsis' }}>hello@urbanowls.co</span>
              </a>

            </div>

            {/* Social Channels Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', padding: '16px 20px', background: 'var(--bg-cream)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Follow Us:</span>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://www.instagram.com/urban_owlsdigital?stkn=NXEybzludHkxY2t5"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  className="contact-info-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/18xvpGePb6/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  className="contact-info-card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Google Map (Light theme styled pointing to Ernakulam) */}
            <div
              className="contact-map-card"
              style={{
                flex: 1,
                minHeight: '300px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.02)',
                position: 'relative'
              }}
            >
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=Kochi,Kerala,682306&t=&z=14&ie=UTF8&iwloc=&output=embed"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                  filter: 'grayscale(1) contrast(1.1) brightness(1.02) sepia(0.25) hue-rotate(180deg) saturate(1.3)'
                }}
                allowFullScreen=""
                loading="lazy"
              />
              {/* Overlay styling map tags */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  border: '1px solid var(--accent-charcoal)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  maxWidth: 'calc(100% - 24px)'
                }}
              >
                <MapPin size={14} color="var(--accent-charcoal)" />
                <span style={{ fontSize: '11px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)', fontWeight: 600 }}>
                  Kochi, KL, IN - 682306 (Lab)
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .contact-grid {
            gap: 28px !important;
          }
          .contact-form-card {
            padding: 24px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .contact-info-card {
            padding: 20px !important;
            align-items: center !important;
            text-align: center !important;
          }
          .contact-side-column {
            align-items: stretch !important;
          }
          .contact-map-card {
            min-height: 240px !important;
            width: 100% !important;
          }
        }
        .contact-info-card:hover {
          border-color: var(--accent-charcoal) !important;
          background: #ffffff !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
