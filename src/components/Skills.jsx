import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Blocks, Wrench, Database } from 'lucide-react';

const skillsData = [
    {
        category: "Languages",
        icon: <Code2 className="w-8 h-8 text-accent" />,
        skills: ["Java", "C++", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
        category: "Frameworks",
        icon: <Blocks className="w-8 h-8 text-accent" />,
        skills: ["React", "Node.js", "Express.js"]
    },
    {
        category: "Tools",
        icon: <Wrench className="w-8 h-8 text-accent" />,
        skills: ["Git", "GitHub", "VS Code", "Postman"]
    },
    {
        category: "Databases",
        icon: <Database className="w-8 h-8 text-accent" />,
        skills: ["MySQL", "MongoDB", "Redis", "SQLite"]
    }
];

export default function Skills() {
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
        <section id="skills" className="section-container relative">
            <div className="flex items-center gap-4 mb-16 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                    <span className="text-accent font-mono text-xl mr-2">02.</span>
                    My Skills
                </h2>
                <div className="h-[1px] bg-slate-700 w-full md:w-3/12"></div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {skillsData.map((data, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 10px 30px -10px rgba(56,189,248,0.2)",
                            borderColor: "rgba(56,189,248,0.3)"
                        }}
                        className="group bg-card/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 flex flex-col h-full transition-colors duration-300"
                    >
                        {/* Animated Icon Container */}
                        <motion.div
                            className="mb-8 bg-slate-800/50 shadow-inner w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 border border-slate-700/50 group-hover:border-accent/30"
                            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            {data.icon}
                        </motion.div>

                        <h3 className="text-2xl font-bold text-slate-200 mb-6 group-hover:text-accent transition-colors duration-300">
                            {data.category}
                        </h3>

                        {/* Pill-shaped badges grid */}
                        <div className="flex flex-wrap gap-3">
                            {data.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-slate-800/80 text-slate-300 rounded-full text-sm font-mono border border-slate-600 shadow-sm group-hover:border-slate-500 group-hover:text-white transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
