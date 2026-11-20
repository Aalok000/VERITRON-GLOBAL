import React from 'react';

const stats = [
  { label: 'Learners Trained', value: '1,000+', icon: '🧑‍🏫' },
  { label: 'Training Programs', value: '50+', icon: '📚' },
  { label: 'Industry Experts', value: '30+', icon: '👩‍💼' },
  { label: 'Industries Served', value: '40+', icon: '🏭' },
];

export default function Stats() {
  return (
    <section id="statistics" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center text-darkText mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-2xl font-semibold text-primary">{item.value}</p>
              <p className="text-sm text-darkText mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
