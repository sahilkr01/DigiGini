import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, Image, Users, BarChart3, Clock, MessageCircle, Zap, Link as LinkIcon, FileText,
  ArrowRight, Check, ChevronDown, ChevronUp, Play
} from 'lucide-react';

const Wasender = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const targetAudience = [
    { icon: '🛍️', title: 'E-commerce', desc: 'Order updates & promotions' },
    { icon: '🏪', title: 'Retailers', desc: 'Offers & new arrivals' },
    { icon: '🏥', title: 'Healthcare', desc: 'Appointment reminders' },
    { icon: '🎓', title: 'Education', desc: 'Fee reminders & updates' },
    { icon: '🍕', title: 'Restaurants', desc: 'Daily specials & delivery' },
    { icon: '💼', title: 'Agencies', desc: 'Client communication' },
  ];

  const features = [
    { icon: <Send className="w-6 h-6" />, title: 'Bulk WhatsApp Campaigns', desc: 'Send personalized messages to thousands of customers in one click.' },
    { icon: <Image className="w-6 h-6" />, title: 'Rich Media Messages', desc: 'Send images, videos, PDFs, and catalogs with your messages.' },
    { icon: <Users className="w-6 h-6" />, title: 'Contact Management', desc: 'Import, organize, and segment your customer lists easily.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Click Tracking & Analytics', desc: 'Track message delivery, opens, and link clicks in real-time.' },
    { icon: <Clock className="w-6 h-6" />, title: 'Scheduled Campaigns', desc: 'Schedule messages for the perfect time to maximize engagement.' },
    { icon: <MessageCircle className="w-6 h-6" />, title: '2-Way Messaging', desc: 'Receive and reply to customer messages from one dashboard.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Auto-Triggers', desc: 'Send automatic messages on birthdays, orders, and reminders.' },
    { icon: <LinkIcon className="w-6 h-6" />, title: 'Bookz Integration', desc: 'Auto-send invoices and payment reminders via WhatsApp.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Smart Templates', desc: 'Pre-built templates for festivals, offers, and follow-ups.' },
  ];

  const steps = [
    { step: 1, title: 'Import Contacts', desc: 'Upload your customer list from Excel or sync from Bookz/CRM.' },
    { step: 2, title: 'Create Campaign', desc: 'Choose a template or create your message with media attachments.' },
    { step: 3, title: 'Send & Track', desc: 'Hit send and watch real-time analytics on your dashboard.' },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '₹499',
      period: '/month',
      description: 'For small businesses getting started with WhatsApp marketing',
      features: ['1,000 messages/month', 'Basic templates', 'Contact management', 'Delivery reports', 'Email support'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹999',
      period: '/month',
      description: 'For growing businesses with larger audiences',
      features: ['5,000 messages/month', 'All templates', 'Rich media support', 'Click tracking', 'Scheduled campaigns', 'Bookz integration', 'Priority support'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      price: '₹2,499',
      period: '/month',
      description: 'For businesses with high-volume messaging needs',
      features: ['Unlimited messages', 'Everything in Growth', '2-way messaging', 'Auto-triggers', 'API access', 'Multi-user access', 'Dedicated support'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'Is this official WhatsApp Business API?', a: 'Yes, Wasender uses the official WhatsApp Business API to ensure reliable message delivery and compliance with WhatsApp\'s policies.' },
    { q: 'Can I send messages to any number?', a: 'You can send messages to customers who have opted-in to receive communications from your business. We follow WhatsApp\'s anti-spam policies.' },
    { q: 'How does Bookz integration work?', a: 'When connected with DigiGini Bookz, Wasender can automatically send invoice copies, payment reminders, and order confirmations via WhatsApp.' },
    { q: 'What types of media can I send?', a: 'You can send images, videos, PDFs, catalogs, and documents up to 16MB in size with your WhatsApp messages.' },
    { q: 'Can I schedule messages for later?', a: 'Yes! With Growth and Business plans, you can schedule campaigns to be sent at the perfect time for maximum engagement.' },
    { q: 'Do you provide message templates?', a: 'Yes, we provide 50+ pre-built templates for festivals, offers, reminders, and more. You can also create custom templates.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="text-4xl">📲</span>
                <span className="text-green-600 font-semibold">DigiGini Wasender</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                WhatsApp Marketing Automation — Direct Customer Connect
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Customer tak seedha WhatsApp se pahuncho. Bulk campaigns, smart templates, aur real-time analytics — sales boost guaranteed!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                </Link>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-green-600 hover:text-green-600 transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 text-white text-center">
                    <div className="text-sm opacity-80">Messages Sent</div>
                    <div className="text-2xl font-bold">12,450</div>
                    <div className="text-xs opacity-80">Today</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="text-sm text-gray-500">Delivery Rate</div>
                    <div className="text-2xl font-bold text-gray-900">98.5%</div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="text-sm text-gray-500">Click Rate</div>
                    <div className="text-2xl font-bold text-gray-900">24%</div>
                    <div className="text-xs text-green-600">+5%</div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">Diwali Sale Campaign</span>
                    <span className="text-green-600 text-sm">Active</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">7,500 / 10,000 messages sent</div>
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
              Who Is Wasender For?
            </h2>
            <p className="text-xl text-gray-600">
              Any business that wants to connect with customers on WhatsApp
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">📲 Powerful Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Everything for WhatsApp Marketing Success
            </h2>
            <p className="text-xl text-gray-600">
              From bulk campaigns to automation — reach your customers effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
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
              Start Marketing in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              From contacts to campaigns — launch in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-green-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm tracking-wider uppercase">💰 Simple Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start small, scale as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white transform scale-105'
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
                  <span className={plan.popular ? 'text-green-100' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
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
                      ? 'bg-white text-green-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg'
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Your Marketing Stack
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Wasender works even better with other DigiGini products. Connect your billing and CRM for automated customer communications!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/bookz"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              🧾 Add Billing with Bookz
            </Link>
            <Link
              to="/products/crm"
              className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              📈 Add Sales CRM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wasender;
