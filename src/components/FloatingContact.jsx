import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Mail, MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(true);

  const contactOptions = [
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp Chat',
      color: '#111827',
      href: 'https://wa.me/919847040009?text=Hi%20Urban%20Owls,%20I%20would%20like%20to%20discuss%20a%20project!'
    },
    {
      icon: <Phone size={20} />,
      label: 'Call Agency',
      color: '#111827',
      href: 'tel:+919847040009'
    },
    {
      icon: <Mail size={20} />,
      label: 'Send Email',
      color: '#111827',
      href: 'mailto:hello@urbanowls.co?subject=Project%20Inquiry'
    }
  ];

  return (
    <div className="floating-contact-shell" style={{ position: 'fixed', bottom: '32px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
      
      {/* Expanded Actions */}
      <AnimatePresence>
        {(isOpen || true) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
            {contactOptions.map((opt, index) => (
              <motion.a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none'
                }}
              >
                {/* Tooltip Label */}
                <span
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '999px',
                    padding: '6px 11px',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    whiteSpace: 'nowrap',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '34px'
                  }}
                >
                  {opt.label}
                </span>

                {/* Circular Action Button */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: `1px solid var(--border-color)`,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    userSelect: 'none'
                  }}
                  className="floating-action-button"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-charcoal)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {opt.icon}
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Primary Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-charcoal)',
          border: '1.5px solid var(--accent-charcoal)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer'
        }}
        animate={{
          boxShadow: isOpen 
            ? '0 10px 30px rgba(0, 0, 0, 0.05)' 
            : ['0 10px 30px rgba(0, 0, 0, 0.1)', '0 10px 30px rgba(0, 0, 0, 0.2)', '0 10px 30px rgba(0, 0, 0, 0.1)']
        }}
        transition={{
          boxShadow: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare size={24} />
      </motion.button>
      
      <style>{`
        .floating-contact-shell {
          opacity: 1;
        }

        @media (max-width: 576px) {
          .floating-contact-shell {
            bottom: 16px !important;
            right: 16px !important;
            gap: 12px !important;
          }
          .floating-action-button {
            width: 46px !important;
            height: 46px !important;
          }
          .floating-contact-shell a span {
            font-size: 12px !important;
            padding: 6px 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingContact;
