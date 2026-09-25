import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Briefcase, 
  Clock, 
  Laptop, 
  Mail, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  Terminal, 
  Users, 
  ChevronDown, 
  ChevronUp,
  Search,
  BookOpen,
  DollarSign,
  Heart
} from 'lucide-react';

const Internship = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const programModules = [
    {
      title: "Live Client Projects",
      desc: "Work on active, real-world projects with actual marketing budgets and concrete client expectations.",
      icon: <Briefcase className="module-icon" size={24} />
    },
    {
      title: "Meta & Google Ads",
      desc: "Set up, scale, and optimize conversion campaigns. Master targeting, custom audiences, pixel tracking, and bid adjustments.",
      icon: <DollarSign className="module-icon" size={24} />
    },
    {
      title: "Advanced SEO & GEO",
      desc: "Implement modern search engine optimizations and Generative Engine Optimization for AI searches (ChatGPT, Perplexity).",
      icon: <Terminal className="module-icon" size={24} />
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Learn the secrets of copywriting, user behavioral flow, UX design, and conversion rate optimization (CRO).",
      icon: <Laptop className="module-icon" size={24} />
    },
    {
      title: "Lead Generation Engines",
      desc: "Architect automated lead capture workflows, CRM integrations, and multi-channel marketing automation sequences.",
      icon: <Users className="module-icon" size={24} />
    },
    {
      title: "AI-Powered Workflows",
      desc: "Harness modern LLMs, automation scripts, and AI assets to complete professional marketing and development tasks in half the time.",
      icon: <BookOpen className="module-icon" size={24} />
    }
  ];

  const termsList = [
    {
      id: 1,
      title: "1. Nature of the Internship",
      content: "This is a Self-Learning + Practical Work-Based Internship Program. It is not an A-to-Z classroom-style training course or a coaching program. Urban Owls Digital provides resources, client projects, and mentorship guidance, but interns must research, study, and apply concepts independently."
    },
    {
      id: 2,
      title: "2. Program Duration",
      content: "The internship duration is approximately 100+ working days (around 4 months). Urban Owls Digital reserves the absolute right to modify or adjust this duration based on the company's business requirements and project schedules."
    },
    {
      id: 3,
      title: "3. Work Mode & Location",
      content: "The internship is 100% remote (Work from Home). All coordination, task reporting, and communications occur online, operating on a flexible task-based working model."
    },
    {
      id: 4,
      title: "4. Required Facilities & Equipment",
      content: "Interns must provide their own workspace and equipment, including: a Laptop or Desktop computer (highly recommended), a Smartphone, a stable and high-speed Internet connection, an active Gmail account, WhatsApp for communication, and the willingness to learn and use essential online software and tools."
    },
    {
      id: 5,
      title: "5. Self-Learning Policy",
      content: "Urban Owls Digital provides high-quality learning resources, practical assignments, live client projects, mentor guidance, feedback, performance reviews, and career support. However, daily video classes or interactive live lectures should not be expected. Interns are expected to learn independently, make full use of the provided learning materials, conduct research, and effectively utilize search engines (Google), developer documentation, tutorials, and AI tools."
    },
    {
      id: 6,
      title: "6. Scope of Work & Responsibilities",
      content: "During the internship, you may be assigned tasks in the following fields: Meta Ads, Google Ads, SEO (Search Engine Optimization), Social Media Marketing, Content Creation, Lead Generation, Website & Landing Page Tasks, AI-Based Marketing Workflows, Research Work, Client Projects, and Reporting & Analytics."
    },
    {
      id: 7,
      title: "7. Assignments & Submission Deadlines",
      content: "All assignments, projects, and reports must be completed and submitted within the specified timelines. Repeated delays, substandard performance, or continuous unexplained inactivity may lead to termination of the internship."
    },
    {
      id: 8,
      title: "8. Communication Protocols",
      content: "Interns must utilize WhatsApp, Email, Google Meet, or other platforms designated by the company for all official communications. Professional communication etiquette and responsiveness are mandatory."
    },
    {
      id: 9,
      title: "9. Attendance & Engagement",
      content: "Consistent participation and active engagement are mandatory. Unnotified, prolonged inactivity will result in immediate termination of the internship."
    },
    {
      id: 10,
      title: "10. Professional Code of Conduct",
      content: "All interns are expected to maintain professional behavior. Under no circumstances will copying, plagiarism, fake reports, data fabrication, copyright infringement, data theft, harassment, abusive language, or actions damaging to the company's reputation be tolerated."
    },
    {
      id: 11,
      title: "11. Confidentiality & Non-Disclosure",
      content: "All information obtained during the internship, including client details, marketing strategies, system credentials, business documentation, reports, designs, and campaign data, is strictly confidential. You may not copy, share, disclose, sell, or use this information for personal or commercial gain without prior written consent from Urban Owls Digital."
    },
    {
      id: 12,
      title: "12. Intellectual Property Rights",
      content: "All intellectual property rights for posters, creative designs, web code, landing pages, content copy, campaign structures, research documents, and software assets generated by you during this internship belong solely and exclusively to Urban Owls Digital or its respective clients."
    },
    {
      id: 13,
      title: "13. Registration & Certificate Fee",
      content: "An administrative and certificate processing fee of ₹850/- (INR Eight Hundred and Fifty Only) is applicable. This fee covers administrative costs and is strictly non-refundable under any circumstances."
    },
    {
      id: 14,
      title: "14. Certification Eligibility Criteria",
      content: "To qualify for the Internship Completion Certificate, the intern must successfully complete the designated program duration, submit all major assignments and projects, maintain professional conduct, and receive final performance approval from their mentor. The company reserves the absolute right to withhold the certificate from interns who fail to satisfy these standards."
    },
    {
      id: 15,
      title: "15. Job Placement & Future Opportunities",
      content: "This internship program does not guarantee employment. However, outstanding performers who demonstrate exceptional skills, dedication, and professionalism may be considered for full-time or part-time career opportunities with Urban Owls Digital, subject to business vacancies and company recruitment procedures."
    },
    {
      id: 16,
      title: "16. Right of Termination",
      content: "Urban Owls Digital reserves the absolute right to terminate an intern's position at any time, with or without prior notice, in cases of policy violation, breaches of confidentiality, continuous inactivity, poor task performance, professional misconduct, fraud, or activities detrimental to company or client interests."
    },
    {
      id: 17,
      title: "17. Privacy & Data Use Policy",
      content: "Personal details submitted during the application process will be kept confidential and used solely for recruitment and internship administration. Third-party data sharing is prohibited except where required by law."
    },
    {
      id: 18,
      title: "18. Policy & Terms Updates",
      content: "The company reserves the right to modify these terms, the program structure, guidelines, and schedules at its sole discretion. Any changes will become effective immediately upon their official publication."
    },
    {
      id: 19,
      title: "19. Governing Law & Jurisdiction",
      content: "This internship program and these terms shall be governed by, interpreted, and enforced in accordance with the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of applicable courts in India."
    },
    {
      id: 20,
      title: "20. Complete Acceptance & Consent",
      content: "By submitting your application and registering for this Remote Internship Program, you confirm that you have read, understood, and voluntarily accepted all the terms and conditions outlined above."
    }
  ];

  const filteredTerms = termsList.filter(term => 
    term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ paddingTop: '80px', background: 'var(--bg-white)', overflowX: 'hidden' }}>
      
      {/* 1. Hero Section */}
      <section style={{ background: 'var(--bg-cream)', borderBottom: '1px solid var(--border-color)', position: 'relative' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }} className="hero-grid">
            
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Award size={14} style={{ color: 'var(--accent-gold)' }} />
                EXCLUSIVE REMOTE INTERNSHIP PROGRAM
              </span>
              <h1 style={{ marginBottom: '20px', lineHeight: 1.1, color: 'var(--text-primary)' }}>
                Learned the Skills? <span style={{ color: 'var(--accent-gold)' }}>Now Build the Experience.</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.7, fontWeight: 300, marginBottom: '30px' }}>
                A highly structured 100+ working days remote internship in Digital Marketing & Website Development. Not for beginners. Crafted specifically for future professionals to bridge the gap between theory and actual client campaigns.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#apply" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#terms-and-conditions" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <span>Terms &amp; Conditions</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '1px solid var(--border-color)',
                minHeight: '360px'
              }}
              className="hero-image-wrapper"
            >
              <img
                src="/images/internship_banner.png"
                alt="Urban Owls Digital Internship Workspace"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  position: 'absolute',
                  inset: 0
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(8,17,37,0.7) 100%)'
              }} />
              <div style={{
                position: 'absolute',
                left: '24px',
                right: '24px',
                bottom: '24px',
                color: '#fff'
              }}>
                <span className="subtitle" style={{ color: '#fff', opacity: 0.9, marginBottom: '6px', fontSize: '11px' }}>
                  INDUSTRY WORKFLOWS
                </span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', margin: 0, lineHeight: 1.3, color: '#FFFFFF' }}>
                  Work on Live client accounts and build a portfolio that sells.
                </h3>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. The Experience Gap Section */}
      <section style={{ background: '#ffffff' }} className="section-padding">
        <div className="container">
          <div className="section-header" style={{ maxWidth: '800px' }}>
            <span className="subtitle">The Experience Gap</span>
            <h2>You Already Learned. Now It's Time to Work.</h2>
            <p>
              Struggling to secure your first job because every company demands experience? You are not alone. 
              Certificates show you listened; projects prove you can deliver. Our mission is to bridge this exact gap.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="luxury-card" style={{ padding: '30px' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><Briefcase size={36} /></div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>Client-Centric Projects</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', fontWeight: 300, lineHeight: 1.6 }}>
                Graduate from toy exercises. You will manage campaigns and audit environments that belong to actual corporate clients.
              </p>
            </div>
            
            <div className="luxury-card" style={{ padding: '30px' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><Clock size={36} /></div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>Professional Workflow</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', fontWeight: 300, lineHeight: 1.6 }}>
                Understand reporting, agency file-structures, documentation, data analytics, and performance KPI metrics.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '30px' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '16px' }}><ShieldCheck size={36} /></div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>Industry Mentor Review</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', fontWeight: 300, lineHeight: 1.6 }}>
                Receive structured, granular feedback on your code and ad copy. We push you to deliver production-level output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who is this for vs Not for */}
      <section style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="audience-split">
            
            {/* Who should apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(8, 17, 37, 0.05)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-premium)'
              }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', marginBottom: '24px', fontSize: '22px' }}>
                <CheckCircle2 style={{ color: '#2e7d32' }} size={26} />
                Who Should Apply
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "Digital Marketing Graduates seeking real-world proof of capability.",
                  "Website Development Learners wanting to code production-grade pages.",
                  "Self-Learners who need structured project guidelines.",
                  "Online Course Graduates needing to escape theoretical tutorials.",
                  "Freshers with basic conceptual knowledge who want to build a career.",
                  "Professionals looking to build an unignorable case study portfolio."
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.5, fontWeight: 300 }}>
                    <CheckCircle2 size={16} style={{ color: '#2e7d32', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who is it NOT for */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(8, 17, 37, 0.05)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: 'var(--shadow-premium)'
              }}
            >
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', marginBottom: '24px', fontSize: '22px' }}>
                <XCircle style={{ color: '#c62828' }} size={26} />
                This Program is NOT For
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "Absolute beginners with zero pre-existing knowledge of web/marketing.",
                  "Candidates expecting daily, A-to-Z classroom-style lecturing.",
                  "Individuals looking for a spoon-fed coaching institute.",
                  "People unwilling to spend hours researching and reading documents independently.",
                  "Anyone expecting certificate handouts without putting in hard work.",
                  "Those unwilling to operate under strict deadline management."
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '14.5px', lineHeight: 1.5, fontWeight: 300 }}>
                    <XCircle size={16} style={{ color: '#c62828', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. What you will experience */}
      <section style={{ background: '#ffffff' }} className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Practical Experience</span>
            <h2>What You Will Experience &amp; Master</h2>
            <p>Accelerate your growth by executing critical business tasks using state-of-the-art marketing technology.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {programModules.map((mod, index) => (
              <motion.div
                key={index}
                className="luxury-card"
                style={{ padding: '35px' }}
                whileHover={{ y: -5 }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(197, 163, 92, 0.08)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {mod.icon}
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '18px' }}>{mod.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', fontWeight: 300, lineHeight: 1.6 }}>
                  {mod.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Program Structure & Fees */}
      <section style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }} className="structure-grid">
            
            {/* Info Grid */}
            <div>
              <span className="subtitle">Operational Details</span>
              <h2 style={{ marginBottom: '30px' }}>Structure &amp; Mechanics</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }}><Clock size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>100+ Working Days Duration</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 300 }}>Approximately 4 months of progressive hands-on learning, tasks, and client reports.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }}><Laptop size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>100% Remote / Work From Home</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 300 }}>Work in a flexible, self-reliant environment utilizing professional online communications.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }}><Award size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Internship Certificate &amp; Portfolio</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 300 }}>Earn a professional validation certificate and build case studies from active projects.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }}><Users size={20} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Future Career Integration</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 300 }}>Outstanding performers may be considered for future part-time or full-time roles with Urban Owls Digital.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'var(--accent-navy)',
                borderRadius: '24px',
                padding: '40px',
                color: '#ffffff',
                boxShadow: '0 20px 40px rgba(8, 17, 37, 0.25)',
                border: '1px solid rgba(197, 163, 92, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="fee-card"
            >
              {/* Subtle background glow */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(197,163,92,0.18) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <span className="subtitle" style={{ color: 'var(--accent-gold)' }}>ADMINISTRATIVE &amp; PROCESSING</span>
              <h3 style={{ color: '#ffffff', fontSize: '24px', marginBottom: '16px' }}>Registration &amp; Certificate Fee</h3>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', margin: '20px 0' }}>
                <span style={{ fontSize: '48px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)' }}>₹850</span>
                <span style={{ fontSize: '16px', color: '#cbd5e1', fontWeight: 300 }}>Only / Non-Refundable</span>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, fontWeight: 300, marginBottom: '24px' }}>
                This fee covers processing, access to internal training documentation resources, software templates, evaluation, and certificate generation administration.
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                <a href="#apply" className="btn-primary" style={{ width: '100%', background: 'var(--accent-gold)', borderColor: 'var(--accent-gold)', color: '#ffffff' }}>
                  Start Application
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Legal / T&C Section */}
      <section id="terms-and-conditions" style={{ background: '#ffffff' }} className="section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 40px 0' }}>
            <span className="subtitle">Legal Terms &amp; Policies</span>
            <h2>Program Terms &amp; Conditions</h2>
            <p style={{ fontSize: '15px' }}>
              Please read these terms carefully before submitting your application. By applying, you agree to comply with and be bound by all clauses.
            </p>
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', marginBottom: '30px' }}>
            <Search 
              size={18} 
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} 
            />
            <input 
              type="text" 
              placeholder="Search terms or clauses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 48px',
                fontSize: '15px',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                background: 'var(--bg-gray)',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              className="term-search"
            />
          </div>

          {/* Accordion container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => {
                const isOpen = activeAccordion === term.id;
                return (
                  <div 
                    key={term.id}
                    style={{
                      border: '1px solid var(--border-color)',
                      borderRadius: '14px',
                      background: isOpen ? 'var(--bg-cream)' : 'var(--bg-gray)',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(term.id)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'left',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      <span>{term.title}</span>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{
                            padding: '0 24px 24px 24px',
                            color: 'var(--text-secondary)',
                            fontSize: '14.5px',
                            lineHeight: 1.7,
                            fontWeight: 300,
                            borderTop: '1px solid rgba(8, 17, 37, 0.04)'
                          }}>
                            {term.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>
                No matching terms found. Try checking your spelling.
              </p>
            )}
          </div>

          <div style={{ marginTop: '24px', padding: '12px 18px', background: 'rgba(197, 163, 92, 0.06)', borderRadius: '12px', border: '1px solid rgba(197, 163, 92, 0.15)' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <ShieldCheck size={14} style={{ color: 'var(--accent-gold)' }} />
              These terms constitute a legally binding agreement upon submission of your registration fee. Last updated: August 6, 2026.
            </p>
          </div>

        </div>
      </section>

      {/* 7. Call To Action (Application Details) */}
      <section id="apply" style={{ background: 'linear-gradient(135deg, #0b0f17 0%, #111827 100%)', borderTop: '1px solid rgba(255,255,255,0.08)' }} className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: '#ffffff' }}>
            
            <span className="subtitle" style={{ color: 'var(--accent-gold)' }}>BUILD YOUR PORTFOLIO</span>
            <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>Apply For the Internship Today</h2>
            <p style={{ color: '#cbd5e1', fontSize: '16px', fontWeight: 300, lineHeight: 1.8, marginBottom: '32px' }}>
              Submit your curriculum vitae (CV) along with a recent photograph. Our team will review your background knowledge and notify successful applicants within 3-5 working days.
            </p>

            {/* Quick stats / contacts grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }} className="cta-contact-grid">
              
              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Mail size={24} style={{ color: 'var(--accent-gold)', marginBottom: '12px' }} />
                <h4 style={{ color: '#ffffff', fontSize: '15px', marginBottom: '4px' }}>Email Application</h4>
                <a href="mailto:hello@urbanowls.co" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: 500 }}>hello@urbanowls.co</a>
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Phone size={24} style={{ color: 'var(--accent-gold)', marginBottom: '12px' }} />
                <h4 style={{ color: '#ffffff', fontSize: '15px', marginBottom: '4px' }}>WhatsApp Direct</h4>
                <a href="https://wa.me/919961310009" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: 500 }}>+91 99613 10009</a>
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Laptop size={24} style={{ color: 'var(--accent-gold)', marginBottom: '12px' }} />
                <h4 style={{ color: '#ffffff', fontSize: '15px', marginBottom: '4px' }}>Official Portal</h4>
                <a href="https://www.urbanowls.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: 500 }}>www.urbanowls.co</a>
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/919961310009?text=Hi%20Urban%20Owls%20Digital,%20I%20am%20interested%20in%20applying%20for%20the%20Remote%20Internship%20Program.%20I%20have%20my%20CV%20and%20photograph%20ready." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ 
                  background: '#25D366', 
                  borderColor: '#25D366', 
                  color: '#ffffff', 
                  boxShadow: '0 8px 20px rgba(37, 211, 102, 0.2)' 
                }}
              >
                <span>Apply via WhatsApp</span>
                <Phone size={16} />
              </a>
              
              <a 
                href="mailto:hello@urbanowls.co?subject=Application%20for%20Remote%20Internship%20Program&body=Hi%20Urban%20Owls%20Team,%0A%0AAttached%20is%20my%20CV%20and%20recent%20photograph%20for%20the%20Remote%20Internship%20Program." 
                className="btn-secondary" 
                style={{ 
                  color: '#ffffff', 
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              >
                <span>Apply via Email</span>
                <Mail size={16} />
              </a>
            </div>

            <p style={{ color: 'var(--text-muted-light)', fontSize: '12px', marginTop: '30px', fontWeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              Made with <Heart size={10} style={{ color: 'var(--accent-gold)', fill: 'var(--accent-gold)' }} /> for future digital professionals.
            </p>

          </div>
        </div>
      </section>

      {/* Embedded CSS overrides for layout and grids */}
      <style>{`
        .term-search::placeholder {
          color: var(--text-muted);
          opacity: 0.8;
        }
        
        .term-search:focus {
          border-color: var(--accent-navy) !important;
          box-shadow: 0 0 10px rgba(8, 17, 37, 0.05);
        }

        .module-icon {
          transition: transform 0.3s ease;
        }

        .luxury-card:hover .module-icon {
          transform: scale(1.1);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          
          .hero-image-wrapper {
            min-height: 300px !important;
          }
          
          .structure-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 768px) {
          .audience-split {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .fee-card {
            padding: 30px !important;
          }
        }

        @media (max-width: 576px) {
          .cta-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          
          .fee-card {
            padding: 24px !important;
          }
        }
      `}</style>

    </div>
  );
};

export default Internship;
