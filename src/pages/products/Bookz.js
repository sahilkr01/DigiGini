import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, WifiOff, FileText, BarChart3, Package, MessageSquare, Mic, Building2, Brain,
  ArrowRight, Check, ChevronDown, ChevronUp, Play
} from 'lucide-react';

const Bookz = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const targetAudience = [
    { icon: '🏪', title: 'Retailers', desc: 'Kirana, electronics, clothing stores' },
    { icon: '🏭', title: 'Wholesalers', desc: 'Bulk dealers and distributors' },
    { icon: '💊', title: 'Pharma', desc: 'Medical shops with expiry tracking' },
    { icon: '🔧', title: 'Service Providers', desc: 'Repair shops, salons, freelancers' },
    { icon: '🍕', title: 'Food & Restaurants', desc: 'Quick billing for F&B businesses' },
    { icon: '📦', title: 'Traders', desc: 'Import/export and trading businesses' },
  ];

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: 'Lightning-Fast Billing', desc: 'Create invoices in seconds with smart autofill and quick-add features.' },
    { icon: <WifiOff className="w-6 h-6" />, title: 'Offline-First Design', desc: 'Works without internet. Syncs automatically when you\'re back online.' },
    { icon: <FileText className="w-6 h-6" />, title: 'GST & Non-GST Support', desc: 'Complete GST compliance with GSTR reports, or simple non-GST billing.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Smart Reports', desc: 'Sales, purchase, profit/loss, and GST reports at your fingertips.' },
    { icon: <Package className="w-6 h-6" />, title: 'Stock Management', desc: 'Track inventory, set low-stock alerts, manage expiry dates.' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'WhatsApp Share', desc: 'Send invoices directly via WhatsApp with one tap.' },
    { icon: <Mic className="w-6 h-6" />, title: 'Voice Billing', desc: 'Add items using voice commands. Hands-free billing experience.' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Multi-Business', desc: 'Manage multiple businesses from a single app seamlessly.' },
    { icon: <Brain className="w-6 h-6" />, title: 'AI-Powered Insights', desc: 'Get smart suggestions for pricing, stock, and customer behavior.' },
  ];

  const steps = [
    { step: 1, title: 'Download App', desc: 'Get DigiGini Bookz from Play Store or App Store. Free to start!' },
    { step: 2, title: 'Add Your Business', desc: 'Enter your business details, GST info, and customize invoice templates.' },
    { step: 3, title: 'Start Billing', desc: 'Create your first invoice in under 30 seconds. It\'s that simple!' },
  ];

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for small shops just getting started',
      features: ['50 invoices/month', 'Basic reports', '1 business', 'WhatsApp share', 'Offline mode'],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '₹299',
      period: '/month',
      description: 'For growing businesses that need more power',
      features: ['Unlimited invoices', 'Advanced reports & GST', '3 businesses', 'Voice billing', 'Stock management', 'PDF & Excel export', 'Priority support'],
      cta: 'Start 14-Day Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹799',
      period: '/month',
      description: 'For large businesses with multiple locations',
      features: ['Everything in Pro', 'Unlimited businesses', 'Multi-user access', 'AI insights', 'Custom branding', 'API access', 'Dedicated support'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'Does Bookz work without internet?', a: 'Yes! Bookz is built offline-first. You can create invoices, manage inventory, and run your business even without internet. All data syncs automatically when you\'re back online.' },
    { q: 'Is it compliant with GST regulations?', a: 'Absolutely! Bookz fully supports GST billing with automatic tax calculations, GSTR-1 and GSTR-3B report generation, and e-way bill support.' },
    { q: 'Can I use Bookz for multiple businesses?', a: 'Yes, with Pro plan you can manage up to 3 businesses, and Enterprise plan offers unlimited businesses - all from a single app.' },
    { q: 'How do I share invoices with customers?', a: 'You can share invoices via WhatsApp with one tap, send as PDF via email, or print directly. Customers receive professional-looking invoices instantly.' },
    { q: 'Is my data secure?', a: 'Your data is encrypted and stored securely on our servers. We use bank-grade security and regular backups to ensure your business data is always safe.' },
    { q: 'Can I import my existing data?', a: 'Yes! You can import products, customers, and previous invoices from Excel files. Our support team can help you with the migration.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="text-4xl">🧾</span>
                <span className="text-blue-600 font-semibold">DigiGini Bookz</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                India's Fastest Billing & Accounting App — Offline & Online
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Chhota business ho ya bada — Bookz sabke liye perfect. Smart billing, GST reports, stock management — sab kuch in one app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                </Link>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
                    <div className="text-sm opacity-80">Today's Sales</div>
                    <div className="text-3xl font-bold">₹24,580</div>
                    <div className="text-sm text-green-200">+12%</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6">
                    <div className="text-sm text-gray-500">Invoices</div>
                    <div className="text-3xl font-bold text-gray-900">47</div>
                    <div className="text-sm text-green-600">+8%</div>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 flex items-center">
                  <span className="text-orange-500 mr-3">⚠️</span>
                  <div>
                    <div className="font-medium text-gray-900">Low Stock</div>
                    <div className="text-sm text-gray-600">3 items need attention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Is Bookz For?
            </h2>
            <p className="text-xl text-gray-600">
              From small kirana shops to large distributors — Bookz works for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">⚡ Powerful Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-xl text-gray-600">
              From simple billing to advanced analytics — Bookz has got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Easy Steps
            </h2>
            <p className="text-xl text-gray-600">
              From download to first invoice — under 5 minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">💰 Simple Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white transform scale-105'
                    : 'bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-blue-100' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Supercharge Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bookz works even better with other DigiGini products. Connect your billing with WhatsApp marketing, CRM, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/wasender"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              📲 Add WhatsApp Marketing
            </Link>
            <Link
              to="/products/mitra"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              🤖 Add AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bookz;
