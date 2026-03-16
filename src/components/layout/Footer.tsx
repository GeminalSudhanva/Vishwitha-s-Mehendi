import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-burgundy-900 text-burgundy-50 py-16">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="font-serif text-3xl text-gold-400 mb-6">Saundarya</h3>
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
                        <li className="flex items-center gap-3"><MapPin size={18} /> 123 Heritage Route, Mumbai</li>
                        <li className="flex items-center gap-3"><Phone size={18} /> +91 98765 43210</li>
                        <li className="flex items-center gap-3"><Mail size={18} /> hello@saundarya.com</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-burgundy-800 text-center text-sm text-burgundy-200">
                <p>&copy; {new Date().getFullYear()} Saundarya Mehndi Art. All rights reserved.</p>
            </div>
        </footer>
    );
}
