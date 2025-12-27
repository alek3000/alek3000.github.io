import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: "Sept 2025 - Present",
            role: "Mechatronics Sub-Team",
            company: "UBC BAJA, BAJA SAE",
            description: "Designing real-time CVT temperature monitoring with infrared sensors and refactoring CANBus protocol to reduce latency by 15%. Designing a 4-layer PCB with STM32."
        },
        {
            year: "May 2025 - July 2025",
            role: "Electrical Engineering Intern",
            company: "MCW Consultants LTD",
            description: "Conducted electrical design for YVR Airport (power distribution & lighting). Generated 15+ AutoCAD/Revit plans ensuring CEC compliance and authored technical specs."
        },

    ];

    return (
        <section className="min-h-screen pt-20 pb-0 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16"><span className="text-primary">My</span> Experience</h2>

            <div className="max-w-4xl mx-auto">
                <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 md:pl-0">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="mb-12 relative pl-8 md:pl-0"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>

                            <div className="md:grid md:grid-cols-6 md:gap-8">
                                <div className="md:col-span-2 text-slate-400 font-mono text-sm pt-1 mb-2 md:mb-0 md:text-right pr-4">
                                    {exp.year}
                                </div>
                                <div className="md:col-span-4 bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="text-primary text-sm mb-3">{exp.company}</div>
                                    <p className="text-slate-300 text-sm">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
