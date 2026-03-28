import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import InfrastructurePage from './InfrastructurePage';
import QualityPage from './QualityPage';
import ContactPage from './ContactPage';

export default function App() {
    const [activePage, setActivePage] = useState('home');
    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    function renderPage() {
        switch (activePage) {
            case 'home':
                return <HomePage setActivePage={setActivePage} theme={theme} />;
            case 'products':
                return <ProductsPage theme={theme} />;
            case 'infrastructure':
                return <InfrastructurePage theme={theme} />;
            case 'quality':
                return <QualityPage theme={theme} />;
            case 'contact':
                return <ContactPage theme={theme} />;
            default:
                return <HomePage setActivePage={setActivePage} theme={theme} />;
        }
    }

    return (
        <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0f1e] text-slate-200' : 'bg-slate-50 text-slate-900'}`}>
            <Navbar activePage={activePage} setActivePage={setActivePage} theme={theme} toggleTheme={toggleTheme} />
            <main>
                <AnimatePresence mode="wait">
                    {renderPage()}
                </AnimatePresence>
            </main>
            <Footer setActivePage={setActivePage} theme={theme} />
        </div>
    );
}
