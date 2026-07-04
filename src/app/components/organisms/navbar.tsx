"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const navItems = [
        { name: "Home", path: "#hero-section" },
        { name: "About", path: "#about-section" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        navItems.forEach((item) => {
            const element = document.querySelector(item.path);
            if (element) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(item.path);
                        }
                    },
                    {
                      
                        rootMargin: "-20% 0px -50% 0px",
                    }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((obs) => obs.disconnect());
        };
    }, []);

    // Varian animasi untuk Overlay Menu Mobile
    const menuVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeIn",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -10 }
    };

    // Fungsi utilitas untuk menangani smooth scroll secara manual
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveSection(path);
        
        const targetElement = document.querySelector(path);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            // Update hash di URL tanpa memicu reload halaman
            window.history.pushState(null, "", path);
        }
    };

    return (
        <header className="w-full px-4 sm:px-8 md:px-12 py-4 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 fixed top-0 z-50 select-none">
            <nav className="container mx-auto flex justify-between items-center md:grid md:grid-cols-3 relative">
                
                {/* 1. Logo Section */}
                <div className="flex items-center justify-start z-50">
                    <Link href="#home" onClick={(e) => handleScroll(e, "#home")}>
                        <motion.h1 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="text-xl sm:text-2xl font-bold text-white tracking-tight cursor-pointer"
                        >
                            Hardiek
                        </motion.h1>
                    </Link>
                </div>

                {/* 2. Desktop Navigation (Menggunakan deteksi state activeSection) */}
                <ul className="hidden md:flex gap-2 justify-center items-center relative">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.path;
                        return (
                            <li key={item.path} className="relative px-3 py-1.5 flex items-center justify-center">
                                <a
                                    href={item.path}
                                    onClick={(e) => handleScroll(e, item.path)}
                                    className={`relative z-10 transition-colors duration-300 text-sm tracking-wide cursor-pointer ${
                                        isActive ? "text-white font-medium" : "text-neutral-400 hover:text-neutral-200"
                                    }`}
                                >
                                    {item.name}
                                </a>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-none z-0"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* 3. Right Section: Desktop CTA Button & Mobile Toggle */}
                <div className="flex items-center justify-end gap-4 z-50">
                    {/* Desktop Button */}
                    <motion.button 
                        whileHover={{ scale: 1.03, backgroundColor: "#1f1f1f" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => {
                            const contactEl = document.querySelector("#contact");
                            if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="hidden md:block px-4 py-2 bg-neutral-900 text-neutral-300 hover:text-white text-sm font-medium rounded-none border border-neutral-800 transition-colors duration-150 cursor-pointer"
                    >
                        Contact
                    </motion.button>

                    {/* Mobile Hamburger Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 md:hidden relative cursor-pointer focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span 
                            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-neutral-200 block transition-transform origin-center"
                        />
                        <motion.span 
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-5 h-0.5 bg-neutral-200 block transition-opacity"
                        />
                        <motion.span 
                            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-neutral-200 block transition-transform origin-center"
                        />
                    </button>
                </div>

                {/* 4. Mobile Overlay Menu Panel */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-13 -left-4 -right-4 bg-neutral-950 border-b border-neutral-900 px-6 py-8 flex flex-col md:hidden z-40 shadow-2xl"
                        >
                            <ul className="flex flex-col gap-5 w-full">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.path;
                                    return (
                                        <motion.li 
                                            key={item.path}
                                            variants={itemVariants}
                                            className="w-full"
                                        >
                                            <a
                                                href={item.path}
                                                onClick={(e) => handleScroll(e, item.path)}
                                                className={`text-lg tracking-wide block w-full py-1 cursor-pointer ${
                                                    isActive ? "text-white font-semibold" : "text-neutral-400"
                                                }`}
                                            >
                                                {item.name}
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                            
                            {/* Mobile CTA inside menu drawer */}
                            <motion.button 
                                variants={itemVariants}
                                onClick={() => {
                                    setIsOpen(false);
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="mt-8 w-full py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-none active:bg-neutral-800"
                            >
                                Contact
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}