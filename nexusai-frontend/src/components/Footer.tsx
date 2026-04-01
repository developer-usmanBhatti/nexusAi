"use client"

import { MessageCircle, Code, Users } from 'lucide-react';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'Models', href: '#' },
      { name: 'Research', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    about: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Status', href: '#' },
      { name: 'API Docs', href: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-12 sm:py-16 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  NexusAI
                </h3>
              </div>
              <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-md leading-relaxed">
                Your personal guide to the world of AI. Discover, compare, and deploy AI models for any use case.
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Code className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Users className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Navigation</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Company</h4>
              <ul className="space-y-3">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Support</h4>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 NexusAI. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}