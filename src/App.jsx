import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Internship from './pages/Internship';
import BestDigitalMarketingKochi from './pages/BestDigitalMarketingKochi';
import BestDigitalMarketingAgencyKochi from './pages/BestDigitalMarketingAgencyKochi';
import GoogleAdsAgencyKochi from './pages/GoogleAdsAgencyKochi';
import SocialMediaMarketingKochi from './pages/SocialMediaMarketingKochi';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-white)', color: 'var(--text-primary)' }}>
          {/* Global Header Navigation */}
          <Navbar />
          
          {/* Main Routing Container */}
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/best-digital-marketing-kochi" element={<BestDigitalMarketingKochi />} />
              <Route path="/best-digital-marketing-agency-kochi" element={<BestDigitalMarketingAgencyKochi />} />
              <Route path="/google-ads-agency-kochi" element={<GoogleAdsAgencyKochi />} />
              <Route path="/social-media-marketing-kochi" element={<SocialMediaMarketingKochi />} />
            </Routes>
          </main>

          {/* Social Quick Contact Widget */}
          <FloatingContact />

          {/* Global Footer */}
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
