import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Navbar from './src/components/Navbar';
import StatsBox from './src/components/StatsBox';
import BackgroundEffects from './src/components/BackgroundEffects';
import HeroContent from './src/components/HeroContent';
import CharacterImage from './src/components/CharacterImage';
import InfoCard from './src/components/InfoCard';
import MobileContent from './src/components/MobileContent';
import MobileIntro from './src/components/MobileIntro';
import TechStack from './src/components/TechStack';

const ZodiacLanding = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [introComplete, setIntroComplete] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };
    return (
        <div className="min-h-screen md:h-screen bg-gray-100 flex items-center justify-center p-0 md:p-4 lg:p-8 overflow-x-hidden overflow-y-auto md:overflow-hidden">
            {/* Mobile Intro Animation */}
            {!introComplete && <MobileIntro onComplete={() => setIntroComplete(true)} />}
            
            <div className="relative w-full max-w-[1920px] min-h-screen md:h-[95vh]">

                <Navbar />
                
                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden fixed top-6 right-6 z-[9999] w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    whileTap={{ scale: 0.9 }}
                >
                    {menuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
                </motion.button>

                {/* Mobile Sidebar */}
                <AnimatePresence>
                    {menuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="md:hidden fixed inset-0 bg-black/60 z-[9990]"
                                onClick={() => setMenuOpen(false)}
                            />
                            <motion.div
                                initial={{ x: -300 }}
                                animate={{ x: 0 }}
                                exit={{ x: -300 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="md:hidden fixed left-0 top-0 h-full w-72 z-[9998] bg-white/10 backdrop-blur-xl border-r border-white/20"
                            >
                                <div className="flex flex-col h-full p-8 pt-24">
                                    <h2 className="text-3xl font-bold text-white mb-12" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                        ARYAN
                                    </h2>
                                    <nav className="flex-1 space-y-2">
                                        {['About', 'Projects', 'Contact'].map((item, index) => (
                                            <motion.button
                                                key={item}
                                                onClick={() => handleNavigation(`/${item === 'About' ? 'story' : item.toLowerCase()}`)}
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + (index * 0.1) }}
                                                className="w-full text-left px-6 py-4 text-white text-lg font-semibold hover:bg-red-500/20 rounded-xl"
                                            >
                                                {item}
                                            </motion.button>
                                        ))}
                                    </nav>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <StatsBox />

                <motion.div
                    className="relative w-full min-h-screen md:h-full bg-[#050505] rounded-none md:rounded-[40px] overflow-hidden border-0 md:border-t-[3px] md:border-l-[3px] md:border-r-[3px] md:border-b-[6px] md:border-white pointer-events-none"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <BackgroundEffects />

                    {/* Inner Content Header */}
                    <div className="relative z-50 flex items-center justify-end px-8 md:px-16 py-6 pointer-events-auto">
                        <div className="hidden md:flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full border-2 border-red-500" />
                            <div className="w-3 h-3 rounded-full border-2 border-red-500" />
                        </div>
                    </div>

                    {/* Main Content Container */}
                    <div className="relative min-h-[calc(100vh-80px)] md:h-[calc(100%-80px)] flex flex-col md:grid md:grid-cols-12 md:gap-8 px-4 md:px-16 pb-24 md:pb-0 pointer-events-auto">

                        {/* Giant ARYAN Text */}
                        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-[1]" style={{ marginTop: '-20%' }}>
                            <motion.h1
                                className="text-[10vw] md:text-[10vw] lg:text-[16vw] font-bold text-white tracking-[0.2em] select-none"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                ARYAN
                            </motion.h1>
                        </div>

                        {/* Mobile Top Content */}
                        <motion.div 
                            className="md:hidden relative z-30 mb-6 col-span-12 pt-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: introComplete ? 1 : 0, y: introComplete ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: introComplete ? 0.5 : 0 }}
                        >
                            <h2
                                className="text-3xl font-bold leading-tight mb-4"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                <span className="text-white">FULL-STACK </span>
                                <span className="text-red-500">DEVELOPER</span>
                                <br />
                                <span className="text-white">& CREATOR</span>
                            </h2>
                            <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Building innovative web applications with modern technologies. Transforming ideas into powerful digital solutions.
                            </p>
                        </motion.div>

                        <HeroContent />
                        <CharacterImage />
                        <InfoCard />
                        <MobileContent />
                        
                        {/* Tech Stack - Mobile Only */}
                        <div className="md:hidden relative z-30 -mt-16">
                            <TechStack />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Google Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
            `}</style>
        </div>
    );
};

export default ZodiacLanding;
