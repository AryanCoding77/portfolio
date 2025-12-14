import LogoLoop from './LogoLoop';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const TechStack = () => {
    const techLogos = [
        { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
        { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
        { node: <SiExpress className="text-white" />, title: "Express", href: "https://expressjs.com" },
        { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { node: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { node: <SiCss3 className="text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ];

    return (
        <div className="md:hidden w-full py-8 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="mb-4 px-4">
                <h3 
                    className="text-white text-lg font-bold text-center tracking-wider"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    TECH STACK
                </h3>
            </div>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={20}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#050505"
                    ariaLabel="Technology stack"
                />
            </div>
        </div>
    );
};

export default TechStack;
