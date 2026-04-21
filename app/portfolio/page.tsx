
import Link from 'next/link';

function PlaceholderMasonry(){
  return (
    <div className="masonry" aria-label="Portfolio galerie (placeholder)">
      <div className="ph tall" />
      <div className="ph" />
      <div className="ph short" />
      <div className="ph" />
      <div className="ph tall" />
      <div className="ph short" />
      <div className="ph" />
      <div className="ph" />
      <div className="ph short" />
    </div>
  );
}

export default function Portfolio(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="hTitle" style={{fontSize:38}}>Portfolio</h1>
        <p className="hLead">Ukázky lifestyle a business focení (zatím placeholdery).</p>
        <div className="toggle" role="tablist" aria-label="Přepínač kategorií">
          <button className="active" type="button">Lifestyle</button>
          <button type="button">Business</button>
        </div>
        <div style={{marginTop:18}}>
          <PlaceholderMasonry />
        </div>
        <div style={{marginTop:20}}>
          <Link className="btn btnPrimary" href="/rezervace">Rezervovat termín</Link>
        </div>
      </div>
    </main>
  );
}
