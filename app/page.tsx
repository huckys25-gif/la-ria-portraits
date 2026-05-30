export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Autentické fotografie, které mluví za vás.</h1>
            <p>
              Lifestyle & business focení pro jednotlivce i značky v Praze.
            </p>

            <div className="hero-buttons">
              <a href="#kontakt" className="btn btn-primary">
                Rezervovat termín
              </a>
              <a href="#portfolio" className="btn">
                Zobrazit portfolio
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src="/hero.jpg" alt="Hero fotografie" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2>Portfolio</h2>
          <p>Zatím placeholder verze webu – postupně doplníme další fotografie.</p>
        </div>
      </section>

      <section id="sluzby" className="section section-light">
        <div className="container">
          <h2>Služby</h2>
          <p>Lifestyle focení i business portréty v čistém, moderním stylu.</p>
        </div>
      </section>

      <section id="kontakt" className="section">
        <div className="container">
          <h2>Kontakt</h2>
          <p>Email: katkawei@gmail.com</p>
          <p>Telefon: +420 603 155 635</p>
        </div>
      </section>
    </main>
  );
}
