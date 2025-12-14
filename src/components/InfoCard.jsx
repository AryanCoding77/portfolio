import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InfoCard = () => {
    const navigate = useNavigate();

    return (
        <motion.div 
            className="hidden md:flex md:col-span-4 flex-col justify-center relative z-30 py-4 md:py-8 pointer-events-auto mt-0 lg:mt-40"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
        >
            <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-4 md:space-y-6 hover:bg-white/20 transition-all">
                <h3
                    className="text-2xl md:text-3xl font-bold text-white tracking-wider"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    TECH STACK
                </h3>
                <p 
                    className="text-white text-xs md:text-sm leading-relaxed" 
                    style={{ 
                        fontFamily: "'Inter', sans-serif",
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
                    }}
                >
                    React, Node.js, MongoDB, Express, Tailwind CSS, and more. Crafting scalable solutions with cutting-edge technologies.
                </p>
                <button 
                    onClick={() => navigate('/story')}
                    className="border-2 border-white/30 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-white hover:text-black transition-all text-xs md:text-sm font-semibold tracking-wide"
                >
                    View Skills
                </button>
            </div>
        </motion.div>
    );
};

export default InfoCard;
