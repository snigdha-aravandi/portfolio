import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-container relative">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                        <span className="text-accent font-mono text-xl mr-2">01.</span>
                        About Me
                    </h2>
                    <div className="h-[1px] bg-slate-700 w-full md:w-64"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
                        <p>
                            Hello! I'm Snigdha.
                        </p>
                        <p>
                            Backend Developer Intern and Computer Science student with experience building scalable web applications using Node.js, Express.js, PostgreSQL, Redis, and Socket.IO.
                        </p>
                        <p>
                            Passionate about designing reliable systems, solving challenging problems, and continuously learning emerging technologies.
                        </p>

                        <div className="pt-4">
                            <p className="font-bold text-white mb-4">Technologies I work with:</p>
                            <div className="flex flex-wrap gap-3">
                                {["Java", "Python", "Node.js", "Express.js", "PostgreSQL", "Redis", "Socket.IO", "React", "Git", "REST APIs"].map((tech, idx) => (
                                    <span key={idx} className="rounded-full px-4 py-2 bg-slate-800 border border-slate-700 hover:border-sky-400 transition-colors text-sm font-mono text-slate-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative group mx-auto md:ml-auto w-64 h-64 md:w-80 md:h-80 mt-12 md:mt-0">
                        <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 ease-in-out z-0"></div>
                        <div className="relative z-10 w-full h-full bg-slate-900 rounded-lg border border-slate-700 flex flex-col overflow-hidden transition-all duration-300 ease-in-out shadow-lg">
                            {/* Editor Header */}
                            <div className="flex items-center px-4 py-3 bg-slate-800 border-b border-slate-700">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                </div>
                            </div>

                            {/* Editor Content */}
                            <div className="p-4 md:p-5 overflow-auto text-[10px] md:text-xs font-mono leading-relaxed text-slate-300 whitespace-pre-wrap break-words">
                                <span className="text-pink-400">const</span> <span className="text-white">snigdha</span> <span className="text-pink-400">=</span> <span className="text-yellow-300">{`{`}</span><br />
                                <span className="ml-4 md:ml-6"><span className="text-sky-300">role:</span> <span className="text-green-300">"Computer Science Student"</span>,</span><br />
                                <span className="ml-4 md:ml-6"><span className="text-sky-300">interests:</span> [<span className="text-green-300">"Artificial Intelligence"</span>, <span className="text-green-300">"Machine Learning"</span>, <span className="text-green-300">"Backend Development"</span>],</span><br />
                                <span className="ml-4 md:ml-6"><span className="text-sky-300">currentlyLearning:</span> [<span className="text-green-300">"LLM Evaluation"</span>, <span className="text-green-300">"System Design"</span>],</span><br />
                                <span className="ml-4 md:ml-6"><span className="text-sky-300">goal:</span> <span className="text-green-300">"Build intelligent systems that solve real-world problems"</span></span><br />
                                <span className="text-yellow-300">{`}`}</span>;
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
