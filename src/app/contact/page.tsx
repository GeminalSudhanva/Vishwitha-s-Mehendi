"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Github } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

const contactSchema = z.object({
    name: z.string().min(2, "Name required"),
    email: z.string().email("Valid email required"),
    phone: z.string().min(10, "Valid phone number required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        toast.success("Message sent! We'll reply shortly.");
        reset();
    };

    return (
        <div className="bg-[#FAF7F2] min-h-screen text-burgundy-900">
            {/* 1. Header Section */}
            <div className="container mx-auto px-6 pt-12 pb-12 text-center max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 mb-2 tracking-wide">
                    Connect With Us
                </h1>
                <p className="text-sm font-serif italic text-burgundy-700/80 max-w-xl mx-auto">
                    Elevate your bridal journey with bespoke mehndi artistry. Share your details below and let's create something timeless together.
                </p>
                <div className="w-16 h-[1.5px] bg-[#B38E50] mx-auto mt-4" />
            </div>

            {/* 2. Main Grid: Form + Info */}
            <div className="container mx-auto px-6 pb-20 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* LEFT COLUMN: Send a Message Form */}
                <div className="bg-white p-6 md:p-8 rounded-[28px] border border-[#F0EBE3] shadow-sm">
                    <h2 className="text-xl font-serif font-semibold text-burgundy-900 mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-burgundy-900 mb-1.5">Full Name</label>
                                <input {...register("name")} className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="Aria Sharma" />
                                {errors.name && <span className="text-rose-500 text-xs mt-1">{errors.name.message}</span>}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-burgundy-900 mb-1.5">Email Address</label>
                                <input {...register("email")} type="email" className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="aria@example.com" />
                                {errors.email && <span className="text-rose-500 text-xs mt-1">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-burgundy-900 mb-1.5">Phone Number</label>
                            <input {...register("phone")} className="w-full p-2.5 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="+91 98765 43210" />
                            {errors.phone && <span className="text-rose-500 text-xs mt-1">{errors.phone.message}</span>}
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-burgundy-900 mb-1.5">Your Vision / Message</label>
                            <textarea {...register("message")} rows={5} className="w-full p-3 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="Tell us about your event date and desired mehndi style..."></textarea>
                            {errors.message && <span className="text-rose-500 text-xs mt-1">{errors.message.message}</span>}
                        </div>

                        <div className="pt-2">
                            <Button type="submit" className="w-full bg-[#B38E50] hover:bg-[#A17D43] text-white rounded-xl py-6 flex items-center justify-center gap-2 font-semibold shadow-md text-sm">
                                Send Message ➔
                            </Button>
                        </div>
                    </form>
                </div>

                {/* RIGHT COLUMN: Contact Information */}
                <div className="space-y-8 pt-4 md:pt-10">
                    {/* Item 1: Studio */}
                    <div className="flex gap-4">
                        <div className="bg-[#EAE1D7] p-3 rounded-full h-fit text-burgundy-900">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-burgundy-900">Our Studio</h4>
                            <p className="text-xs text-burgundy-800/70 mt-1 leading-relaxed">
                                12 Luxury Lane, Art District<br /> South Extension II, New Delhi, 110049
                            </p>
                        </div>
                    </div>

                    {/* Item 2: Phone */}
                    <div className="flex gap-4">
                        <div className="bg-[#EAE1D7] p-3 rounded-full h-fit text-burgundy-900">
                            <Phone size={18} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-burgundy-900">Phone & Support</h4>
                            <p className="text-xs text-burgundy-800/70 mt-1 leading-relaxed">
                                +91 11 4000 5000<br /> +91 98765 43210
                            </p>
                        </div>
                    </div>

                    {/* Item 3: Email */}
                    <div className="flex gap-4">
                        <div className="bg-[#EAE1D7] p-3 rounded-full h-fit text-burgundy-900">
                            <Mail size={18} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-burgundy-900">Email Us</h4>
                            <p className="text-xs text-burgundy-800/70 mt-1 leading-relaxed">
                                hello@saundarya.luxury<br /> bookings@saundarya.luxury
                            </p>
                        </div>
                    </div>

                    {/* Item 4: Hours */}
                    <div className="flex gap-4">
                        <div className="bg-[#EAE1D7] p-3 rounded-full h-fit text-burgundy-900">
                            <Clock size={18} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-burgundy-900">Studio Hours</h4>
                            <p className="text-xs text-burgundy-800/70 mt-1 leading-relaxed">
                                Mon - Sat: 10:00 AM - 7:00 PM<br /> Sunday: By Appointment Only
                            </p>
                        </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="pt-4">
                        <button className="w-full bg-[#1AC55A] hover:bg-[#15A84A] text-white rounded-full py-3.5 flex items-center justify-center gap-2 font-semibold shadow-md text-sm">
                            <div className="bg-white/20 p-1 rounded-full"><Phone size={14} className="fill-current text-white" /></div> Chat on WhatsApp
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 pt-2">
                        <Link href="#" className="text-[#B38E50] hover:opacity-80"><Instagram size={20} /></Link>
                        <Link href="#" className="text-[#B38E50] hover:opacity-80"><Facebook size={20} /></Link>
                        <Link href="#" className="text-[#B38E50] hover:opacity-80"><Github size={20} /></Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
