import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const products = [
    {
      icon: '🧾',
      name: 'DigiGini Bookz',
      tagline: 'Billing & Accounting App',
      description: 'Smart billing, offline-first accounting, GST reports, stock, reminders — sab kuch in one app.',
      features: ['Lightning-fast billing (offline bhi)', 'GST & Non-GST business support', 'Smart reports & stock management', 'WhatsApp share, PDF, Excel export'],
      path: '/products/bookz',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📲',
      name: 'DigiGini Wasender',
      tagline: 'WhatsApp Marketing Automation',
      description: 'Customer tak seedha WhatsApp se pahuncho. Sales boost karo.',
      features: ['Bulk WhatsApp campaigns', 'Smart templates', 'Click tracking & analytics', '2-way messaging automation'],
      path: '/products/wasender',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🤖',
      name: 'DigiGini Mitra',
      tagline: 'AI Business Assistant',
      description: 'AI jo aapka business samjhe aur kaam easy bana de.',
      features: ['Voice billing & AI commands', 'Smart insights for sales & stock', 'AI reminders & suggestions', 'Auto customer follow-ups'],
      path: '/products/mitra',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '📈',
      name: 'DigiGini CRM',
      tagline: 'Sales CRM for Indian Businesses',
      description: 'Lead capture, pipeline tracking, and team performance insights.',
      features: ['Lead capture, pipeline tracking', 'Reminders & follow-ups', 'WhatsApp integration', 'Team performance insights'],
      path: '/products/crm',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: '🧑‍💼',
      name: 'DigiGini HRM',
      tagline: 'Attendance & Payroll System',
      description: 'Complete HR management with face-based attendance and auto payroll.',
      features: ['Face-based attendance + location', 'Daily logs & leave management', 'Auto payroll generation', 'Employee self-service portal'],
      path: '/products/hrm',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const solutions = [
    {
      title: 'For Small Business Owners',
      description: 'Billing + WhatsApp + AI = Full growth engine.',
      recommended: 'Bookz + Wasender',
      features: ['Quick invoicing', 'Payment reminders', 'Customer engagement'],
      path: '/solutions/small-business',
    },
    {
      title: 'For Retailers & Wholesalers',
      description: 'Inventory, billing, purchase, expiry tracking.',
      recommended: 'Bookz + Mitra',
      features: ['Stock management', 'Expiry alerts', 'AI insights'],
      path: '/solutions/retail',
    },
    {
      title: 'For Agencies / CA / Service Providers',
      description: 'Client, project & payments management.',
      recommended: 'CRM + Bookz',
      features: ['Client tracking', 'Invoice management', 'Project pipeline'],
      path: '/solutions/service',
    },
    {
      title: 'For Growing Companies / Teams',
      description: 'Attendance, payroll, performance & leads — all connected.',
      recommended: 'HRM + CRM',
      features: ['Team management', 'Auto payroll', 'Performance tracking'],
      path: '/solutions/enterprise',
    },
  ];

  const testimonials = [
    {
      quote: 'DigiGini Bookz ne mere business ka billing system completely change kar diya. Ab sab kuch organized hai.',
      name: 'Rajesh Kumar',
      role: 'Kirana Store Owner, Patna',
      initials: 'RK',
    },
    {
      quote: 'Wasender se customer engagement 3x ho gaya. WhatsApp marketing bohot effective hai.',
      name: 'Priya Sharma',
      role: 'Boutique Owner, Ranchi',
      initials: 'PS',
    },
    {
      quote: 'HRM module ne payroll management ko 10x faster bana diya. Ab salary delays nahi hote.',
      name: 'Amit Singh',
      role: 'Factory Manager, Muzaffarpur',
      initials: 'AS',
    },
  ];

  const stats = [
    { icon: <TrendingUp className="w-8 h-8" />, value: '1,00,000+', label: 'Invoices Created' },
    { icon: <span className="text-3xl">₹</span>, value: '50 Cr+', label: 'Business Managed' },
    { icon: <Users className="w-8 h-8" />, value: '10+', label: 'Cities Served' },
    { icon: <Award className="w-8 h-8" />, value: 'Award', label: 'By Startup Bihar' },
  ];

  const ecosystem = [
    { from: '🧾 Bookz', to: '📲 Wasender', desc: 'Auto WhatsApp reminders' },
    { from: '📈 CRM', to: '🧾 Bookz', desc: 'Lead becomes customer in 1 tap' },
    { from: '🧑‍💼 HRM', to: '🧾 Bookz', desc: 'Salary entries auto-added' },
    { from: '🤖 Mitra AI', to: 'All Products', desc: 'Smart insights everywhere' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="mr-2">🇮🇳</span>
                India's #1 Business Suite
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ab har business hoga smart
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  DigiGini Suite ke saath
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Billing, CRM, HRM, WhatsApp marketing aur AI tools — sab ek hi connected platform me. Smart businesses ke liye smart technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Book Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/products/bookz"
                  className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Explore Products
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600">500+ businesses trust us</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            {/* Hero Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 mb-4">
                  <div className="text-sm opacity-80">Today Sales</div>
                  <div className="text-3xl font-bold">₹45,230</div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-sm text-gray-500">Orders</div>
                    <div className="text-xl font-bold text-gray-900">127</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-sm text-gray-500">Customers</div>
                    <div className="text-xl font-bold text-gray-900">89</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-sm text-gray-500">Pending</div>
                    <div className="text-xl font-bold text-gray-900">5</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['🧾 Bookz', '📲 Wasender', '📈 CRM', '🤖 Mitra'].map((item) => (
                    <span key={item} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg animate-float">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Payment Received ₹12,500
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-3 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="text-sm">🤖 Mitra AI says</div>
                <div className="font-medium">"5 follow-ups pending for today"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">🔥 Product Suite</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Meet the DigiGini Product Family
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 powerful products, 1 connected ecosystem. Choose what you need, add more as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{product.tagline}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={product.path}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Explore {product.name.split(' ')[1]}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">✨ Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Solutions that fit every business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a solo entrepreneur or managing a growing team, we have the perfect combination for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg inline-flex items-center w-fit mb-4">
                    <span className="font-medium">Recommended: {solution.recommended}</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={solution.path}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">🔗 Connected Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Sab products — ek connected ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jo kaam 5 apps se hota tha, ab wo sirf DigiGini se hoga. All our products talk to each other, saving you time and effort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ecosystem.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
                <div className="text-lg font-semibold text-gray-800 mb-2">{item.from} → {item.to}</div>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['DigiGini', '🧾 Bookz', '📲 Wasender', '🤖 Mitra', '📈 CRM', '🧑‍💼 HRM'].map((item, index) => (
                <span key={item} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4">All products work together seamlessly</h3>
            <p className="text-blue-100 max-w-xl mx-auto">
              Start with one product, add more as you grow. Everything stays connected.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-200 font-semibold text-sm tracking-wider uppercase">💙 Trusted by Indian Businesses</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              500+ businesses trust DigiGini
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What our customers say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
