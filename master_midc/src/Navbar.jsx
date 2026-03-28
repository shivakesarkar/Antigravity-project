import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { Logo } from './shared';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
    const [open, setOpen] = useState(false);
    const links = [
        { id: 'home', label: 'Home' },
        { id: 'products', label: 'Products' },
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'quality', label: 'Quality' },
        { id: 'contact', label: 'Contact' },
    ];

    function navigate(id) {
        setActivePage(id);
        setOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${theme === 'dark' ? 'border-white/5 bg-[#0a0f1e]/95 text-white' : 'border-slate-200 bg-white/95 text-slate-900'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <button onClick={() => navigate('home')} className="flex items-center gap-3 cursor-pointer group">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                        <Logo size={38} />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                            SAHYADRI
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.3em] text-slate-400">PRECISION</span>
                    </div>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {links.map((l) => (
                        <li key={l.id}>
                            <button
                                onClick={() => navigate(l.id)}
                                className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${activePage === l.id
                                        ? 'text-cyan-500 bg-cyan-500/10'
                                        : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                    }`}
                            >
                                {l.label}
                                {activePage === l.id && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-amber-500"
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle (Desktop) */}
                    <button onClick={toggleTheme} className={`hidden md:flex p-2 rounded-full transition-colors ${theme === 'dark' ? 'text-amber-400 hover:bg-white/10' : 'text-indigo-600 hover:bg-slate-100'}`}>
                        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>

                    {/* Desktop CTA */}
                    <button
                        onClick={() => navigate('contact')}
                        className="hidden md:inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110"
                    >
                        <Phone className="h-4 w-4" /> Get Quote
                    </button>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'text-amber-400' : 'text-indigo-600'}`}>
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <button onClick={() => setOpen(!open)} className={`cursor-pointer ${theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`overflow-hidden md:hidden border-t ${theme === 'dark' ? 'border-white/5 bg-[#0a0f1e]' : 'border-slate-200 bg-white'}`}
                    >
                        <ul className="flex flex-col gap-1 px-4 py-4">
                            {links.map((l) => (
                                <li key={l.id}>
                                    <button
                                        onClick={() => navigate(l.id)}
                                        className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${activePage === l.id
                                                ? 'bg-gradient-to-r from-cyan-500/10 to-transparent text-cyan-600 border-l-2 border-cyan-500'
                                                : theme === 'dark' ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => navigate('contact')}
                                    className="mt-2 w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-cyan-500/25"
                                >
                                    ✨ Request Quote
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
