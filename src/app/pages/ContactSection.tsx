"use client"

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'

const ContactSection: React.FC = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<'IDLE' | 'TRANSMITTING' | 'SUCCESS'>('IDLE')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('TRANSMITTING')

        setTimeout(() => {
            setStatus('SUCCESS')
            setTimeout(() => {
                setForm({ name: '', email: '', message: '' })
                setStatus('IDLE')
            }, 3000)
        }, 2000)
    }

    return (
        <section id="contact" className="w-full bg-neutral-950 text-white py-32 px-4 sm:px-8 md:px-12 border-b border-neutral-900 overflow-hidden relative">
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* SISI KIRI: Ajakan & Akses Signal Jalur Cepat */}
                <div className="md:col-span-5 flex flex-col justify-between gap-12">
                    <div className="space-y-4">
                        <span className="text-[10px] text-neutral-600 font-mono tracking-[0.2em] uppercase block">
                            [ 05 / COMMUNICATIONS ]
                        </span>
                        <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">
                            ESTABLISH<br />
                            CONNECTION<span className="text-neutral-800">.</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm font-sans pt-2">
                            Punya proyek sistem, arsitektur aplikasi mobile, atau ingin mendiskusikan kolaborasi rekayasa perangkat lunak? Kirimkan sinyal enkripsi langsung ke dasbor saya.
                        </p>
                    </div>

                    <div className="space-y-4 font-mono text-xs text-neutral-500 border-t border-neutral-900 pt-6">
                        <div className="space-y-1">
                            <span className="text-[10px] text-neutral-700">// NETWORK_NODES</span>
                            <div className="flex flex-col gap-1.5 pt-1">
                                <a href="mailto:your-email@student.telkomuniversity.ac.id" className="hover:text-white transition-colors flex items-center gap-2">
                                    <span className="text-[9px] text-neutral-700">EML.</span> hardiektatendra82@gmail.com
                                </a>
                                <a href="https://github.com/hardiext" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                                    <span className="text-[9px] text-neutral-700">GHB.</span> github.com/hardiext
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/hardiek-tatendra1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="text-[9px] text-neutral-700">LKD.</span>
                                    linkedin.com/in/hardiek-tatendra1
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="md:col-span-7 bg-neutral-900/10 border border-neutral-900 p-6 sm:p-8 relative">
                    <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-neutral-700 uppercase tracking-widest hidden sm:block">
                        // SECURE_GATEWAY_V1.9
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                        <div className="space-y-2">
                            <label className="text-neutral-500 uppercase tracking-wider block">// SENDER_IDENTITY</label>
                            <input
                                type="text"
                                required
                                placeholder="Nama lengkap atau entitas institusi..."
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                disabled={status !== 'IDLE'}
                                className="w-full bg-neutral-950 border border-neutral-900 focus:border-neutral-700 text-white px-4 py-3 outline-none transition-colors font-sans text-sm rounded-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-neutral-500 uppercase tracking-wider block">// RETURN_PATH_ADDRESS</label>
                            <input
                                type="email"
                                required
                                placeholder="alamat_email@domain.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                disabled={status !== 'IDLE'}
                                className="w-full bg-neutral-950 border border-neutral-900 focus:border-neutral-700 text-white px-4 py-3 outline-none transition-colors tracking-wide rounded-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-neutral-500 uppercase tracking-wider block">// ENCRYPTED_PAYLOAD_MESSAGE</label>
                            <textarea
                                rows={4}
                                required
                                placeholder="Deskripsikan intensi enkripsi pesan atau tawaran kolaborasi secara mendetail di sini..."
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                disabled={status !== 'IDLE'}
                                className="w-full bg-neutral-950 border border-neutral-900 focus:border-neutral-700 text-white px-4 py-3 outline-none transition-colors font-sans text-sm resize-none rounded-none leading-relaxed"
                            />
                        </div>

                        {/* Tombol Eksekusi Pengiriman */}
                        <motion.button
                            type="submit"
                            disabled={status !== 'IDLE'}
                            whileHover={status === 'IDLE' ? { scale: 1.01, backgroundColor: '#ffffff', color: '#000000' } : {}}
                            whileTap={status === 'IDLE' ? { scale: 0.99 } : {}}
                            className={`w-full py-4 border font-bold text-[11px] tracking-widest uppercase transition-colors duration-300 cursor-pointer ${status === 'SUCCESS'
                                    ? 'bg-emerald-950/20 border-emerald-500 text-emerald-500'
                                    : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                                }`}
                        >
                            {status === 'IDLE' && "Execute Data Transmission [ Enter ]"}
                            {status === 'TRANSMITTING' && "Broadcasting Signal to Mainframe..."}
                            {status === 'SUCCESS' && "// SIGNAL_RECEIVED_SUCCESSFULLY"}
                        </motion.button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default ContactSection;