import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactMethods = [
    {
        icon: <Mail className="w-8 h-8" />,
        title: "Email",
        value: "snigdhaaravandi@gmail.com",
        href: "mailto:snigdhaaravandi@gmail.com",
        ariaLabel: "Email me"
    },
    {
        icon: <Linkedin className="w-8 h-8" />,
        title: "LinkedIn",
        value: "snigdha-aravandi",
        href: "https://www.linkedin.com/in/snigdha-aravandi",
        ariaLabel: "Connect on LinkedIn"
    },
    {
        icon: <Github className="w-8 h-8" />,
        title: "GitHub",
        value: "snigdha-aravandi",
        href: "https://github.com/snigdha-aravandi",
        ariaLabel: "Follow on GitHub"
    }
];

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section id="contact" className="section-container relative max-w-5xl mx-auto py-24 mb-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                        <span className="text-accent font-mono text-xl mr-2">06.</span>
                        Contact
                    </h2>
                    <div className="h-[1px] bg-slate-700 w-full md:w-3/12"></div>
                </div>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed text-left">
                    I'm always open to discussing opportunities, collaborations, or interesting projects. Feel free to reach out if you'd like to work together or just connect.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {contactMethods.map((method, index) => (
                    <motion.a
                        key={index}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={method.ariaLabel}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 10px 30px -10px rgba(56,189,248,0.3)",
                            borderColor: "rgba(56,189,248,0.5)"
                        }}
                        className="group block bg-card/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center">
                            <motion.div
                                className="mb-5 text-slate-300 group-hover:text-accent transition-colors duration-300 bg-slate-800/50 border border-slate-700/50 group-hover:border-accent/40 group-hover:bg-accent/10 p-4 rounded-xl"
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                {method.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors">
                                {method.title}
                            </h3>
                            <p className="text-slate-400 text-sm font-mono break-all group-hover:text-accent/80 transition-colors">
                                {method.value}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center"
            >
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-slate-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] text-lg"
                >
                    <ExternalLink size={22} />
                    <span>View Resume</span>
                </a>
            </motion.div>
        </section>
    );
}
