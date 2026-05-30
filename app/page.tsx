const portfolioItems = [
  {
    title: "Rodinné focení",
    subtitle: "Přirozené momenty plné světla a blízkosti.",
    image: "/images/family.jpg",
    tone: "tone-sage",
    chip: "chip-sage",
  },
  {
    title: "Svatby",
    subtitle: "Nádherné svatební dny.",
    image: "/images/wedding.jpg",
    tone: "tone-terra",
    chip: "chip-terra",
  },
  {
    title: "Dětské focení",
    subtitle: "Hravé a jemné momenty.",
    image: "/images/kids.jpg",
    tone: "tone-sand",
    chip: "chip-sand",
  },
];

const pricing = [
  {
    name: "Mini",
    price: "2 900 Kč",
    features: ["30 minut • focení", "10 upravených fotografií"],
    tone: "price-sage",
  },
  {
    name: "Standard",
    price: "4 900 Kč",
    features: ["60 minut • 30 fotek", "Online galerie + tisk"],
    tone: "price-terra",
    featured: true,
  },
  {
    name: "Premium",
    price: "7 900 Kč",
    features: ["90 minut • 60 fotek", "Fotokniha • online galerie"],
    tone: "price-dark",
  },
];

const testimonials = [
  "Skvělé, přirozené fotky, moc příjemné focení.",
  "Reportáž ze svatby plná emocí.",
  "Skvělý přístup a krásné snímky.",
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm" aria-hidden="true">
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="shell topbar-inner">
          <a href="#home" className="brand" aria-label="La Ria Portraits - Domů">
            <img src="/logo.png" alt="La Ria Portraits" className="brand-logo" />
          </a>

          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#home" className="active">Domů</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Ceník</a>
            <a href="#about">O mně</a>
            <a href="#contact">Kontakt</a>
          </nav>

          <a href="#contact" className="header-cta">Rezervovat termín</a>
        </div>
      </header>

      <section id="home" className="hero-band">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>La Ria Portraits | Praha</h1>
            <h2>Lifestyle &amp; business focení<br />pro jednotlivce i firmy v Praze.</h2>
            <p>Rezervujte si termín online.</p>
            <div className="hero-actions">
              <a href="#portfolio" className="btn btn-outline-light">Prohlédnout portfolio</a>
              <a href="#pricing" className="btn btn-outline-darklight">Zjistit více <ArrowRight /></a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src="/images/hero-main.jpg" alt="Hlavní portrétní fotografie" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="content-section cream-bg">
        <div className="shell portfolio-grid">
          {portfolioItems.map((item) => (
            <article key={item.title} className={`portfolio-card ${item.tone}`}>
              <div className="portfolio-head">{item.title}</div>
              <div className="portfolio-image-wrap-card">
                <img src={item.image} alt={item.title} className="portfolio-image-card" />
              </div>
              <div className="portfolio-subtitle">{item.subtitle}</div>
              <div className={`portfolio-chip ${item.chip}`}>{item.title === 'Svatby' ? 'Nádherné svatební dny' : item.title === 'Dětské focení' ? 'Jiskřivé chvíle' : 'Přirozené focení'}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="content-section ivory-bg pricing-section">
        <div className="shell">
          <div className="section-title-row">
            <h3>Balíčky focení</h3>
          </div>
          <div className="pricing-grid">
            {pricing.map((item) => (
              <article key={item.name} className={`pricing-card ${item.tone}`}>
                {item.featured && <div className="featured-label">Nejoblíbenější volba</div>}
                <div className="pricing-name">{item.name}</div>
                <div className="pricing-price">{item.price}</div>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="pricing-btn">Vybrat balíček</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section cream-bg testimonials-section">
        <div className="shell">
          <div className="section-title-row">
            <h3>Co říkají klienti</h3>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((text) => (
              <article key={text} className="testimonial-item">
                <p>“{text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="content-section white-bg about-section">
        <div className="shell about-grid">
          <div className="about-copy">
            <p className="about-kicker">O mně</p>
            <h3>Elegantní styl a přirozené vedení během focení.</h3>
            <p>
              La Ria Portraits je postavené jako moderní portfolio fotografky, které je přehledné,
              luxusní a stále lidské. Web je navržen tak, aby nechal vyniknout fotografie a nepůsobil přeslazeně.
            </p>
          </div>
          <div className="about-images">
            <img src="/images/about-1.jpg" alt="Ukázka focení 1" />
            <img src="/images/about-2.jpg" alt="Ukázka focení 2" />
          </div>
        </div>
      </section>

      <section id="contact" className="content-section ivory-bg contact-section">
        <div className="shell contact-grid">
          <div>
            <div className="section-title-row left-row">
              <h3>Kontakt</h3>
            </div>
            <p className="contact-copy">Lifestyle &amp; business focení pro jednotlivce i firmy v Praze. Rezervujte si termín online.</p>
          </div>
          <div className="contact-card">
            <p><strong>E-mail:</strong> katkawei@gmail.com</p>
            <p><strong>Telefon:</strong> +420 603 155 635</p>
            <p><strong>Lokalita:</strong> Praha</p>
            <a href="#home" className="btn btn-dark full-width">Napsat zprávu <ArrowRight /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
