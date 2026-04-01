"use client"

import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

interface QuickQuestionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuestion({ isOpen, onClose }: QuickQuestionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-4 sm:p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 sm:p-2.5 hover:bg-gray-100 rounded-full"
        >
          <X className="h-5 sm:h-6 w-5 sm:w-6" />
        </button>

        {selectedCategory ? (
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              ✨ Building your personalised query…
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Based on your interest in selectedCategory.label, we'll recommend the perfect AI model
              to help you achieve your goals.
            </p>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 sm:p-6 rounded-lg mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl">🎨</div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">Create image</h4>
                  <p className="text-indigo-100 text-sm">Let's find the perfect AI model for you</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 text-sm sm:text-base">
              Continue <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              What would you like to create?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Choose a category to get started with the perfect AI model
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.label)}
                  className={`p-3 sm:p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex flex-col items-center space-y-1.5 sm:space-y-2 ${
                    category.color
                  }`}
                >
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                  <span className="text-xs sm:text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}