import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Globe,
  Clock,
  CheckCircle,
} from 'lucide-react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

/* ─────────────────────────────────────────────
   ANIMATION PRESETS
   ───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─────────────────────────────────────────────
   ANIMATED SECTION WRAPPER
   ───────────────────────────────────────────── */
function Reveal({ children, className = '', variants = fadeUp, custom = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
   ───────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="mono-num">
      {count}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */
const products = [
  {
    title: 'Precision Gears',
    desc: 'Spur, helical & bevel gears machined to DIN Class 6 tolerances for automotive and industrial drivetrains.',
    material: 'SS304',
    icon: '⚙️',
  },
  {
    title: 'Industrial Valves',
    desc: 'Gate, globe & check valves with CNC-turned bodies, rated for pressures up to 300 bar.',
    material: 'SS304',
    icon: '🔧',
  },
  {
    title: 'Drive Shafts',
    desc: 'CNC-turned and ground shafts with concentricity ≤ 0.01 mm, balanced for high-RPM applications.',
    material: 'SS304',
    icon: '🔩',
  },
  {
    title: 'Sheet Metal Parts',
    desc: 'Laser-cut, bent & welded enclosures and brackets with powder-coat or zinc-plating finish.',
    material: 'SS304',
    icon: '🛠️',
  },
];

const machines = [
  { name: 'VMC 5-Axis', make: 'Haas (USA)', qty: '2 Units' },
  { name: 'CNC Turning', make: 'Mazak (Japan)', qty: '6 Units' },
  { name: 'CMM Inspection', make: 'Zeiss', qty: '1 Unit' },
];

const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 18, suffix: '', label: 'Countries Served' },
  { value: 100, suffix: '%', label: 'Quality Commitment' },
];

const navLinks = ['Products', 'Capabilities', 'About', 'Contact'];

const clients = [
  'Tata Motors',
  'Bajaj Auto',
  'Mahindra & Mahindra',
  'Cummins India',
  'Thermax',
  'Kirloskar',
  'SKF India',
  'Siemens',
];

