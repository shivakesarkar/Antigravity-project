import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { pageVariants, fadeUp, stagger, SectionBadge, FloatingDots } from './shared';

export default function ContactPage({ theme }) {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

    function handleChange(e) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('Thank you! We will get back to you within 24 hours. 🙏');
        setFormData({ name: '', company: '', email: '', message: '' });
    }

    const isDark = theme === 'dark';
    const inputCls = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 ${isDark ? 'border-white/10 bg-white/[0.03] text-white placeholder:text-slate-600' : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400'}`;

    return (
        <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            {/* Header */}
            <section className={`relative py-24 text-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0a0f1e] text-white' : 'bg-slate-50 text-slate-900'}`}>
                {isDark && <FloatingDots />}
                <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
                    <motion.div variants={fadeUp} custom={0}><SectionBadge>📞 Get in Touch</SectionBadge></motion.div>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Let's Build <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">Together</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className={`mx-auto mt-4 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Send us your requirements or drawings — we respond within 24 hours. ⚡
                    </motion.p>
                </motion.div>
            </section>

            {/* Content */}
            <section className={`py-20 transition-colors duration-500 ${isDark ? 'bg-[#080c18]' : 'bg-white'}`}>
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="grid gap-12 lg:grid-cols-2">
                        {/* Left — Contact Details */}
                        <motion.div variants={fadeUp} custom={0} className="space-y-8">
                            <div>
                                <h2 className={`mb-6 text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Contact Information 📋
                                </h2>
                                <ul className="space-y-5">
                                    <li className="flex items-start gap-4 group">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>🏭 Factory Address</h4>
                                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Plot No. J-112, MIDC Bhosari,<br />Pune, Maharashtra – 411026, India</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>📱 Phone</h4>
                                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>+91 98220 XXXXX</p>
                                            <span className="text-xs text-slate-500">👤 Mr. Rahul Patil — Sales Head</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 group">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>✉️ Email</h4>
                                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>sales@sahyadriprecision.in</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* GSTIN Badge */}
                            <div className={`rounded-2xl border p-6 ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-slate-50'}`}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">🏛️ GSTIN</p>
                                <p className="mt-1 text-lg font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">27AAACSXXXXA1Z5</p>
                            </div>

                            {/* Map */}
                            <div className={`overflow-hidden rounded-2xl border ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.1563025286986!2d73.84!3d18.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ4LjAiTiA3M8KwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" className="h-56 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div variants={fadeUp} custom={1}>
                            <div className={`rounded-2xl border p-8 backdrop-blur-sm lg:p-10 ${isDark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-white shadow-xl shadow-slate-200/50'}`}>
                                <h2 className={`mb-2 text-2xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Request a Quote 📝
                                </h2>
                                <p className={`mb-6 text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Fill in your details and we'll get back within 24 hours.</p>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Full Name *</label>
                                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputCls} placeholder="Your full name" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Company Name 🏢</label>
                                        <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className={inputCls} placeholder="Your company" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Email Address * ✉️</label>
                                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputCls} placeholder="you@company.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="drawing" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Upload Drawing 📐</label>
                                        <div className={`flex w-full items-center justify-center rounded-xl border-2 border-dashed px-4 py-6 transition-colors ${isDark ? 'border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5' : 'border-slate-300 hover:border-cyan-400 hover:bg-cyan-50'}`}>
                                            <div className="text-center">
                                                <ChevronRight className="mx-auto h-8 w-8 rotate-90 text-slate-500" />
                                                <p className="mt-1 text-xs text-slate-500">Drag &amp; drop or <span className="font-semibold text-cyan-500 cursor-pointer">browse</span></p>
                                                <p className="text-[10px] text-slate-400">PDF, DXF, DWG, STEP — Max 10 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className={`mb-1.5 block text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Message 💬</label>
                                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Describe your requirement, quantity, tolerances..." />
                                    </div>
                                    <button type="submit" className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110 active:scale-[0.98]">
                                        🚀 Submit Enquiry
                                    </button>
                                    <p className="text-center text-xs text-slate-500">
                                        We typically respond within 24 working hours. ⏱️
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}
