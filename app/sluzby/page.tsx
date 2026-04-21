
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Package = {
  name: string;
  price: string;
  bullets: string[];
  tag?: string;
};

const lifestyle: Package[] = [
  { name: 'Ría', price: '2 290 Kč', bullets: ['Focení: 120 min', '10 autorsky upravených portrétů', 'Rychlé, uvolněné focení'], tag: 'Nejoblíbenější' },
  { name: 'Antalia', price: '3 790 Kč', bullets: ['Focení: 120 min', '20 snímků', 'Prostor pro outfity a světlo'] },
  { name: 'Spectrum', price: '6 500 Kč', bullets: ['Focení: 120 min', '35 snímků', 'Prémiová péče o detail'] },
];

const business: Package[] = [
  { name: 'Profil', price: '2 290 Kč', bullets: ['Focení: 120 min', '10 snímků pro web a sítě', 'Moderní, důvěryhodná image'], tag: 'Nejoblíbenější' },
  { name: 'Brand', price: '4 290 Kč', bullets: ['Focení: 120 min', '20 snímků', 'Vizuální banka pro marketing'] },
  { name: 'Executive', price: '6 900 Kč', bullets: ['Focení: 120 min', '35 prémiových snímků', 'Až 5 osob (tým) / kancelář nebo exteriér'] },
];

export default function Sluzby(){
  const [tab, setTab] = useState<'lifestyle'|'business'>('lifestyle');
  const data = useMemo(() => tab === 'lifestyle' ? lifestyle : business, [tab]);

  return (
    <main className="section">
      <div className="container">
        <h1 className="hTitle" style={{fontSize:38}}>Služby & ceník</h1>
        <p className="hLead">Vyberte si balíček (všechny rezervace: 120 min, buffer 30 min).</p>

        <div className="toggle" role="tablist" aria-label="Přepínač ceníku">
          <button className={tab==='lifestyle' ? 'active' : ''} onClick={() => setTab('lifestyle')} type="button">Lifestyle</button>
          <button className={tab==='business' ? 'active' : ''} onClick={() => setTab('business')} type="button">Business</button>
        </div>

        <div className="priceGrid" style={{marginTop:18}}>
          {data.map((p) => (
            <div className="priceCard" key={p.name}>
              <div className="priceName">
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
              </div>
              {p.tag && <div className="meta"><span className="badge"><span className="badgeDot" />{p.tag}</span></div>}
              <ul className="list">
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div style={{marginTop:16}}>
                <Link className="btn btnPrimary" href={`/rezervace?balicek=${encodeURIComponent(p.name)}&typ=${tab}`}>Rezervovat termín</Link>
              </div>
            </div>
          ))}
        </div>

        <section className="section" style={{paddingBottom:0}}>
          <h2 className="sectionTitle">Jak focení probíhá</h2>
          <ol className="list">
            <li>Domluvíme styl a cíl focení</li>
            <li>Pošlu přípravný guide</li>
            <li>Samotné focení v pohodové atmosféře</li>
            <li>Výběr a profesionální úprava</li>
            <li>Dodání přes online galerii</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
