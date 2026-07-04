"use client"

import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { motion, Variants } from 'framer-motion'

const HeroSection: React.FC = () => {
    // Daftar tech stack disesuaikan dengan keahlian Mobile/Backend milikmu
    const technologies = [
        "Flutter", "Dart", "Go", "Java", "JSP", 
        "Tomcat", "Python", "Tailwind CSS", "Figma", "Git", "GitHub"
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Muncul berurutan secara halus
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <motion.section 
            id="hero-section" 
            className="min-h-screen w-full px-4 sm:px-8 md:px-12 bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden select-none pt-32 pb-20"
            style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 65%)'
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
      
            <motion.div 
                className='flex items-center space-x-1.5 mb-6 text-neutral-500 opacity-80'
                variants={itemVariants}
            >
                <MapPinIcon className='size-3.5 sm:size-4' />
                <span className='text-[11px] sm:text-xs font-medium tracking-wider'>Central Java, Indonesia</span>
            </motion.div>

         
            <div className='text-center flex flex-col items-center w-full max-w-4xl px-2 sm:px-4'>
                <motion.h1 
                    className='text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight sm:leading-none [word-spacing:4px] sm:[word-spacing:10px]'
                    variants={itemVariants}
                >
                    I'm Hardiek Tatendra
                </motion.h1>
                <motion.h2 
                    className='text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight sm:leading-none mt-3 sm:mt-2 [word-spacing:4px] sm:[word-spacing:10px]'
                    variants={itemVariants}
                >
                    Mobile Developer
                </motion.h2>
                
               
                <motion.p 
                    className='mt-6 sm:mt-8 max-w-xl md:max-w-2xl text-center text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal opacity-90'
                    variants={itemVariants}
                >
                    I am a mobile developer dedicated to crafting beautiful, efficient, and user-centric applications that bring innovative ideas to life.
                </motion.p>
            </div>

        
            <motion.div 
                className="flex flex-row items-center gap-3 mt-10 w-full justify-center px-4"
                variants={itemVariants}
            >
                <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-32 sm:w-36 h-9 sm:h-10 bg-[#ffffff] text-[#000000] text-xs font-semibold rounded-none transition-colors duration-150 cursor-pointer flex items-center justify-center shadow-md border-none"
                >
                    Let's Talk
                </motion.button>

                <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "#1f1f1f" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-32 sm:w-36 h-9 sm:h-10 bg-[#141414] text-[#d1d5db] text-xs font-medium rounded-none transition-colors duration-150 cursor-pointer flex items-center justify-center border border-transparent hover:border-neutral-800"
                >
                    See my works
                </motion.button>
            </motion.div>

         
           <motion.div 
                className="mt-20 w-full flex flex-col items-center overflow-hidden"
                variants={itemVariants}
            >
            
                <span className="text-[11px] sm:text-xs text-neutral-600 font-medium tracking-wider mb-5">
                    Technologies I use
                </span>

                <div 
                    className="relative w-full max-w-5xl flex overflow-hidden mask-[linear-gradient(to_right,transparent,rgba(0,0,0,1)_15%,rgba(0,0,0,1)_85%,transparent)]"
                >
                
                    <motion.div 
                        className="flex gap-2 pr-2 whitespace-nowrap shrink-0"
                        animate={{ x: [0, "-100%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {technologies.map((tech, idx) => (
                            <span
                                key={`tech-1-${idx}`}
                                className="px-3 py-1.5 bg-[#111111] text-neutral-400 text-[11px] sm:text-xs font-medium rounded-none border border-neutral-900/60 whitespace-nowrap cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    
                    <motion.div 
                        className="flex gap-2 pr-2 whitespace-nowrap shrink-0"
                        animate={{ x: [0, "-100%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {technologies.map((tech, idx) => (
                            <span
                                key={`tech-2-${idx}`}
                                className="px-3 py-1.5 bg-[#111111] text-neutral-400 text-[11px] sm:text-xs font-medium rounded-none border border-neutral-900/60 whitespace-nowrap cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default HeroSection