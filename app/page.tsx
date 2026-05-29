
const portfolioItems = [
  {
    title: 'Rodinné focení',
    subtitle: 'Přirozené momenty plné světla a blízkosti.',
    image: '/images/family.jpg',
    bg: 'from-emerald-100 via-emerald-50 to-white',
    accent: 'bg-emerald-600',
  },
  {
    title: 'Svatby',
    subtitle: 'Elegantní reportáž z vašeho dne bez přehnané stylizace.',
    image: '/images/wedding.jpg',
    bg: 'from-orange-100 via-amber-50 to-white',
    accent: 'bg-orange-600',
  },
  {
    title: 'Dětské focení',
    subtitle: 'Jemné, hravé a živé fotky s přirozenou atmosférou.',
    image: '/images/kids.jpg',
    bg: 'from-sky-100 via-cyan-50 to-white',
    accent: 'bg-sky-600',
  },
];

const pricing = [
  {
    name: 'Mini',
    price: '2 900 Kč',
    features: ['30 minut focení', '10 upravených fotografií', 'Online galerie'],
    border: 'border-emerald-200',
    button: 'bg-emerald-600 hover:bg-emerald-700',
  },
  {
    name: 'Standard',
    price: '4 900 Kč',
    features: ['60 minut focení', '30 upravených fotografií', 'Online galerie + tisk'],
    border: 'border-orange-200 ring-2 ring-orange-200',
    button: 'bg-orange-600 hover:bg-orange-700',
    featured: true,
  },
  {
    name: 'Premium',
    price: '7 900 Kč',
    features: ['90 minut focení', '60 upravených fotografií', 'Fotokniha + online galerie'],
    border: 'border-sky-200',
    button: 'bg-sky-600 hover:bg-sky-700',
  },
];

const testimonials = [
  {
    text: 'Nádherné, přirozené fotky a úplně pohodová atmosféra během focení.',
    author: 'Jana a Tomáš',
  },
  {
    text: 'Skvělé vedení, krásné světlo a fotky, ke kterým se pořád vracíme.',
    author: 'Klára',
  },
  {
    text: 'Web i styl focení působí moderně, čistě a ne přeslazeně.',
    author: 'Petra',
  },
];

const palette = [
  { hex: '#A9C5B3', label: 'Šalvějová' },
  { hex: '#D39B72', label: 'Terakota' },
  { hex: '#B8D4E3', label: 'Modrá mlha' },
  { hex: '#F9F4EC', label: 'Krémová' },
];

function IconArrowRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSparkles() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <path d="M10 2L11.8 7.2L17 9L11.8 10.8L10 16L8.2 10.8L3 9L8.2 7.2L10 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}


function IconCamera() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M4 8.5C4 7.67 4.67 7 5.5 7H7.3C7.63 7 7.93 6.81 8.07 6.51L8.7 5.19C8.94 4.68 9.45 4.35 10.01 4.35H13.99C14.55 4.35 15.06 4.68 15.3 5.19L15.93 6.51C16.07 6.81 16.37 7 16.7 7H18.5C19.33 7 20 7.67 20 8.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V8.5Z" stroke="currentColor" strokeWidth="1.7"/>
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}


function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M12 20C11.7 20 11.39 19.89 11.15 19.67C7.31 16.18 5 13.98 5 10.95C5 8.6 6.79 6.8 9.15 6.8C10.49 6.8 11.78 7.42 12.6 8.39C13.42 7.42 14.71 6.8 16.05 6.8C18.41 6.8 20.2 8.6 20.2 10.95C20.2 13.98 17.89 16.18 14.05 19.67C13.81 19.89 13.5 20 13.2 20H12Z" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}


function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M4 7.5C4 6.67 4.67 6 5.5 6H18.5C19.33 6 20 6.67 20 7.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V7.5Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M5 8L12 13L19 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}


function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M6.7 4.5H9.2C9.57 4.5 9.9 4.76 9.98 5.12L10.55 7.8C10.61 8.08 10.53 8.38 10.33 8.59L8.85 10.12C9.71 11.83 11.17 13.29 12.88 14.15L14.41 12.67C14.62 12.47 14.92 12.39 15.2 12.45L17.88 13.02C18.24 13.1 18.5 13.43 18.5 13.8V16.3C18.5 16.96 18.01 17.52 17.35 17.6C16.91 17.66 16.47 17.69 16.02 17.69C9.76 17.69 6.31 14.24 6.31 7.98C6.31 7.53 6.34 7.09 6.4 6.65C6.48 5.99 7.04 5.5 7.7 5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}


function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}


function IconStar() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
      <path d="M10 1.9L12.5 7L18 7.8L14 11.7L15 17.1L10 14.4L5 17.1L6 11.7L2 7.8L7.5 7L10 1.9Z" />
    </svg>
  );
}


