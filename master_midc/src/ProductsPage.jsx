import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { pageVariants, fadeUp, stagger, SectionBadge, FloatingDots } from './shared';

export default function ProductsPage({ theme }) {
    const products = [
        { title: 'Transmission Gears', tag: 'EN353 / SAE8620', emoji: '⚙️', img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-2 md:row-span-2' },
        { title: 'Hydraulic Valve Bodies', tag: 'Cast Iron / Aluminum', emoji: '🔩', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80', span: '' },
        { title: 'Precision Spline Shafts', tag: 'EN19 / EN24', emoji: '🔧', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80', span: '' },
        { title: 'Custom Fasteners & Flanges', tag: 'SS304 / SS316', emoji: '🔗', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80', span: 'md:col-span-2' },
    ];

    const isDark = theme === 'dark';

    return (
        <motion.div key="products" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Header */}
            <section className={`relative py-24 text-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0a0f1e] text-white' : 'bg-slate-50 text-slate-900'}`}>
                {isDark && <FloatingDots />}
                <div className="absolute inset-0 dot-grid opacity-50" />
                <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
                    <motion.div variants={fadeUp} custom={0}><SectionBadge>🔩 Products &amp; Capabilities</SectionBadge></motion.div>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Engineered for <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">Excellence</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className={`mx-auto mt-4 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        From raw material to finished component — every part is machined to exacting tolerances. ⚡
                    </motion.p>
                </motion.div>
            </section>

            {/* Bento Grid */}
            <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-[#080c18]' : 'bg-white'}`}>
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
                        {products.map((p, idx) => (
                            <motion.div key={idx} variants={fadeUp} custom={idx} className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${isDark ? 'border-white/5 hover:border-cyan-500/30 hover:shadow-cyan-500/10' : 'border-slate-200 hover:border-cyan-500/40 hover:shadow-slate-300'} ${p.span}`}>
                                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ minHeight: '260px' }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-sm">
                                        {p.emoji} {p.tag}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-2">{p.title}</h3>
                                </div>
                                {/* Shimmer overlay on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 border-t transition-colors duration-500 ${isDark ? 'bg-[#0a0f1e] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fadeUp} custom={0} className="text-4xl mb-4">📐</motion.div>
                        <motion.h2 variants={fadeUp} custom={1} className={`mb-4 text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Need a Custom Component?
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            We specialise in reverse-engineering and manufacturing custom precision parts.
                            Send us your drawing and we'll get back within 24 hours. ⏱️
                        </motion.p>
                        <motion.div variants={fadeUp} custom={3}>
                            <span className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-white cursor-pointer shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110">
                                <Mail className="h-4 w-4" /> Send Your Drawing 📨
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
