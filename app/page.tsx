const portfolioItems = [
  {
    title: "Rodinné focení",
    subtitle: "Přirozené momenty plné světla a blízkosti.",
    image: "/images/family.jpg",
    tone: "tone-sage",
  },
  {
    title: "Svatby",
    subtitle: "Elegantní reportáž z vašeho dne bez přehnané stylizace.",
    image: "/images/wedding.jpg",
    tone: "tone-terra",
  },
  {
    title: "Dětské focení",
    subtitle: "Jemné, hravé a živé fotky s přirozenou atmosférou.",
    image: "/images/kids.jpg",
    tone: "tone-sand",
  },
];

const pricing = [
  {
    name: "Mini",
    price: "2 900 Kč",
    features: ["30 minut focení", "10 upravených fotografií", "Online galerie"],
    accent: "accent-sage",
  },
  {
    name: "Standard",
    price: "4 900 Kč",
    features: ["60 minut focení", "30 upravených fotografií", "Online galerie + tisk"],
    accent: "accent-terra",
    featured: true,
  },
  {
    name: "Premium",
    price: "7 900 Kč",
    features: ["90 minut focení", "60 upravených fotografií", "Fotokniha + online galerie"],
    accent: "accent-dark",
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

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-sm" aria-hidden="true">
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="icon-sm fill-current" aria-hidden="true">
      <path d="M10 1.9L12.5 7L18 7.8L14 11.7L15 17.1L10 14.4L5 17.1L6 11.7L2 7.8L7.5 7L10 1.9Z" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="wrapper topbar-inner">
          <a href="#home" className="brand-block" aria-label="La Ria Portraits - Domů">
            <img src="/logo.png" alt="La Ria Portraits" className="brand-logo" />
          </a>

          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#home">Domů</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">O mně</a>
            <a href="#pricing">Ceník</a>
            <a href="#contact">Kontakt</a>
          </nav>

          <a href="#contact" className="topbar-cta">
            Rezervovat termín
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="wrapper hero-grid">
          <div className="hero-copy-panel">
            <p className="eyebrow">La Ria Portraits | Praha</p>
            <h1>Lifestyle & business focení pro jednotlivce i firmy v Praze.</h1>
            <p className="hero-copy">
              Moderní, čistý a elegantní web pro fotografku, která chce působit prémiově,
              ale stále lidsky a přirozeně. Méně růžové, více harmonie, černé a teplých neutrálních tónů.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="btn btn-primary">
                Prohlédnout portfolio
                <ArrowRight />
              </a>
              <a href="#pricing" className="btn btn-secondary">
                Zobrazit ceník
              </a>
            </div>
          </div>

          <div className="hero-image-panel">
            <img src="/images/hero-main.jpg" alt="Hlavní portfolio fotografie" className="hero-image" />
            <div className="hero-note">
              <span className="hero-note-kicker">Rezervujte si termín online.</span>
              <span className="hero-note-text">Soft luxury editorial</span>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section section-cream">
        <div className="wrapper section-head">
          <p className="eyebrow dark">Portfolio</p>
          <h2>Citlivé portréty, přirozené rodiny a čistý vizuální styl.</h2>
          <p className="section-copy">
            Tato homepage je postavená jako jeden elegantní celek. Fotografie jsou hlavním nosičem dojmu,
            design je podporuje a nepřebíjí.
          </p>
        </div>

        <div className="wrapper portfolio-grid">
          {portfolioItems.map((item) => (
            <article key={item.title} className={`portfolio-card ${item.tone}`}>
              <div className="portfolio-image-wrap">
                <img src={item.image} alt={item.title} className="portfolio-image" />
              </div>
              <div className="portfolio-card-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section section-white">
        <div className="wrapper about-grid">
          <div className="about-copy">
            <p className="eyebrow dark">O mně</p>
            <h2>Elegantní styl bez přeslazenosti.</h2>
            <p>
              Web působí luxusněji díky lepší rovnováze mezi tmavou horní částí a teplým světlým základem.
              Fotografie zůstávají v centru pozornosti a sekce na sebe navazují přirozeněji.
            </p>
            <p>
              Tenhle koncept je připravený pro reálné portfolio manželky a lze ho dál jednoduše doplnit
              o konkrétní texty, ceník nebo propojení na rezervace.
            </p>
          </div>

          <div className="about-images">
            <div className="about-card about-card-main">
              <img src="/images/about-1.jpg" alt="Ukázka fotografie 1" />
            </div>
            <div className="about-card about-card-offset">
              <img src="/images/about-2.jpg" alt="Ukázka fotografie 2" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section section-ivory">
        <div className="wrapper section-head">
          <p className="eyebrow dark">Ceník</p>
          <h2>Balíčky focení</h2>
        </div>

        <div className="wrapper pricing-grid">
          {pricing.map((item) => (
            <article key={item.name} className={`pricing-card ${item.accent} ${item.featured ? "featured-card" : ""}`}>
              {item.featured && <div className="featured-badge">Nejoblíbenější volba</div>}
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="price-btn">
                Vybrat balíček
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-white testimonials-section">
        <div className="wrapper section-head align-left">
          <p className="eyebrow dark">Reference</p>
          <h2>Co říkají klienti</h2>
        </div>

        <div className="wrapper testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.author} className="testimonial-card">
              <div className="stars-row">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p>„{item.text}“</p>
              <div className="testimonial-author">— {item.author}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section section-cream contact-section">
        <div className="wrapper contact-grid">
          <div>
            <p className="eyebrow dark">Kontakt</p>
            <h2>Domluvme váš termín</h2>
            <p className="section-copy left-copy">
              Lifestyle & business focení pro jednotlivce i firmy v Praze. Rezervujte si termín online.
            </p>
          </div>

          <div className="contact-card">
            <p><strong>E-mail:</strong> katkawei@gmail.com</p>
            <p><strong>Telefon:</strong> +420 603 155 635</p>
            <p><strong>Lokalita:</strong> Praha</p>
            <a href="#home" className="btn btn-dark full-btn">
              Napsat zprávu
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="wrapper footer-row">
        <div>© 2026 La Ria Portraits</div>
        <div>La Ria Portraits | Praha</div>
      </footer>
    </main>
  );
}
