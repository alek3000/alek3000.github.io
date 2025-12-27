import { motion } from 'framer-motion';
import { Cpu, Code, Globe, Database } from 'lucide-react';

const About = () => {
    const techs = [
        { icon: <Code className="w-6 h-6" />, name: "C++ / Python" },
        { icon: <Cpu className="w-6 h-6" />, name: "Embedded Systems" },
        { icon: <Globe className="w-6 h-6" />, name: "React / Web" },
        { icon: <Database className="w-6 h-6" />, name: "System Design" },
    ];

    return (
        <section className="min-h-screen py-20 px-4 flex items-center justify-center" id="about">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl bg-slate-800/50 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-slate-700 shadow-xl text-center"
            >
                <h2 className="text-3xl font-bold mb-8 text-white"><span className="text-primary">About</span> Me</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                    I'm an Electrical Engineering student at UBC (expected 2028) with a strong passion for Mechatronics and Embedded Systems.
                    Currently, I'm diving deep into hardware-software integration with the UBC BAJA racing team, refactoring CANBus protocols and designing PCBs.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                    With a CGPA of 85.6% and hands-on internship experience in electrical design at MCW Consultants, I thrive on solving complex technical challenges.
                    My toolkit includes C, Python, Altium Designer, and STM32, but I'm always eager to learn more.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
