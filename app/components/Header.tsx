
import Link from 'next/link';

export default function Header(){
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link href="/" className="brand" aria-label="La Ria Portraits">
            <span style={{display:'inline-flex',alignItems:'center',gap:10}}>
              <span style={{width:34,height:34,borderRadius:12,background:'linear-gradient(135deg,#111,#333)',display:'inline-flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:800}}>LR</span>
              <span>
                La Ria Portraits
                <small>Praha</small>
              </span>
            </span>
          </Link>

          <nav className="menu" aria-label="Hlavní menu">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/rezervace" className="cta">Rezervace</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