/* ═════════════════════════════════════════════
   APP
   ═════════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* ══════════════════════════════════════
          NAVBAR
          ══════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/20'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-slate-900/30 group-hover:shadow-slate-900/50 transition-shadow">
                P
              </div>
              <span className="text-lg font-bold tracking-widest uppercase text-white">
                PUNE PRECISION
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="nav-link text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="hidden md:inline-flex items-center gap-2 cta-glow bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Quote <ChevronRight size={16} />
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 bg-slate-900/98 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="block text-base font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block mt-3 text-center bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm font-semibold px-5 py-3 rounded-lg"
                >
                  Get Quote
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <header
        ref={heroRef}
        id="about"
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background image */}
        <motion.img
          style={{ y: heroY }}
          src="https://images.unsplash.com/photo-1565043589221-1a6fd49745ea?auto=format&fit=crop&q=80&w=1920"
          alt="CNC machining"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950/95" />
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Decorative floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-slate-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-slate-400/5 rounded-full blur-[120px] animate-pulse" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
            MIDC Bhosari, Pune — Since 2000
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Precision CNC
            <br />
            <span className="text-slate-300">
              Machining
            </span>
            <br />
            &amp; Automotive Components
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            ISO 9001:2015 Certified Manufacturer &amp; Global Exporter — Engineering
            excellence delivered with German-grade precision from India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 cta-glow bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-600/25"
            >
              Get a Quote
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              View Catalog
              <ChevronRight
                size={18}
                className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
              />
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* ══════════════════════════════════════
          TRUST BAR
          ══════════════════════════════════════ */}
      <section className="relative bg-white border-b border-slate-200 py-8 -mt-1">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { Icon: Award, label: 'ISO 9001:2015' },
            { Icon: Clock, label: '25+ Years Experience' },
            { Icon: Globe, label: 'Exporting to EU/USA' },
            { Icon: CheckCircle, label: '100% On-Time Delivery' },
          ].map(({ Icon, label }, i) => (
            <Reveal key={label} custom={i} variants={scaleIn}>
              <div className="flex items-center gap-3 justify-center group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-slate-600 group-hover:text-orange-600 transition-colors duration-300"
                  />
                </div>
                <span className="text-sm font-bold text-slate-900 tracking-tight">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS SECTION
          ══════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-slate-500/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} custom={i} variants={fadeUp}>
                <div className="text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-400 tracking-wide uppercase">
                    {s.label}
                  </div>
                  <div className="mt-4 mx-auto w-8 h-0.5 bg-gradient-to-r from-slate-500 to-slate-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCT GRID
          ══════════════════════════════════════ */}
      <section id="products" className="bg-slate-100 py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Our Expertise
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Engineered Components
              </h2>
              <div className="section-accent mx-auto mt-4" />
              <p className="mt-4 text-slate-600 max-w-xl mx-auto leading-relaxed">
                CNC-machined components engineered for demanding industrial and
                automotive applications worldwide.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.title} custom={i} variants={fadeUp}>
                <div className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:-translate-y-2 overflow-hidden">
                  {/* Hover gradient accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Emoji icon */}
                    <div className="text-4xl mb-4">{p.icon}</div>

                    <span className="text-xs font-mono bg-slate-100 group-hover:bg-slate-200 px-2.5 py-1 rounded-md text-slate-600 transition-colors duration-300">
                      Material: {p.material}
                    </span>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-slate-700 transition-colors duration-300"
                    >
                      Enquire
                      <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MACHINE SPECS TABLE
          ══════════════════════════════════════ */}
      <section id="capabilities" className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Infrastructure
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Machine Capabilities
              </h2>
              <div className="section-accent mx-auto mt-4" />
              <p className="mt-4 text-slate-600 max-w-xl mx-auto leading-relaxed">
                We operate world-class machinery to deliver uncompromising
                accuracy and finish on every component.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                      Machine
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                      Make
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {machines.map((m, i) => (
                    <tr
                      key={m.name}
                      className={`table-row-hover cursor-default ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                        }`}
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-slate-900">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-orange-500" />
                          {m.name}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {m.make}
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                          {m.qty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CLIENTS MARQUEE
          ══════════════════════════════════════ */}
      <section className="bg-slate-100 border-y border-slate-200 py-10 overflow-hidden">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-slate-400 mb-8">
            Trusted by Industry Leaders
          </p>
        </Reveal>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-100 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-100 to-transparent z-10" />
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="text-lg font-bold text-slate-300 whitespace-nowrap tracking-wide hover:text-slate-500 transition-colors duration-300 cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════ */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute -top-20 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 left-0 w-80 h-80 bg-slate-400/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Engineer
              <br />
              <span className="text-slate-300">
                Your Next Component?
              </span>
            </h2>
          </Reveal>

          <Reveal custom={1}>
            <p className="mt-5 text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
              From prototype to mass production — get a competitive quote within
              24 hours. We ship to 18+ countries.
            </p>
          </Reveal>

          <Reveal custom={2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 cta-glow bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-600/25"
              >
                Request a Quote
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+919822000000"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors"
              >
                <Phone size={18} />
                +91 98220 XXXXX
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
          ══════════════════════════════════════ */}
      <footer id="contact" className="bg-slate-950 text-slate-400 mt-auto">
        {/* Gradient top border */}
        <div className="h-1 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />

        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Col 1 — Branding */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white font-black text-lg">
                  P
                </div>
                <span className="text-lg font-bold tracking-widest uppercase text-white">
                  PUNE PRECISION
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed">
                Pune Precision Engineering Pvt Ltd — ISO 9001:2015 certified
                manufacturer of precision CNC-machined components for
                automotive, industrial &amp; export markets.
              </p>
              <div className="mt-6 flex gap-3">
                {['LinkedIn', 'Twitter', 'Email'].map((s) => (
                  <span
                    key={s}
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-white text-xs font-bold transition-all duration-300 cursor-pointer"
                  >
                    {s[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300">
                Quick Links
              </h4>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="group text-sm hover:text-white transition-colors duration-300 flex items-center gap-2"
                    >
                      <ChevronRight
                        size={12}
                        className="text-slate-600 group-hover:text-white transition-colors"
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-300">
                Contact Us
              </h4>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Globe
                      size={16}
                      className="text-slate-500 group-hover:text-slate-300 transition-colors"
                    />
                  </div>
                  <span className="pt-1.5 leading-relaxed">
                    Plot No. J-45, MIDC Bhosari, Pune&nbsp;- 411026
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Phone
                      size={16}
                      className="text-slate-500 group-hover:text-slate-300 transition-colors"
                    />
                  </div>
                  <a
                    href="tel:+919822000000"
                    className="hover:text-white transition-colors font-semibold text-slate-300"
                  >
                    +91 98220 XXXXX
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Mail
                      size={16}
                      className="text-slate-500 group-hover:text-slate-300 transition-colors"
                    />
                  </div>
                  <a
                    href="mailto:info@puneprecision.com"
                    className="hover:text-white transition-colors"
                  >
                    info@puneprecision.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Pune Precision Engineering Pvt
              Ltd. All rights reserved.
            </p>
            <p className="font-mono">
              MIDC Bhosari, Pune — CIN: U29199MH2000PTC123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
