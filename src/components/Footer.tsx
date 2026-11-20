import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <Image src="/logo.png" alt="Veritron Global" width={150} height={50} className="object-contain mb-4" />
          <p className="text-sm">Empowering Professionals with Global Standards.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {['About Us','Training Programs','Accreditations','Industries','Training Calendar','Contact Us'].map((link)=> (
              <li key={link}><a href={`#${link.replace(/ /g,'').toLowerCase()}`} className="hover:underline">{link}</a></li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <p className="text-sm">Email: info@veritronglobal.com</p>
          <p className="text-sm">Phone: +1 555‑123‑4567</p>
          <p className="text-sm">Address: 123 Business St, City, Country</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs border-t border-primary pt-4">
        © {new Date().getFullYear()} Veritron Global. All rights reserved.
      </div>
    </footer>
  );
}
