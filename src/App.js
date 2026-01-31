import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bookz from './pages/products/Bookz';
import Wasender from './pages/products/Wasender';
import Mitra from './pages/products/Mitra';
import CRM from './pages/products/CRM';
import HRM from './pages/products/HRM';
import SmallBusiness from './pages/solutions/SmallBusiness';
import Retail from './pages/solutions/Retail';
import Service from './pages/solutions/Service';
import Enterprise from './pages/solutions/Enterprise';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            
            {/* Products */}
            <Route path="/products/bookz" element={<><ScrollToTop /><Bookz /></>} />
            <Route path="/products/wasender" element={<><ScrollToTop /><Wasender /></>} />
            <Route path="/products/mitra" element={<><ScrollToTop /><Mitra /></>} />
            <Route path="/products/crm" element={<><ScrollToTop /><CRM /></>} />
            <Route path="/products/hrm" element={<><ScrollToTop /><HRM /></>} />
            
            {/* Solutions */}
            <Route path="/solutions/small-business" element={<><ScrollToTop /><SmallBusiness /></>} />
            <Route path="/solutions/retail" element={<><ScrollToTop /><Retail /></>} />
            <Route path="/solutions/service" element={<><ScrollToTop /><Service /></>} />
            <Route path="/solutions/enterprise" element={<><ScrollToTop /><Enterprise /></>} />
            
            {/* Other Pages */}
            <Route path="/contact" element={<><ScrollToTop /><Contact /></>} />
            <Route path="/demo" element={<><ScrollToTop /><Demo /></>} />
            
            {/* Placeholder routes */}
            <Route path="/about" element={<><ScrollToTop /><PlaceholderPage title="About Us" /></>} />
            <Route path="/team" element={<><ScrollToTop /><PlaceholderPage title="Our Team" /></>} />
            <Route path="/careers" element={<><ScrollToTop /><PlaceholderPage title="Careers" /></>} />
            <Route path="/blog" element={<><ScrollToTop /><PlaceholderPage title="Blog" /></>} />
            <Route path="/help" element={<><ScrollToTop /><PlaceholderPage title="Help Center" /></>} />
            <Route path="/case-studies" element={<><ScrollToTop /><PlaceholderPage title="Case Studies" /></>} />
            <Route path="/privacy" element={<><ScrollToTop /><PlaceholderPage title="Privacy Policy" /></>} />
            <Route path="/terms" element={<><ScrollToTop /><PlaceholderPage title="Terms of Service" /></>} />
            
            {/* 404 */}
            <Route path="*" element={<><ScrollToTop /><NotFound /></>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Placeholder for pages not yet implemented
const PlaceholderPage = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600">This page is coming soon.</p>
    </div>
  </div>
);

// 404 Page
const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
      <a
        href="/"
        className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default App;
