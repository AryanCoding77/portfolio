import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroContent = () => {
    const navigate = useNavigate();

    return (
        <motion.div 
            className="hidden md:flex md:col-span-4 flex-col justify-end relative z-30 space-y-3 pb-8 pointer-events-auto"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
        >
            <h2
                className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
                <span className="text-white">FULL-STACK </span>
                <span className="text-red-500">DEVELOPER</span>
                <br />
                <span className="text-white">&</span>
                <span className="text-red-500"> CREATOR</span>
            </h2>

            <p 
                className="text-white text-xs md:text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-md" 
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                Building innovative web applications with modern technologies. Specializing in React, Node.js, and creating seamless user experiences.
            </p>

            <button 
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 md:gap-3 bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold hover:bg-gray-200 transition-all w-fit group"
            >
                <span style={{ fontFamily: "'Rajdhani', sans-serif" }}>View Projects</span>
                <div className="w-7 h-7 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowDownRight className="text-white" size={16} />
                </div>
            </button>
        </motion.div>
    );
};

export default HeroContent;
