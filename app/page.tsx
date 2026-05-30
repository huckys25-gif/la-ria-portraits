const portfolioItems = [
  {
    title: "Rodinné focení",
    subtitle: "Přirozené momenty plné světla a blízkosti.",
    image: "/images/family.jpg",
    bg: "card-gradient card-gradient-emerald",
    accent: "accent-emerald",
  },
  {
    title: "Svatby",
    subtitle: "Elegantní reportáž z vašeho dne bez přehnané stylizace.",
    image: "/images/wedding.jpg",
    bg: "card-gradient card-gradient-orange",
    accent: "accent-orange",
  },
  {
    title: "Dětské focení",
    subtitle: "Jemné, hravé a živé fotky s přirozenou atmosférou.",
    image: "/images/kids.jpg",
    bg: "card-gradient card-gradient-sky",
    accent: "accent-sky",
  },
];

const pricing = [
  {
    name: "Mini",
    price: "2 900 Kč",
    features: ["30 minut focení", "10 upravených fotografií", "Online galerie"],
    border: "border-emerald",
    button: "btn-emerald",
  },
  {
    name: "Standard",
    price: "4 900 Kč",
    features: ["60 minut focení", "30 upravených fotografií", "Online galerie + tisk"],
    border: "border-orange featured",
    button: "btn-orange",
    featured: true,
  },
  {
    name: "Premium",
    price: "7 900 Kč",
    features: ["90 minut focení", "60 upravených fotografií", "Fotokniha + online galerie"],
    border: "border-sky",
    button: "btn-sky",
  },
];

const testimonials = [
  {
    text: "Nádherné, přirozené fotky a úplně pohodová atmosféra během focení.",
    author: "Jana a Tomáš",
  },
  {
    text: "Skvělé vedení, krásné světlo a fotky, ke kterým se pořád vracíme.",
    author: "Klára",
  },
  {
    text: "Web i styl focení působí moderně, čistě a ne přeslazeně.",
    author: "Petra",
  },
];

const palette = [
  { hex: "#A9C5B3", label: "Šalvějová" },
  { hex: "#D39B72", label: "Terakota" },
  { hex: "#B8D4E3", label: "Modrá mlha" },
  { hex: "#F9F4EC", label: "Krémová" },
];

function IconArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm">
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSparkles() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm">
      <path d="M10 2L11.8 7.2L17 9L11.8 10.8L10 16L8.2 10.8L3 9L8.2 7.2L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function IconCamera() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
      <path d="M4 8.5C4 7.67 4.67 7 5.5 7H7.3C7.63 7 7.93 6.81 8.07 6.51L8.7 5.19C8.94 4.68 9.45 4.35 10.01 4.35H13.99C14.55 4.35 15.06 4.68 15.3 5.19L15.93 6.51C16.07 6.81 16.37 7 16.7 7H18.5C19.33 7 20 7.67 20 8.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V8.5Z" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
      <path d="M12 20C11.7 20 11.39 19.89 11.15 19.67C7.31 16.18 5 13.98 5 10.95C5 8.6 6.79 6.8 9.15 6.8C10.49 6.8 11.78 7.42 12.6 8.39C13.42 7.42 14.71 6.8 16.05 6.8C18.41 6.8 20.2 8.6 20.2 10.95C20.2 13.98 17.89 16.18 14.05 19.67C13.81 19.89 13.5 20 13.2 20H12Z" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
      <path d="M4 7.5C4 6.67 4.67 6 5.5 6H18.5C19.33 6 20 6.67 20 7.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V7.5Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M5 8L12 13L19 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
      <path d="M6.7 4.5H9.2C9.57 4.5 9.9 4.76 9.98 5.12L10.55 7.8C10.61 8.08 10.53 8.38 10.33 8.59L8.85 10.12C9.71 11.83 11.17 13.29 12.88 14.15L14.41 12.67C14.62 12.47 14.92 12.39 15.2 12.45L17.88 13.02C18.24 13.1 18.5 13.43 18.5 13.8V16.3C18.5 16.96 18.01 17.52 17.35 17.6C16.91 17.66 16.47 17.69 16.02 17.69C9.76 17.69 6.31 14.24 6.31 7.98C6.31 7.53 6.34 7.09 6.4 6.65C6.48 5.99 7.04 5.5 7.7 5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="icon-sm fill-current">
      <path d="M10 1.9L12.5 7L18 7.8L14 11.7L15 17.1L10 14.4L5 17.1L6 11.7L2 7.8L7.5 7L10 1.9Z" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="site-shell">
      <div className="bg-orb orb-emerald" />
      <div className="bg-orb orb-orange" />
      <div className="bg-orb orb-sky" />

      <header className="topbar">
        <div className="wrapper topbar-inner">
          <div>
            <div className="brand-name">Lucie Nováková</div>
            <div className="brand-sub">Photography</div>
          </div>

          <nav className="topnav">
            <a href="#home" className="nav-emerald">Domů</a>
            <a href="#portfolio" className="nav-orange">Portfolio</a>
            <a href="#about" className="nav-sky">O mně</a>
            <a href="#pricing" className="nav-emerald">Ceník</a>
            <a href="#contact" className="nav-orange">Kontakt</a>
          </nav>

          <div className="topbar-actions">
            <button className="btn-pill btn-dark desktop-only">Rezervovat termín</button>
            <button className="icon-button mobile-only" aria-label="Menu">
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero-section wrapper">
        <div className="hero-copy-col">
          <div className="soft-badge">
            <span className="text-orange"><IconSparkles /></span>
            Barevnější • elegantní • méně růžové
          </div>

          <h1 className="hero-title">
            Moderní foto web,
            <span className="text-emerald">který je živější</span>
            <span> a pořád elegantní.</span>
          </h1>

          <p className="hero-text">
            Tohle je jednoduchá verze homepage bez externích knihoven. Styl kombinuje
            šalvějovou zelenou, teplou terakotu, jemnou modrou a dostatek prostoru, aby web
            nepůsobil sladce ani přeplácaně.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn-pill btn-emerald">
              Prohlédnout portfolio
              <IconArrowRight />
            </a>
            <a href="#pricing" className="btn-pill btn-light">
              Zobrazit ceník
            </a>
          </div>

          <div className="palette-row">
            {palette.map((color) => (
              <div key={color.hex} className="palette-chip">
                <span className="palette-dot" style={{ backgroundColor: color.hex }} />
                <span>{color.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual-col">
          <div className="hero-glow" />
          <div className="hero-card">
            <img src="/images/hero-main.jpg" alt="Hlavní fotografie" className="hero-main-image" />
            <div className="hero-overlay" />
            <div className="hero-floating-note">
              <div className="floating-kicker">Nový vizuální směr</div>
              <div className="floating-title">Editorial elegance s živější barvou</div>
              <p>
                Méně růžové, více přírodních odstínů a jemných efektů v hoveru.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section wrapper centered-section">
        <div className="section-kicker">Portfolio</div>
        <h2 className="section-title">Hlavička, která působí luxusně, ale ne studeně</h2>
        <p className="section-description">
          Každý blok má vlastní jemný barevný akcent, takže web působí pestřeji a moderněji,
          ale stále jednotně.
        </p>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article key={item.title} className={item.bg}>
              <div className="portfolio-image-wrap">
                <img src={item.image} alt={item.title} className="portfolio-image" />
              </div>
              <div className="portfolio-content">
                <span className={"accent-line " + item.accent} />
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <button className="btn-pill btn-light slim-btn">
                  Zobrazit galerii
                  <IconArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-band">
        <div className="wrapper about-grid">
          <div>
            <div className="section-kicker">O mně</div>
            <h2 className="section-title left">Více charakteru, více vzduchu, žádná přeslazenost</h2>
            <p className="about-text">
              Tato verze funguje dobře pro rodinnou, dětskou i svatební fotografii. Barevnost je
              živější než klasické neutrální weby, ale díky jemným tónům a whitespace zůstává prémiová.
            </p>
            <div className="features-grid">
              {[
                { label: "Jemné efekty", icon: <IconSparkles />, style: "feature-emerald" },
                { label: "Zoom fotek", icon: <IconCamera />, style: "feature-orange" },
                { label: "Barevné akcenty", icon: <IconHeart />, style: "feature-sky" },
              ].map((item) => (
                <div key={item.label} className={"feature-card " + item.style}>
                  <div className="feature-icon">{item.icon}</div>
                  <div className="feature-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="tilt-gallery">
            <div className="gallery-card card-left">
              <img src="/images/about-1.jpg" alt="Ukázka fotografie 1" />
            </div>
            <div className="gallery-card card-right">
              <img src="/images/about-2.jpg" alt="Ukázka fotografie 2" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section wrapper centered-section">
        <div className="section-kicker">Ceník</div>
        <h2 className="section-title">Přehledné balíčky bez chaosu</h2>

        <div className="pricing-grid">
          {pricing.map((item) => (
            <div key={item.name} className={"price-card " + item.border}>
              {item.featured && <div className="featured-badge">Nejčastější volba</div>}
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <span className="bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={"cta-button " + item.button}>Vybrat balíček</button>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrapper centered-section testimonials-section">
        <div className="section-kicker">Recenze</div>
        <h2 className="section-title">Co ten styl komunikuje</h2>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.author} className="testimonial-card">
              <div className="stars-row">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
              </div>
              <p>“{item.text}”</p>
              <div className="author">— {item.author}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-strip">
        <div className="wrapper contact-strip-grid">
          <div>
            <div className="section-kicker">Kontakt</div>
            <h2 className="section-title left">Teď už to stačí nasadit na GitHub a Vercel</h2>
            <p className="about-text">
              Tento kód je připravený jako homepage pro Next.js. Stačí nahradit obrázky vlastními,
              upravit texty a pushnout do repozitáře.
            </p>
          </div>
          <div className="contact-panel">
            <div className="contact-mini-grid">
              <div className="mini-card">
                <div className="mini-icon text-emerald"><IconMail /></div>
                <div className="mini-kicker">E-mail</div>
                <div className="mini-value">lucie@fotoatelier.cz</div>
              </div>
              <div className="mini-card">
                <div className="mini-icon text-orange"><IconPhone /></div>
                <div className="mini-kicker">Telefon</div>
                <div className="mini-value">+420 123 456 789</div>
              </div>
            </div>
            <button className="btn-pill btn-dark full-width-btn">
              Napsat zprávu
              <IconArrowRight />
            </button>
          </div>
        </div>
      </section>

      <footer className="wrapper footer-row">
        <div>© 2026 Lucie Nováková Photography</div>
        <div>Next.js • verze bez externích knihoven</div>
      </footer>
    </main>
  );
}
