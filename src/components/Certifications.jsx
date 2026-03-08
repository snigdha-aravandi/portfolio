import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificationsData = [
    {
        title: "Salesforce Certified Agentforce Specialist",
        issuer: "Issued by Salesforce",
        date: "Dec 2025"
    },
    {
        title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
        issuer: "Issued by Oracle",
        date: "Oct 2025"
    },
    {
        title: "Google AI Essentials",
        issuer: "Issued by Coursera",
        date: "Jul 2025"
    },
    {
        title: "Design and Analysis of Algorithms",
        issuer: "Issued by NPTEL",
        date: "Jan – Mar 2025"
    }
];

export default function Certifications() {
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
        <section id="certifications" className="section-container relative">
            <div className="flex items-center gap-4 mb-16 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    <span className="text-accent font-mono text-xl mr-2">05.</span>
                    Certifications
                </h2>
                <div className="h-[1px] bg-slate-700 w-full md:w-3/12"></div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 10px 30px -10px rgba(56,189,248,0.25)",
                            borderColor: "rgba(56,189,248,0.4)"
                        }}
                        className="group bg-card/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Background Glow Effect */}
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 text-accent">
                            <Award size={100} className="absolute -top-4 -right-4" />
                        </div>

                        <div className="mb-6 bg-slate-800/50 w-14 h-14 rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors duration-300 relative z-10">
                            <Award className="w-7 h-7 text-accent" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-200 mb-4 group-hover:text-accent transition-colors duration-300 relative z-10 leading-snug">
                            {cert.title}
                        </h3>

                        <div className="mt-auto pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm font-mono text-slate-400 border-t border-slate-700/50 relative z-10">
                            <span className="text-slate-300 font-semibold">{cert.issuer}</span>
                            <span className="text-accent/80">{cert.date}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
