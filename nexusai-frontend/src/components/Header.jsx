"use client"

import { useState } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Chat Hub', href: '#chat-hub', icon: '💬' },
    { label: 'Marketplace', href: '#marketplace', icon: '🛍️' },
    { label: 'Discover New', href: '#discover', icon: '🔬' },
    { label: 'Agents', href: '#agents', icon: '🤖' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                NexusAI
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 font-medium text-sm sm:text-base transition-colors flex items-center gap-2 py-2"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-3">
            <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg transition-colors text-sm sm:text-base">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </button>
            <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-md">
              <User className="h-4 w-4" />
              <span>Sign in</span>
            </button>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-indigo-600 font-medium text-base flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
              <button className="w-full flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all text-base">
                <User className="h-5 w-5" />
                <span>Sign in</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}