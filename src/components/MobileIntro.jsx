import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileIntro = ({ onComplete }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [scanlineComplete, setScanlineComplete] = useState(false);
    const [showFullStack, setShowFullStack] = useState(false);
    const [showDeveloper, setShowDeveloper] = useState(false);
    const [showPattern, setShowPattern] = useState(false);
    const [showSamurai, setShowSamurai] = useState(false);
    const [transitionOut, setTransitionOut] = useState(false);

    useEffect(() => {
        // Scanline animation
        const scanlineTimer = setTimeout(() => {
            setScanlineComplete(true);
        }, 800);

        // Show FULL-STACK text with glitch
        const fullStackTimer = setTimeout(() => {
            setShowFullStack(true);
        }, 900);

        // Show DEVELOPER text
        const developerTimer = setTimeout(() => {
            setShowDeveloper(true);
        }, 1400);

        // Show background pattern
        const patternTimer = setTimeout(() => {
            setShowPattern(true);
        }, 1600);

        // Show samurai
        const samuraiTimer = setTimeout(() => {
            setShowSamurai(true);
        }, 2100);

        // Start transition out
        const transitionTimer = setTimeout(() => {
            setTransitionOut(true);
        }, 3500);

        // Complete intro
        const completeTimer = setTimeout(() => {
            setShowIntro(false);
            onComplete();
        }, 4200);

        return () => {
            clearTimeout(scanlineTimer);
            clearTimeout(fullStackTimer);
            clearTimeout(developerTimer);
            clearTimeout(patternTimer);
            clearTimeout(samuraiTimer);
            clearTimeout(transitionTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    if (!showIntro) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[10000] md:hidden overflow-hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: transitionOut ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                {/* Black background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950" />

                {/* Background pattern */}
                {showPattern && (
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        {/* Hexagon pattern */}
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                                    <polygon
                                        points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hexagons)" />
                        </svg>

                        {/* Circuit lines */}
                        <div className="absolute inset-0">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                                    style={{
                                        top: `${(i + 1) * 12}%`,
                                        left: 0,
                                        right: 0,
                                    }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 0.3 }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: 'easeOut' }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Scanline effect */}
                {!scanlineComplete && (
                    <motion.div
                        className="absolute left-0 right-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]"
                        initial={{ top: 0 }}
                        animate={{ top: '100%' }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        {/* Particle trail */}
                        <div className="absolute inset-0">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-red-500 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: '50%',
                                    }}
                                    initial={{ opacity: 1, scale: 1 }}
                                    animate={{
                                        opacity: 0,
                                        scale: 0,
                                        y: Math.random() * 50 - 25,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: Math.random() * 0.3,
                                        ease: 'easeOut',
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Main content container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Samurai image */}
                    {showSamurai && (
                        <motion.div
                            className={`absolute inset-0 flex items-end justify-center ${transitionOut ? 'transition-transform duration-700' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: transitionOut ? 1 : 0.6,
                                y: transitionOut ? 0 : 20,
                            }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <img
                                src="/man-image.png"
                                alt="Samurai"
                                className="h-[60vh] object-contain object-bottom"
                            />
                            
                            {/* Visor glow effect */}
                            <motion.div
                                className="absolute top-[30%] left-1/2 -translate-x-1/2 w-32 h-32 bg-red-500 rounded-full blur-[60px]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.div>
                    )}

                    {/* Text container */}
                    <motion.div
                        className="relative z-10 px-4 w-full max-w-full"
                        animate={
                            transitionOut
                                ? {
                                      scale: 0.5,
                                      y: -250,
                                  }
                                : {}
                        }
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* FULL-STACK text with glitch effect */}
                        {showFullStack && (
                            <div className="relative mb-2">
                                {/* Main text */}
                                <motion.h1
                                    className="text-3xl sm:text-4xl font-bold text-white tracking-wide text-center"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {'FULL-STACK'.split('').map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            initial={{ opacity: 0, x: Math.random() * 20 - 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: i * 0.05,
                                                duration: 0.2,
                                                ease: 'easeOut',
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.h1>

                                {/* Chromatic aberration layers */}
                                <motion.h1
                                    className="absolute inset-0 text-3xl sm:text-4xl font-bold text-red-500 tracking-wide text-center opacity-50"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    initial={{ x: -2, opacity: 0 }}
                                    animate={{ x: -2, opacity: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    FULL-STACK
                                </motion.h1>
                                <motion.h1
                                    className="absolute inset-0 text-3xl sm:text-4xl font-bold text-blue-500 tracking-wide text-center opacity-50"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    initial={{ x: 2, opacity: 0 }}
                                    animate={{ x: 2, opacity: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    FULL-STACK
                                </motion.h1>

                                {/* Glitch flicker effect */}
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{
                                        opacity: [0, 1, 0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        times: [0, 0.2, 0.4, 0.6, 1],
                                    }}
                                />
                            </div>
                        )}

                        {/* DEVELOPER text with neon glow */}
                        {showDeveloper && (
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                <motion.h2
                                    className="text-4xl sm:text-5xl font-bold text-red-500 tracking-wide text-center"
                                    style={{
                                        fontFamily: "'Orbitron', sans-serif",
                                        textShadow: '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6)',
                                    }}
                                    animate={{
                                        textShadow: [
                                            '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6)',
                                            '0 0 30px rgba(239, 68, 68, 1), 0 0 60px rgba(239, 68, 68, 0.8)',
                                            '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        times: [0, 0.5, 1],
                                        ease: 'easeInOut',
                                    }}
                                >
                                    DEVELOPER
                                </motion.h2>

                                {/* Neon glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-red-500 blur-2xl opacity-30"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        times: [0, 0.5, 1],
                                    }}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Vignette overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.8) 100%)',
                    }}
                />

                {/* Red flash effect at the end */}
                {transitionOut && (
                    <motion.div
                        className="absolute inset-0 z-[100]"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.8) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 100%)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.7, times: [0, 0.3, 1], ease: 'easeInOut' }}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileIntro;
