import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Search, MapPin, Sparkles, MessageSquareCode, Share2, BarChart } from 'lucide-react';

const localBackupBlogs = [
  {
    _id: '1',
    title: 'Maximizing Visibility: A Guide to Generative Engine Optimization (GEO)',
    excerpt: 'AI search engines like ChatGPT Search, Gemini, and Perplexity are reshaping the internet. Discover how to optimize your content for AI retrieval models.',
    readTime: '6 min read',
    category: 'GEO & AI Search',
    author: 'Owls SEO Lab',
    date: 'July 24, 2026',
    image: '/images/geo_guide.png'
  },
  {
    _id: '2',
    title: 'Why Traditional SEO is Dead (And How AEO is Replacing It)',
    excerpt: 'Zero-click searches are taking over. Here is how Answer Engine Optimization (AEO) keeps your brand visible in direct answers.',
    readTime: '5 min read',
    category: 'SEO & AEO',
    author: 'SEO Director',
    date: 'July 18, 2026',
    image: '/images/aeo_guide.jpg'
  },
  {
    _id: '3',
    title: 'The Psychology of Luxury Web Design',
    excerpt: 'What makes a website feel like a $100,000 digital experience? The alignment of typography, negative space, and premium micro-interactions.',
    readTime: '8 min read',
    category: 'UI/UX Design',
    author: 'Creative Lead',
    date: 'July 10, 2026',
    image: '/images/luxury_design.jpg'
  }
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setBlogs(data.data);
        } else {
          setBlogs(localBackupBlogs);
        }
      } catch (err) {
        console.warn('API connection failed. Loading local backup blogs.');
        setBlogs(localBackupBlogs);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      
      {/* Blog Cards Feed Section */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container">
          
          {/* Header */}
          <div className="section-header">
            <span className="subtitle">Insights & Articles</span>
            <h2>Agency Blog</h2>
            <p>Read our latest deep-dives on Generative Engine Optimization, search engine conversion hacks, and modern luxury design principles.</p>
          </div>

          {/* Blog Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {blogs.map((blog) => (
              <motion.article
                key={blog._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
                  transition: 'all 0.4s ease'
                }}
                className="blog-card"
              >
                {/* Blog Header Image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                    className="blog-image"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1.5px solid var(--accent-charcoal)',
                      color: 'var(--text-primary)',
                      fontSize: '11px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700
                    }}
                  >
                    {blog.category}
                  </span>
                </div>

                {/* Blog Body details */}
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1, gap: '14px' }}>
                  
                  {/* Meta details */}
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '20px', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.3, color: 'var(--text-primary)' }}>
                    {blog.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, fontWeight: 300, flex: 1 }}>
                    {blog.excerpt}
                  </p>

                  <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '8px 0' }} />

                  <Link
                    to="/blog"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '14px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                    className="read-more-btn"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>

                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* SEO & AI Search Visibility Section */}
      <section style={{ background: 'var(--bg-cream)', overflow: 'hidden' }} className="section-padding">
        <div className="container">
          
          <div className="section-header">
            <span className="subtitle">The Future of Discovery</span>
            <h2>SEO & AI Search Visibility</h2>
            <p>We do not just optimize for standard Google pages. We structure your digital assets so that AI chatbots and answer engines cite you first.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }} className="seo-ai-layout">
            
            {/* Column 1: Traditional & Local Search */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{ color: 'var(--text-primary)', background: 'rgba(0, 0, 0, 0.04)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Search size={22} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', color: 'var(--text-primary)' }}>Traditional & Local SEO</h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, fontWeight: 300, marginBottom: '24px' }}>
                We lay down solid foundational visibility frameworks designed to rank your business at the very top of Google Search and Google Maps.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><MapPin size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Google Maps & GBP Dominance</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Continuous profile posting, maps citation networks, and rating optimization.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><BarChart size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Google Ranking Strategies</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Speed optimization and quality backlink networks to scale search positions.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><Share2 size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Semantic HTML Structured Outlines</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Correct H1-H6 outline hierarchy so Google crawler bots ingest pages perfectly.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Column 2: GEO & AEO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: '#ffffff',
                border: '1.5px solid var(--accent-charcoal)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{ color: 'var(--text-primary)', background: 'rgba(0, 0, 0, 0.04)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={22} />
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', color: 'var(--text-primary)' }}>AI Search Ready (AEO & GEO)</h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6, fontWeight: 300, marginBottom: '24px' }}>
                Generative AI is changing search trends. We format your data so artificial intelligence models answer queries with your brand details.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><MessageSquareCode size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>ChatGPT, Gemini, & Perplexity Citation</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Creating high-density factual charts, citation anchors, and structured schemas.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><Sparkles size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Answer Engine Optimization (AEO)</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Formatting direct question-and-answer pairs so voice query systems load them.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--text-primary)', marginTop: '3px' }}><Search size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Generative Engine Optimization (GEO)</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 300 }}>Providing clear, authoritative information units matching current LLM queries.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

          </div>

          {/* Visual Badges of ChatGPT, Gemini, Perplexity */}
          <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', alignItems: 'center', opacity: 0.6 }}>
            <span style={{ fontSize: '13px', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Optimized for:</span>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>ChatGPT Search</span>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>Google Gemini</span>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>Perplexity AI</span>
            <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>Apple Intelligence</span>
          </div>

        </div>
      </section>

      <style>{`
        .blog-card:hover {
          border-color: var(--accent-charcoal) !important;
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08) !important;
        }
        .blog-card:hover .blog-image {
          transform: scale(1.05);
        }
        .read-more-btn:hover {
          color: var(--text-secondary) !important;
        }
        @media (max-width: 992px) {
          .seo-ai-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
