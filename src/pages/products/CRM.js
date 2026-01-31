import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, GitBranch, Bell, MessageSquare, Phone, Users, Calendar, Zap, BarChart3,
  ArrowRight, Check, ChevronDown, ChevronUp, Play
} from 'lucide-react';

const CRM = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const targetAudience = [
    { icon: '💼', title: 'Sales Teams', desc: 'Track & close more deals' },
    { icon: '🏢', title: 'Agencies', desc: 'Manage client relationships' },
    { icon: '🏭', title: 'Manufacturers', desc: 'Dealer network management' },
    { icon: '🏠', title: 'Real Estate', desc: 'Property inquiries & visits' },
    { icon: '📚', title: 'Education', desc: 'Student enrollment tracking' },
    { icon: '🔧', title: 'Services', desc: 'Service request management' },
  ];

  const features = [
    { icon: <Target className="w-6 h-6" />, title: 'Lead Capture & Tracking', desc: 'Capture leads from calls, WhatsApp, website — all in one place.' },
    { icon: <GitBranch className="w-6 h-6" />, title: 'Pipeline Management', desc: 'Visual sales pipeline. See every deal stage at a glance.' },
    { icon: <Bell className="w-6 h-6" />, title: 'Smart Reminders', desc: 'Never miss a follow-up. Auto reminders keep you on track.' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'WhatsApp Integration', desc: 'Chat with leads directly from CRM. Full conversation history.' },
    { icon: <Phone className="w-6 h-6" />, title: 'Call Logging', desc: 'Log calls with one tap. Add notes and schedule next action.' },
    { icon: <Users className="w-6 h-6" />, title: 'Team Performance', desc: 'Track individual and team metrics. Know who\'s crushing it.' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Meeting Scheduler', desc: 'Schedule demos and meetings. Sync with Google Calendar.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Quick Actions', desc: 'Convert lead to customer, send quote — all in one click.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Sales Reports', desc: 'Conversion rates, revenue forecasts, and activity reports.' },
  ];

  const steps = [
    { step: 1, title: 'Capture Leads', desc: 'Add leads manually, import from Excel, or capture from website/WhatsApp.' },
    { step: 2, title: 'Nurture & Follow', desc: 'Set tasks, make calls, send WhatsApp — all tracked automatically.' },
    { step: 3, title: 'Close & Analyze', desc: 'Convert to customers and analyze what\'s working with detailed reports.' },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '₹399',
      period: '/month',
      description: 'For solopreneurs and small sales teams',
      features: ['500 leads', '2 team members', 'Basic pipeline', 'WhatsApp integration', 'Call logging', 'Email support'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹799',
      period: '/month',
      description: 'For growing sales teams',
      features: ['Unlimited leads', '10 team members', 'Custom pipelines', 'Advanced reports', 'Meeting scheduler', 'Bookz integration', 'Priority support'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹1,999',
      period: '/month',
      description: 'For large sales organizations',
      features: ['Everything in Pro', 'Unlimited users', 'Custom fields', 'API access', 'Territory management', 'Advanced automation', 'Dedicated manager'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'Can I import my existing leads?', a: 'Yes! You can import leads from Excel, CSV, or directly from your website forms. We also support importing from other CRM tools.' },
    { q: 'How does WhatsApp integration work?', a: 'Connect your WhatsApp Business account to send and receive messages directly from the CRM. All conversations are logged automatically.' },
    { q: 'Can I customize the sales pipeline?', a: 'Absolutely! Create custom stages, fields, and workflows that match your sales process. Professional and Enterprise plans offer full customization.' },
    { q: 'Does it integrate with DigiGini Bookz?', a: 'Yes! When a lead converts to a customer, their info flows to Bookz automatically. You can also create invoices right from the CRM.' },
    { q: 'Can I track my team\'s performance?', a: 'Yes, the CRM provides detailed reports on individual and team metrics — calls made, deals closed, conversion rates, and more.' },
    { q: 'Is there a mobile app?', a: 'Yes! DigiGini CRM works on mobile browsers and we have dedicated Android and iOS apps for on-the-go access.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="text-4xl">📈</span>
                <span className="text-orange-600 font-semibold">DigiGini CRM</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sales CRM for Indian Businesses — Close More Deals
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lead capture, pipeline tracking, WhatsApp integration — sab kuch ek jagah. Apni sales team ko supercharge karo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                </Link>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-600 hover:text-orange-600 transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Pipeline Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-4 gap-3 mb-6">
                  <div className="bg-blue-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-blue-600 font-medium">New Leads</div>
                    <div className="text-2xl font-bold text-blue-700">24</div>
                  </div>
                  <div className="bg-yellow-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-yellow-600 font-medium">In Progress</div>
                    <div className="text-2xl font-bold text-yellow-700">18</div>
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-green-600 font-medium">Won</div>
                    <div className="text-2xl font-bold text-green-700">12</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-center text-white">
                    <div className="text-sm opacity-90">Revenue</div>
                    <div className="text-2xl font-bold">₹4.2L</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">RK</div>
                      <div>
                        <div className="font-medium text-gray-900">Raj Kumar</div>
                        <div className="text-sm text-gray-500">Electronics Store</div>
                      </div>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">₹85,000</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">PS</div>
                      <div>
                        <div className="font-medium text-gray-900">Priya Singh</div>
                        <div className="text-sm text-gray-500">Fashion Boutique</div>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm font-medium">₹1,20,000</span>
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
              Who Is CRM For?
            </h2>
            <p className="text-xl text-gray-600">
              Any business that wants to grow sales systematically
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-orange-50 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold text-sm tracking-wider uppercase">🎯 Sales Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Everything to Manage Your Sales
            </h2>
            <p className="text-xl text-gray-600">
              From first touch to closed deal — track every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white mb-4">
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
              Your Sales Process, Simplified
            </h2>
            <p className="text-xl text-gray-600">
              Three steps to sales success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-orange-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">💰 Simple Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your CRM Plan
            </h2>
            <p className="text-xl text-gray-300">
              Scale as your sales team grows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-orange-600 to-red-600 text-white transform scale-105'
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
                  <span className={plan.popular ? 'text-orange-100' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-orange-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-orange-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-orange-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg'
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Your Sales Stack
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            CRM works best when connected to your billing and marketing tools!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/bookz"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              🧾 Add Billing with Bookz
            </Link>
            <Link
              to="/products/wasender"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              📲 Add WhatsApp Marketing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRM;
