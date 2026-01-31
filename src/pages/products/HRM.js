import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scan, MapPin, Calculator, Calendar, FileText, Smartphone, BarChart3, Shield, Building2,
  ArrowRight, Check, ChevronDown, ChevronUp, Play
} from 'lucide-react';

const HRM = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const targetAudience = [
    { icon: '🏭', title: 'Factories', desc: 'Shift-based workforce' },
    { icon: '🏪', title: 'Retail Chains', desc: 'Multi-store staff' },
    { icon: '🏢', title: 'Offices', desc: 'Corporate attendance' },
    { icon: '🚚', title: 'Logistics', desc: 'Field staff tracking' },
    { icon: '🏥', title: 'Healthcare', desc: 'Shift management' },
    { icon: '🏗️', title: 'Construction', desc: 'Site worker attendance' },
  ];

  const features = [
    { icon: <Scan className="w-6 h-6" />, title: 'Face-Based Attendance', desc: 'No buddy punching! AI-powered face recognition for accurate attendance.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'GPS Location Tracking', desc: 'Know exactly where your field staff marks attendance from.' },
    { icon: <Calculator className="w-6 h-6" />, title: 'Auto Payroll Generation', desc: 'Calculate salaries automatically based on attendance and rules.' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Leave Management', desc: 'Apply, approve, and track leaves. Auto-deduct from salary.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Payslip Generation', desc: 'Professional payslips in PDF. Share via WhatsApp or email.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Employee Self-Service', desc: 'Employees check attendance, apply leave, view payslips on app.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Attendance Reports', desc: 'Daily, weekly, monthly reports. Late-comers, absentees at a glance.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Compliance Ready', desc: 'PF, ESI, TDS calculations built-in. Statutory compliance made easy.' },
    { icon: <Building2 className="w-6 h-6" />, title: 'Multi-Branch Support', desc: 'Manage attendance across multiple locations from one dashboard.' },
  ];

  const steps = [
    { step: 1, title: 'Add Employees', desc: 'Register employees with photos, salary details, and work schedules.' },
    { step: 2, title: 'Track Attendance', desc: 'Employees mark attendance via face scan on mobile or device.' },
    { step: 3, title: 'Generate Payroll', desc: 'One-click payroll with all deductions calculated automatically.' },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '₹29',
      period: '/employee/month',
      description: 'For small teams getting started',
      features: ['Up to 25 employees', 'Face attendance', 'Basic leave management', 'Simple payroll', 'Email support'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Business',
      price: '₹49',
      period: '/employee/month',
      description: 'For growing companies',
      features: ['Up to 100 employees', 'Face + GPS attendance', 'Advanced leave rules', 'Full payroll + payslips', 'PF/ESI calculations', 'Employee app', 'Priority support'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '₹79',
      period: '/employee/month',
      description: 'For large organizations',
      features: ['Unlimited employees', 'Everything in Business', 'Multi-branch', 'Custom policies', 'API access', 'Biometric integration', 'Dedicated manager'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    { q: 'How does face recognition attendance work?', a: 'Employees simply look at their phone camera or a tablet device. Our AI instantly recognizes them and marks attendance. It works in different lighting conditions and even with masks.' },
    { q: 'Can I track field staff location?', a: 'Yes! With GPS attendance, you can see exactly where employees marked their attendance from. Great for field sales, delivery, and service teams.' },
    { q: 'How is payroll calculated?', a: 'Payroll is calculated automatically based on attendance, leave, overtime, and your salary rules. Deductions like PF, ESI, and TDS are calculated as per government rules.' },
    { q: 'Can employees access their own data?', a: 'Yes, employees can use the self-service app to mark attendance, apply for leave, view their payslips, and check their attendance history.' },
    { q: 'Does it work for shift-based work?', a: 'Absolutely! You can create multiple shifts with different timings. The system automatically handles shift rotations and calculates overtime.' },
    { q: 'Can I integrate with existing biometric devices?', a: 'Yes, Enterprise plan supports integration with popular biometric devices. Contact our sales team for compatible devices and setup assistance.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="text-4xl">🧑‍💼</span>
                <span className="text-indigo-600 font-semibold">DigiGini HRM</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Attendance & Payroll System — Face Recognition Powered
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Face-based attendance, GPS tracking, auto payroll — employee management ab hua simple. No buddy punching, no errors!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                </Link>
                <button className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            
            {/* Attendance Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-4 gap-3 mb-6">
                  <div className="bg-green-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-green-600 font-medium">Present</div>
                    <div className="text-2xl font-bold text-green-700">42</div>
                  </div>
                  <div className="bg-red-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-red-600 font-medium">Absent</div>
                    <div className="text-2xl font-bold text-red-700">3</div>
                  </div>
                  <div className="bg-blue-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-blue-600 font-medium">On Leave</div>
                    <div className="text-2xl font-bold text-blue-700">5</div>
                  </div>
                  <div className="bg-yellow-100 rounded-xl p-4 text-center">
                    <div className="text-sm text-yellow-600 font-medium">Late</div>
                    <div className="text-2xl font-bold text-yellow-700">2</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white mr-3">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Rahul Sharma</div>
                        <div className="text-sm text-gray-500">Checked in: 9:02 AM</div>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm font-medium">On Time</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white mr-3">
                        ⏰
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Priya Verma</div>
                        <div className="text-sm text-gray-500">Checked in: 9:45 AM</div>
                      </div>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">Late</span>
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
              Who Is HRM For?
            </h2>
            <p className="text-xl text-gray-600">
              Any business with employees that needs attendance and payroll
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-indigo-50 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase">⚡ HR Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
              Complete HR Management
            </h2>
            <p className="text-xl text-gray-600">
              From attendance to payslips — automate your HR operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
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
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get your HR system running in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-indigo-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">💰 Per-Employee Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Pay Only for What You Use
            </h2>
            <p className="text-xl text-gray-300">
              Simple per-employee pricing that scales with you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white transform scale-105'
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
                  <span className={plan.popular ? 'text-indigo-100' : 'text-gray-500'}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-indigo-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-indigo-600 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg'
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Your Business Suite
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect HRM with Bookz for automatic salary entries and CRM for team performance tracking!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/bookz"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              🧾 Connect with Bookz
            </Link>
            <Link
              to="/products/crm"
              className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              📈 Connect with CRM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRM;
