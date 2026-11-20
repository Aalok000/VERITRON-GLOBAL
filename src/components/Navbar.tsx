import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Replace with your logo */}
            <Image src="/logo.png" alt="Veritron Global" width={120} height={40} className="object-contain" />
          </div>
          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            {['Home','About Us','Training Programs','Accreditations','Industries','Training Calendar','Resources','Contact Us'].map((item)=> (
              <Link key={item} href={`#${item.replace(/ /g,'').toLowerCase()}`} className="text-darkText hover:text-primary transition">{item}</Link>
            ))}
          </div>
          {/* CTA */}
          <div className="hidden md:block">
            <Link href="#trainingprograms" className="btn-cta">Explore Courses</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
