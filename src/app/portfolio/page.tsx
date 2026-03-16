"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

export default function PortfolioPage() {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const images = [
        { id: 1, src: "/images/Portfolio1.jpeg", caption: "Bridal Henna Artist Design 1" },
        { id: 2, src: "/images/Portfolio2.jpeg", caption: "Bridal Henna Artist Design 2" },
        { id: 3, src: "/images/Portfolio3.jpeg", caption: "Bridal Henna Artist Design 3" },
        { id: 4, src: "/images/Portfolio4.jpeg", caption: "Bridal Henna Artist Design 4" },
        { id: 5, src: "/images/Portfolio5.jpeg", caption: "Bridal Henna Artist Design 5" },
        { id: 6, src: "/images/Portfolio6.jpeg", caption: "Bridal Henna Artist Design 6" },
    ];

    return (
        <div className="bg-white min-h-screen text-burgundy-900">
            {/* Header / Title */}
            <div className="container mx-auto px-6 pt-12 pb-10 text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-2 tracking-wide font-semibold">
                    Our Portfolio
                </h1>
                <p className="text-base font-serif italic text-burgundy-700/80">
                    Every design tells a love story
                </p>
                <div className="w-16 h-[1.5px] bg-[#B38E50] mx-auto mt-3" />
            </div>

            {/* Grid display items */}
            <div className="container mx-auto px-6 pb-20 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="group relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[24px] bg-[#E5DFD5] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                            onClick={() => setLightboxImage(img.src)}
                        >
                            <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-xs font-serif italic tracking-wide">View Design</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <section className="mt-20 bg-[#F5F0EA] p-10 md:p-14 rounded-[32px] text-center max-w-5xl mx-auto shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-serif text-burgundy-900 mb-8 font-semibold">
                        Love what you see? Let's create yours
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/book">
                            <Button size="lg" className="bg-[#B38E50] hover:bg-[#A17D43] text-white px-8 rounded-full shadow-md w-full sm:w-auto">
                                Book a Consultation
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="border-burgundy-900 text-burgundy-900 hover:bg-[#FAF7F2] px-8 rounded-full w-full sm:w-auto">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>

            {/* Lightbox Layout */}
            {lightboxImage && (
                <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
                    <button onClick={() => setLightboxImage(null)} className="absolute top-6 right-6 text-white hover:text-[#B38E50] z-10">
                        <X size={36} />
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
                        <img src={lightboxImage} alt="Fullscreen View" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
                    </div>
                </div>
            )}
        </div>
    );
}
