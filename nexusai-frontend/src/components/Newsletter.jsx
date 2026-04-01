import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);

    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (subscribed) {
    return (
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Welcome aboard! 🎉
            </h3>
            <p className="text-gray-600">
              You're subscribed to the weekly AI digest. Check your email for confirmation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Stay ahead of the curve
          </h3>
          <p className="text-gray-600 mb-6">
            New models drop every week. Don't miss a release.
          </p>
          <p className="text-gray-600 mb-6 text-sm">
            Get a curated weekly digest: new model releases, benchmark comparisons, pricing changes, and prompt engineering tips — straight to your inbox.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            No spam. Unsubscribe any time. Trusted by 82K+ builders.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={subscribing}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              {subscribing ? 'Subscribing...' : 'Subscribe free'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}