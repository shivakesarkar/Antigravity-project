import { motion } from 'framer-motion';
import { ChevronRight, Award, Globe, Factory, Target, Settings, ShieldCheck } from 'lucide-react';
import { pageVariants, fadeUp, stagger, FloatingDots, AnimatedGear, SectionBadge } from './shared';

export default function HomePage({ setActivePage, theme }) {
    const trustItems = [
        { icon: Award, emoji: '🏅', label: 'ISO 9001:2015', desc: 'Certified QMS' },
        { icon: Factory, emoji: '🇮🇳', label: 'Make in India', desc: 'Proudly Indigenous' },
        { icon: Globe, emoji: '🌏', label: '15+ Countries', desc: 'Global Export Reach' },
        { icon: Target, emoji: '🎯', label: 'Zero-Defect', desc: 'Quality Policy' },
    ];

    const capabilities = [
        { page: 'products', emoji: '⚙️', icon: Settings, title: 'Precision Components', desc: 'Transmission gears, hydraulic bodies, spline shafts & custom fasteners.' },
        { page: 'infrastructure', emoji: '🏭', icon: Factory, title: 'Advanced Facility', desc: '5-Axis VMC, CNC Turning & Wire EDM from Mazak, Haas & Mitsubishi.' },
        { page: 'quality', emoji: '🛡️', icon: ShieldCheck, title: 'Quality Assurance', desc: 'CMM (Zeiss), profile projectors, surface & hardness testers.' },
    ];

    function go(id) { setActivePage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); }

    const isDark = theme === 'dark';

    return (
        <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* ── Hero ── */}
            <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1920&q=80')" }} />
                <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-[#0a0f1e]/95 via-[#0a0f1e]/85 to-indigo-950/80' : 'bg-gradient-to-br from-white/90 via-slate-50/85 to-slate-200/80'}`} />

                {isDark && <FloatingDots />}
                <AnimatedGear className="absolute top-20 right-10 opacity-30 hidden lg:block" size={120} />
                <AnimatedGear className="absolute bottom-20 left-10 opacity-20 hidden lg:block" size={80} />

                <div className={`relative z-10 mx-auto max-w-4xl px-6 text-center transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.p variants={fadeUp} custom={0}>
                            <SectionBadge>🔧 Since 2005 · Pune, India</SectionBadge>
                        </motion.p>
                        <motion.h1 variants={fadeUp} custom={1} className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                            Precision Machining.
                            <br />
                            <span className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-amber-500 bg-clip-text text-transparent">
                                Global Standards.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeUp} custom={2} className={`mx-auto mb-10 max-w-2xl text-lg ${isDark ? 'text-slate-300/90' : 'text-slate-600'}`}>
                            ISO 9001:2015 Certified Components Manufacturer in Pune, India. Engineering excellence
                            for automotive, hydraulic &amp; industrial OEMs worldwide. 🌐
                        </motion.p>
                        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => go('products')}
                                className={`cursor-pointer rounded-xl border-2 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all shadow-lg ${isDark ? 'border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-cyan-400/20' : 'border-cyan-600/50 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-600 hover:shadow-cyan-600/20'}`}
                            >
                                Explore Capabilities
                            </button>
                            <button
                                onClick={() => go('contact')}
                                className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:brightness-110"
                            >
                                Request Quote <ChevronRight className="h-4 w-4" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom gradient fade */}
                <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t transition-colors duration-500 ${isDark ? 'from-[#0a0f1e] to-transparent' : 'from-slate-50 to-transparent'}`} />
            </section>

            {/* ── Trust Bar ── */}
            <section className={`relative border-b transition-colors duration-500 ${isDark ? 'bg-[#0a0f1e] border-white/5' : 'bg-white border-slate-200'}`}>
                <div className="mx-auto max-w-7xl px-6 py-14">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {trustItems.map((item, idx) => (
                            <motion.div key={idx} variants={fadeUp} custom={idx} className="group flex flex-col items-center text-center">
                                <div className="relative mb-3">
                                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border text-2xl transition-all group-hover:shadow-lg ${isDark ? 'bg-gradient-to-br from-cyan-500/15 to-amber-500/10 border-cyan-500/20 group-hover:border-cyan-400/40 group-hover:shadow-cyan-400/10' : 'bg-gradient-to-br from-cyan-50 to-amber-50 border-cyan-200 group-hover:border-cyan-400'}`}>
                                        {item.emoji}
                                    </div>
                                </div>
                                <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.label}</h3>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Capabilities Snapshot ── */}
            <section className={`relative dot-grid py-24 transition-colors duration-500 ${isDark ? 'bg-[#080c18]' : 'bg-slate-50'}`}>
                <div className={`absolute inset-0 bg-gradient-to-b pointer-events-none transition-colors duration-500 ${isDark ? 'from-[#0a0f1e] via-transparent to-[#0a0f1e]' : 'from-white via-transparent to-slate-100'}`} />
                <div className="relative mx-auto max-w-7xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="text-center">
                        <motion.div variants={fadeUp} custom={0}>
                            <SectionBadge>⚡ What We Do</SectionBadge>
                        </motion.div>
                        <motion.h2 variants={fadeUp} custom={1} className={`mb-14 text-3xl font-extrabold tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Core Capabilities
                        </motion.h2>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid gap-6 md:grid-cols-3">
                        {capabilities.map((cap, idx) => (
                            <motion.button
                                key={idx}
                                variants={fadeUp}
                                custom={idx}
                                onClick={() => go(cap.page)}
                                className={`group cursor-pointer rounded-2xl border p-8 text-left backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${isDark ? 'border-white/5 bg-white/[0.03] hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-cyan-500/10' : 'border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-cyan-200/20'}`}
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="text-3xl animate-bounce-subtle" style={{ animationDelay: `${idx * 0.3}s` }}>{cap.emoji}</span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                                </div>
                                <h3 className={`mb-2 text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{cap.title}</h3>
                                <p className={`mb-5 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{cap.desc}</p>
                                <span className={`inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                    Learn more <ChevronRight className="h-4 w-4" />
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
