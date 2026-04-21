
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'La Ria Portraits | Praha',
  description: 'Lifestyle & business focení pro jednotlivce i firmy v Praze. Rezervujte si termín online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
