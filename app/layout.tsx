import "./globals.css";

export const metadata = {
  title: "La Ria Portraits",
  description: "Lifestyle & business focení v Praze",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo-link" aria-label="La Ria Portraits - Domů">
              <img src="/logo.png" alt="La Ria Portraits" className="logo" />
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a href="#home">Home</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#sluzby">Služby</a>
              <a href="#kontakt">Kontakt</a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
