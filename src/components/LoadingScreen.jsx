import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) setTimeout(onComplete, 500); // Allow exit transition to complete
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#050505',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Subtle silver radial background pulse */}
          <motion.div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Logo container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', position: 'relative' }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '2px solid #222222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0b0f17 0%, #111827 100%)'
              }}
            >
              <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px' }} xmlns="http://www.w3.org/2000/svg">
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
            </motion.div>

            {/* Glowing Ring */}
            <motion.div
              style={{
                position: 'absolute',
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                border: '1px solid #ffffff',
                top: '-5px',
                left: '-5px',
                pointerEvents: 'none',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0, 0.6, 0], scale: [0.95, 1.1, 1.2] }}
              transition={{ duration: 2.2, ease: "easeOut", repeat: Infinity, repeatDelay: 0.3 }}
            />

            {/* Text Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '28px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.1em',
                textAlign: 'center'
              }}
            >
              URBAN <span style={{ color: 'var(--accent-gold)' }}>OWLS</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#d1d5db',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginTop: '-10px'
              }}
            >
              Growing Brands Digitally
            </motion.p>
          </div>

          {/* Loading progress bar */}
          <div style={{ width: '200px', height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginTop: '40px', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: '100%' }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                width: '80px',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, #ffffff, transparent)'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