export default function Page() {
  return (
    <main className="min-h-screen bg-[#fbf7f1] text-slate-800 selection:bg-orange-200/70">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="font-serif text-2xl tracking-wide text-slate-900">Lucie Nováková</div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-slate-500">Photography</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition-colors hover:text-emerald-700">Domů</a>
            <a href="#portfolio" className="transition-colors hover:text-orange-700">Portfolio</a>
            <a href="#about" className="transition-colors hover:text-sky-700">O mně</a>
            <a href="#pricing" className="transition-colors hover:text-emerald-700">Ceník</a>
            <a href="#contact" className="transition-colors hover:text-orange-700">Kontakt</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-slate-900 px-5 py-3 text-sm text-white shadow-lg transition-transform hover:scale-[1.02] sm:inline-flex">
              Rezervovat termín
            </button>
            <button className="inline-flex rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm md:hidden">
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-6 pb-12 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
              <span className="text-orange-500"><IconSparkles /></span>
              Barevnější • elegantní • méně růžové
            </div>


            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-slate-900 md:text-7xl">
              Moderní foto web,
              <span className="mt-2 block text-emerald-700">který je živější</span>
              <span className="mt-2 block text-slate-900">a pořád elegantní.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Tohle je jednoduchá verze homepage bez externích knihoven. Styl kombinuje
              šalvějovou zelenou, teplou terakotu, jemnou modrou a dostatek prostoru, aby web
              nepůsobil sladce ani přeplácaně.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Prohlédnout portfolio
                <IconArrowRight />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
              >
                Zobrazit ceník
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {palette.map((color) => (
                <div
                  key={color.hex}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 shadow-sm"
                >
                  <span className="h-5 w-5 rounded-full border border-white shadow" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs text-slate-600">{color.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-200/50 via-orange-100/40 to-sky-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl">
              <img
                src="/images/hero-main.jpg"
                alt="Hlavní fotografie"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="max-w-md rounded-[1.75rem] border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/80">Nový vizuální směr</div>
                  <div className="mt-2 font-serif text-2xl">Editorial elegance s živější barvou</div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Méně růžové, více přírodních odstínů a jemných efektů v hoveru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Portfolio</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
              Hlavička, která působí luxusně, ale ne studeně
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-8">
              Každý blok má vlastní jemný barevný akcent, takže web působí pestřeji a moderněji,
              ale stále jednotně.
            </p>
          </div>


          <div className="grid gap-8 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-b ${item.bg} shadow-lg`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className={`mb-4 inline-flex h-2 w-14 rounded-full ${item.accent}`} />
                  <h3 className="font-serif text-2xl text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600 leading-7">{item.subtitle}</p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-800 shadow-sm transition-all hover:bg-white hover:shadow">
                    Zobrazit galerii
                    <IconArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200/70 bg-white/70 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">O mně</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
              Více charakteru, více vzduchu, žádná přeslazenost
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Tato verze funguje dobře pro rodinnou, dětskou i svatební fotografii. Barevnost je
              živější než klasické neutrální weby, ale díky jemným tónům a whitespace zůstává prémiová.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Jemné efekty', icon: <IconSparkles />, style: 'bg-emerald-50 border-emerald-100' },
                { label: 'Zoom fotek', icon: <IconCamera />, style: 'bg-orange-50 border-orange-100' },
                { label: 'Barevné akcenty', icon: <IconHeart />, style: 'bg-sky-50 border-sky-100' },
              ].map((item) => (
                <div key={item.label} className={`rounded-[1.75rem] border p-5 shadow-sm ${item.style}`}>
                  <div className="mb-3 h-5 w-5 text-slate-700">{item.icon}</div>
                  <div className="text-sm font-medium text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 rotate-[-2deg]">
              <div className="overflow-hidden rounded-[2rem] border border-white shadow-xl">
                <img src="/images/about-1.jpg" alt="Ukázka fotografie 1" className="h-80 w-full object-cover" />
              </div>
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-white shadow-xl rotate-[4deg]">
                <img src="/images/about-2.jpg" alt="Ukázka fotografie 2" className="h-80 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Ceník</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
              Přehledné balíčky bez chaosu
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {pricing.map((item) => (
              <div
                key={item.name}
                className={`rounded-[2rem] border bg-white p-8 shadow-lg ${item.border} ${item.featured ? 'md:-translate-y-3' : ''}`}
              >
                {item.featured && (
                  <div className="mb-5 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                    Nejčastější volba
                  </div>
                )}
                <h3 className="font-serif text-2xl text-slate-900">{item.name}</h3>
                <div className="mt-4 font-serif text-4xl text-slate-900">{item.price}</div>
                <ul className="mt-6 space-y-3 text-slate-600">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-slate-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full rounded-full px-5 py-3 text-white shadow-md transition-colors ${item.button}`}>
                  Vybrat balíček
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Recenze</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">Co ten styl komunikuje</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.author}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-md backdrop-blur"
              >
                <div className="mb-4 flex gap-1 text-orange-500">
                  <IconStar />
                  <IconStar />
                  <IconStar />
                  <IconStar />
                  <IconStar />
                </div>
                <p className="leading-7 text-slate-600">“{item.text}”</p>
                <div className="mt-5 text-sm font-medium text-slate-900">— {item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-gradient-to-r from-emerald-100 via-[#f8f3ea] to-sky-100 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Kontakt</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">Teď už to stačí nasadit na GitHub a Vercel</h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              Tento kód je připravený jako homepage pro Next.js. Stačí nahradit obrázky vlastními,
              upravit texty a pushnout do repozitáře.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <div className="mb-3 h-5 w-5 text-emerald-700"><IconMail /></div>
                <div className="text-sm text-slate-500">E-mail</div>
                <div className="mt-1 font-medium text-slate-900">lucie@fotoatelier.cz</div>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <div className="mb-3 h-5 w-5 text-orange-700"><IconPhone /></div>
                <div className="text-sm text-slate-500">Telefon</div>
                <div className="mt-1 font-medium text-slate-900">+420 123 456 789</div>
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-lg transition-transform hover:scale-[1.01]">
              Napsat zprávu
              <IconArrowRight />
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Lucie Nováková Photography</div>
          <div>Next.js • Tailwind • verze bez externích knihoven</div>
        </div>
      </footer>
    </main>
  );
}
