"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-effect py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="text-3xl font-serif text-burgundy-900 font-bold tracking-wider">
                    Saundarya
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-burgundy-800 hover:text-gold-500 transition-colors uppercase text-sm tracking-widest font-medium">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/book" className="bg-[#B38E50] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#A17D43] transition-colors shadow-sm">
                        Book Appointment
                    </Link>
                </nav>

                {/* Mobile Nav Toggle */}
                <button className="md:hidden text-burgundy-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-ivory shadow-lg border-t border-burgundy-100 flex flex-col items-center py-6 gap-6 md:hidden">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-burgundy-900 text-lg uppercase tracking-widest">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#B38E50] text-white px-8 py-3 rounded-full font-medium w-11/12 text-center shadow-sm">
                        Book Appointment
                    </Link>
                </div>
            )}
        </header>
    );
}
