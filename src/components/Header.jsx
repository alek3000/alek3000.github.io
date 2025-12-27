import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show header after scrolling past window height
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isScrolled ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block fixed top-0 left-0 w-full z-40 bg-slate-900/60 backdrop-blur-md border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
                <div
                    className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors cursor-pointer"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    AF
                </div>

                <nav className="flex gap-8">
                    {['About', 'Projects', 'Experience', 'Connect'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-bold text-white relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
