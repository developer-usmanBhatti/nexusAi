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
    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to NexusAI <span className="text-indigo-600">👋</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Think of this as your personal guide to the world of AI.
            You don't need to be a tech expert — or even know what AI is.
            We'll walk you through everything, one simple step at a time.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Ready? It only takes a minute. <span className="text-indigo-600">🚀</span>
            </h2>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 flex items-center gap-2 mx-auto">
              Let's get started <ArrowRight className="h-5 w-5" />
            </button>
            <button
              className="text-indigo-600 hover:text-indigo-700 underline mt-4"
              onClick={() => setShowQuickQuestion(true)}
            >
              Quick question
            </button>
          </div>

          <QuickQuestion
            isOpen={showQuickQuestion}
            onClose={() => setShowQuickQuestion(false)}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                {useCase}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">✨ Let's get started</h3>
            <p className="text-gray-600 mb-4">
              You're in a place where AI can help you explore ideas, solve problems,
              and create things faster — even if you've never used AI before.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <span>No tech knowledge needed — we'll explain everything in plain language</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <span>Just answer a few simple questions about what you'd like to do</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <span>We'll build your first AI request together — step by step</span>
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}