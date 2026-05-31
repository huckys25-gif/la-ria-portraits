const portfolioSections = [
  {
    title: "Lifestyle",
    subtitle:
      "Portréty, páry, rodiny i osobní příběhy v přirozeném stylu bez přehnané stylizace.",
    image: "/images/family.jpg",
    tone: "tone-sage",
    bullets: ["Ría", "Antalia", "Spectrum"],
  },
  {
    title: "Business",
    subtitle:
      "Profesionální image, značka, týmové i eventové focení pro firmy a podnikatele.",
    image: "/images/about-1.jpg",
    tone: "tone-dark",
    bullets: ["Profil", "Brand", "Executive"],
  },
];

const pricingLifestyle = [
  {
    name: "Ría",
    price: "2 290 Kč",
    text: "Zachyťte kouzlo okamžiku. 10 autorsky upravených snímků, za 1 hodinu, které uchovají Vaši přirozenou energii, ať už dorazíte sami, v páru, nebo se svým čtyřnohým parťákem.",
    details: [
      "10 autorsky upravených snímků",
      "1 hodina focení",
      "Pro jednotlivce, páry i se čtyřnohým parťákem",
    ],
    accent: "accent-sage",
  },
  {
    name: "Antalia",
    price: "3 790 Kč",
    text: "Váš příběh prožitý naplno. Rozšířený 2hodinový balíček pro rodiny, páry i jednotlivce, kteří chtějí víc prostoru pro společné momenty, změnu outfitů nebo střídání lokací. Výsledkem je pestrá kolekce 20 snímků, která ukáže Vaše pouto a radost z různých úhlů.",
    details: [
      "20 snímků",
      "2 hodiny focení",
      "Více prostoru pro outfit, lokaci i pestřejší výsledek",
    ],
    accent: "accent-terra",
    featured: true,
  },
  {
    name: "Spectrum",
    price: "6 500 Kč",
    text: "Exkluzivní fotografický zážitek. Čtyři hodiny plné kreativní svobody, kdy máme čas na velké rodinné příběhy, rande na několika místech v Praze nebo proměnu Vašeho osobního stylu. Komplexní prémiová kolekce 35 snímků.",
    details: [
      "35 snímků",
      "Až 4 hodiny focení",
      "Prémiový zážitek s časem na kreativní koncept",
    ],
    accent: "accent-dark",
  },
];

const pricingBusiness = [
  {
    name: "Profil",
    price: "2 990 Kč",
    text: "Váš profi start. 10 snímků zaměřených na moderní image a důvěryhodnost. Ideální pro rychlý a kvalitní update Vašich profesních sítí (LinkedIn, web), který Vás odliší od šedého průměru.",
    details: [
      "10 snímků",
      "Moderní image a důvěryhodnost",
      "Ideální pro LinkedIn, web a profesní sítě",
    ],
    accent: "accent-sage",
  },
  {
    name: "Brand",
    price: "5 490 Kč",
    text: "Tvář Vaší značky. Vytvořím pestrou vizuální banku 20 snímků během 2 hodin pro Váš web a sítě, která ukáže Vaši expertizu, lidskost a styl při práci.",
    details: [
      "20 snímků během 2 hodin",
      "Vizuální banka pro web a sítě",
      "Ukáže expertizu, lidskost i styl při práci",
    ],
    accent: "accent-terra",
    featured: true,
  },
  {
    name: "Executive",
    price: "7 900 Kč",
    text: "Konference, semináře a firemní večírky. Kompletní reportážní focení Vaší akce (v rozsahu do 4 hodin). Zachytím klíčové momenty, atmosféru, řečníky i networking. Výsledkem je ucelený report (cca 80–120 upravených snímků) pro Vaše PR a sociální sítě.",
    details: [
      "Kompletní reportážní focení akce do 4 hodin",
      "Cca 80–120 upravených snímků",
      "Konference, semináře a firemní večírky",
    ],
    accent: "accent-dark",
  },
];

const testimonials = [
  "Skvělé, přirozené fotky a velmi příjemné vedení během focení.",
  "Krásná práce se světlem a atmosférou, fotografie působí elegantně a přitom přirozeně.",
  "Business focení konečně vypadá moderně a profesionálně, bez strojenosti.",
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

function PriceCard({ item }: { item: { name: string; price: string; details: string[]; text: string; accent: string; featured?: boolean } }) {
  return (
    <article className={`pricing-card ${item.accent} ${item.featured ? "featured-card" : ""}`}>
      {item.featured && <div className="featured-label">Nejoblíbenější volba</div>}
      <div className="pricing-name">{item.name}</div>
      <div className="pricing-price">{item.price}</div>
      <p className="pricing-text">{item.text}</p>
      <ul>
        {item.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      <a href="#contact" className="pricing-btn">Rezervovat <ArrowRight /></a>
    </article>
  );
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="shell topbar-inner">
          <a href="#home" className="brand" aria-label="La Ria Portraits - domů">
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
        <div className="shell section-title-row">
          <h3>Co fotí</h3>
        </div>
        <div className="shell offer-grid two-cols">
          {portfolioSections.map((item) => (
            <article key={item.title} className={`offer-card ${item.tone}`}>
              <div className="offer-image-wrap">
                <img src={item.image} alt={item.title} className="offer-image" />
              </div>
              <div className="offer-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="content-section ivory-bg pricing-section">
        <div className="shell section-title-row">
          <h3>Ceník lifestyle</h3>
        </div>
        <div className="shell pricing-grid">
          {pricingLifestyle.map((item) => (
            <PriceCard key={item.name} item={item} />
          ))}
        </div>

        <div className="shell section-title-row second-row">
          <h3>Ceník business</h3>
        </div>
        <div className="shell pricing-grid">
          {pricingBusiness.map((item) => (
            <PriceCard key={item.name} item={item} />
          ))}
        </div>

        <div className="shell business-note-wrap">
          <p className="business-note">
            FOCENÍ MŮŽE PROBÍHAT V INTERIÉRECH (HOTELY, PODNIKY, KAVÁRNY), PŘÍMO U VÁS VE FIRMĚ, NEBO V ULICÍCH PRAHY. PRO DELŠÍ AKCE MNE KONTAKTUJTE PRO INDIVIDUÁLNÍ NABÍDKU.
          </p>
        </div>
      </section>

      <section className="content-section cream-bg testimonials-section">
        <div className="shell section-title-row">
          <h3>Co říkají klienti</h3>
        </div>
        <div className="shell testimonials-grid">
          {testimonials.map((text) => (
            <article key={text} className="testimonial-item">
              <div className="stars-row"><Star /><Star /><Star /><Star /><Star /></div>
              <p>“{text}”</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="content-section white-bg about-section">
        <div className="shell about-grid">
          <div className="about-copy">
            <p className="about-kicker">O mně</p>
            <h3>Web teď ukazuje jen reálnou nabídku.</h3>
            <p>
              Nabídka je zúžená přesně na to, co jsi poslal: lifestyle focení a business focení.
              Žádné další typy focení mimo tento rámec jsem už na webu nenechal.
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
