
import Link from 'next/link';

export default function Kontakt(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="hTitle" style={{fontSize:38}}>Kontakt</h1>
        <p className="hLead">Napište mi a domluvíme se. Nebo rovnou rezervujte termín online.</p>

        <div className="grid2" style={{marginTop:14}}>
          <div className="card">
            <h2 className="sectionTitle" style={{marginTop:0}}>Napište mi</h2>
            <div className="formGrid">
              <div>
                <label>Jméno</label>
                <input placeholder="Vaše jméno" />
              </div>
              <div>
                <label>E-mail</label>
                <input placeholder="vas@email.cz" type="email" />
              </div>
              <div>
                <label>Typ focení</label>
                <select defaultValue="lifestyle">
                  <option value="lifestyle">Lifestyle</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div>
                <label>Telefon (volitelné)</label>
                <input placeholder="+420…" />
              </div>
            </div>
            <div style={{marginTop:12}}>
              <label>Zpráva</label>
              <textarea placeholder="Stručně popište představu, účel focení, termín…" />
            </div>
            <p className="helper">Formulář je zatím demonstrativní (bez odesílání). Pro ostrý provoz lze napojit na e-mail / CRM.</p>
          </div>

          <div className="card cardMuted">
            <h2 className="sectionTitle" style={{marginTop:0}}>Rychlý kontakt</h2>
            <p style={{marginTop:0,color:'var(--muted)'}}>Praha</p>
            <p style={{margin:'10px 0',color:'var(--muted)'}}>Email: <a href="mailto:katkawei@gmail.com">katkawei@gmail.com</a></p>
            <p style={{margin:'10px 0',color:'var(--muted)'}}>Tel: <a href="tel:+420603155635">+420 603 155 635</a></p>
            <div style={{marginTop:16}}>
              <Link className="btn btnPrimary" href="/rezervace">Rezervovat termín</Link>
            </div>
            <div className="helper" style={{marginTop:14}}>
              Sociální sítě (Instagram/LinkedIn/Facebook) připraveny k doplnění v další fázi.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
