
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Quote } from './pages/Quote';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Sitemap } from './pages/Sitemap';
import { LOA } from './pages/LOA';
import { FAQ } from './pages/FAQ';

// External URL for the Quote portal
const EXTERNAL_QUOTE_URL = 'https://app.watt.co.uk/company';

const App: React.FC = () => {
  // Helper to parse hash: #services/electricity -> { page: 'services', subPage: 'electricity' }
  const getRoute = () => {
    const hash = window.location.hash.replace('#', '');
    const parts = hash.split('/');
    return {
      page: parts[0] || 'home',
      subPage: parts[1] || undefined
    };
  };

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRoute();
      // Check if the new route is quote, if so, we handle it in the navigate function or here
      // But since navigate() handles clicks, this handles back button/direct URL entry
      if (newRoute.page === 'quote') {
        window.location.href = EXTERNAL_QUOTE_URL;
        return;
      }
      setRoute(newRoute);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    if (path === 'quote') {
      // Force external redirect for all Quote buttons
      window.location.href = EXTERNAL_QUOTE_URL;
      return;
    }
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'quote':
        // Fallback if redirect is slow, though normally won't render
        return <div className="min-h-screen flex items-center justify-center text-watt-blue">Redirecting to portal...</div>; 
      case 'about':
        return <About onNavigate={navigate} />;
      case 'services':
        return <Services onNavigate={navigate} subPage={route.subPage} />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'sitemap':
        return <Sitemap onNavigate={navigate} />;
      case 'loa':
        return <LOA />;
      case 'faq':
        return <FAQ onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen flex flex-col bg-white">
      <Header onNavigate={navigate} activePage={route.page} />
      <div className="flex-grow overflow-x-hidden">
        <div key={route.page + (route.subPage || '')} className="animate-page-enter">
          {renderPage()}
        </div>
      </div>
      <ScrollToTop />
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;