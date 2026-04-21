
import Link from 'next/link';

function PlaceholderMasonry(){
  return (
    <div className="masonry" aria-label="Galerie (placeholder)">
      <div className="ph tall" />
      <div className="ph" />
      <div className="ph short" />
      <div className="ph" />
      <div className="ph tall" />
      <div className="ph short" />
      <div className="ph" />
      <div className="ph" />
    </div>
  );
}

export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            <div>
              <h1 className="hTitle">Autentické fotografie, které mluví za vás.</h1>
              <p className="hLead">Lifestyle & business focení pro jednotlivce i značky v Praze. Přirozené vedení, uvolněná atmosféra, nadčasový výsledek.</p>
              <div className="btnRow">
                <Link className="btn btnPrimary" href="/rezervace">Rezervovat termín</Link>
                <Link className="btn" href="/portfolio">Zobrazit portfolio</Link>
              </div>
              <div style={{marginTop:18}} className="badge"><span className="badgeDot"/>Dostupnost dle kalendáře • focení 120 min • buffer 30 min</div>
            </div>
            <div className="heroCard" aria-label="Hero fotografie (placeholder)">
              <div className="heroImg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Dva světy, jeden styl</h2>
          <div className="grid2">
            <div className="card">
              <h3>Lifestyle focení</h3>
              <p>Portréty, osobní brand, emoce, přirozenost.</p>
              <div style={{marginTop:14}}>
                <Link className="btn" href="/portfolio?tab=lifestyle">Zobrazit Lifestyle</Link>
              </div>
            </div>
            <div className="card">
              <h3>Business focení</h3>
              <p>Profesionální image, značky, týmy, důvěryhodnost.</p>
              <div style={{marginTop:14}}>
                <Link className="btn" href="/portfolio?tab=business">Zobrazit Business</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Mini galerie</h2>
          <PlaceholderMasonry />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Proč fotit právě se mnou</h2>
          <div className="grid2">
            <div className="card cardMuted"><h3>Přirozené vedení</h3><p>Pomohu vám cítit se před objektivem uvolněně.</p></div>
            <div className="card cardMuted"><h3>Uvolněná atmosféra</h3><p>Žádný stres, jen příjemný průběh focení.</p></div>
            <div className="card cardMuted"><h3>Důraz na detail</h3><p>Světlo, kompozice a jemná retuš.</p></div>
            <div className="card cardMuted"><h3>Dlouhodobá hodnota</h3><p>Fotografie použitelné na web, sítě i do prezentací.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:14,flexWrap:'wrap'}}>
            <div>
              <h2 className="sectionTitle" style={{marginBottom:6}}>Nejste si jistí balíčkem?</h2>
              <p style={{margin:0,color:'var(--muted)'}}>Napište mi a společně vybereme ideální variantu.</p>
            </div>
            <div className="btnRow">
              <Link className="btn" href="/kontakt">Domluvit se</Link>
              <Link className="btn btnPrimary" href="/rezervace">Rezervovat termín</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
