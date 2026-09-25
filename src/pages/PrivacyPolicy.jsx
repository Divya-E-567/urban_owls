import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-white)' }}>
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Header */}
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 50px 0' }}>
            <span className="subtitle">Legal Compliance</span>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'var(--text-primary)', marginBottom: '16px' }}>
              Privacy Policy
            </h1>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--text-muted)' }}>
              Last updated: August 3, 2026
            </p>
          </div>

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              lineHeight: '1.8',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}
          >
            <div>
              <p>
                At Urban Owls Digital, we respect your privacy and are committed to protecting any personal data we process. This Privacy Policy outlines how we collect, store, use, and protect your information when you interact with our website (<a href="https://urbanowls.co" style={{ color: 'var(--accent-gold)', fontWeight: 500 }}>urbanowls.co</a>) and use our custom digital development and optimization services.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                1. Information We Collect
              </h2>
              <p style={{ marginBottom: '12px' }}>
                We collect personal information that you voluntarily provide to us when you request consultation, subscribe to our update newsletters, contact us via WhatsApp hooks, or submit contact forms.
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Identity Data:</strong> Full name, company name, and job title.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, and WhatsApp link data.</li>
                <li><strong>Project Context:</strong> Briefs, budget estimations, existing domain names, and technical requirements.</li>
                <li><strong>Technical Data:</strong> IP address, device types, operating system, and navigation behaviors collected via secure analytical cookies.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                2. How We Use Your Data
              </h2>
              <p>
                We use the collected information for the following specific purposes:
              </p>
              <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                <li>To evaluate project fit, generate estimations, and deliver bespoke digital solutions.</li>
                <li>To send updates, newsletter guides on GEO/SEO, and critical notifications.</li>
                <li>To secure and optimize our systems using firewalls and caching configurations.</li>
                <li>To analyze traffic patterns and refine our website architecture for higher conversions.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                3. Security Measures
              </h2>
              <p>
                We employ bank-grade security protocols to protect your personal information. Our platform uses Secure Socket Layer (SSL) certificates via Cloudflare, database authorization tokens, and input sanitization to ensure no malicious queries or visual injection hacks can compromise our user data.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                4. Data Sharing and Third Parties
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We only share data with trusted service providers necessary to host our platforms (e.g., Vercel, AWS) or process inquiries (e.g., CRM integrations), provided they comply with matching confidentiality terms.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                5. Cookies and Analytics
              </h2>
              <p>
                We utilize small text files (cookies) to personalize your browsing experience and monitor anonymous performance metrics. You can control cookie settings in your browser at any time, though some interface animations or contact hooks may experience limitations.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                6. Your Legal Rights
              </h2>
              <p>
                Depending on your location, you have the right to request access to, correction of, or deletion of your personal data stored with us. If you wish to execute these rights, please contact our team via the email listed below.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px', fontWeight: 700 }}>
                7. Contact Our Data Controller
              </h2>
              <p>
                For questions regarding this policy or our data practices, please reach out to our team at:
                <br />
                <strong>Email:</strong> <a href="mailto:hello@urbanowls.co" style={{ color: 'var(--accent-gold)' }}>hello@urbanowls.co</a>
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
