import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Minesweeper Python Project",
            role: "Software Development",
            desc: "A full-featured Minesweeper clone with a custom GUI.",
            longDesc: "Engineered a complete Minesweeper game using Python and Tkinter. Implemented core game logic with Object-Oriented Programming (OOP), including custom grid sizes, win/lose conditions, and recursive cell clearing. Designed a user-friendly GUI for smooth gameplay.",
            tags: ["Python", "Tkinter", "OOP", "GUI"],
            images: ["/minesweeper_1.png", "/minesweeper_2.png"],
            link: "https://github.com/aleksandar-filipovic1"
        },
        {
            id: 2,
            title: "Arduino Automated Claw",
            role: "Robotics & Firmware",
            desc: "C-based precise motor control for a robotic claw.",
            longDesc: "Designed and programmed an automated robotic claw using Arduino (C). Implemented precise motor control logic for gripping and release mechanisms. Prototyped and refined the mechanical structure using Fusion 360 for 3D modeling.",
            tags: ["C", "Arduino", "Fusion 360", "Motor Control"],
            images: ["/claw_1.png", "/claw_2.png"],
            link: "https://github.com/aleksandar-filipovic1"
        },
        {
            id: 3,
            title: "CVT Belt Temperature Sensor",
            role: "Embedded Systems & Design",
            desc: "Thermal monitoring system for Baja SAE racing vehicle.",
            longDesc: "Developed C firmware (STM32) to interface an MLX90614 IR sensor via I2C for continuous belt temperature tracking. Integrated with the vehicle's Rear ECU for telemetry and dashboard visualization. Designed a custom mounting bracket in SolidWorks and validated sensor accuracy via dynamometer testing.",
            tags: ["C", "STM32", "SolidWorks", "I2C", "PCB Design"],
            images: ["/cvt_1.png", "/cvt_2.png"],
            link: "https://github.com/aleksandar-filipovic1"
        }
    ];

    return (
        <section className="min-h-screen py-20 px-4" id="projects">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16"><span className="text-primary">Featured</span> Projects</h2>

            <div className="max-w-4xl mx-auto flex flex-col gap-8">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.id}`}
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer bg-slate-800/50 border border-slate-700 p-6 rounded-2xl flex flex-col md:flex-row gap-6 hover:bg-slate-800 transition-colors hover:border-primary/50"
                    >
                        {/* Thumbnail */}
                        <div className={`w-full md:w-48 h-32 rounded-xl overflow-hidden flex items-center justify-center shrink-0 ${project.image || 'bg-slate-800'}`}>
                            {project.images ? (
                                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-xs text-slate-400">Thumbnail</span>
                            )}
                        </div>

                        <div className="flex flex-col justify-center flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <span className="text-sm text-slate-400">{project.role}</span>
                                </div>
                            </div>

                            <p className="text-slate-300 line-clamp-2 mb-4">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-primary/80">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50"
                        />
                        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
                            <motion.div
                                layoutId={`card-${selectedProject.id}`}
                                className="w-full max-w-3xl md:max-w-5xl bg-slate-800 border border-slate-600 rounded-2xl p-6 md:p-8 shadow-2xl pointer-events-auto relative overflow-y-auto max-h-[90vh]"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute top-4 right-4 p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white transition-colors z-10"
                                >
                                    <X size={20} />
                                </button>

                                {selectedProject.images ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        {selectedProject.images.map((img, idx) => (
                                            <img key={idx} src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-64 md:h-80 rounded-xl object-cover" />
                                        ))}
                                    </div>
                                ) : (
                                    <div className={`w-full h-48 md:h-64 rounded-xl ${selectedProject.image} mb-8 flex items-center justify-center`}>
                                        <span className="text-slate-400">Project Demo / Screenshot</span>
                                    </div>
                                )}

                                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                <div className="text-primary font-medium mb-6">{selectedProject.role}</div>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 mb-6 text-lg">{selectedProject.desc}</p>
                                    <p className="text-slate-400 leading-relaxed mb-8">{selectedProject.longDesc}</p>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
