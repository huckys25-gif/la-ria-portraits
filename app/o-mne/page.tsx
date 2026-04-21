
import Link from 'next/link';

export default function OMne(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="hTitle" style={{fontSize:38}}>O mně</h1>
        <p className="hLead">Přirozené focení lidí a značek. Pomáhám klientům cítit se před objektivem uvolněně a vytvořit fotografie, které působí autenticky a nadčasově.</p>

        <div className="grid2" style={{marginTop:14}}>
          <div className="heroCard"><div className="heroImg" style={{height:360}} /></div>
          <div className="card">
            <h2 className="sectionTitle" style={{marginTop:0}}>Můj přístup</h2>
            <ul className="list">
              <li>Jemné vedení během focení</li>
              <li>Důraz na světlo a emoci</li>
              <li>Využití fotek pro web, sítě i prezentace</li>
            </ul>
            <div style={{marginTop:16}}>
              <Link className="btn btnPrimary" href="/rezervace">Rezervovat termín</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
