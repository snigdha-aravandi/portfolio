import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Adaptive E-Learning System",
        description: "Machine learning based e-learning platform that personalizes learning paths based on student performance and mastery prediction.",
        tags: ["Python", "Machine Learning", "React", "Node.js"],
        github: "https://github.com/snigdha-aravandi/Adaptive-Elearning",
        live: ""
    },
    {
        title: "Library Management System",
        description: "Full-stack web application that allows admins and students to manage books, track borrowing activity, and handle library operations through an intuitive dashboard.",
        tags: ["React", "Node.js", "MySQL", "JavaScript"],
        github: "https://github.com/snigdha-aravandi/Library-Management-System",
        live: "https://mm-library-frontend-7c8c.vercel.app/"
    },
    {
        title: "Mental Wellness Companion",
        description: "Web application that helps users track mood patterns and access mental health resources through a clean and simple user interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: "https://akularishi.github.io/Mental_Wellness_Companion/home.html"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-container relative">
            <div className="flex items-center gap-4 mb-20 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    <span className="text-accent font-mono text-xl mr-2">03.</span>
                    Featured Projects
                </h2>
                <div className="h-[1px] bg-slate-700 w-full md:w-3/12"></div>
            </div>

            <div className="flex flex-col gap-16 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        whileHover={{
                            y: -5,
                            boxShadow: "0 20px 40px -10px rgba(56,189,248,0.2), 0 0 15px rgba(56, 189, 248, 0.1)",
                            borderColor: "rgba(56, 189, 248, 0.4)"
                        }}
                        className="group bg-card/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300"
                    >
                        {/* LEFT SIDE - Project Data */}
                        <div className="flex flex-col justify-center p-8 md:p-12 lg:w-[55%] order-2 lg:order-1 relative z-20 bg-card/40">
                            <p className="text-accent font-mono text-sm mb-3">Featured Project</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 group-hover:text-accent transition-colors duration-300">
                                {project.title}
                            </h3>

                            <div className="text-slate-300 text-base leading-relaxed mb-8">
                                <p>{project.description}</p>
                            </div>

                            <ul className="flex flex-wrap gap-3 mb-10 text-slate-400 font-mono text-xs md:text-sm">
                                {project.tags.map((tag, idx) => (
                                    <li key={idx} className="bg-slate-800/80 px-4 py-2 rounded-full border border-slate-600 transition-colors duration-300 group-hover:border-slate-500 group-hover:text-slate-300 shadow-sm">
                                        {tag}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-6 mt-auto">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-400 hover:text-accent transition-colors duration-300"
                                        aria-label="GitHub Repository"
                                    >
                                        <Github size={24} />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-400 hover:text-accent transition-colors duration-300"
                                        aria-label="Live Demo"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDE - Styled Preview Placeholder */}
                        <div className="relative lg:w-[45%] order-1 lg:order-2 h-[250px] md:h-[350px] lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-l border-slate-700/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0 transition-colors duration-500 group-hover:from-slate-800 group-hover:to-slate-800"></div>
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent z-10 duration-500 transition-opacity group-hover:opacity-40"></div>

                            <div className="absolute inset-0 flex items-center justify-center z-20 transition-transform duration-500 ease-out group-hover:scale-105">
                                {/* Fake Browser / App Panel */}
                                <div className="w-[85%] h-[75%] rounded-lg border border-slate-700/70 bg-slate-900 shadow-2xl flex flex-col overflow-hidden relative">
                                    {/* Browser Header */}
                                    <div className="h-8 bg-slate-800/80 border-b border-slate-700 flex items-center px-4 gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                                    </div>

                                    {/* Wireframe Body */}
                                    <div className="flex-1 p-4 flex flex-col gap-3 opacity-60">
                                        <div className="w-3/4 h-4 bg-slate-800 rounded"></div>
                                        <div className="w-full h-2 bg-slate-800 rounded mt-2"></div>
                                        <div className="w-5/6 h-2 bg-slate-800 rounded"></div>
                                        <div className="w-full h-2 bg-slate-800 rounded"></div>
                                        <div className="grid grid-cols-2 gap-2 mt-4">
                                            <div className="w-full h-16 bg-slate-800 rounded"></div>
                                            <div className="w-full h-16 bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay Tint */}
                            <div className="absolute inset-0 bg-accent/20 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
