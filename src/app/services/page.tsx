"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Clock, Plus, Minus, MapPin, Zap, Sparkles } from "lucide-react";

export default function ServicesPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const services = [
        {
            id: 1,
            name: "Bridal Full",
            description: "Elaborate traditional patterns covering hands to elbows and feet to knees. Includes figure work and storytelling motifs.",
            price: "₹15,000 onwards",
            duration: "6-8 hours",
        },
        {
            id: 2,
            name: "Bridal Half",
            description: "Elegant elbow-length bridal designs. Focuses on detailed palm patterns and delicate wrist finishings.",
            price: "₹8,000 onwards",
            duration: "4-5 hours",
        },
        {
            id: 3,
            name: "Engagement",
            description: "Symbolic patterns for your special ring ceremony. Delicate designs highlighting the ring finger with modern grace.",
            price: "₹5,000 onwards",
            duration: "3-4 hours",
        },
        {
            id: 4,
            name: "Festive",
            description: "Quick and beautiful designs for Karva Chauth, Diwali, or Eid. Traditional mandalas or modern chains.",
            price: "₹2,000 onwards",
            duration: "1-2 hours",
        },
        {
            id: 5,
            name: "Arabic Modern",
            description: "Contemporary bold floral strokes with negative space. Perfect for bridesmaids or modern aesthetics.",
            price: "₹3,000 onwards",
            duration: "2 hours",
        },
        {
            id: 6,
            name: "Kids",
            description: "Playful and simple motifs for children. Fast-drying, safe organic paste used for tiny hands.",
            price: "₹1,000 onwards",
            duration: "30 mins",
        }
    ];

    const faqs = [
        { question: "How long does the stain last?", answer: "The stain generally lasts between 1-2 weeks depending on your skin type and how well you follow the aftercare instructions." },
        { question: "Do you use organic mehndi?", answer: "Yes, we use 100% triple-filtered organic Rajasthani henna mixed only with water, sugar, and pure essential oils like eucalyptus or lavender." },
        { question: "When should I book for a wedding?", answer: "We recommend booking bridal mehndi at least 3 to 6 months in advance, as dates during the peak wedding season get filled quickly." },
        { question: "Do you travel outside the city?", answer: "Yes, we travel for destination weddings. Travel and accommodation charges are added based on the location." },
        { question: "What are the aftercare instructions?", answer: "Keep the paste on for at least 6-8 hours. Seal it with lemon-sugar water. Do not wash with water for the first 24 hours; scrape it off instead and apply coconut oil." }
    ];

    return (
        <div className="bg-white min-h-screen text-burgundy-900">
            {/* 1. Header Section */}
            <div className="container mx-auto px-6 pt-12 pb-12 text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-2 font-semibold">
                    Our Services
                </h1>
                <p className="text-base font-serif italic text-burgundy-700/80">
                    Handcrafted mehndi for every sacred occasion
                </p>
                <div className="w-16 h-[1.5px] bg-[#B38E50] mx-auto mt-3" />
            </div>

            {/* 2. Services Grid */}
            <div className="container mx-auto px-6 pb-20 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((svc) => (
                    <div key={svc.id} className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col sm:flex-row border border-[#F0EBE3] hover:shadow-md transition-shadow">
                        {/* Left Side: Empty Image placeholder with standard aspect sizing */}
                        <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto bg-[#E5DFD5] flex items-center justify-center font-serif text-burgundy-700/30 text-sm">
                            Blank Image
                        </div>

                        {/* Right Side: Content description */}
                        <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between relative">
                            {/* Duration Badge */}
                            <div className="absolute top-6 right-6 flex items-center gap-1 bg-[#F5F0EA] px-2.5 py-1 rounded-full text-[11px] font-medium text-burgundy-900">
                                <Clock size={12} className="text-[#B38E50] fill-current opacity-30" />
                                {svc.duration}
                            </div>

                            <div>
                                <h3 className="text-xl font-serif font-semibold text-burgundy-900 mb-3 pr-20">
                                    {svc.name}
                                </h3>
                                <p className="text-sm text-burgundy-800/70 font-light leading-relaxed mb-6">
                                    {svc.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#F0EBE3]">
                                <span className="text-base font-serif font-bold text-burgundy-900">
                                    {svc.price} <span className="text-xs font-normal text-burgundy-700/50">onwards</span>
                                </span>
                                <Link href={`/book?service=${encodeURIComponent(svc.name)}`}>
                                    <Button size="sm" className="bg-burgundy-800 hover:bg-burgundy-900 text-white text-xs rounded-xl px-4">
                                        Book This Service
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Service Add-ons */}
            <section className="bg-[#F5F0EA] py-14 text-center px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy-900 mb-12">
                        Service Add-ons
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                            <div className="bg-[#FAF7F2] p-3 rounded-full">
                                <MapPin className="w-5 h-5 text-burgundy-800" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-sm text-burgundy-900 leading-none">Home Visit</h4>
                                <p className="text-xs text-burgundy-700/60 mt-1">Luxury at your doorstep</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                            <div className="bg-[#FAF7F2] p-3 rounded-full">
                                <Zap className="w-5 h-5 text-burgundy-800" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-sm text-burgundy-900 leading-none">Express Service</h4>
                                <p className="text-xs text-burgundy-700/60 mt-1">Prioritized booking & fast paste</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-sm">
                            <div className="bg-[#FAF7F2] p-3 rounded-full">
                                <Sparkles className="w-5 h-5 text-burgundy-800" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-sm text-burgundy-900 leading-none">Glitter Accents</h4>
                                <p className="text-xs text-burgundy-700/60 mt-1">Sparkling finish for events</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Frequently Asked Questions (FAQ) */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-burgundy-900 mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col border-t border-[#F0EBE3]">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border-b border-[#F0EBE3]">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex justify-between items-center py-5 text-left text-sm md:text-base font-medium text-burgundy-900 hover:text-burgundy-800"
                                >
                                    <span>{faq.question}</span>
                                    {openFaq === idx ? <Minus size={18} className="text-[#B38E50]" /> : <Plus size={18} className="text-[#B38E50]" />}
                                </button>
                                {openFaq === idx && (
                                    <p className="pb-5 text-sm font-light leading-relaxed text-burgundy-800/70">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
