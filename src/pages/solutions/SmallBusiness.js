import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SmallBusiness = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-4xl mb-4 block">🏪</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Small Business Owners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Billing + WhatsApp + AI = Full growth engine. Get everything you need to run and grow your small business.
            </p>
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">
              Recommended: DigiGini Bookz + Wasender
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Invoicing</h3>
              <p className="text-gray-600 mb-4">
                Create professional invoices in seconds. Works offline too!
              </p>
              <ul className="space-y-2">
                {['Lightning-fast billing', 'GST compliant', 'WhatsApp share'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Reminders</h3>
              <p className="text-gray-600 mb-4">
                Never chase payments manually. Auto-remind customers via WhatsApp.
              </p>
              <ul className="space-y-2">
                {['Auto reminders', 'Payment tracking', 'Follow-up automation'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Engagement</h3>
              <p className="text-gray-600 mb-4">
                Keep customers engaged with offers, updates, and personalized messages.
              </p>
              <ul className="space-y-2">
                {['Bulk WhatsApp campaigns', 'Festival wishes', 'New arrival alerts'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join 500+ small business owners already using DigiGini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/bookz"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Start with Bookz
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusiness;
