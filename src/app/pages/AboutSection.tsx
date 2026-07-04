"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'

const AboutSection: React.FC = () => {
    // Definisi varian untuk stagger animation saat scroll
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <motion.section 
            id="about-section" 
            className="min-h-screen w-full px-4 sm:px-8 md:px-12 bg-neutral-950 text-white flex flex-col justify-center items-center py-28 select-none relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
        >
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
                
                
                <div className="md:col-span-4 flex flex-col justify-between h-full min-h-50 md:min-h-100">
                    <motion.div variants={itemVariants}>
                        <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase block mb-4">
                            [ 01 / IDENTITY ]
                        </span>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none uppercase">
                            THE<br />
                            ENGINE<br />
                            <span className="text-neutral-800">.BEHIND</span>
                        </h2>
                    </motion.div>

                  
                    <motion.div 
                        className="font-mono text-[11px] text-neutral-600 border-l border-neutral-900 pl-4 space-y-1.5 hidden md:block"
                        variants={itemVariants}
                    >
                        <p className="text-neutral-500">// CURRENT CONFIGURATION</p>
                        <p>NAME         : HARDIEK TATENDRA</p>
                        <p>FOCUS        : MOBILE / BACKEND SYSTEMS</p>
                        <p>PREFERENCE   : DARK-MODERN / MINIMALIST</p>
                        <p>STATUS       : EXPANDING_THE_STACK</p>
                    </motion.div>
                </div>

                <div className="md:col-span-8 flex flex-col gap-12">
                    
                    <motion.h3 
                        className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-200 leading-snug"
                        variants={itemVariants}
                    >
                        "I am Hardiek Tatendra. A computer science student and developer focused on engineering cross-platform mobile apps and high-performance backend systems."
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-neutral-900">
                        
                   
                        <motion.div className="space-y-3" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-neutral-500 block" />
                                <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-widest">
                                    Mobile & UI Execution
                                </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                                Building fluid applications using Flutter and Dart. I am heavily invested in smooth state management, custom micro-interactions, and modern dark aesthetics to deliver exceptional mobile experiences.
                            </p>
                        </motion.div>

                 
                        <motion.div className="space-y-3" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-neutral-500 block" />
                                <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-widest">
                                    Systems & Networking
                                </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                                Beyond the UI, I love exploring backend architectures with Go and Java, diving deep into computer networks, and solving complex algorithmic structures. I write code that is optimized, modular, and built to scale.
                            </p>
                        </motion.div>

                    </div>
                </div>

            </div>
        </motion.section>
    )
}

export default AboutSection