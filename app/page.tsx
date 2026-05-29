'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Heart, Mail, Menu, Phone, Sparkles, Star } from 'lucide-react';


const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};


const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
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
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-6 pb-12 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
              <Sparkles className="h-4 w-4 text-orange-500" />
              Barevnější • elegantní • méně růžové
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl font-serif text-5xl leading-[0.95] text-slate-900 md:text-7xl"
            >
              Moderní foto web,
              <span className="mt-2 block text-emerald-700">který je živější</span>
              <span className="mt-2 block text-slate-900">a pořád elegantní.</span>
            </motion.h1>


            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-600">
              Tohle je připravený homepage kód pro Next.js, GitHub a Vercel. Styl kombinuje
              šalvějovou zelenou, teplou terakotu, jemnou modrou a dostatek prostoru, aby web
              nepůsobil sladce ani přeplácaně.
            </motion.p>


            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Prohlédnout portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
              >
                Zobrazit ceník
              </a>
            </motion.div>


            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {palette.map((color) => (
                <div
                  key={color.hex}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-2 shadow-sm"
                >
                  <span className="h-5 w-5 rounded-full border border-white shadow" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs text-slate-600">{color.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-200/50 via-orange-100/40 to-sky-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl">
              <img
                src="/images/hero-main.jpg"
                alt="Hlavní fotografie"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="absolute bottom-0 left-0 right-0 p-6"
              >
                <div className="max-w-md rounded-[1.75rem] border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md">
                  <div className="text-sm uppercase tracking-[0.25em] text-white/80">Nový vizuální směr</div>
                  <div className="mt-2 font-serif text-2xl">Editorial elegance s živější barvou</div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Méně růžové, více přírodních odstínů a jemných animací při scrollu i hoveru.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="mb-12 text-center"
          >
            <motion.div variants={fadeUp} className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Portfolio
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
              Hlavička, která působí luxusně, ale ne studeně
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-slate-600 leading-8">
              Každý blok má vlastní jemný barevný akcent, takže web působí pestřeji a moderněji,
              ale stále jednotně.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {portfolioItems.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
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
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200/70 bg-white/70 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-sm uppercase tracking-[0.25em] text-slate-500">
              O mně
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
              Více charakteru, více vzduchu, žádná přeslazenost
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Tato verze funguje dobře pro rodinnou, dětskou i svatební fotografii. Barevnost je
              živější než klasické neutrální weby, ale díky jemným tónům a whitespace zůstává prémiová.
            </motion.p>


            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Fade-in animace', icon: Sparkles, style: 'bg-emerald-50 border-emerald-100' },
                { label: 'Jemný zoom fotek', icon: Camera, style: 'bg-orange-50 border-orange-100' },
                { label: 'Barevné akcenty', icon: Heart, style: 'bg-sky-50 border-sky-100' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={`rounded-[1.75rem] border p-5 shadow-sm ${item.style}`}>
                    <Icon className="mb-3 h-5 w-5 text-slate-700" />
                    <div className="text-sm font-medium text-slate-700">{item.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 rotate-[-2deg]">
              <div className="overflow-hidden rounded-[2rem] border border-white shadow-xl">
                <img src="/images/about-1.jpg" alt="Ukázka fotografie 1" className="h-80 w-full object-cover" />
              </div>
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-white shadow-xl rotate-[4deg]">
                <img src="/images/about-2.jpg" alt="Ukázka fotografie 2" className="h-80 w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
            className="mb-12 text-center"
          >
            <motion.div variants={fadeUp} className="text-sm uppercase tracking-[0.25em] text-slate-500">
              Ceník
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">
              Přehledné balíčky bez chaosu
            </motion.h2>
          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {pricing.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Recenze</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">Co ten styl komunikuje</h2>
          </div>


          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-md backdrop-blur"
              >
                <div className="mb-4 flex gap-1 text-orange-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="leading-7 text-slate-600">“{item.text}”</p>
                <div className="mt-5 text-sm font-medium text-slate-900">— {item.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-gradient-to-r from-emerald-100 via-[#f8f3ea] to-sky-100 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Kontakt</div>
            <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl">Teď už to stačí nasadit na GitHub a Vercel</h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-600">
              Tento kód je připravený jako homepage pro Next.js. Stačí nahradit obrázky vlastními,
              upravit texty a pushnout do repozitáře.
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <Mail className="mb-3 h-5 w-5 text-emerald-700" />
                <div className="text-sm text-slate-500">E-mail</div>
                <div className="mt-1 font-medium text-slate-900">lucie@fotoatelier.cz</div>
              </div>
              <div className="rounded-[1.5rem] bg-slate-50 p-4">
                <Phone className="mb-3 h-5 w-5 text-orange-700" />
                <div className="text-sm text-slate-500">Telefon</div>
                <div className="mt-1 font-medium text-slate-900">+420 123 456 789</div>
              </div>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-lg transition-transform hover:scale-[1.01]">
              Napsat zprávu
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>


      <footer className="px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Lucie Nováková Photography</div>
          <div>Next.js • Tailwind • Framer Motion • připraveno pro Vercel</div>
        </div>
      </footer>
    </main>
  );
}
