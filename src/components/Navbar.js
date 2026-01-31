import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const products = [
    { name: 'DigiGini Bookz', path: '/products/bookz', icon: '🧾', desc: 'Billing & Accounting' },
    { name: 'DigiGini Wasender', path: '/products/wasender', icon: '📲', desc: 'WhatsApp Marketing' },
    { name: 'DigiGini Mitra', path: '/products/mitra', icon: '🤖', desc: 'AI Business Assistant' },
    { name: 'DigiGini CRM', path: '/products/crm', icon: '📈', desc: 'Sales CRM' },
    { name: 'DigiGini HRM', path: '/products/hrm', icon: '🧑‍💼', desc: 'Attendance & Payroll' },
  ];

  const solutions = [
    { name: 'Small Business', path: '/solutions/small-business', icon: '🏪' },
    { name: 'Retail & Wholesale', path: '/solutions/retail', icon: '🛒' },
    { name: 'Agency / CA', path: '/solutions/service', icon: '💼' },
    { name: 'Enterprise', path: '/solutions/enterprise', icon: '🏢' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl text-gray-800">DigiGini</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-4 mt-2">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-2xl mr-3">{product.icon}</span>
                      <div>
                        <div className="font-medium text-gray-800">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-4 mt-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="flex items-center px-4 py-3 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-xl mr-3">{solution.icon}</span>
                      <span className="font-medium text-gray-800">{solution.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>

            <Link
              to="/demo"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-gray-500 text-sm">Products</div>
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-2">{product.icon}</span>
                  {product.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-gray-500 text-sm">Solutions</div>
              {solutions.map((solution) => (
                <Link
                  key={solution.path}
                  to={solution.path}
                  className="flex items-center py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-2">{solution.icon}</span>
                  {solution.name}
                </Link>
              ))}
            </div>
            <Link
              to="/demo"
              className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-full font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
