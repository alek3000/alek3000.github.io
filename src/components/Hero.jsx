import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Electrical Engineering Student | Embedded Systems | PCB Design";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section className="h-screen flex flex-col justify-center items-center text-center relative px-4">
            {/* Profile Image */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-primary shadow-[0_0_30px_rgba(14,165,233,0.5)] mb-8 overflow-hidden bg-slate-800 flex items-center justify-center"
            >
                <img src="/portrait_2025.JPG" alt="Aleksandar Filipovic" className="w-full h-full object-cover scale-125" />
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4"
            >
                Aleksandar Filipovic
            </motion.h1>

            <div className="h-8 mb-12">
                <span className="text-xl md:text-2xl text-primary font-mono">
                    {text}
                </span>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
            >
                <ChevronDown className="w-8 h-8 text-primary/80" />
            </motion.div>
        </section>
    );
};

export default Hero;
