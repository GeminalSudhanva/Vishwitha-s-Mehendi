import { Heart, Clock, Leaf, ShieldAlert, Sparkles, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen text-burgundy-900">
            {/* 1. Full-Width Hero Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] bg-[#2A1116] flex flex-col justify-center items-center text-center px-6 overflow-hidden -mt-[88px]">
                {/* Background Image */}
                <img src="/images/about-hero.png" alt="Bridal Mehndi Detail" className="absolute inset-0 w-full h-full object-cover z-0" />

                {/* Simulated Image overlay layout using rich gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#2A1116] z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-10">
                    <div className="w-[600px] h-[600px] border-[2px] border-white rotate-45 transform" />
                </div>

                <div className="relative z-20 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 font-bold tracking-wide">
                        The Artist Behind the Art
                    </h1>
                    <p className="text-base md:text-lg font-serif italic text-white/90">
                        "Every line tells a story of tradition, love and timeless beauty"
                    </p>
                </div>
            </section>

            {/* 2. Bio Section */}
            <section className="py-20 bg-white px-6">
                <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left IMAGE Placeholder with decorative gold border framing */}
                    <div className="relative w-full aspect-[4/5] max-w-md mx-auto flex justify-center items-center">
                        <div className="absolute inset-0 border-2 border-[#B38E50] translate-x-3 translate-y-3 rounded-2xl" />
                        <div className="relative w-full h-full bg-[#E5DFD5] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                            <img src="/images/Vishwitha%20main%20about%20image.jpeg" alt="Vishwitha Lead Artist" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-start text-left">
                        <span className="text-xs uppercase tracking-widest text-[#B38E50] font-semibold mb-3">
                            MEET THE ARTIST
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-900 mb-6 leading-snug">
                            Crafting Legacies in Henna
                        </h2>
                        <div className="space-y-4 text-burgundy-800/80 font-light text-sm md:text-base leading-relaxed">
                            <p>
                                With over eight years of experience in the luxury bridal industry, Tillottama Mehendi's vision was always to elevate traditional Mehndi into a high art experience. What started as a childhood fascination soon evolved into a master craft that has graced hundreds of brides across the globe.
                            </p>
                            <p>
                                We believe that bridal henna is more than just decoration; it is a sacred ritual. Our signature style blends heavy traditional Rajasthani motifs with contemporary negative-space designs, ensuring each bride receives a one-of-a-kind masterpiece.
                            </p>
                        </div>
                        <p className="text-lg font-serif italic text-[#B38E50] mt-8">
                            "Henna is not just art; It is a blessing etched in gold that remains long after the vows are spoken."
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Stats Banner */}
            <section className="py-12 bg-[#642B39] text-white">
                <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
                    <div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold">10+</h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">BRIDES ADORNED</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold">1+</h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">YEARS OF MASTERY</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold">10+</h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">SIGNATURE STYLES</p>
                    </div>
                    <div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold">100%</h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/60 mt-1">NATURAL HENNA</p>
                    </div>
                </div>
            </section>

            {/* 4. Our Core Values */}
            <section className="py-20 bg-[#FAF7F2] text-center px-6">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-burgundy-900 mb-2 font-semibold">Our Core Values</h2>
                    <div className="w-16 h-[1.5px] bg-[#B38E50] mx-auto mb-16" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {/* Value 1 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
                            <div className="bg-[#FAF7F2] p-3 rounded-full mb-4 text-[#B38E50]">
                                <Leaf size={24} />
                            </div>
                            <h3 className="text-base font-semibold text-burgundy-900 mb-2">100% Natural</h3>
                            <p className="text-xs text-burgundy-800/60 font-light leading-relaxed">
                                We hand-mix our own organic henna paste with essential oils for a deep, safe stain.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
                            <div className="bg-[#FAF7F2] p-3 rounded-full mb-4 text-[#B38E50]">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-base font-semibold text-burgundy-900 mb-2">Handcrafted</h3>
                            <p className="text-xs text-burgundy-800/60 font-light leading-relaxed">
                                No stencils. Every design is free-hand drawn to match your personality.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
                            <div className="bg-[#FAF7F2] p-3 rounded-full mb-4 text-[#B38E50]">
                                <Clock size={24} />
                            </div>
                            <h3 className="text-base font-semibold text-burgundy-900 mb-2">On Time Professional</h3>
                            <p className="text-xs text-burgundy-800/60 font-light leading-relaxed">
                                We value your wedding timeline. Punctuality is as important to us as the art itself.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
                            <div className="bg-[#FAF7F2] p-3 rounded-full mb-4 text-[#B38E50]">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-base font-semibold text-burgundy-900 mb-2">Bridal Specialists</h3>
                            <p className="text-xs text-burgundy-800/60 font-light leading-relaxed">
                                Specializing exclusively in luxury bridal applications and intricate story-telling motifs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
