"use client"

import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-neutral-950 text-neutral-600 py-12 px-4 sm:px-8 md:px-12 font-mono text-[11px] select-none border-t border-neutral-900/40">
            <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                
            
                <div>
                    © {currentYear} HARDIEK TATENDRA<span className="text-neutral-800">.</span> OPERATIONAL NODE.
                </div>

              
                <div className="flex items-center gap-6 text-[10px] tracking-wider text-neutral-500">
                    <div className="hidden sm:block uppercase">
                        // PARADIGM ARCHITECTURE SIGNED
                    </div>
                    <div className="text-neutral-700 font-bold">
                        V4.0_SYS_STABLE
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;