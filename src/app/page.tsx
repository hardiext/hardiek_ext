"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import HeroSection from "./pages/HeroSection"
import AboutSection from "./pages/AboutSection"
import ProjectsSection from "./pages/ProjectSection"
import ExperienceSection from "./pages/ExperienceSection"
import CertificatesSection from "./pages/CertificateSection"
import ContactSection from "./pages/ContactSection"
import StatusSection from "./pages/StatusSection"
import Footer from "./pages/FooterSection"

export default function Home() {
  const [bootState, setBootState] = useState<'LOCKED' | 'DECRYPTING' | 'READY'>('LOCKED')
  const [progress, setProgress] = useState<number>(0)
  const [binaryStream, setBinaryStream] = useState<string>('')

  // Efek Dekripsi
  useEffect(() => {
    if (bootState !== 'DECRYPTING') return

    const binaryInterval = setInterval(() => {
      let chars = '01011010011011001101010XF_SYSTEM_FAILURE_ERR_0x99_BYPASSING_'
      let str = ''
      for (let i = 0; i < 120; i++) {
        str += chars[Math.floor(Math.random() * chars.length)]
      }
      setBinaryStream(str)
    }, 50)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(binaryInterval)
          setTimeout(() => setBootState('READY'), 400)
          return 100
        }
        return prev + Math.floor(Math.random() * 8 + 4)
      })
    }, 60)

    return () => {
      clearInterval(binaryInterval)
      clearInterval(progressInterval)
    }
  }, [bootState])

  return (
    <div>
      <AnimatePresence mode="wait">
        {bootState !== 'READY' ? (
          /* BOOT SCREEN */
          <motion.div
            key="brutal-bootloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.3,
              y: -50,
              filter: "blur(20px) contrast(200%)",
              transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
            }}
            className={`fixed inset-0 z-50 flex flex-col justify-center items-center font-mono text-xs p-6 select-none transition-colors duration-300 ${
              bootState === 'DECRYPTING' ? 'bg-red-950/20 text-red-500' : 'bg-neutral-950 text-neutral-400'
            }`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_50%,transparent_50%)] bg-size-[100%_3px] pointer-events-none z-30" />
            <div className={`absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f10_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f10_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none ${
              bootState === 'DECRYPTING' ? 'opacity-40 animate-pulse' : ''
            }`} />

            <div className="w-full max-w-md border border-neutral-900 bg-neutral-950/80 p-6 relative space-y-6 backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${bootState === 'DECRYPTING' ? 'bg-red-500 animate-ping' : 'bg-yellow-500'}`} />
                  <span className="font-bold text-[10px] tracking-widest text-white">
                    {bootState === 'LOCKED' ? 'GATEWAY_SECURE_LOCKOUT' : 'OVERRIDE_SEQUENCE_ACTIVE'}
                  </span>
                </div>
                <span className="text-[9px] text-neutral-600">SYS_V4.0 // AUTH</span>
              </div>

              <AnimatePresence mode="wait">
                {bootState === 'LOCKED' ? (
                  <motion.div 
                    key="lock-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 py-4 text-center"
                  >
                    <p className="text-[11px] leading-relaxed text-neutral-500 max-w-xs mx-auto">
                      Sistem portofolio dilindungi oleh protokol enkripsi internal. Otorisasi manual diperlukan untuk memuat modul visual perangkat lunak.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setBootState('DECRYPTING')}
                      className="px-6 py-3 border border-neutral-800 bg-neutral-900/60 font-black tracking-widest text-[10px] uppercase cursor-pointer text-neutral-300 hover:border-white transition-all duration-200"
                    >
                      Initialize System Bypass [ Execute ]
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="decrypt-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="w-full h-16 overflow-hidden bg-black/40 border border-red-950 p-2 text-[9px] text-red-600/70 break-all leading-none font-light">
                      {binaryStream}
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-1.5 bg-neutral-900 relative overflow-hidden">
                        <div 
                          className="h-full bg-red-600 transition-all duration-700" 
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-neutral-600">
                        <span className="animate-pulse font-bold text-red-500">// CORRUPTING_FIREWALL...</span>
                        <span className="text-white font-bold">{progress}%</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-[9px] text-neutral-700 text-center font-mono uppercase tracking-wider pt-2 border-t border-neutral-900">
                HARDIEK TATENDRA NODE // CENTRAL_CORE_ACCESS
              </div>
            </div>
          </motion.div>
        ) : (
          <div 
            key="main-portfolio"
            className="min-h-screen bg-black"
          >
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificatesSection />
            <ContactSection />
            <StatusSection />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}