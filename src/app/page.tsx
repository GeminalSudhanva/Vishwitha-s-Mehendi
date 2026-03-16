import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Heart, Crown, Leaf, Star, Quote } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white text-burgundy-900">
      {/* 1. Hero Section */}
      <section className="relative px-6 py-16 md:py-24 bg-[#FAF7F2] overflow-hidden">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start text-left z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-burgundy-900 mb-6 leading-tight">
              Art that adorns your most sacred day
            </h1>
            <p className="text-lg md:text-xl text-burgundy-700/80 mb-10 max-w-md font-light">
              Luxury bridal mehndi, crafted with love and traditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#B38E50] hover:bg-[#A17D43] text-white px-8 rounded-full shadow-lg">
                  Book Now
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-[#B38E50] text-[#B38E50] hover:bg-[#FAF7F2] px-8 rounded-full">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Right IMAGE Placeholder */}
          <div className="relative w-full aspect-[4/3] md:aspect-square flex justify-center items-center">
            <div className="w-full h-full bg-[#E5DFD5] rounded-[40px] shadow-xl relative overflow-hidden flex items-center justify-center border-4 border-white">
              <img src="/images/home-hero.png" alt="Bridal Mehndi Detail" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Banner */}
      <section className="py-8 bg-[#F3EEE6] border-y border-[#EAE3D9]">
        <div className="container mx-auto max-w-5xl grid grid-cols-3 gap-4 items-center text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <Heart className="w-5 h-5 text-[#B38E50] mb-1" />
            <h3 className="font-serif text-lg text-burgundy-900">5+ Brides</h3>
            <p className="text-xs uppercase tracking-wider text-burgundy-600/60">Served With Love</p>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <Crown className="w-5 h-5 text-[#B38E50] mb-1" />
            <h3 className="font-serif text-lg text-burgundy-900">1 Years</h3>
            <p className="text-xs uppercase tracking-wider text-burgundy-600/60">Professional Experience</p>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <Leaf className="w-5 h-5 text-[#B38E50] mb-1" />
            <h3 className="font-serif text-lg text-burgundy-900">Natural Henna</h3>
            <p className="text-xs uppercase tracking-wider text-burgundy-600/60">Chemical-free Stains</p>
          </div>
        </div>
      </section>

      {/* 3. Artist Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
          {/* Left IMAGE Placeholder */}
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto flex justify-center items-center">
            <div className="w-full h-full bg-[#F2EDE7] rounded-[30px] shadow-lg flex items-center justify-center overflow-hidden">
              <img src="/images/Vishwitha%20main%20about%20image.jpeg" alt="Vishwitha Lead Artist" className="w-full h-full object-cover" />
            </div>
            {/* Green dot mockup accent */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-500 shadow-xl flex items-center justify-center animate-pulse">
              <span className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-widest text-[#B38E50] font-semibold mb-3">
              THE ARTIST'S JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-burgundy-900 mb-6 leading-snug">
              Traditional Soul, Modern Vision
            </h2>
            <p className="text-burgundy-800/80 mb-6 leading-relaxed font-light">
              With roots in the ancient traditions of bridal mehndi, Aisha brings a contemporary flare to henna artistry. Every line is a prayer, every pattern a celebration of the love that binds two souls together.
            </p>
            <p className="text-lg font-serif italic text-[#B38E50] mb-8">
              "Mehendi is a result, not just art"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#B38E50]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-burgundy-900">VISHWITHA | LEAD ARTIST</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Services */}
      <section className="py-20 bg-[#FAF7F2] text-center px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy-900 mb-2">Our Signature Services</h2>
          <div className="w-20 h-[1px] bg-[#B38E50] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#B38E50] mb-4">✨</div>
              <h3 className="text-xl font-serif text-burgundy-900 mb-2">Bridal Full</h3>
              <p className="text-sm text-burgundy-700/70 mb-6 font-light">
                Beautiful elbow length patterns including story motifs and hidden names.
              </p>
              <p className="text-lg font-serif text-[#B38E50] mb-6 mt-auto">From $299</p>
              <Button className="w-full bg-burgundy-800 hover:bg-burgundy-900 text-white rounded-xl">Book Now</Button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#B38E50] mb-4">🍂</div>
              <h3 className="text-xl font-serif text-burgundy-900 mb-2">Engagement</h3>
              <p className="text-sm text-burgundy-700/70 mb-6 font-light">
                Elegant intricate hand design focusing on contemporary floral and mandalas.
              </p>
              <p className="text-lg font-serif text-[#B38E50] mb-6 mt-auto">From $149</p>
              <Button className="w-full bg-burgundy-800 hover:bg-burgundy-900 text-white rounded-xl">Book Now</Button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-start text-left relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="text-3xl text-[#B38E50] mb-4">🌸</div>
              <h3 className="text-xl font-serif text-burgundy-900 mb-2">Festive</h3>
              <p className="text-sm text-burgundy-700/70 mb-6 font-light">
                Quick and beautiful henna for Eid, Diwali, or Karva Chauth celebrations.
              </p>
              <p className="text-lg font-serif text-[#B38E50] mb-6 mt-auto">From $49</p>
              <Button className="w-full bg-burgundy-800 hover:bg-burgundy-900 text-white rounded-xl">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Glimpse of Our Art */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12 border-b border-[#F0EBE3] pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-burgundy-900">A Glimpse of Our Art</h2>
              <p className="text-sm text-burgundy-700/60 font-light mt-1">Curated moments of henna excellence</p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="border-[#B38E50] text-[#B38E50] hover:bg-[#FAF7F2] rounded-full px-6">
                View Full Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-[#F4EDE6] rounded-xl flex items-center justify-center shadow-sm relative overflow-hidden">
                <img src={`/images/Portfolio${item}.jpeg`} alt={`Portfolio Design ${item}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. Footer CTA */}
      <section className="relative py-24 bg-burgundy-900 text-center px-6 overflow-hidden">
        {/* Background Decorative Pattern Overlay simulation */}
        <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] border-[2px] border-white rotate-45 transform" />
        </div>

        <div className="relative z-10 container mx-auto max-w-2xl">
          <h2 className="text-xl md:text-4xl font-serif text-white mb-4 leading-tight">
            Your wedding day deserves the finest mehndi
          </h2>
          <p className="text-ivory/80 mb-10 font-light text-sm md:text-base">
            Secure your date with Saundarya and experience the art of bridal unique.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-[#B38E50] hover:bg-[#A17D43] text-white px-8 rounded-full shadow-lg">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
