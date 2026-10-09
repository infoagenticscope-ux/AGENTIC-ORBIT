import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { ContactModal } from './components/ContactModal';

// Pages
import { Home } from './pages/Home';
import { UkServicesPage } from './pages/UkServicesPage';
import { UsaServicesPage } from './pages/UsaServicesPage';
import { BankingPage } from './pages/BankingPage';
import { DigiBizOsPage } from './pages/DigiBizOsPage';
import { SoftwareDevelopmentPage } from './pages/SoftwareDevelopmentPage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { AiAgentsPage } from './pages/AiAgentsPage';
import { PricingPage } from './pages/PricingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Corporate Formation & AI OS');

  const handleOpenContact = (service?: string) => {
    if (service) setSelectedService(service);
    setContactModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-dark text-white flex flex-col justify-between selection:bg-brand-blue selection:text-black">
        <Navbar onOpenContact={handleOpenContact} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenContact={handleOpenContact} />} />
            <Route path="/uk-services" element={<UkServicesPage onOpenContact={handleOpenContact} />} />
            <Route path="/usa-services" element={<UsaServicesPage onOpenContact={handleOpenContact} />} />
            <Route path="/banking-solutions" element={<BankingPage onOpenContact={handleOpenContact} />} />
            <Route path="/digibiz-os" element={<DigiBizOsPage onOpenContact={handleOpenContact} />} />
            <Route path="/software-development" element={<SoftwareDevelopmentPage onOpenContact={handleOpenContact} />} />
            <Route path="/web-development" element={<WebDevelopmentPage onOpenContact={handleOpenContact} />} />
            <Route path="/ai-agents" element={<AiAgentsPage onOpenContact={handleOpenContact} />} />
            <Route path="/pricing" element={<PricingPage onOpenContact={handleOpenContact} />} />
            <Route path="/ai-platform" element={<FeaturesPage onOpenContact={handleOpenContact} />} />
            <Route path="/features" element={<FeaturesPage onOpenContact={handleOpenContact} />} />
            <Route path="/solutions" element={<SolutionsPage onOpenContact={handleOpenContact} />} />
            <Route path="/about" element={<AboutPage onOpenContact={handleOpenContact} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home onOpenContact={handleOpenContact} />} />
          </Routes>
        </main>

        <Footer onOpenContact={handleOpenContact} />
        <WhatsAppFloating />

        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
