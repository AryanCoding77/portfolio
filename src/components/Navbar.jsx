import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <motion.nav 
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[9999] hidden md:block"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ pointerEvents: 'auto' }}
        >
            <div
                className="bg-white px-20 py-4 text-black relative"
                style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
                    minWidth: '600px',
                    pointerEvents: 'auto'
                }}>
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                    style={{
                        borderRadius: '0 0 5px 5px',
                        pointerEvents: 'none'
                    }}
                />
                <div className="flex items-center justify-center gap-16 text-sm tracking-wider uppercase font-medium text-gray-600">
                    <button 
                        onClick={() => navigate('/story')}
                        className="relative group transition-colors duration-300 hover:text-red-500 cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <span className="relative z-10">About</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    <button 
                        onClick={() => navigate('/projects')}
                        className="relative group transition-colors duration-300 hover:text-red-500 cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <span className="relative z-10">Projects</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    <button 
                        onClick={() => navigate('/contact')}
                        className="relative group transition-colors duration-300 hover:text-red-500 cursor-pointer bg-transparent border-0 p-0"
                        style={{ pointerEvents: 'auto' }}
                    >
                        <span className="relative z-10">Contact</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
