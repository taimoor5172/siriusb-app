// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define TypeScript interfaces for our data structures
interface MenuItem {
  name: string;
  path: string;
}

interface MenuData {
  products: MenuItem[];
  solutions: MenuItem[];
  resources: MenuItem[];
}

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Menu data structure - can be easily extended with more items or categories
  const menuData: MenuData = {
    products: [
      { name: 'SpatialSense Scanner', path: '/products/spatial-scanner' },
      { name: 'SpatialSense Cloud', path: '/products/spatial-cloud' },
      { name: 'SpatialSense Edge Device', path: '/products/spatial-edge' },
    ],
    solutions: [
      { name: 'SpatialTwin: TreeGuard', path: '/solutions/treeguard' },
      { name: 'SpatialTwin: TrackVision', path: '/solutions/trackvision' },
      { name: 'SpatialTwin: BlastVue', path: '/solutions/blastvue' },
    ],
    resources: [
      { name: 'Documentation', path: '/resources/docs' },
      { name: 'Blog', path: '/resources/blog' },
      { name: 'Support', path: '/resources/support' },
    ],
  };

  // Handle menu open/close
  const handleMenuOpen = (menu: string): void => {
    setActiveMenu(menu);
  };

  const handleMenuClose = (): void => {
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="https://siriusb.pk/wp-content/uploads/2024/11/siriusb-1-300x88.png" 
                alt="Company Logo" 
                width={120}
                height={40}
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen('products')}
                onMouseLeave={handleMenuClose}
              >
                <button 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition duration-150"
                >
                  Products
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeMenu === 'products' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {menuData.products.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen('solutions')}
                onMouseLeave={handleMenuClose}
              >
                <button 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition duration-150"
                >
                  Solutions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeMenu === 'solutions' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {menuData.solutions.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMenuOpen('resources')}
                onMouseLeave={handleMenuClose}
              >
                <button 
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition duration-150"
                >
                  Resources
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeMenu === 'resources' && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {menuData.resources.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Us (Regular Link) */}
              <Link 
                href="/about-us"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition duration-150"
              >
                About Us
              </Link>

              {/* Careers (Regular Link) */}
              <Link
                href="/careers"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600 transition duration-150"
              >
                Careers
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/demo"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Request a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;