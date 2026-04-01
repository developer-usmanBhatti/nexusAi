const comparisonData = [
  {
    model: 'GPT-5.4',
    lab: 'OpenAI',
    context: '1.05M',
    inputPrice: '$2.50',
    outputPrice: '$15',
    multimodal: '✅',
    speed: '🟢 Fast',
    bestFor: 'High-precision professional tasks'
  },
  {
    model: 'Claude Opus 4.6',
    lab: 'Anthropic',
    context: '200K/1M β',
    inputPrice: '$5',
    outputPrice: '$25',
    multimodal: '✅',
    speed: '🟠 Moderate',
    bestFor: 'Agents, advanced coding'
  },
  {
    model: 'Claude Sonnet 4.6',
    lab: 'Anthropic',
    context: '200K/1M β',
    inputPrice: '$3',
    outputPrice: '$15',
    multimodal: '✅',
    speed: '🟢 Fast',
    bestFor: 'Code, data, content at scale'
  },
  {
    model: 'Claude Haiku 4.5',
    lab: 'Anthropic',
    context: '200K',
    inputPrice: '$1',
    outputPrice: '$5',
    multimodal: '✅',
    speed: '⚡ Fastest',
    bestFor: 'Real-time, high-volume'
  },
  {
    model: 'Gemini 3.1 Pro',
    lab: 'Google',
    context: '2M–5M',
    inputPrice: '$2',
    outputPrice: '$12',
    multimodal: '✅',
    speed: '🟠 Moderate',
    bestFor: 'Deep reasoning, long context'
  }
];

export default function FlagshipComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flagship Model Comparison</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Compare all →
          </a>
          <p className="text-gray-600 mt-4">
            Side-by-side view of the leading models across all major labs. Input/Output prices per 1M tokens.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Model</th>
                <th className="text-left py-3 px-4 font-semibold">Lab</th>
                <th className="text-left py-3 px-4 font-semibold">Context</th>
                <th className="text-left py-3 px-4 font-semibold">Input $/1M</th>
                <th className="text-left py-3 px-4 font-semibold">Output $/1M</th>
                <th className="text-left py-3 px-4 font-semibold">Multimodal</th>
                <th className="text-left py-3 px-4 font-semibold">Speed</th>
                <th className="text-left py-3 px-4 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">
                    <span className="inline-flex items-center gap-2">
                      {row.model.split(' ')[0]} {row.model.split(' ')[1]}
                      {row.lab === 'OpenAI' && (
                        <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded">
                          🧠
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{row.lab}</td>
                  <td className="py-4 px-4 text-gray-600">{row.context}</td>
                  <td className="py-4 px-4 text-gray-900 font-semibold">{row.inputPrice}</td>
                  <td className="py-4 px-4 text-gray-900 font-semibold">{row.outputPrice}</td>
                  <td className="py-4 px-4">{row.multimodal}</td>
                  <td className="py-4 px-4">{row.speed}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          * Prices shown are approximate. Free self-hosted models exclude infrastructure costs. Beta pricing may change.
        </p>
      </div>
    </section>
  );
}