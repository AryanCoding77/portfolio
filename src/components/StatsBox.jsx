import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const StatsBox = () => {
    return (
        <motion.div 
            className="absolute bottom-0 right-0 z-50 hidden md:block" 
            style={{ right: '-3px' }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
        >
            <svg 
                className="absolute -top-12 right-0 w-16 h-16" 
                viewBox="0 0 64 64"
                style={{ transform: 'translateY(1px)' }}
            >
                <path 
                    d="M 64 64 L 64 0 Q 64 64 0 64 Z" 
                    fill="white"
                />
            </svg>
            
            <div
                className="bg-white px-8 md:px-12 py-4 md:py-6"
                style={{
                    clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    minWidth: '450px'
                }}
            >
                <div className="flex items-center justify-around gap-4 md:gap-8 pr-2 md:pr-4">
                    <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold text-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            <AnimatedCounter end={567} duration={2} />
                        </div>
                        <div className="text-gray-600 text-[10px] md:text-xs mt-1">zodiac collections</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold text-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            <AnimatedCounter end={5.3} duration={2} decimals={1} suffix="K" />
                        </div>
                        <div className="text-gray-600 text-[10px] md:text-xs mt-1">community members</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-4xl font-bold text-black" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            <AnimatedCounter end={8.3} duration={2} decimals={1} suffix="K" />
                        </div>
                        <div className="text-gray-600 text-[10px] md:text-xs mt-1">zodiac cards</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StatsBox;
