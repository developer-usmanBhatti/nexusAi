import { Star, ArrowRight } from 'lucide-react';

const featuredModels = [
  {
    id: 1,
    name: 'GPT-5',
    provider: 'OpenAI',
    hot: true,
    description: 'OpenAI flagship. Native computer-use agents, advanced reasoning, 2M context.',
    rating: 4.9,
    reviews: 4210,
    price: 7.5,
    tags: ['Flagship', 'Agents', 'Multimodal', 'Reasoning']
  },
  {
    id: 2,
    name: 'GPT-5.2',
    provider: 'OpenAI',
    new: true,
    description: 'Mid-tier GPT-5 variant with improved instruction-following and multimodal support.',
    rating: 4.8,
    reviews: 2180,
    price: 4,
    tags: ['Multimodal', 'Balanced', 'Instruction']
  },
  {
    id: 3,
    name: 'GPT-5 Turbo',
    provider: 'OpenAI',
    hot: true,
    description: 'Fast, cost-effective GPT-5 for high-volume deployments.',
    rating: 4.8,
    reviews: 3560,
    price: 2.5,
    tags: ['Fast', 'Cost-Effective', 'High-Volume']
  },
  {
    id: 4,
    name: 'GPT-4.5',
    provider: 'OpenAI',
    description: 'Bridging model with improved creativity and long-form generation.',
    rating: 4.7,
    reviews: 1980,
    price: 3,
    tags: ['Creative', 'Long-form', 'Language']
  },
  {
    id: 5,
    name: 'GPT-4.1',
    provider: 'OpenAI',
    description: 'Optimized for coding and instruction-following with 128K context.',
    rating: 4.7,
    reviews: 2310,
    price: 2,
    tags: ['Code', 'Instructions', '128K']
  },
  {
    id: 6,
    name: 'GPT-4o',
    provider: 'OpenAI',
    description: 'Multimodal flagship combining text, vision, and audio in one unified model.',
    rating: 4.7,
    reviews: 5120,
    price: 2.5,
    tags: ['Multimodal', 'Vision', 'Audio', 'Coding']
  },
];

export default function FeaturedModels() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 mb-6">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-indigo-700 font-medium">Featured Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our AI Model Marketplace
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover and compare the latest AI models from leading providers
          </p>
          <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-lg transition-colors">
            Browse all 525 models
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModels.map((model) => (
            <div
              key={model.id}
              className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {model.hot && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                      🔥 Hot
                    </span>
                  )}
                  {model.new && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      ✨ New
                    </span>
                  )}
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-xl">
                    <div className="text-2xl font-bold text-gray-700">
                      {model.name.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {model.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {model.provider}
                </p>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {model.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {model.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(model.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">
                    {model.rating} ({model.reviews.toLocaleString()})
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900">
                  ${model.price}/1M
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                Try Model →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}