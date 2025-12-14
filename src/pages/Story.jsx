import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Zap, Shield } from 'lucide-react';

const Story = () => {
    const navigate = useNavigate();

    const chapters = [
        {
            icon: Sparkles,
            title: "THE BEGINNING",
            content: "At just 10 years old in class 4th, I discovered my passion for coding. What started as curiosity about how websites work quickly transformed into an obsession with creating digital experiences. While other kids were playing games, I was learning to build them. Those early days of writing simple scripts and experimenting with HTML sparked a journey that would define my future."
        },
        {
            icon: Zap,
            title: "THE EVOLUTION",
            content: "Over the past 5 years, I've evolved from a curious beginner to a skilled full-stack developer. Now in class 9th, I've mastered modern technologies like React, Node.js, MongoDB, and AI integration. I've built real-world applications including Compare AI, Muscle AI, and multiple web platforms that people actually use. Each project taught me that great development isn't just about code—it's about solving problems and creating value."
        },
        {
            icon: Shield,
            title: "THE MISSION",
            content: "As a young developer in 2025, I'm driven by the belief that age is just a number when it comes to creating impact. My mission is to build innovative web applications that push boundaries and challenge what's possible. With every line of code, I'm proving that passion, dedication, and continuous learning can turn a 10-year-old's dream into a 15-year-old's reality. The journey has just begun, and the best is yet to come."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 lg:p-8">
            <div className="relative w-full max-w-[1920px] min-h-screen">
                
                {/* Back Button */}
                <motion.button
                    onClick={() => navigate('/')}
                    className="fixed top-6 left-6 lg:left-16 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowLeft className="text-white" size={24} />
                </motion.button>

                <motion.div
                    className="relative w-full min-h-screen bg-[#050505] rounded-none lg:rounded-[40px] overflow-hidden border-0 lg:border-t-[3px] lg:border-l-[3px] lg:border-r-[3px] lg:border-b-[6px] lg:border-white"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-radial from-red-900/30 via-transparent to-transparent opacity-50 z-0" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] z-0" />
                    
                    {/* Grid Pattern */}
                    <div 
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `
                                repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255, 255, 255, 0.08) 40px, rgba(255, 255, 255, 0.08) 41px),
                                repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 255, 255, 0.08) 40px, rgba(255, 255, 255, 0.08) 41px)
                            `,
                            backgroundSize: '40px 40px',
                            opacity: 0.4
                        }}
                    />

                    {/* Vignette */}
                    <div 
                        className="absolute inset-0 z-0"
                        style={{
                            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)'
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20">
                        
                        {/* Header */}
                        <motion.div
                            className="text-center mb-16"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h1 
                                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wider"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                MY <span className="text-red-500">STORY</span>
                            </h1>
                            <p 
                                className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                The journey of a passionate full-stack developer
                            </p>
                        </motion.div>

                        {/* Story Chapters */}
                        <div className="w-full max-w-5xl space-y-8">
                            {chapters.map((chapter, index) => (
                                <motion.div
                                    key={index}
                                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
                                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + (index * 0.2), duration: 0.6 }}
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                                            <chapter.icon className="text-red-500" size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <h2 
                                                className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide"
                                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                                            >
                                                {chapter.title}
                                            </h2>
                                            <p 
                                                className="text-white/80 text-base md:text-lg leading-relaxed"
                                                style={{ fontFamily: "'Inter', sans-serif" }}
                                            >
                                                {chapter.content}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            className="mt-16 text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <button 
                                onClick={() => navigate('/projects')}
                                className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-red-500 hover:border-red-500 transition-all text-sm md:text-base font-semibold tracking-wide"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                VIEW PROJECTS
                            </button>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                        <div className="absolute top-[30%] right-[15%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                        <div className="absolute bottom-[25%] left-[15%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                        <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-red-500/50 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                    </div>
                </motion.div>
            </div>

            {/* Google Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@400;500;600&display=swap');
            `}</style>
        </div>
    );
};

export default Story;
