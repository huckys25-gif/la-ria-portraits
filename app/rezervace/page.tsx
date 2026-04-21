
'use client';

import { useEffect, useMemo, useState } from 'react';

const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0hzIIpsNAK95qChJieGLKBTE1AIIfTlnyc5KC4Xr9GIqOXyMr2cXBa8KkCDZuQPoX-g3AZeFZJ';

export default function Rezervace(){
  const [typ, setTyp] = useState<'lifestyle'|'business'>('lifestyle');
  const [balicek, setBalicek] = useState('');
  const [lokace, setLokace] = useState('Praha');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get('typ');
    const b = params.get('balicek');
    if (t === 'business' || t === 'lifestyle') setTyp(t);
    if (b) setBalicek(b);
  }, []);

  const balicky = useMemo(() => {
    return typ === 'lifestyle'
      ? ['Ría','Antalia','Spectrum']
      : ['Profil','Brand','Executive'];
  }, [typ]);

  return (
    <main className="section">
      <div className="container">
        <h1 className="hTitle" style={{fontSize:38}}>Rezervace termínu</h1>
        <p className="hLead">Termíny se berou automaticky dle dostupnosti v Google Kalendáři. Focení: <strong>120 min</strong> + buffer <strong>30 min</strong>.</p>

        <div className="formGrid">
          <div>
            <label>Typ focení</label>
            <select value={typ} onChange={(e) => setTyp(e.target.value as any)}>
              <option value="lifestyle">Lifestyle</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div>
            <label>Balíček</label>
            <select value={balicek} onChange={(e) => setBalicek(e.target.value)}>
              <option value="">Vyberte balíček</option>
              {balicky.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Lokace</label>
            <select value={lokace} onChange={(e) => setLokace(e.target.value)}>
              <option value="Praha">Praha</option>
            </select>
          </div>
          <div>
            <label>Poznámka (volitelné)</label>
            <input placeholder="Např. účel focení, dress code, tým (u Executive)…" />
          </div>
        </div>

        <p className="helper">Tip: Pokud přicházíte z ceníku, balíček se předvyplní. Rezervaci dokončíte v Google formuláři níže.</p>

        <div style={{marginTop:18}} className="iframeWrap">
          <iframe
            src={BOOKING_URL}
            title="Google booking – La Ria Portraits"
            style={{width:'100%',height:'820px',border:0}}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="helper" style={{marginTop:10}}>
          Pokud by se vložený kalendář nenačetl, otevřete rezervaci přímo zde: <a href={BOOKING_URL} target="_blank" rel="noreferrer">https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0hzIIpsNAK95qChJieGLKBTE1AIIfTlnyc5KC4Xr9GIqOXyMr2cXBa8KkCDZuQPoX-g3AZeFZJ</a>
        </p>
      </div>
    </main>
  );
}
