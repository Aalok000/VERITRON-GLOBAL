import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative bg-primary text-white py-20 overflow-hidden">
      {/* Background visual */}
      <Image
        src="/hero-bg.jpg"
        alt="Professional training"
        fill
        className="object-cover opacity-20 pointer-events-none"
        priority
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Empowering Professionals with Global Standards
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Advance your career with industry‑focused professional training. Develop expertise in Quality Management, Information Security, Artificial Intelligence, Environmental Management, Automotive Standards, and more through expert‑led training programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="#trainingprograms" className="btn-primary">
            Explore Training Programs
          </Link>
          <Link href="#" className="btn-cta">
            Download Course Catalogue
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left mt-8">
          {[
            'Professional Training Programs',
            'Experienced Industry Trainers',
            'Online & In‑House Learning',
            'Flexible Training Schedules',
          ].map((txt, i) => (
            <div key={i} className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>{txt}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm italic">Supporting Professionals and Organizations in Building Competence and Excellence.</p>
      </div>
    </section>
  );
}
