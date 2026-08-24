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
                    I'm an Electrical Engineering student at UBC with a deep focus on software engineering and embedded systems. My passion lies in building innovative technology that pushes boundaries, bridging the gap between low-level hardware control and high-level software architecture.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                    During my recent Software Engineering internship at Rivian and Volkswagen Group Technologies, I engineered Software-in-the-Loop (SIL) frameworks and architected robust automotive network interfaces to validate critical charging ECUs. I thrive on solving complex technical challenges, whether that means spoofing real-world payloads for system validation at Rivian or optimizing CANBus protocols and designing PCBs for the UBC BAJA racing team.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                    With a CGPA of 83% (Dean's Honour List), I am constantly exploring the intersection of modern software development and hardware. My toolkit includes C/C++, Python, Pytest, Linux Kernel networking, and STM32 micro-controllers, and I'm always eager to dive into new, transformative technologies.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
