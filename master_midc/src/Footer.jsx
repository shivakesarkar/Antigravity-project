import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './shared';

export default function Footer({ setActivePage, theme }) {
    const footerLinks = [
        { id: 'home', label: 'Home' },
        { id: 'products', label: 'Products' },
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'quality', label: 'Quality & About' },
        { id: 'contact', label: 'Contact Us' },
    ];

    function navigate(id) {
        setActivePage(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className={`relative overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#060a14] text-slate-400' : 'bg-slate-50 text-slate-600 border-t border-slate-200'}`}>
            {/* Background decoration */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-500/10'}`} />

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Column 1 — Brand */}
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <Logo size={36} />
                            <div className="flex flex-col leading-none">
                                <span className="text-lg font-extrabold bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">SAHYADRI</span>
                                <span className="text-[10px] font-medium tracking-[0.3em] text-slate-500">PRECISION</span>
                            </div>
                        </div>
                        <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
                            ISO 9001:2015 certified precision machining &amp; CNC components manufacturer.
                            Trusted partner for global OEMs since 2005.
                        </p>
                        <div className="mt-4 flex gap-3">
                            {['🏭', '⚙️', '🌍'].map((e, i) => (
                                <span key={i} className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors cursor-default ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-cyan-500/30' : 'bg-white border-slate-200 hover:border-cyan-500/30 shadow-sm'}`}>{e}</span>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 — Links */}
                    <div>
                        <h4 className={`mb-4 text-sm font-semibold uppercase tracking-widest ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((l) => (
                                <li key={l.id}>
                                    <button
                                        onClick={() => navigate(l.id)}
                                        className={`cursor-pointer text-sm transition-colors flex items-center gap-2 ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}`}
                                    >
                                        <span className="h-1 w-1 rounded-full bg-cyan-500/50" />
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Contact */}
                    <div>
                        <h4 className={`mb-4 text-sm font-semibold uppercase tracking-widest ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span>Plot No. J-112, MIDC Bhosari, Pune, Maharashtra – 411026</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span>+91 98220 XXXXX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span>sales@sahyadriprecision.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs ${theme === 'dark' ? 'border-white/5 text-slate-600' : 'border-slate-200 text-slate-500'}`}>
                    <span>© 2026 Sahyadri Precision Engineering Pvt Ltd. All rights reserved.</span>
                    <span className="flex items-center gap-2">Made with 🔩 in Pune, India</span>
                </div>
            </div>
        </footer>
    );
}
