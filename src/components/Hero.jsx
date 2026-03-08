import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, FolderGit2 } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, duration: 0.6 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 md:pt-0">
            {/* Background decoration: Subtle animated gradient blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent blur-[120px] rounded-full mix-blend-screen pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                    x: [0, -30, 0],
                    y: [0, 40, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
                className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-600 blur-[150px] rounded-full mix-blend-screen pointer-events-none"
            />

            <motion.div
                className="text-center z-10 w-full max-w-4xl flex flex-col items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={itemVariants} className="text-accent font-medium tracking-wider uppercase text-base md:text-lg mb-6">
                    Hi, my name is
                </motion.p>

                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Aravandi Snigdhasaee
                </motion.h1>

                <motion.div variants={itemVariants} className="h-[60px] md:h-[80px] flex items-center justify-center mb-8">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-400">
                        {'I am a '}
                        <span className="text-accent">
                            <TypeAnimation
                                sequence={[
                                    'Machine Learning Enthusiast',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                    'AI Engineer',
                                    2000,
                                    'Problem Solver',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants} className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed space-y-4">
                    <p>
                        I'm a Computer Science student passionate about artificial intelligence, backend systems, and building useful software.
                        Currently working as an AI intern and exploring machine learning, LLM evaluation, and scalable backend applications.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mb-16">
                    <a
                        href="#projects"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-slate-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] w-full sm:w-auto"
                    >
                        <FolderGit2 size={20} />
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-700 text-white font-bold rounded-full transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] w-full sm:w-auto"
                    >
                        <ExternalLink size={20} />
                        View Resume
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-8">
                    {[
                        { Icon: Github, href: "https://github.com/snigdha-aravandi", label: "GitHub" },
                        { Icon: Linkedin, href: "https://www.linkedin.com/in/snigdha-aravandi", label: "LinkedIn" },
                        { Icon: Mail, href: "mailto:snigdhaaravandi@gmail.com", label: "Email" }
                    ].map(({ Icon, href, label }, idx) => (
                        <a
                            key={idx}
                            href={href}
                            aria-label={label}
                            className="text-slate-400 hover:text-accent transform hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] rounded-full transition-all duration-300 bg-slate-800/50 p-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon size={24} />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
