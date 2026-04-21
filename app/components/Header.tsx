import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        padding: "12px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" aria-label="La Ria Portraits">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              height: 40,              // 🔑 DŮLEŽITÉ
            }}
          >
            <Image
              src="/logo.png"
              alt="La Ria Portraits"
              width={140}
              height={40}
              style={{ objectFit: "contain" }}
              priority
            />
            <span style={{ fontSize: 12, color: "#666" }}>Praha</span>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 16 }}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/sluzby">Služby</Link>
          <Link href="/rezervace">Rezervace</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}

