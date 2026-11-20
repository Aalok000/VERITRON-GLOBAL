import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Veritron Global – Professional Training & Certification',
  description: 'Empowering Professionals. Advancing Global Standards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body className="bg-white text-darkText antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
