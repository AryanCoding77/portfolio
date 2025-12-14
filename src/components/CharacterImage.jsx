import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CharacterImage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '/man-image.png';
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <div className="md:col-span-4 flex items-end justify-center relative z-[2] h-full pointer-events-none">
            <div className="relative w-full flex justify-center">
                <div className="absolute inset-0 bg-red-600/40 blur-[80px] scale-110" />

                <motion.div
                    className="relative z-10 w-full flex justify-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={imageLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9, duration: 1, ease: 'easeOut' }}
                >
                    <img
                        src="/man-image.png"
                        alt="Dark Samurai with glowing red eyes"
                        className="w-auto h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] object-contain object-bottom drop-shadow-2xl"
                        style={{ opacity: imageLoaded ? 1 : 0 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default CharacterImage;
