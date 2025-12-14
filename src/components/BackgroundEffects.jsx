import { motion } from 'framer-motion';
import { useMemo } from 'react';

const BackgroundEffects = () => {
    // Memoize particle positions to prevent recalculation
    const particles = useMemo(() => 
        Array.from({ length: 15 }, (_, i) => ({
            id: i,
            width: 2 + Math.random() * 3,
            left: Math.random() * 100,
            isRed: i % 3 === 0
        })), []
    );

    return (
        <>
            {/* Base Layer: Red Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-red-900/30 via-transparent to-transparent opacity-50 z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] z-0 pointer-events-none" />

            {/* Texture Layer: Digital Circuit Board Pattern */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255, 255, 255, 0.08) 40px, rgba(255, 255, 255, 0.08) 41px),
                        repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 255, 255, 0.08) 40px, rgba(255, 255, 255, 0.08) 41px)
                    `,
                    backgroundSize: '40px 40px, 40px 40px',
                    opacity: 0.4
                }}
            />

            {/* Sci-Fi Data Grid Nodes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                <div className="absolute top-[25%] left-[85%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                <div className="absolute top-[70%] left-[15%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                <div className="absolute top-[80%] left-[80%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
            </div>

            {/* Floating Particles - Reduced count */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full will-change-transform"
                        style={{
                            width: `${particle.width}px`,
                            height: `${particle.width}px`,
                            left: `${particle.left}%`,
                            bottom: '-20px',
                            background: particle.isRed ? 'rgba(239, 68, 68, 0.6)' : 'rgba(255, 255, 255, 0.4)',
                            boxShadow: particle.isRed ? '0 0 12px rgba(239, 68, 68, 0.8)' : '0 0 10px rgba(255, 255, 255, 0.6)'
                        }}
                        animate={{
                            y: [-20, -800],
                            x: [0, (Math.random() - 0.5) * 150],
                            opacity: [0, 0.8, 0.8, 0],
                            scale: [0.5, 1, 1, 0.5]
                        }}
                        transition={{
                            duration: 8 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Vignette Effect */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)'
                }}
            />
        </>
    );
};

export default BackgroundEffects;
