"use client"

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion'
import Image from 'next/image'

// Import file gambar lokal statismu sesuai struktur Next.js asli dari HTML bawaan
import cert1 from '@/app/assets/images/certificate1.jpeg'
import cert2 from '@/app/assets/images/certificate2.jpeg'
import cert3 from '@/app/assets/images/certificate3.jpeg'
import cert4 from '@/app/assets/images/certificate4.jpeg'
import cert5 from '@/app/assets/images/certificate5.jpeg'
import cert6 from '@/app/assets/images/certificate6.jpeg'
import cert7 from '@/app/assets/images/certificate7.jpeg'
import cert8 from '@/app/assets/images/certificate8.jpeg'
import cert9 from '@/app/assets/images/certificate9.jpeg'

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    src: any;
    serial: string;
}

const CertificatesSection: React.FC = () => {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    const targetRef = useRef<HTMLDivElement>(null);
    
  
    const { scrollXProgress } = useScroll({ container: targetRef });
    
    const certificates: Certificate[] = [
        { id: "01", title: "Advanced Software Engineering", issuer: "SMK Telkom Purwokerto", src: cert1, serial: "SEC-RPL-2024-001" },
        { id: "02", title: "Full-Stack System Architecture", issuer: "PT Diginet Media", src: cert2, serial: "DIGI-INTERN-9982" },
        { id: "03", title: "Computer Science Specialization", issuer: "Telkom University", src: cert3, serial: "TELU-CS-2025-409" },
        { id: "04", title: "Mobile UI Layer Engineering", issuer: "Global Tech Index", src: cert4, serial: "GTI-FLUTTER-883" },
        { id: "05", title: "Network Security & Packet Audit", issuer: "Cyber Operations Lab", src: cert5, serial: "WIRESHARK-ANLYS-02" },
        { id: "06", title: "Asynchronous State Control", issuer: "Enterprise Node", src: cert6, serial: "ASYNC-JS-9910" },
        { id: "07", title: "Relational Database Structure", issuer: "Telkom Academy", src: cert7, serial: "DB-SQL-CORE-441" },
        { id: "08", title: "Web3 Cryptographic Handshake", issuer: "Decentralized Auth", src: cert8, serial: "WEB3-METAMASK-77" },
        { id: "09", title: "Object-Oriented Architecture", issuer: "Sains Komputer Core", src: cert9, serial: "OOP-JAVA-TOMCAT-8" },
     
    ];

    return (
        <section className="w-full bg-neutral-950 text-white py-32 border-b border-neutral-900 select-none overflow-hidden relative">
            <div className="w-full px-4 sm:px-8 md:px-12 max-w-5xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase block mb-3">
                        [ 04 / CREDENTIALS ]
                    </span>
                    <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                        VERIFIED VAULT<span className="text-neutral-800">.</span>
                    </h2>
                </div>
                <p className="text-xs font-mono text-neutral-500 max-w-xs leading-relaxed">
                    // SCROLL HORIZONTALLY TO DECRYPT ENGINE CERTIFICATIONS.
                </p>
            </div>

           
            <div 
                ref={targetRef}
                className="w-full overflow-x-auto flex gap-6 py-12 px-4 sm:px-8 md:px-12 scrollbar-none snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: 'none' }}
            >
                {certificates.map((cert) => (
                    <motion.div
                        key={cert.id}
                        onClick={() => setSelectedCert(cert)}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="w-72 sm:w-80 h-48 sm:h-52 relative shrink-0 snap-center bg-neutral-900/40 border border-neutral-900 hover:border-neutral-700/80 p-3 transition-colors duration-300 cursor-pointer group"
                    >
                        {/* Frame Layar Monitor */}
                        <div className="w-full h-full relative overflow-hidden bg-neutral-950 border border-neutral-950">
                            <Image 
                                src={cert.src} 
                                alt={cert.title}
                                placeholder="blur"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0 w-full h-full"
                            />
                          
                            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  
                            <div className="absolute top-2 left-2 font-mono text-[9px] text-neutral-500 group-hover:text-white transition-colors">
                                #{cert.id}
                            </div>
                        </div>

                      
                        <div className="mt-3 flex justify-between items-start font-mono">
                            <div className="flex flex-col truncate pr-2">
                                <span className="text-xs font-bold tracking-tight text-neutral-300 group-hover:text-white truncate">{cert.title}</span>
                                <span className="text-[9px] text-neutral-600 uppercase tracking-wider">{cert.issuer}</span>
                            </div>
                            <span className="text-[9px] text-neutral-500 self-end whitespace-nowrap">[VIEW]</span>
                        </div>
                    </motion.div>
                ))}
            </div>


            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 bg-neutral-950/95 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()} 
                            className="w-full max-w-4xl bg-neutral-950 border border-neutral-900 grid grid-cols-1 md:grid-cols-12 overflow-hidden"
                        >
                            <div className="md:col-span-8 bg-neutral-950 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-neutral-900 relative group">
                                <div className="w-full aspect-4/3 relative">
                                    <Image 
                                        src={selectedCert.src} 
                                        alt={selectedCert.title}
                                        placeholder="blur"
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-4 p-6 flex flex-col justify-between font-mono text-xs gap-8">
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <span className="text-[9px] text-neutral-600 block">// DECRYPTED_NODE</span>
                                        <h3 className="text-base font-bold text-white tracking-tight uppercase font-sans leading-tight">
                                            {selectedCert.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-4 border-t border-neutral-900 pt-4 text-[11px]">
                                        <div className="space-y-0.5">
                                            <span className="text-neutral-600 block">ISSUED_BY:</span>
                                            <span className="text-neutral-300 text-xs font-sans font-semibold">{selectedCert.issuer}</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-neutral-600 block">SYS_SERIAL_NUM:</span>
                                            <span className="text-neutral-400 font-mono tracking-wider">{selectedCert.serial}</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-neutral-600 block">STATUS:</span>
                                            <span className="text-emerald-500 font-bold">// CRYPTOGRAPHICALLY_VERIFIED</span>
                                        </div>
                                    </div>
                                </div>

                          
                                <motion.button
                                    onClick={() => setSelectedCert(null)}
                                    whileHover={{ scale: 1.02, backgroundColor: "#171717" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full text-center py-3 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer uppercase text-[10px] tracking-widest"
                                >
                                    Eject Asset [ X ]
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default CertificatesSection;