export default function AIStats() {
  const stats = [
    {
      value: '525+',
      label: 'AI Models',
      icon: '🧠'
    },
    {
      value: '82K',
      label: 'Builders',
      icon: '👥'
    },
    {
      value: '28',
      label: 'AI Labs',
      icon: '🏛️'
    },
    {
      value: '4.8⭐',
      label: 'Avg Rating',
      icon: '⭐'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.icon} {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}