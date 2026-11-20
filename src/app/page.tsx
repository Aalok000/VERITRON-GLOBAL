import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhoWeTrain from '@/components/WhoWeTrain';

export const metadata: Metadata = {
  title: 'Veritron Global – Professional Training & Certification',
  description: 'Empowering Professionals. Advancing Global Standards.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhoWeTrain />
      {/* Additional sections can be added here following the same pattern */}
    </main>
  );
}
