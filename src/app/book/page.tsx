"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";
import { Clock, MapPin, Home, Calendar } from "lucide-react";

const bookingSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Valid phone number required"),
    email: z.string().email("Invalid email address"),
    eventType: z.string().min(1, "Event type is required"),
    date: z.string().min(1, "Preferred date is required"),
    timeSlot: z.string().min(1, "Time slot is required"),
    locationType: z.string().min(1, "Location is required"),
    specialRequests: z.string().optional()
});

export default function BookingPage({ searchParams }: { searchParams: { service?: string } }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            eventType: searchParams.service || "Bridal Mehndi (Full)",
            timeSlot: "Afternoon",
            locationType: "Studio"
        }
    });

    const selectedTime = watch("timeSlot");
    const selectedLocation = watch("locationType");

    const onSubmit = async (data: z.infer<typeof bookingSchema>) => {
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success("Booking Request Sent! We will contact you to confirm.", { duration: 5000 });
            reset();
        } catch (error) {
            toast.error("Failed to submit request.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen text-burgundy-900 flex flex-col items-center">
            {/* 1. Header Section */}
            <div className="container mx-auto px-6 pt-12 pb-10 text-center max-w-4xl border-b border-[#F0EBE3] mb-10">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 mb-2 tracking-wide">
                    Reserve Your Date
                </h1>
                <p className="text-sm font-serif italic text-burgundy-700/80 max-w-xl mx-auto">
                    Secure your spot for the most beautiful day of your life. Our artisans specialize in luxury bridal henna that tells your story.
                </p>
                <div className="w-16 h-[1.5px] bg-[#B38E50] mx-auto mt-4" />
            </div>

            {/* 2. Form Container Centered */}
            <div className="w-full max-w-xl px-6 pb-20">
                <div className="bg-white p-6 md:p-10 rounded-[28px] border border-[#F0EBE3] shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">FULL NAME</label>
                                <input {...register("name")} className="w-full p-3 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="Aria Sharma" />
                                {errors.name && <span className="text-rose-500 text-xs mt-1">{errors.name.message}</span>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">PHONE NUMBER</label>
                                <input {...register("phone")} className="w-full p-3 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="+1 (555) 000-0000" />
                                {errors.phone && <span className="text-rose-500 text-xs mt-1">{errors.phone.message}</span>}
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">EMAIL ADDRESS</label>
                                <input {...register("email")} type="email" className="w-full p-3 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="aria@example.com" />
                                {errors.email && <span className="text-rose-500 text-xs mt-1">{errors.email.message}</span>}
                            </div>

                            {/* Event Type */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">EVENT TYPE</label>
                                <select {...register("eventType")} className="w-full p-3 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm bg-white cursor-pointer">
                                    <option value="Bridal Mehndi (Full)">Bridal Mehndi (Full)</option>
                                    <option value="Bridal Mehndi (Half)">Bridal Mehndi (Half)</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Festive">Festive</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Preferred Date */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">PREFERRED DATE</label>
                                <input {...register("date")} type="date" className="w-full p-3 bg-[#FAF7F2] rounded-xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm text-burgundy-700" />
                                {errors.date && <span className="text-rose-500 text-xs mt-1">{errors.date.message}</span>}
                            </div>

                            {/* Time Slot Custom buttons grid */}
                            <div>
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">TIME SLOT</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {["Morning", "Afternoon", "Evening"].map((slot) => (
                                        <button
                                            key={slot}
                                            type="button"
                                            onClick={() => setValue("timeSlot", slot)}
                                            className={`p-2 rounded-full text-xs font-medium transition-all ${selectedTime === slot
                                                    ? "bg-[#5C2A33] text-white shadow-sm"
                                                    : "bg-[#FAF7F2] text-burgundy-900 border border-[#FAF7F2] hover:bg-[#F0EBE3]"
                                                }`}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Service Location Toggle Custom buttons */}
                            <div className="md:col-span-2">
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">SERVICE LOCATION</label>
                                <div className="grid grid-cols-2 gap-3 bg-[#FAF7F2] p-1.5 rounded-full">
                                    <button
                                        type="button"
                                        onClick={() => setValue("locationType", "Studio")}
                                        className={`p-2.5 rounded-full text-xs font-medium transition-all flex justify-center items-center gap-1.5 ${selectedLocation === "Studio"
                                                ? "bg-[#5C2A33] text-white shadow-md"
                                                : "text-burgundy-900/60"
                                            }`}
                                    >
                                        <MapPin size={14} className={selectedLocation === "Studio" ? "text-white" : "opacity-40"} /> Studio
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setValue("locationType", "At Home")}
                                        className={`p-2.5 rounded-full text-xs font-medium transition-all flex justify-center items-center gap-1.5 ${selectedLocation === "At Home"
                                                ? "bg-[#5C2A33] text-white shadow-md"
                                                : "text-burgundy-900/60"
                                            }`}
                                    >
                                        <Home size={14} className={selectedLocation === "At Home" ? "text-white" : "opacity-40"} /> At Home
                                    </button>
                                </div>
                            </div>

                            {/* Special Requests */}
                            <div className="md:col-span-2">
                                <label className="block text-xs uppercase tracking-wider font-semibold text-burgundy-900 mb-2">SPECIAL REQUESTS / THEMES</label>
                                <textarea {...register("specialRequests")} rows={4} className="w-full p-4 bg-[#FAF7F2] rounded-2xl border-0 focus:ring-1 focus:ring-[#B38E50] text-sm" placeholder="Mention any specific patterns, architectural themes, or portraits you'd like included..."></textarea>
                            </div>
                        </div>

                        {/* Submit Action */}
                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full bg-[#B38E50] hover:bg-[#A17D43] text-white rounded-xl py-6 flex items-center justify-center gap-2 font-semibold shadow-md" isLoading={isSubmitting}>
                                Confirm My Booking <Calendar size={16} />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
