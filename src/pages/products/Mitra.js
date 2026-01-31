import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, Brain, TrendingUp, Bell, MessageSquare, Lightbulb, Users, Zap, Clock,
  ArrowRight, Check, ChevronDown, ChevronUp, Play
} from 'lucide-react';

const Mitra = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const targetAudience = [
    { icon: '🏪', title: 'Shop Owners', desc: 'Hands-free billing' },
    { icon: '📊', title: 'Data Lovers', desc: 'Deep business insights' },
    { icon: '⏰', title: 'Busy Entrepreneurs', desc: 'Automated tasks' },
    { icon: '📈', title: 'Growth Focused', desc: 'AI-powered decisions' },
    { icon: '🎯', title: 'Sales Teams', desc: 'Smart follow-ups' },
    { icon: '💼', title: 'Multi-taskers', desc: 'Voice-first workflow' },
  ];

  const features = [
    { icon: <Mic className="w-6 h-6" />, title: 'Voice Commands', desc: 'Just speak! Add items, create invoices, check stock — all hands-free.' },
    { icon: <Brain className="w-6 h-6" />, title: 'Smart Business Insights', desc: 'AI analyzes your data and gives actionable suggestions for growth.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Sales Predictions', desc: 'Know what will sell tomorrow. AI predicts trends from your data.' },
    { icon: <Bell className="w-6 h-6" />, title: 'Intelligent Reminders', desc: 'Auto reminders for payments, stock, follow-ups — never miss anything.' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Natural Language Queries', desc: 'Ask questions like "Aaj ki sale kitni hai?" and get instant answers.' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Smart Suggestions', desc: 'Pricing recommendations, reorder alerts, and customer insights.' },
    { icon: <Users className="w-6 h-6" />, title: 'Customer Behavior Analysis', desc: 'Understand buying patterns and target customers effectively.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Auto Follow-ups', desc: 'AI sends timely follow-ups to customers automatically.' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 AI Assistant', desc: 'Your business assistant that never sleeps. Always ready to help.' },
  ];

  const steps = [
    { step: 1, title: 'Connect Your Apps', desc: 'Link Mitra with Bookz, CRM, or HRM for complete intelligence.' },
    { step: 2, title: 'Ask or Command', desc: 'Use voice or text to ask questions, give commands, or get insights.' },
    { step: 3, title: 'Get Smart Results', desc: 'Mitra executes tasks, provides insights, and suggests actions.' },
  ];

  const plans = [
    {
      name: 'Mitra Lite',
      price: '₹199',
      period: '/month',
      description: 'Basic AI features for small businesses',
      features: ['Voice billing', 'Basic insights', 'Daily summaries', '100 voice commands/month', 'Bookz integration'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Mitra Pro',
      price: '₹499',
      period: '/month',
      description: 'Full AI power for growing businesses',
      features: ['Unlimited voice commands', 'Advanced analytics', 'Sales predictions', 'Smart reminders', 'Auto follow-ups', 'All app integrations', 'Priority support'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Mitra Business',
      price: '₹999',
      period: '/month',
      description: 'Enterprise AI for larger operations',
      features: ['Everything in Pro', 'Custom AI training', 'Multi-user access', 'API access', 'White-label options', 'Dedicated support', 'Custom integrations'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'What languages does Mitra understand?', a: 'Mitra understands Hindi, English, and Hinglish (mixed Hindi-English). We\'re adding more regional languages soon!' },
    { q: 'Does Mitra work with all DigiGini products?', a: 'Yes! Mitra integrates seamlessly with Bookz, Wasender, CRM, and HRM to provide insights across your entire business.' },
    { q: 'How accurate are the sales predictions?', a: 'Mitra\'s predictions improve over time as it learns from your data. Most users see 85%+ accuracy after 3 months of usage.' },
    { q: 'Can Mitra send messages to customers?', a: 'When connected with Wasender, Mitra can send automated WhatsApp messages for follow-ups, reminders, and promotions.' },
    { q: 'Is my business data safe with AI?', a: 'Absolutely! Your data is encrypted and processed securely. AI insights are generated on our secure servers and never shared.' },
    { q: 'Do I need internet for voice commands?', a: 'Voice commands require internet connection to process. However, the app queues commands when offline and processes them when back online.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="text-4xl">🤖</span>
                <span className="text-purple-600 font-semibold">DigiGini Mitra</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your AI Business Assistant — Voice-First, Always Smart
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                AI jo aapka business samjhe. Voice billing, smart insights, auto follow-ups — sab kuch bolo aur ho jaye!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Try Mitra Free
                </Link>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* AI Chat Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mr-3">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">You said:</div>
                      <div className="font-medium text-gray-900">"Aaj ki sale kitni hai?"</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 mb-1">Mitra:</div>
                      <div className="text-sm">
                        "Aaj ki total sale <span className="font-bold">₹24,580</span> hai. Yesterday se <span className="text-green-300">12% zyada!</span> 
                        <br /><br />
                        Top selling item: <span className="font-medium">Premium Rice (15 units)</span>. 
                        <br /><br />
                        Low stock alert: <span className="text-yellow-300">Sugar sirf 5 packets bache hain.</span>"
                      </div>
                    </div>
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
              Who Is Mitra For?
            </h2>
            <p className="text-xl text-gray-600">
              Business owners who want AI-powered efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-purple-50 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm tracking-wider uppercase">🧠 AI-Powered Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Smart Features for Smart Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Let AI handle the complexity while you focus on growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
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
              Get Started with AI in 3 Steps
            </h2>
            <p className="text-xl text-gray-600">
              Connect, command, and watch AI work for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-400 font-semibold text-sm tracking-wider uppercase">💰 Simple Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Choose Your AI Plan
            </h2>
            <p className="text-xl text-gray-300">
              Start with basic AI, upgrade for full power
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white transform scale-105'
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
                  <span className={plan.popular ? 'text-purple-100' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-purple-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unlock Full AI Potential
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mitra becomes even smarter when connected to other DigiGini apps. More data = better insights!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/bookz"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              🧾 Connect Bookz
            </Link>
            <Link
              to="/products/crm"
              className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              📈 Connect CRM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mitra;
