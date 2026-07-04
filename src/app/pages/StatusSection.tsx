"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const StatusSection: React.FC = () => {
    const [time, setTime] = useState<string>('')
    const [aiHex, setAiHex] = useState<string>('0x7F3B')
    const [coreLoad, setCoreLoad] = useState<number>(91)
    const [isOverclocked, setIsOverclocked] = useState<boolean>(false)
    const [isExploded, setIsExploded] = useState<boolean>(false)
    const [countdown, setCountdown] = useState<number>(10)
    const [terminalLogs, setTerminalLogs] = useState<string[]>([
        "[SYS] INITIALIZING AI COGNITIVE SUBSYSTEM...",
        "[NET] LISTENING ON PORT 443 // SECURE HANDSHAKE READY",
    ])
    
    const logContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isExploded) return
        const interval = setInterval(() => {
            const now = new Date()
            setTime(now.toLocaleTimeString('en-US', { hour12: false }))
            
            const hexValues = isOverclocked 
                ? ['0xERR9', '0xFAAL', '0xCRIT', '0xDEAD', '0xOVER', '0xFAIL']
                : ['0x8F2A', '0x3C9B', '0x7E4D', '0x1A2F', '0x99BC', '0x5F1E']
            
            setAiHex(hexValues[Math.floor(Math.random() * hexValues.length)])
            setCoreLoad(isOverclocked 
                ? Math.floor(Math.random() * (160 - 140 + 1)) + 140 
                : Math.floor(Math.random() * (99 - 88 + 1)) + 88
            )
        }, isOverclocked ? 80 : 600)

        return () => clearInterval(interval)
    }, [isOverclocked, isExploded])


    useEffect(() => {
        let timer: NodeJS.Timeout
        if (isOverclocked && countdown > 0 && !isExploded) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000)
        } else if (isOverclocked && countdown === 0 && !isExploded) {
            setIsExploded(true) // MELEDAK!
        }
        return () => clearTimeout(timer)
    }, [isOverclocked, countdown, isExploded])


    useEffect(() => {
        if (isExploded) return
        const logTemplates = [
            `[AI_ENG] RUNNING HEURISTIC ANNEALING ON MATRIX`,
            `[SYS_VM] TOMCAT 8.5 THREAD OVERLOAD: EXECUTING TRACE_DUMP`,
            `[NET_AUD] PACKET CAPTURE: ATTACHING INBOUND FRAME_ID`,
            `[CRITICAL] TEMPERATURE THRESHOLD EXCEEDED`,
            `[OVERFLOW] CORE VOLTAGE OUT OF BOUNDS`
        ]

        const logInterval = setInterval(() => {
            const randomTemplate = logTemplates[Math.floor(Math.random() * logTemplates.length)]
            const logContent = isOverclocked 
                ? `!!! EMERGENCY !!! TIME_REMAINING: ${countdown}s -> MELTDOWN_IMMINENT`
                : `${randomTemplate}_${Math.floor(Math.random() * 900 + 100)}`
                
            const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false })
            
            setTerminalLogs(prev => {
                const updated = [...prev, `[${timestamp}] ${logContent}`]
                return updated.slice(-20)
            })
        }, isOverclocked ? 60 : 1200)

        return () => clearInterval(logInterval)
    }, [isOverclocked, countdown, isExploded])

    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
        }
    }, [terminalLogs])


    const handleReboot = () => {
        setIsExploded(false)
        setIsOverclocked(false)
        setCountdown(10)
        setCoreLoad(91)
        setTerminalLogs([
            "[SYS] SYSTEM COLD REBOOT SUCCESSFUL.",
            "[SYS] ALL CORE PARAMETERS RESET TO STABLE.",
        ])
    }

    return (
        <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait">
                {!isExploded ? (
                    <motion.section 
                        key="normal-terminal"
                    
                        animate={isOverclocked ? {
                            x: [0, -countdown, countdown, -countdown, countdown, 0].map(v => v * 0.7),
                            y: [0, countdown, -countdown, countdown, -countdown, 0].map(v => v * 0.7),
                        } : {}}
                        transition={{ repeat: Infinity, duration: 0.1 }}
                        className={`w-full py-24 px-4 sm:px-8 md:px-12 border-b transition-colors duration-500 select-none font-mono text-xs relative overflow-hidden ${
                            isOverclocked ? 'bg-red-950/30 border-red-900 text-red-500' : 'bg-neutral-950 border-neutral-900 text-white'
                        }`}
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f18_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f18_1px,transparent_1px)] bg-size-[14px_14px] pointer-events-none" />
                        
                        <div className="w-full max-w-5xl mx-auto mb-8 flex items-center justify-between border-b pb-4 border-neutral-900">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOverclocked ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${isOverclocked ? 'bg-red-600' : 'bg-emerald-600'}`}></span>
                                </span>
                                <span className={`text-[10px] tracking-[0.3em] uppercase ${isOverclocked ? 'text-red-400 font-black animate-pulse' : 'text-neutral-400'}`}>
                                    {isOverclocked ? `🚨 T-MINUS ${countdown}s UNTIL KINETIC MELTDOWN` : 'MAIN_FRAME_TELEMETRY_STREAM // LIVE'}
                                </span>
                            </div>
                            
                            <button 
                                onClick={() => {
                                    if (isOverclocked) {
                                        setIsOverclocked(false)
                                        setCountdown(10) 
                                    } else {
                                        setIsOverclocked(true)
                                    }
                                }}
                                className={`px-3 py-1 text-[9px] font-bold tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                                    isOverclocked 
                                    ? 'bg-red-600 border-red-400 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] animate-bounce' 
                                    : 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:text-red-500 hover:border-red-900'
                                }`}
                            >
                                {isOverclocked ? `[ !!! EJECT SYSTEM !!! ]` : '[ OVERCLOCK_SYSTEM ]'}
                            </button>
                        </div>

                    
                        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10 mb-6">
                            <div className={`p-5 bg-neutral-950 border ${isOverclocked ? 'border-red-700' : 'border-neutral-900'}`}>
                                <span className="text-neutral-600 block text-[9px] tracking-wider mb-2">// COGNITIVE_AGENT</span>
                                <span className={`font-bold text-sm ${isOverclocked ? 'text-red-500' : 'text-emerald-400'}`}>
                                    {isOverclocked ? '❌ MELTDOWN_LOCK' : '⚡ AI_CORE_ACTIVE'}
                                </span>
                            </div>

                            <div className={`p-5 bg-neutral-950 border ${isOverclocked ? 'border-red-700' : 'border-neutral-900'}`}>
                                <span className="text-neutral-600 block text-[9px] tracking-wider mb-2">// DECRYPTION_PIPELINE</span>
                                <span className={`font-bold text-sm tracking-widest ${isOverclocked ? 'text-red-400' : 'text-yellow-500'}`}>{aiHex}</span>
                            </div>

                            <div className={`p-5 bg-neutral-950 border ${isOverclocked ? 'border-red-700' : 'border-neutral-900'}`}>
                                <span className="text-neutral-600 block text-[9px] tracking-wider mb-2">// PROCESSING_LOAD</span>
                                <div className="space-y-2">
                                    <div className="flex justify-between font-bold">
                                        <span>NEURAL_LOAD:</span>
                                        <span>{coreLoad}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-neutral-900 overflow-hidden">
                                        <div className={`h-full ${isOverclocked ? 'bg-red-600' : 'bg-neutral-400'}`} style={{ width: `${Math.min(coreLoad, 100)}%` }} />
                                    </div>
                                </div>
                            </div>

                            <div className={`p-5 bg-neutral-950 border ${isOverclocked ? 'border-red-700' : 'border-neutral-900'}`}>
                                <span className="text-neutral-600 block text-[9px] tracking-wider mb-2">// CORE_TEMPERATURE</span>
                                <span className={`font-bold text-sm block ${isOverclocked ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                                    {isOverclocked ? `${105 + (10 - countdown) * 15}°C` : '38.4°C'}
                                </span>
                            </div>
                        </div>

                   
                        <div className={`w-full max-w-5xl mx-auto bg-neutral-950 border p-4 relative ${isOverclocked ? 'border-red-900' : 'border-neutral-900'}`}>
                            <div className="w-full h-32 overflow-y-auto font-mono text-[10px] leading-relaxed space-y-1 scrollbar-none" style={{ scrollbarWidth: 'none' }} ref={logContainerRef}>
                                {terminalLogs.map((log, index) => (
                                    <div key={index} className={isOverclocked ? "text-red-500/80" : "text-neutral-500"}>{log}</div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                ) : (
            
                    <motion.section 
                        key="exploded-screen"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full bg-red-950/90 border border-red-600 text-red-400 py-32 px-4 flex flex-col items-center justify-center text-center font-mono relative"
                    >
                     
                        <div className="absolute inset-0 bg-white/5 animate-ping pointer-events-none" />
                        
                        <div className="space-y-4 max-w-md">
                            <h2 className="text-3xl font-black tracking-widest text-red-500 animate-bounce">
                                [ !! KINETIC CRASHED !! ]
                            </h2>
                            <p className="text-xs leading-relaxed text-red-300">
                                FATAL ERROR: CORE SEGMENTATION FAULT IN TERMINAL_NODE_V4. VOLTAGE SPIKE DESTROYED THE TELEMETRY RECEIVER PARSER.
                            </p>
                            <div className="p-3 bg-black/40 border border-red-900/60 text-[10px] text-left text-red-500/80 space-y-1">
                                <div>&gt; STACK_DUMP: 0x000000000000DEAD</div>
                                <div>&gt; HARDIEK_ENGINE_STATE: NULL_POINTER</div>
                                <div>&gt; CORE_TEMP: TERMINATED_BY_SYSTEM</div>
                            </div>
                            
                            <button 
                                onClick={handleReboot}
                                className="mt-4 px-6 py-3 bg-red-600 text-white font-bold text-xs tracking-widest uppercase border border-red-400 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                            >
                                Core Repair & Reboot [ ↻ ]
                            </button>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    )
}

export default StatusSection;