import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const teamData = [
  {
    name: 'Jijeesh Minerva',
    role: 'Founder & Chief Executive Officer (CEO)',
    image: '/images/team/Jijeesh Minerva.jpeg',
    description: 'Jijeesh Minerva is the founder and visionary behind Urban Owls Digital. The vision, mission, and long-term direction of the company were conceived through his entrepreneurial mindset, passion for innovation, and commitment to transforming businesses through digital excellence.\n\nAs Chief Executive Officer, he provides strategic leadership across every aspect of the organization, including corporate strategy, business development, innovation, client success, brand positioning, and organizational growth. His leadership is driven by integrity, creativity, and a relentless pursuit of excellence.\n\nHis mission is to empower businesses with world-class digital solutions that strengthen brand visibility, accelerate sustainable growth, and deliver measurable business results.',
    responsibilities: [
      'Corporate Leadership',
      'Business Strategy & Growth',
      'Digital Innovation',
      'Client Success',
      'Brand Development',
      'Strategic Partnerships',
      'Organizational Development',
      'Business Expansion'
    ]
  },
  {
    name: 'Binu T B',
    role: 'Co-Founder & Director – Business Strategy',
    image: '/images/team/Binu TB.jpeg',
    description: "Binu leads strategic business development, partnership management, and regional expansion initiatives. He plays a key role in strengthening client relationships, identifying new business opportunities, and driving Urban Owls Digital's presence across Tamil Nadu and emerging markets.",
    responsibilities: [
      'Business Development',
      'Strategic Partnerships',
      'Regional Expansion',
      'Corporate Relations',
      'Client Acquisition',
      'Sales Strategy',
      'Market Development',
      'Business Planning'
    ]
  },
  {
    name: 'Divya E',
    role: 'Head of Digital Operations & Technology',
    image: '/images/team/Divya_web.jpeg',
    description: 'Divya leads the Technology and Digital Operations division at Urban Owls Digital. She oversees website development, digital transformation, project management, team leadership, digital infrastructure, and technology implementation.\n\nWith expertise in modern web technologies, UI/UX, SEO, digital marketing, and business automation, she ensures every digital solution delivers exceptional user experiences, outstanding performance, and measurable business outcomes.\n\nShe also manages project execution, quality assurance, workflow optimization, client communication, and operational efficiency, ensuring every project is delivered on time and to the highest professional standards.',
    responsibilities: [
      'Digital Operations Leadership',
      'Technology Management',
      'Website Development',
      'UI/UX Design & User Experience',
      'Project Management',
      'Team Leadership',
      'SEO & Performance Optimization',
      'Digital Marketing Strategy',
      'Client Relationship Management',
      'Quality Assurance',
      'Website Maintenance',
      'Technical Innovation'
    ]
  },
  {
    name: 'Mahesh Prabhuddan',
    role: 'Business Operations Executive',
    image: '/images/team/Mahesh Prabhuddan.jpeg',
    description: 'Mahesh supports business operations by coordinating marketing activities, project execution, administrative processes, and client communication. He plays an important role in ensuring operational efficiency and seamless project delivery.',
    responsibilities: [
      'Business Operations',
      'Marketing Support',
      'Project Coordination',
      'Administrative Management',
      'Client Support',
      'Documentation',
      'Process Coordination',
      'Team Collaboration'
    ]
  },
  {
    name: 'Vidhu Mezhuveli',
    role: 'Business Operations Executive',
    image: '/images/team/Vidhu Mezhuveli.jpeg',
    description: 'Vidhu manages operational workflows, client coordination, and internal business processes to ensure efficient service delivery and smooth execution across every project.',
    responsibilities: [
      'Operational Support',
      'Client Coordination',
      'Workflow Management',
      'Project Support',
      'Documentation',
      'Business Administration',
      'Internal Operations',
      'Service Excellence'
    ]
  },
  {
    name: 'Athira',
    role: 'Digital Marketing Executive',
    image: '/images/team/Athira.jpeg',
    description: 'Athira supports the execution of digital marketing initiatives, including SEO, social media marketing, online campaigns, content coordination, and performance monitoring to strengthen clients\' digital presence and accelerate business growth.',
    responsibilities: [
      'Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Campaign Management',
      'Content Coordination',
      'Performance Monitoring',
      'Brand Promotion',
      'Marketing Analytics'
    ]
  },
  {
    name: 'Aparna Biju',
    role: 'Business Development Associate (BDA)',
    image: '/images/team/Aparna.jpeg',
    description: 'Aparna Biju handles client communication, lead generation, and customer relations, managing inquiries and outreach campaigns to support business operations and strengthen client relationships.',
    responsibilities: [
      'Client Communication',
      'Lead Generation',
      'Customer Relations',
      'Inquiry Handling',
      'Follow-up Coordination',
      'Business Development Support',
      'Outreach Campaigns',
      'Operations Support'
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const Team = () => {
  return (
    <section id="team" style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-color)' }} className="section-padding">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">The Visionaries</span>
          <h2>Meet The Team</h2>
          <p style={{ maxWidth: '600px', margin: '16px auto 0 auto' }}>
            At Urban Owls Digital, our greatest strength is our people. We are a collective of visionary leaders, strategists, developers, designers, marketers, and digital specialists united by one purpose—to help businesses grow through innovation, technology, and creativity.
          </p>
        </div>

        {/* Uniform Grid Presentation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="team-layout-wrapper"
        >
          {/* Leadership Tier - 3 Column Grid */}
          <div className="team-grid-leadership">
            {teamData.slice(0, 3).map((member) => (
              <motion.div key={member.name} variants={cardVariants} className="team-grid-item">
                <div className="luxury-team-card team-hero-card">
                  <div className="team-photo-overlay" />
                  <div className="team-photo-wrapper">
                    <img src={member.image} alt={member.name} className="team-photo" />
                    <div className="team-role-badge">{member.role}</div>
                  </div>
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <span className="team-subtitle">{member.role}</span>
                    <p className="team-description">{member.description}</p>
                    <div className="responsibilities-title">
                      <Briefcase size={14} style={{ color: 'var(--accent-gold)' }} />
                      <span>Responsibilities</span>
                    </div>
                    <div className="responsibilities-grid">
                      {member.responsibilities.map((resp) => (
                        <span key={resp} className="resp-pill">{resp}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Operational & Executive Tier - 4 Column Grid */}
          <div className="team-grid-executives">
            {teamData.slice(3).map((member) => (
              <motion.div key={member.name} variants={cardVariants} className="team-grid-item">
                <div className="luxury-team-card team-hero-card">
                  <div className="team-photo-overlay" />
                  <div className="team-photo-wrapper">
                    <img src={member.image} alt={member.name} className="team-photo" />
                    <div className="team-role-badge">{member.role}</div>
                  </div>
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <span className="team-subtitle">{member.role}</span>
                    <p className="team-description">{member.description}</p>
                    <div className="responsibilities-title">
                      <Briefcase size={14} style={{ color: 'var(--accent-gold)' }} />
                      <span>Responsibilities</span>
                    </div>
                    <div className="responsibilities-grid">
                      {member.responsibilities.map((resp) => (
                        <span key={resp} className="resp-pill">{resp}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collective Team Group Photo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '60px', width: '100%' }}
        >
          <div className="team-group-photo-wrapper">
            <img src="/images/team/Team.jpeg" alt="Urban Owls Team" className="team-group-photo" />
          </div>
        </motion.div>

        {/* Bottom Together Band */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="together-band"
        >
          <h4>Together, We Build the Future of Digital</h4>
          <p>
            Innovation begins with people. At Urban Owls Digital, every team member brings unique expertise, creative thinking, and a passion for excellence to design exceptional experiences.
          </p>
          <div className="together-footer">
            <span>Driven by Innovation.</span>
            <span className="together-dot" />
            <span>Powered by Expertise.</span>
            <span className="together-dot" />
            <span>Defined by Excellence.</span>
          </div>
        </motion.div>

      </div>

      <style>{`
        .team-layout-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .team-grid-leadership {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .team-grid-executives {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-grid-item {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Luxury Team Card */
        .luxury-team-card {
          background: #ffffff;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          transition: var(--transition-smooth);
        }
        .luxury-team-card:hover {
          border-color: var(--accent-gold);
          box-shadow: var(--shadow-hover);
        }

        .team-photo-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(8, 17, 37, 0.04);
          margin-bottom: 20px;
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }
        .luxury-team-card:hover .team-photo {
          transform: scale(1.04);
        }

        .team-role-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(8, 17, 37, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(197, 163, 92, 0.2);
          color: var(--accent-gold);
          font-family: var(--font-heading);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 6px 10px;
          border-radius: 4px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .team-card-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .team-card-content h3 {
          font-size: 22px;
          margin-bottom: 2px;
          color: var(--text-primary);
        }
        .team-subtitle {
          font-size: 12px;
          color: var(--accent-gold);
          font-family: var(--font-heading);
          font-weight: 600;
          display: block;
          margin-bottom: 16px;
        }
        .team-description {
          font-size: 13.5px;
          color: var(--text-secondary);
          line-height: 1.6;
          font-weight: 300;
          margin-bottom: 20px;
          white-space: pre-line;
          flex-grow: 1;
        }

        /* Responsibilities Pills */
        .responsibilities-title {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .responsibilities-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .resp-pill {
          font-size: 10px;
          font-weight: 500;
          color: var(--accent-navy);
          background: rgba(8, 17, 37, 0.04);
          border: 1px solid rgba(8, 17, 37, 0.08);
          padding: 4px 10px;
          border-radius: 30px;
        }

        .team-hero-card {
          position: relative;
          background: linear-gradient(135deg, rgba(8, 17, 37, 0.92), rgba(8, 17, 37, 0.72)), url('/images/hero_office_bg.jpg') center / cover no-repeat;
          color: #ffffff;
          overflow: hidden;
        }
        .team-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.28));
          pointer-events: none;
        }
        .team-hero-card .team-photo-wrapper {
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
        }
        .team-hero-card .team-card-content {
          position: relative;
          z-index: 1;
        }
        .team-hero-card .team-card-content h3,
        .team-hero-card .team-subtitle,
        .team-hero-card .team-description,
        .team-hero-card .responsibilities-title,
        .team-hero-card .resp-pill {
          color: #ffffff;
        }
        .team-hero-card .team-description {
          opacity: 0.95;
        }
        .team-hero-card .resp-pill {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.18);
        }

        /* Team Group Photo Banner */
        .team-group-photo-wrapper {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: 1px solid var(--border-color);
        }
        .team-group-photo {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .team-group-photo-wrapper:hover .team-group-photo {
          transform: scale(1.02);
        }

        /* Together Band */
        .together-band {
          margin-top: 90px;
          background: var(--accent-navy);
          border-radius: var(--radius-lg);
          padding: 50px 40px;
          text-align: center;
          border: 1px solid rgba(197, 163, 92, 0.15);
          box-shadow: 0 20px 40px rgba(8, 17, 37, 0.25);
          color: #ffffff;
        }
        .together-band h4 {
          font-size: 26px;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .together-band p {
          max-width: 700px;
          margin: 0 auto 30px auto;
          color: var(--text-muted-light);
          font-size: 15.5px;
          font-weight: 300;
          line-height: 1.7;
        }
        .together-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }
        .together-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: rgba(197, 163, 92, 0.4);
        }

        /* Responsive Settings */
        @media (max-width: 1200px) {
          .team-grid-leadership {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .team-grid-executives {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 991px) {
          .team-grid-leadership {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .team-grid-leadership > :last-child:nth-child(odd) {
            grid-column: 1 / -1;
            max-width: 500px;
            margin: 0 auto;
            width: 100%;
          }
          .team-grid-executives {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 768px) {
          .together-band {
            padding: 36px 20px;
            margin-top: 60px;
          }
          .together-band h4 {
            font-size: 22px;
          }
          .together-footer {
            flex-direction: column;
            gap: 8px;
          }
          .together-dot {
            display: none;
          }
        }
        @media (max-width: 576px) {
          .team-grid-leadership,
          .team-grid-executives {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .team-grid-leadership > :last-child:nth-child(odd) {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
