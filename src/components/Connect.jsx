import { Mail, Linkedin } from 'lucide-react';

const Connect = () => {
    return (
        <section className="pt-10 pb-10 px-4 relative flex flex-col items-center justify-between min-h-[60vh]">
            <div className="max-w-4xl w-full text-center mx-auto mb-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-primary">Connect</span></h2>

                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-16">
                    I'm always open to discussing new opportunities, whether it's for embedded systems, full-stack development, or just to chat about tech. Feel free to reach out through any of the platforms below!
                </p>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">


                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/aleksandar-filipovic1" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300">
                            <Linkedin className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:AleksandarFilipovic.ece@gmail.com" className="flex flex-col items-center gap-4 group">
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300">
                            <Mail className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">Email</span>
                    </a>

                    {/* Resume */}
                    <a href="/AFilipovic_Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                        <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300">
                            <div className="w-12 h-12 flex items-center justify-center font-bold text-2xl text-slate-300 group-hover:text-primary border-2 border-slate-500 group-hover:border-primary rounded-lg transition-colors">CV</div>
                        </div>
                        <span className="text-lg font-medium text-slate-400 group-hover:text-white transition-colors">Resume</span>
                    </a>
                </div>
            </div>

            <footer className="w-screen border-t border-slate-800 pt-8 pb-8 px-4 text-slate-500 text-center mt-32 bg-slate-900/50 backdrop-blur-sm self-end">
                “The most beautiful thing we can experience is the mysterious.” — Einstein
            </footer>
        </section>
    );
};

export default Connect;
