"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    github: string;
}

const ProjectsSection: React.FC = () => {
    const [showAllPanel, setShowAllPanel] = useState<boolean>(false)

    const allProjects: Project[] = [
        {
            id: "01",
            title: "Jalan.ify",
            category: "Travel Agency Platform",
            description: "A modern all-in-one travel agency platform unifying ticket, hotel, and tour reservations inside a single high-fluidity user environment.",
            tech: ["UI/UX Redesign", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/jalan-ify"
        },
        {
            id: "02",
            title: "Meta Mask Sign Flow",
            category: "Web3 Sign System",
            description: "An isolated Web3 authentication pipeline integrating MetaMask cryptographic signatures for secure, low-latency decentralized application access.",
            tech: ["Web3 Sign", "UI/UX Redesign", "Development"],
            github: "https://github.com/hardiektatendra/metamask-sign"
        },
        {
            id: "03",
            title: "Auto Hunt",
            category: "Rent Car Web Solution",
            description: "A precision web-based car rental solution offering high-efficiency fleet discovery algorithms and frictionless scheduling architectures.",
            tech: ["Full Project", "UI/UX Redesign", "Development"],
            github: "https://github.com/hardiektatendra/auto-hunt"
        },
        {
            id: "04",
            title: "Loker Sync",
            category: "Job Portal Ecosystem",
            description: "An advanced job board infrastructure streamlining dynamic resume filtering, real-time application tracking, and automated corporate dashboards.",
            tech: ["Job Portal", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/loker-sync"
        },
        {
            id: "05",
            title: "Ezy Nft",
            category: "NFT Terminal Simulation",
            description: "A terminal-driven economic simulation engine charting mock NFT trading mechanics, pricing volatility formulas, and portfolio valuation assets.",
            tech: ["NFT Base", "UI/UX Redesign", "Development"],
            github: "https://github.com/hardiektatendra/ezy-nft"
        },
        {
            id: "06",
            title: "Global Landing Page",
            category: "Travel Web Infrastructure",
            description: "An ultra-premium corporate landing hub built with custom physics-driven scroll animations, global SEO indexing strategies, and multi-tier layout layers.",
            tech: ["Travel Web", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/global-travel"
        },
        {
            id: "07",
            title: "Jajan Yuk",
            category: "E-Commerce System",
            description: "A highly localized digital food marketplace structuring immediate digital transactional logic and geolocation routing boundaries.",
            tech: ["E-commerce", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/jajan-yuk"
        },
        {
            id: "08",
            title: "Kerjago",
            category: "Modern Job Portal",
            description: "A highly simplified, accessible search terminal connecting early-stage industry applicants to enterprise employment positions.",
            tech: ["Modern Job Portal", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/kerjago"
        },
        {
            id: "09",
            title: "Drum Machine",
            category: "Digital Drum Application",
            description: "An audio latency sensitive interface triggering real-time high-fidelity synthesized percussion and beat metrics natively.",
            tech: ["Digital Drum", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/drum-machine"
        },
        {
            id: "10",
            title: "Simple Calculator",
            category: "Mathematical Core Application",
            description: "A clean mathematical engine focusing on strict input validation protocols, error parsing, and rigid interface layouts.",
            tech: ["Kalkulator", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/calculator"
        },
        {
            id: "11",
            title: "Random Quote",
            category: "Quote Generator Engine",
            description: "A minimalistic asynchronous layout capturing and painting inspiring typography sets dynamically from global API nodes.",
            tech: ["Quote Generator", "Full Project", "Development"],
            github: "https://github.com/hardiektatendra/quote-generator"
        }
    ]

    const featuredProjects = allProjects.slice(0, 3)

    return (
        <>
          
            <section 
                id="projects" 
                className="w-full px-4 sm:px-8 md:px-12 bg-neutral-950 text-white flex flex-col justify-center items-center py-32 select-none relative border-t border-b border-neutral-900"
            >
                <div className="w-full max-w-5xl flex flex-col gap-12">
                    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase block mb-3">
                                [ 02 / SELECTED WORK ]
                            </span>
                            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                                CASE STUDIES<span className="text-neutral-800">.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        {featuredProjects.map((project) => (
                            <div 
                                key={project.id} 
                                className="w-full border-b border-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-6 py-10 items-start hover:bg-neutral-900/30 px-4 transition-colors duration-200"
                            >
                                <div className="md:col-span-3 font-mono text-xs text-neutral-600">
                                    {project.id} / <span className="text-[11px] text-neutral-500 uppercase">{project.category}</span>
                                </div>
                                <div className="md:col-span-6 flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{project.description}</p>
                                </div>
                                <div className="md:col-span-3 flex flex-wrap gap-1.5 justify-start md:justify-end self-center">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-mono px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-400">{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center pt-4">
                        <button
                            onClick={() => {
                                console.log('🔵 KLIK EXPLORE!')
                                setShowAllPanel(true)
                                document.body.style.overflow = 'hidden'
                            }}
                            className="font-mono text-xs text-neutral-400 hover:text-white px-6 py-3 border border-neutral-900 bg-neutral-950 tracking-widest uppercase cursor-pointer hover:bg-neutral-900 transition-colors"
                        >
                            // EXPLORE FULL ARCHIVE [ + ]
                        </button>
                    </div>
                </div>
            </section>

        
            {showAllPanel && (
                <div 
                    className="fixed inset-0 z-9999 bg-neutral-950 overflow-y-auto overflow-x-hidden"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            console.log('🔴 CLOSE VIA BACKDROP!')
                            setShowAllPanel(false)
                            document.body.style.overflow = ''
                        }
                    }}
                >
                    <div className="min-h-screen max-w-5xl mx-auto px-4 sm:px-8 py-12 md:py-24">
                  
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-900 pb-6 mb-8">
                            <div>
                                <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase block mb-2">
                                    [ INDEX / ALL_METRICS ]
                                </span>
                                <h2 className="text-2xl font-black font-mono tracking-tight text-white uppercase leading-none">
                                    TOTAL_REPOSITORIES ({allProjects.length})
                                </h2>
                            </div>
                            
                            <button
                                onClick={() => {
                                    console.log('🔴 CLOSE VIA BUTTON!')
                                    setShowAllPanel(false)
                                    document.body.style.overflow = ''
                                }}
                                className="w-full md:w-auto font-mono text-xs text-neutral-400 hover:text-white border border-neutral-900 px-5 py-3 bg-neutral-900/40 cursor-pointer uppercase tracking-wider text-center hover:bg-neutral-800 transition-colors"
                            >
                                Close Index [ X ]
                            </button>
                        </div>

                    
                        <div className="flex flex-col w-full">
                            {allProjects.map((project, index) => (
                                <div 
                                    key={project.id}
                                    className="w-full border-b border-neutral-900/60 grid grid-cols-1 md:grid-cols-12 gap-6 py-6 items-center hover:bg-neutral-900/30 px-4 transition-colors duration-200 group"
                                    style={{
                                        animation: `fadeIn 0.3s ease ${index * 0.05}s both`
                                    }}
                                >
                                    <div className="md:col-span-2 font-mono text-xs text-neutral-600">
                                        {project.id} //
                                    </div>
                                    <div className="md:col-span-4 flex flex-col">
                                        <h3 className="text-lg font-bold text-neutral-200 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="md:col-span-4 flex flex-wrap gap-1">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[9px] font-mono px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="md:col-span-2 flex justify-start md:justify-end">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                                        >
                                            SRC_CODE [↗]
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                        <div className="mt-12 pt-6 border-t border-neutral-900 text-center">
                            <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase">
                                END OF ARCHIVE // {allProjects.length} REPOSITORIES LOADED
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    )
}

export default ProjectsSection