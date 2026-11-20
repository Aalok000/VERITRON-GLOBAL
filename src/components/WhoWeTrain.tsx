import Image from 'next/image';

const cards = [
  {
    title: 'Individuals',
    description: 'Fresh graduates, job seekers, and professionals looking to enhance qualifications.',
    icon: '/icons/individuals.svg',
  },
  {
    title: 'Corporate Organizations',
    description: 'Customized programs for employees, management teams, and quality departments.',
    icon: '/icons/corporate.svg',
  },
  {
    title: 'Universities & Educational Institutions',
    description: 'Industry‑oriented training for students, faculty, and academic bodies.',
    icon: '/icons/university.svg',
  },
  {
    title: 'Consultants & Auditors',
    description: 'Professional development for ISO consultants, internal and lead auditors.',
    icon: '/icons/auditor.svg',
  },
];

export default function WhoWeTrain() {
  return (
    <section id="whoweTrain" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading text-darkText mb-8">Professional Learning for Every Career Stage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-background rounded-lg p-6 shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <Image src={card.icon} alt={card.title} width={64} height={64} className="object-contain" />
              </div>
              <h3 className="font-heading text-primary font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-darkText mb-4">{card.description}</p>
              <a href="#" className="inline-block btn-primary text-sm">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
