import { motion } from 'framer-motion';
import { Factory, Settings, ShieldCheck } from 'lucide-react';
import { pageVariants, fadeUp, stagger, SectionBadge, FloatingDots, AnimatedGear } from './shared';

export default function InfrastructurePage({ theme }) {
    const machines = [
        {
            machine: '5-Axis VMC',
            make: 'Mazak (Japan)',
            qty: '3',
            capacity: '800 × 600 × 500 mm',
            emoji: '🇯🇵',
            img: 'https://images.unsplash.com/photo-1563968743333-044cef80eb16?auto=format&fit=crop&w=600&q=80',
        },
        {
            machine: 'CNC Turning Centre',
            make: 'Haas (USA)',
            qty: '8',
            capacity: 'Dia 300 mm',
            emoji: '🇺🇸',
            img: 'https://images.unsplash.com/photo-1590483018260-ca0987186cc7?auto=format&fit=crop&w=600&q=80',
        },
        {
            machine: 'Wire EDM',
            make: 'Mitsubishi (Japan)',
            qty: '2',
            capacity: 'Sub-micron finish',
            emoji: '🇯🇵',
            img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        },
        {
            machine: 'Cylindrical Grinder',
            make: 'Studer (Switzerland)',
            qty: '2',
            capacity: 'Dia 200 mm',
            emoji: '🇨🇭',
            img: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80',
        },
        {
            machine: 'Surface Grinder',
            make: 'Okamoto (Japan)',
            qty: '4',
            capacity: '600 × 400 mm',
            emoji: '🇯🇵',
            img: 'https://images.unsplash.com/photo-1565439396348-e867d264da4b?auto=format&fit=crop&w=600&q=80',
        },
        {
            machine: 'Radial Drill Press',
            make: 'HMT (India)',
            qty: '3',
            capacity: 'Dia 50 mm',
            emoji: '🇮🇳',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        },
    ];

    /* 
      The user requested "high quality images in 'Machine / Make / Qty / Capacity' table".
      A pure HTML <table> with large images is usually clunky on mobile.
      I'll convert this to a "Card List" layout which is much more premium.
      Each item will be a horizontal card (on desktop) showing the image + details.
    */

    return (
        <motion.div key="infrastructure" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Header */}
            <section className={`relative py-24 text-center overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0f1e] text-white' : 'bg-slate-50 text-slate-900'}`}>
                {theme === 'dark' && <FloatingDots />}
                <AnimatedGear className="absolute top-16 right-16 opacity-10 hidden lg:block" size={100} />
                <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
                    <motion.div variants={fadeUp} custom={0}><SectionBadge>🏭 Our Facility</SectionBadge></motion.div>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        World-Class Manufacturing <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">Facility</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className={`mx-auto mt-4 max-w-xl transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        A 25,000 sq. ft. facility equipped with the best CNC machines from Japan, USA &amp; Europe. 🌍
                    </motion.p>
                </motion.div>
            </section>

            {/* Machine List */}
            <section className={`py-20 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#080c18]' : 'bg-white'}`}>
                <div className="mx-auto max-w-5xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="space-y-6">
                        {machines.map((m, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                custom={idx}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl ${theme === 'dark'
                                        ? 'border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:shadow-cyan-500/10'
                                        : 'border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-slate-200'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
                                        <img
                                            src={m.img}
                                            alt={m.machine}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                                        <span className="absolute bottom-3 left-3 md:hidden inline-flex items-center gap-1 rounded-lg bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                            {m.emoji} {m.make}
                                        </span>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                                        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                                            <div>
                                                <h3 className={`text-xl font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                                    {m.machine}
                                                </h3>
                                                <p className={`mt-1 text-sm font-medium ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                                    {m.emoji} Make: {m.make}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <span className={`block text-xs uppercase tracking-wider font-semibold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Quantity</span>
                                                <span className={`block text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{m.qty}</span>
                                            </div>
                                        </div>

                                        <div className={`mt-auto flex items-center justify-between border-t pt-4 ${theme === 'dark' ? 'border-white/10' : 'border-slate-100'}`}>
                                            <div>
                                                <span className={`text-xs uppercase tracking-wider font-semibold ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Capacity</span>
                                                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{m.capacity}</p>
                                            </div>
                                            <div className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white/5 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-400' : 'bg-slate-100 group-hover:bg-cyan-50 text-slate-400 group-hover:text-cyan-600'}`}>
                                                <Settings className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Facility Highlights */}
            <section className={`py-16 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0f1e] border-t border-white/5' : 'bg-slate-50 border-t border-slate-200'}`}>
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-3">
                        {[
                            { icon: Factory, emoji: '🏗️', title: '25,000 sq. ft.', desc: 'Climate-controlled factory floor' },
                            { icon: Settings, emoji: '🔄', title: '24/7 Operations', desc: 'Three-shift production capacity' },
                            { icon: ShieldCheck, emoji: '✅', title: 'In-house QA Lab', desc: 'Every batch is inspected & certified' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                custom={idx}
                                className={`group rounded-2xl border p-8 text-center transition-all duration-300 ${theme === 'dark'
                                        ? 'border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:bg-cyan-500/5'
                                        : 'border-slate-200 bg-white hover:border-cyan-200 hover:shadow-lg'
                                    }`}
                            >
                                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{item.emoji}</span>
                                <h3 className={`mb-1 text-lg font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                                <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
