import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function QuickQuestion({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { icon: '🎨', label: 'Create image', color: 'bg-pink-100 text-pink-600' },
    { icon: '🎵', label: 'Generate Audio', color: 'bg-purple-100 text-purple-600' },
    { icon: '🎬', label: 'Create video', color: 'bg-red-100 text-red-600' },
    { icon: '📊', label: 'Create slides', color: 'bg-blue-100 text-blue-600' },
    { icon: '📈', label: 'Create Infographs', color: 'bg-green-100 text-green-600' },
    { icon: '❓', label: 'Create quiz', color: 'bg-yellow-100 text-yellow-600' },
    { icon: '🗂️', label: 'Create Flashcards', color: 'bg-indigo-100 text-indigo-600' },
    { icon: '🧠', label: 'Create Mind map', color: 'bg-purple-100 text-purple-600' },
    { icon: '📉', label: 'Analyze Data', color: 'bg-orange-100 text-orange-600' },
    { icon: '✍️', label: 'Write content', color: 'bg-gray-100 text-gray-600' },
    { icon: '💻', label: 'Code Generation', color: 'bg-green-100 text-green-600' },
    { icon: '📄', label: 'Document Analysis', color: 'bg-blue-100 text-blue-600' },
    { icon: '🌐', label: 'Translate', color: 'bg-cyan-100 text-cyan-600' },
    { icon: '🔭', label: 'Just Exploring', color: 'bg-gray-100 text-gray-600' },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="h-6 w-6" />
        </button>

        {selectedCategory ? (
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              ✨ Building your personalised query…
            </h3>
            <p className="text-gray-600 mb-6">
              Based on your interest in {selectedCategory.label}, we'll recommend the perfect AI model
              to help you achieve your goals.
            </p>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{selectedCategory.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{selectedCategory.label}</h4>
                  <p className="text-indigo-100">Let's find the perfect AI model for you</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-4">Taking you to the Hub right away</p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2 mx-auto">
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-6">
              ✨ What would you like to do today?
            </h3>
            <p className="text-gray-600 mb-6">
              No tech background needed. Tell us what you'd like to achieve.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`${category.color} p-4 rounded-lg hover:opacity-90 transition-all text-center`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium">{category.label}</div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}