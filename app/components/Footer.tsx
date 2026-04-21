
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerRow">
          <div>
            <strong style={{color:'#111'}}>La Ria Portraits</strong> • Praha
            <div style={{marginTop:8,fontSize:13}}>Email: <a href="mailto:katkawei@gmail.com">katkawei@gmail.com</a> • Tel: <a href="tel:+420603155635">+420 603 155 635</a></div>
          </div>
          <div style={{display:'flex',gap:14,flexWrap:'wrap'}}>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/sluzby">Služby</Link>
            <Link href="/rezervace">Rezervace</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div style={{marginTop:14,fontSize:12}}>© {new Date().getFullYear()} La Ria Portraits. Social links (Instagram/LinkedIn/Facebook) připraveny k doplnění.</div>
      </div>
    </footer>
  );
}
