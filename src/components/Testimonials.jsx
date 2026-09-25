import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Eleanor Sterling',
    role: 'CEO, Sterling Luxury Estates',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'Urban Owls Digital delivered a website that completely redefined our brand identity. The Apple-like animations and speed have significantly improved our lead conversions. Truly a $100,000 corporate quality experience!'
  },
  {
    name: 'Dr. Marcus Vance',
    role: 'Founder, Vance Medical Group',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'Our maps ranking skyrocketed in weeks thanks to their Local SEO sweeps. We are receiving double the booking inquiries since launching the new responsive site. Highly professional and engineering-focused team.'
  },
  {
    name: 'Aria Takahashi',
    role: 'Marketing VP, Kensho Apparel',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'Our knowledge of GEO and AEO is unmatched. When clients query voice assistants or AI chat tools for luxury custom designs, our store is the primary recommendation. Best investment we made this year.'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const item = testimonialsData[current];

  return (
    <section id="testimonials" style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }} className="section-padding">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="subtitle">Client Endorsements</span>
          <h2>Client Reviews</h2>
          <p>Read what founders, marketing leaders, and medical professionals say about partnering with Urban Owls Digital.</p>
        </div>

        {/* Carousel Block */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', minHeight: '320px' }}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '40px 60px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.02)',
                textAlign: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              className="testimonial-card"
            >
              {/* Quote Mark Icon */}
              <div style={{ color: 'rgba(0, 0, 0, 0.02)', position: 'absolute', top: '20px', left: '30px' }}>
                <Quote size={54} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-charcoal)" color="var(--accent-charcoal)" />
                ))}
              </div>

              {/* Review Quote text */}
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2.5vw, 18px)', color: 'var(--text-primary)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7, marginBottom: '30px', width: '100%', maxWidth: '620px' }}>
                "{item.quote}"
              </p>

              {/* Avatar Portrait & Info */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid var(--border-color)', overflow: 'hidden' }}>
                  <img src={item.photo} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{item.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: '#ffffff',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
              }}
              className="carousel-nav-btn"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={handleNext}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
                background: '#ffffff',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
              }}
              className="carousel-nav-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
      <style>{`
        .carousel-nav-btn:hover {
          color: #ffffff !important;
          border-color: var(--accent-charcoal) !important;
          background: var(--accent-charcoal) !important;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 576px) {
          .testimonial-card {
            padding: 28px 18px !important;
            min-height: 360px !important;
            align-items: center !important;
            justify-content: center !important;
          }
          .testimonial-card p {
            font-size: 15px !important;
            line-height: 1.65 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
