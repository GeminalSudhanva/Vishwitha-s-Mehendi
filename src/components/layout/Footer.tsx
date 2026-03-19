import Link from "next/link";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-burgundy-900 text-burgundy-50 py-16">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <Image 
                                src="/images/Logo.png" 
                                alt="Tillottama Mehendi's" 
                                fill 
                                className="object-contain" 
                            />
                        </div>
                        <h3 className="font-serif text-xl text-gold-400">Tillottama Mehendi's</h3>
                    </div>
                    <p className="text-burgundy-100/80 max-w-sm mb-6">
                        Art that adorns your most sacred day. Specializing in premium, handcrafted organic bridal mehndi designs with years of expertise.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gold-400 transition"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-gold-400 transition"><Facebook size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-serif text-xl tracking-wider mb-6 text-gold-400">Quick Links</h4>
                    <ul className="space-y-4 text-burgundy-100/80">
                        <li><Link href="/portfolio" className="hover:text-gold-400">Portfolio</Link></li>
                        <li><Link href="/services" className="hover:text-gold-400">Services & Pricing</Link></li>
                        <li><Link href="/about" className="hover:text-gold-400">About the Artist</Link></li>
                        <li><Link href="/book" className="hover:text-gold-400">Book Appointment</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-xl tracking-wider mb-6 text-gold-400">Contact</h4>
                    <ul className="space-y-4 text-burgundy-100/80">
                        <li className="flex items-center gap-3"><Phone size={18} /> +91 9902404384</li>
                        <li className="flex items-center gap-3"><Mail size={18} /> vishwita.shet888@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-burgundy-800 text-center text-sm text-burgundy-200">
                <p>&copy; {new Date().getFullYear()} Tillottama Mehendi's. All rights reserved.</p>
            </div>
        </footer>
    );
}
