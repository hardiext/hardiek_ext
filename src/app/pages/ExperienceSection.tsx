"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'

interface TimelineItem {
    type: "EDUCATION" | "EXPERIENCE";
    institution: string;
    role: string;
    period: string;
    description: string;
}

const ExperienceSection: React.FC = () => {
   
    const history: TimelineItem[] = [
        {
            type: "EDUCATION",
            institution: "Telkom University Purwokerto",
            role: "Bachelor of Computer Science / Information Technology",
            period: "2024 — PRESENT",
            description: "Mendalami rekayasa perangkat lunak tingkat lanjut, struktur data, arsitektur sistem berbasis Object-Oriented Programming (OOP), serta optimasi performa algoritma pencarian kompleks."
        },
        {
            type: "EXPERIENCE",
            institution: "PT Diginet Media",
            role: "Full Stack Developer Intern",
            period: "2023",
            description: "Bertanggung jawab dalam siklus pengembangan aplikasi end-to-end, mulai dari perancangan antarmuka komponen front-end yang responsif hingga implementasi arsitektur database dan logika back-end."
        },
        {
            type: "EDUCATION",
            institution: "SMK Telkom Purwokerto",
            role: "Software Engineering (RPL)",
            period: "2020 — 2024",
            description: "Mempelajari fondasi dasar rekayasa perangkat lunak, algoritma pemrograman mendasar, pembuatan basis data relasional, serta pengembangan aplikasi mobile dan web sejak dini."
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.section 
            id="experience" 
            className="w-full px-4 sm:px-8 md:px-12 bg-neutral-950 text-white flex flex-col justify-center items-center py-32 select-none relative border-b border-neutral-900"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12">
                
                {/* SISI KIRI: Timeline Rekam Jejak Nyata */}
                <div className="md:col-span-8 flex flex-col gap-10">
                    <div>
                        <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase block mb-3">
                            [ 03 / TIMELINE ]
                        </span>
                        <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                            HISTORY<span className="text-neutral-800">.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-10 border-l border-neutral-900 pl-4 sm:pl-6 relative">
                        {history.map((item, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants} 
                                className="relative space-y-2 group"
                            >

                                <div className="absolute w-2 h-2 bg-neutral-800 group-hover:bg-white transition-colors top-1.5 -left-5.25 sm:-left-7.25 border border-neutral-950" />
                                
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 font-mono text-[11px]">
                                    <span className="text-neutral-500 tracking-wider">
                                        // {item.type} — {item.institution}
                                    </span>
                                    <span className="text-neutral-600 font-medium whitespace-nowrap">
                                        {item.period}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-bold text-neutral-200 tracking-tight group-hover:text-white transition-colors">
                                    {item.role}
                                </h3>
                                
                                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans max-w-2xl">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

               
                <div className="md:col-span-4 flex flex-col justify-start md:pt-16 gap-6">
                    <div className="p-4 bg-neutral-900/20 border border-neutral-900 space-y-3 font-mono">
                        <span className="text-[10px] text-neutral-600 uppercase tracking-widest block">
                            // VERIFIED_LOGS
                        </span>
                        <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                            Membangun kapabilitas rekayasa perangkat lunak yang solid sejak masa sekolah kejuruan, ditempa oleh pengalaman industri nyata berskala agensi, dan dimatangkan dengan teori sains komputer akademis.
                        </p>
                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default ExperienceSection;