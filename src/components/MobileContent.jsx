import { ArrowDownRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';

const MobileContent = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Mobile Glass Card - Positioned after character */}
            <div className="md:hidden relative z-40 -mt-20 mx-4 col-span-12">
                <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-3xl p-6 space-y-4">
                    <h3
                        className="text-2xl font-bold text-white tracking-wider"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        ARYAN
                    </h3>
                    <p className="text-white text-sm leading-relaxed" style={{ 
                        fontFamily: "'Inter', sans-serif",
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
                    }}>
                        Young full-stack developer crafting innovative web applications with cutting-edge technologies and creative solutions.
                    </p>
                    <button 
                        onClick={() => navigate('/projects')}
                        className="relative z-50 border-2 border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm font-semibold tracking-wide w-full cursor-pointer"
                    >
                        View Projects
                    </button>
                </div>
            </div>

            {/* Mobile Stats */}
            <div className="md:hidden flex justify-around relative z-30 mt-8 mb-24">
                <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        <AnimatedCounter end={567} duration={2} />
                    </div>
                    <div className="text-white/70 text-xs mt-1">collections</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        <AnimatedCounter end={5.3} duration={2} decimals={1} suffix="K" />
                    </div>
                    <div className="text-white/70 text-xs mt-1">members</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        <AnimatedCounter end={8.3} duration={2} decimals={1} suffix="K" />
                    </div>
                    <div className="text-white/70 text-xs mt-1">cards</div>
                </div>
            </div>

            {/* Mobile Fixed CTA Button */}
            <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)]">
                <button 
                    onClick={() => navigate('/projects')}
                    className="flex items-center justify-center gap-4 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all w-full shadow-2xl"
                >
                    <span style={{ fontFamily: "'Rajdhani', sans-serif" }}>Watch More</span>
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <ArrowDownRight className="text-white" size={20} />
                    </div>
                </button>
            </div>
        </>
    );
};

export default MobileContent;
