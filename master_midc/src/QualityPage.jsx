import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { pageVariants, fadeUp, stagger, SectionBadge, FloatingDots } from './shared';

export default function QualityPage({ theme }) {
    const qaEquipment = [
        { name: 'Coordinate Measuring Machine (CMM — Zeiss)', emoji: '📏' },
        { name: 'Profile Projectors', emoji: '🔬' },
        { name: 'Surface Roughness Testers', emoji: '📊' },
        { name: 'Hardness Testers (Rockwell & Vickers)', emoji: '💎' },
        { name: 'Bore Gauges & Micrometers', emoji: '🔧' },
        { name: 'Go / No-Go Gauges', emoji: '✅' },
    ];

    const stats = [
        { val: '20+', label: 'Years of Expertise', emoji: '📅' },
        { val: '15+', label: 'Countries Served', emoji: '🌍' },
        { val: '500+', label: 'Active SKUs', emoji: '📦' },
        { val: '99.7%', label: 'On-Time Delivery', emoji: '🚚' },
    ];

    const isDark = theme === 'dark';

    return (
        <motion.div key="quality" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Header */}
            <section className={`relative py-24 text-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0a0f1e] text-white' : 'bg-slate-50 text-slate-900'}`}>
                {isDark && <FloatingDots />}
                <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
                    <motion.div variants={fadeUp} custom={0}><SectionBadge>🛡️ Quality &amp; About Us</SectionBadge></motion.div>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Getting It Right the <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">First Time</span>
                    </motion.h1>
                </motion.div>
            </section>

            {/* Split Section */}
            <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-[#080c18]' : 'bg-white'}`}>
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="grid items-start gap-16 lg:grid-cols-2">
                        {/* Left — About Text */}
                        <motion.div variants={fadeUp} custom={0}>
                            <SectionBadge>🏢 About Sahyadri Precision</SectionBadge>
                            <h2 className={`mb-6 text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                A Trusted Partner Since 2005
                            </h2>
                            <div className={`space-y-4 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                <p>
                                    Founded in 2005 in MIDC Bhosari, Pune, <strong className="text-cyan-500">Sahyadri Precision Engineering Pvt. Ltd.</strong> has
                                    grown into a trusted manufacturing partner for global OEMs in automotive, hydraulic,
                                    construction equipment and general engineering sectors. 🏭
                                </p>
                                <p>
                                    We believe in <em className="text-amber-500">getting it right the first time</em>. Our commitment to quality is backed by
                                    rigorous processes, advanced inspection equipment, and a culture of continuous improvement. 📈
                                </p>
                                <p>
                                    Today, we export precision-machined components to over 15 countries across Europe, North America
                                    and Asia, partnering with some of the world's leading manufacturers. 🌐
                                </p>
                            </div>

                            {/* ISO Badge */}
                            <motion.div variants={fadeUp} custom={2} className={`mt-8 flex items-center gap-4 rounded-2xl border p-6 animate-pulse-glow ${isDark ? 'border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-amber-500/10' : 'border-cyan-200 bg-gradient-to-r from-cyan-50 to-amber-50'}`}>
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30">
                                    <CheckCircle className="h-8 w-8" />
                                </div>
                                <div>
                                    <h4 className={`text-lg font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>ISO 9001:2015 Certified 🏅</h4>
                                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        Quality Management System certified by TÜV SÜD, Germany. 🇩🇪
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right — QA Equipment */}
                        <motion.div variants={fadeUp} custom={1}>
                            <SectionBadge>🔬 Quality Assurance</SectionBadge>
                            <h2 className={`mb-6 text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Inspection &amp; Metrology
                            </h2>
                            <ul className="space-y-3">
                                {qaEquipment.map((eq, idx) => (
                                    <motion.li key={idx} variants={fadeUp} custom={idx + 2} className={`group flex items-center gap-3 rounded-xl border p-4 transition-all ${isDark ? 'border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:bg-cyan-500/5' : 'border-slate-200 bg-white hover:border-cyan-500/40 hover:shadow-md'}`}>
                                        <span className="text-xl group-hover:scale-110 transition-transform">{eq.emoji}</span>
                                        <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{eq.name}</span>
                                        <CheckCircle className="ml-auto h-4 w-4 shrink-0 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Strip */}
            <section className={`py-16 border-t transition-colors duration-500 ${isDark ? 'bg-[#0a0f1e] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 text-center md:grid-cols-4">
                        {stats.map((s, idx) => (
                            <motion.div key={idx} variants={fadeUp} custom={idx} className="group">
                                <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">{s.emoji}</span>
                                <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">{s.val}</p>
                                <p className={`mt-1 text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
