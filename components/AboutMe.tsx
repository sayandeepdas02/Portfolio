"use client";

import { motion } from "framer-motion";

const skillIcons = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Bun", icon: "🍞", color: "text-orange-500" },
    { name: "JavaScript", icon: "JS", color: "text-yellow-400 bg-yellow-400/10" },
    { name: "TypeScript", icon: "TS", color: "text-blue-500 bg-blue-500/10" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "Next.js", icon: "▲", color: "text-black" },
    { name: "Node.js", icon: "⬢", color: "text-green-600" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" },
    { name: "Prisma", icon: "▲", color: "text-gray-700" },
];

export default function AboutMe() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm text-gray-500 mb-2">About</p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-10">Me</h2>

                    <div className="grid md:grid-cols-[280px_1fr] gap-10">
                        {/* Left: Avatar */}
                        <div className="w-full max-w-[280px] mx-auto md:mx-0">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 p-1">
                                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center text-white font-bold text-6xl">
                                    YN
                                </div>
                            </div>
                        </div>

                        {/* Right: Bio + Skills */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Your Name
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                I&apos;m a Full Stack web developer and Open Source Contributor, I
                                love building products to solve real-world problems. I&apos;m
                                specialized in building MVP&apos;s.
                            </p>

                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-3">Skills</p>
                                <div className="flex flex-wrap gap-2">
                                    {skillIcons.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                                            title={skill.name}
                                        >
                                            <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
