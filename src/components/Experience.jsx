import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Kravix Tech",
        role: "Backend Developer Intern",
        period: "Feb 2026 – Present",
        description: [
            "Developing scalable backend services for MelodyMeet using Node.js, Express.js, PostgreSQL, Redis, and Socket.IO.",
            "Designing and implementing RESTful APIs for authentication, user management, messaging, and session handling.",
            "Building real-time communication features using WebSockets while contributing to a microservice-based architecture.",
            "Optimizing database operations and integrating backend services to improve application performance and scalability."
        ],
        techBadges: [
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Redis",
            "Socket.IO",
            "REST APIs",
            "Microservices"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section-container relative">
            <div className="flex items-center gap-4 mb-16 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    <span className="text-accent font-mono text-xl mr-2">04.</span>
                    Experience
                </h2>
                <div className="h-[1px] bg-slate-700 w-full md:w-3/12"></div>
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Vertical Center Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2">
                    {/* Glowing gradient effect on the line */}
                    <div className="absolute top-0 w-full h-full bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>
                </div>

                <div className="space-y-12 md:space-y-0">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} pb-12 md:pb-24 last:pb-0`}
                            >
                                {/* Timeline Axis Node */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="absolute left-6 md:left-1/2 w-4 h-4 bg-background border-4 border-accent rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(56,189,248,0.6)] z-20"
                                ></motion.div>

                                {/* Experience Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 30px -10px rgba(56,189,248,0.15)",
                                        borderColor: "rgba(56,189,248,0.3)"
                                    }}
                                    className={`relative w-full ml-16 md:ml-0 md:w-[45%] bg-card/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 z-10 transition-colors duration-300 ${isEven ? 'md:mr-10' : 'md:ml-10'}`}
                                >
                                    {/* Subtle Pointer Arrow pointing to the timeline (Desktop) */}
                                    <div className={`hidden md:block absolute top-6 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${isEven ? 'right-[-16px] border-l-[16px] border-l-slate-700/50' : 'left-[-16px] border-r-[16px] border-r-slate-700/50'}`}></div>
                                    {/* Subtle Pointer Arrow (Mobile) */}
                                    <div className="md:hidden absolute top-6 left-[-15px] w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-[16px] border-r-slate-700/50"></div>

                                    <h3 className="text-2xl font-bold text-slate-200 mb-1">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg font-semibold text-accent mb-4">
                                        {exp.company}
                                    </h4>
                                    <p className="inline-block text-slate-400 font-mono text-sm mb-6 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                                        {exp.period}
                                    </p>
                                    <ul className="space-y-3">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-slate-300 text-base leading-relaxed">
                                                <span className="text-accent mt-1 flex-shrink-0">▹</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.techBadges && (
                                        <div className="flex flex-wrap gap-2 mt-6">
                                            {exp.techBadges.map((badge, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full text-xs font-mono border border-slate-700 shadow-sm transition-colors duration-300 hover:border-accent"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
