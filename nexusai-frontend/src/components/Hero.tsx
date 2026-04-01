"use client"

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import QuickQuestion from './QuickQuestion';

export default function Hero() {
  const [showQuickQuestion, setShowQuickQuestion] = useState(false);

  const useCases = [
    '✍️ Write content',
    '🎨 Create images',
    '🛠️ Build something',
    '⚡ Automate work',
    '📊 Analyse data',
    '🔍 Just exploring'
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50 py-12 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              <Sparkles className="h-4 w-4 mr-2" />
              New to AI?
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Welcome to <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              NexusAI
            </span> <span className="text-4xl md:text-5xl">👋</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-16 max-w-3xl mx-auto px-4 leading-relaxed">
            Your personal guide to the world of AI. Discover, compare, and deploy 525+ models
            from 40+ providers in one unified interface.
          </p>

          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to explore the future?
              <span className="text-indigo-600"> 🚀</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl hover:from-indigo-700 hover:to-purple-700 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto">
                Let's get started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="text-indigo-600 hover:text-indigo-700 font-medium hover:underline text-lg transition-colors"
                onClick={() => setShowQuickQuestion(true)}
              >
                Or take a quick tour →
              </button>
            </div>
          </div>

          <QuickQuestion
            isOpen={showQuickQuestion}
            onClose={() => setShowQuickQuestion(false)}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 md:mb-16">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left border border-gray-100 hover:border-indigo-200 hover:-translate-y-1"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{useCase}</span>
              </button>
            ))}
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              How can I help you today?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="group flex flex-col md:flex-row items-center gap-3 p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-semibold text-gray-900">Code Generation</div>
                  <div className="text-sm text-gray-500">Build applications</div>
                </div>
              </button>
              <button className="group flex flex-col md:flex-row items-center gap-3 p-5 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-semibold text-gray-900">Image Generation</div>
                  <div className="text-sm text-gray-500">Create artwork</div>
                </div>
              </button>
              <button className="group flex flex-col md:flex-row items-center gap-3 p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="text-center md:text-left">
                  <div className="font-semibold text-gray-900">Document Analysis</div>
                  <div className="text-sm text-gray-500">Analyze text</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}