
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrowseByVehicle from './components/BrowseByVehicle';
import BrowseByType from './components/BrowseByType';
import SupportSection from './components/SupportSection';
import BusinessSolutions from './components/BusinessSolutions';
import QualityManufacturing from './components/QualityManufacturing';
import CompanySnapshot from './components/CompanySnapshot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-charcoal-text">
      <Header />
      <main>
        <Hero />
        <BrowseByVehicle />
        <BrowseByType />
        <SupportSection />
        <BusinessSolutions />
        <QualityManufacturing />
        <CompanySnapshot />
      </main>
      <Footer />
    </div>
  );
};

export default App;
