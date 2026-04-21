import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link href="/" className="brand" aria-label="La Ria Portraits">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Image
                src="/logo.png"
                alt="La Ria Portraits"
                width={140}
                height={40}
                priority
              />
              <span>
                <small>Praha</small>
              </span>
            </div>
          </Link>

          <nav className="menu" aria-label="Hlavní menu">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/rezervace" className="cta">
              Rezervace
            </Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
