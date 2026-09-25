import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <FAQ />
    </div>
  );
};

export default FAQPage;
// 
