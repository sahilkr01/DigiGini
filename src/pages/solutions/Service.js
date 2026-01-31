import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Service = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-4xl mb-4 block">💼</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Agencies / CA / Service Providers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Client, project & payments management — everything service businesses need.
            </p>
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-6 py-3 rounded-full font-medium">
              Recommended: DigiGini CRM + Bookz
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Tracking</h3>
              <p className="text-gray-600 mb-4">
                Keep all client information, communications, and history in one place.
              </p>
              <ul className="space-y-2">
                {['Client database', 'Communication history', 'Document storage'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Invoice Management</h3>
              <p className="text-gray-600 mb-4">
                Create, send, and track invoices professionally.
              </p>
              <ul className="space-y-2">
                {['Professional invoices', 'Payment tracking', 'Recurring billing'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Pipeline</h3>
              <p className="text-gray-600 mb-4">
                Track projects from inquiry to completion with visual pipelines.
              </p>
              <ul className="space-y-2">
                {['Project tracking', 'Task management', 'Deadline reminders'].map((item) => (
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to manage clients better?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Join agencies and service providers already using DigiGini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products/crm"
              className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Start with CRM
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-all"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
