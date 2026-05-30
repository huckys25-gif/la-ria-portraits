export default function Home() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Lifestyle & business focení • Praha</p>
            <h1>Autentické fotografie, které mluví za vás.</h1>
            <p className="hero-copy">
              Moderní portréty a brandové focení pro jednotlivce i firmy. Přirozený styl,
              čistý vizuál a fotografie, které fungují na webu i na sítích.
            </p>

            <div className="hero-buttons">
              <a href="#kontakt" className="btn btn-primary">
                Rezervovat termín
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                Zobrazit portfolio
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src="/hero.jpg" alt="Ukázková fotografie La Ria Portraits" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2>Citlivé portréty. Čistý brand. Přirozený výsledek.</h2>
          <p className="section-copy">
            Web je připravený na doplnění dalších fotografií. Základní vizuální směr je nyní
            moderní, kontrastní a méně růžový – vhodný jak pro jednotlivce, tak pro firmy.
          </p>
        </div>
      </section>

      <section id="sluzby" className="section section-light">
        <div className="container cards-grid">
          <article className="card">
            <p className="card-label">Lifestyle</p>
            <h3>Portréty & osobní brand</h3>
            <p>
              Přirozené portrétní focení s důrazem na světlo, detail a autentický výraz.
            </p>
          </article>

          <article className="card">
            <p className="card-label">Business</p>
            <h3>Profesionální image</h3>
            <p>
              Business fotky pro web, LinkedIn, prezentace i marketing – čistě a s důvěrou.
            </p>
          </article>

          <article className="card">
            <p className="card-label">Praha</p>
            <h3>Exteriér i přímo u klienta</h3>
            <p>
              Focení v přirozeném prostředí, v kanceláři nebo venku podle charakteru značky.
            </p>
          </article>
        </div>
      </section>

      <section id="kontakt" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Domluvme váš termín</h2>
            <p className="section-copy">
              Pokud ještě nemáte jistotu, jaký typ focení je pro vás nejlepší, stačí napsat.
              Společně vybereme variantu, která bude sedět vašemu cíli.
            </p>
          </div>

          <div className="contact-card">
            <p><strong>Email:</strong> <a href="mailto:katkawei@gmail.com">katkawei@gmail.com</a></p>
            <p><strong>Telefon:</strong> <a href="tel:+420603155635">+420 603 155 635</a></p>
            <p><strong>Lokalita:</strong> Praha</p>
          </div>
        </div>
      </section>
    </main>
  );
}
