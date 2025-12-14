import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Instagram, Send } from 'lucide-react';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    const contactInfo = [
        {
            icon: Phone,
            label: "Phone",
            value: "+91 9451999390",
            link: "tel:+919451999390"
        },
        {
            icon: Mail,
            label: "Email",
            value: "aryancoding77@gmail.com",
            link: "mailto:aryancoding77@gmail.com"
        },
        {
            icon: Instagram,
            label: "Instagram",
            value: "@aryan_9544_",
            link: "https://www.instagram.com/aryan_9544_/"
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
                                GET IN <span className="text-red-500">TOUCH</span>
                            </h1>
                            <p 
                                className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                Let's connect and bring your ideas to life
                            </p>
                        </motion.div>

                        {/* Contact Content */}
                        <div className="w-full max-w-2xl flex justify-center">
                            
                            {/* Contact Information */}
                            <motion.div
                                className="space-y-6 max-w-2xl w-full"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                                    <h2 
                                        className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide"
                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    >
                                        CONTACT INFO
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        {contactInfo.map((info, index) => (
                                            <motion.a
                                                key={index}
                                                href={info.link}
                                                target={info.label === "Instagram" ? "_blank" : undefined}
                                                rel={info.label === "Instagram" ? "noopener noreferrer" : undefined}
                                                className="flex items-start gap-4 group cursor-pointer"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 + (index * 0.1) }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center group-hover:bg-red-500/30 transition-all">
                                                    <info.icon className="text-red-500" size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 
                                                        className="text-white/60 text-sm font-semibold mb-1"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {info.label}
                                                    </h3>
                                                    <p 
                                                        className="text-white text-base md:text-lg group-hover:text-red-500 transition-colors"
                                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                                    >
                                                        {info.value}
                                                    </p>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Additional Info Card */}
                                <motion.div
                                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <h3 
                                        className="text-xl font-bold text-white mb-4 tracking-wide"
                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    >
                                        LET'S COLLABORATE
                                    </h3>
                                    <p 
                                        className="text-white/70 text-sm leading-relaxed"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels above.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>

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

export default Contact;
