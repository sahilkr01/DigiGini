import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Retail = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-4xl mb-4 block">🛒</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Retailers & Wholesalers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Inventory, billing, purchase, expiry tracking — everything for your retail or wholesale business.
            </p>
            <div className="inline-flex items-center bg-orange-100 text-orange-700 px-6 py-3 rounded-full font-medium">
              Recommended: DigiGini Bookz + Mitra
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stock Management</h3>
              <p className="text-gray-600 mb-4">
                Track every item in your inventory with real-time updates.
              </p>
              <ul className="space-y-2">
                {['Real-time inventory', 'Low stock alerts', 'Batch tracking'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expiry Alerts</h3>
              <p className="text-gray-600 mb-4">
                Never lose money on expired products. Get alerts before expiry.
              </p>
              <ul className="space-y-2">
                {['Expiry tracking', 'Auto alerts', 'FIFO management'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Insights</h3>
              <p className="text-gray-600 mb-4">
                Let AI tell you what to stock, when to reorder, and pricing suggestions.
              </p>
              <ul className="space-y-2">
                {['Sales predictions', 'Reorder suggestions', 'Profit analysis'].map((item) => (
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to streamline your retail business?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Join retailers and wholesalers already using DigiGini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/bookz"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Start with Bookz
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;
