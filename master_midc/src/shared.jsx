import { motion } from 'framer-motion';

/* Shared animation variants */
export const pageVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.3, ease: 'easeIn' } },
};

export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
    }),
};

export const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

/* SVG Logo Component */
export function Logo({ size = 40 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer gear ring */}
            <circle cx="50" cy="50" r="44" stroke="url(#logoGrad)" strokeWidth="3" fill="none" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <rect
                    key={i}
                    x="46"
                    y="2"
                    width="8"
                    height="12"
                    rx="2"
                    fill="url(#logoGrad)"
                    transform={`rotate(${angle} 50 50)`}
                />
            ))}
            {/* Inner mountain / S shape */}
            <path
                d="M30 65 L42 38 L50 50 L58 30 L70 65 Z"
                fill="url(#logoGrad)"
                opacity="0.9"
            />
            {/* Center circle */}
            <circle cx="50" cy="55" r="8" fill="#0f172a" stroke="url(#logoGrad)" strokeWidth="2" />
            <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
            </defs>
        </svg>
    );
}

/* Animated Gear SVG */
export function AnimatedGear({ className = '', size = 60 }) {
    return (
        <svg className={`animate-spin-slow ${className}`} width={size} height={size} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="20" stroke="rgba(6,182,212,0.2)" strokeWidth="2" fill="none" />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <rect key={i} x="47" y="8" width="6" height="14" rx="3" fill="rgba(6,182,212,0.15)" transform={`rotate(${angle} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="8" fill="rgba(6,182,212,0.1)" />
        </svg>
    );
}

/* Floating Particle Dots */
export function FloatingDots() {
    const dots = [
        { x: '10%', y: '20%', delay: 0, size: 4 },
        { x: '80%', y: '15%', delay: 1, size: 3 },
        { x: '25%', y: '70%', delay: 0.5, size: 5 },
        { x: '70%', y: '60%', delay: 1.5, size: 3 },
        { x: '90%', y: '40%', delay: 2, size: 4 },
        { x: '50%', y: '85%', delay: 0.8, size: 3 },
    ];
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {dots.map((d, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyan-400"
                    style={{ left: d.x, top: d.y, width: d.size, height: d.size }}
                    animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    );
}

/* Section Badge Pill */
export function SectionBadge({ children }) {
    return (
        <span className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            {children}
        </span>
    );
}
