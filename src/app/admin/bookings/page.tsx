"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type Booking = {
    id: string;
    name: string;
    eventType: string;
    date: string;
    timeSlot: string;
    status: string;
};

export default function AdminBookings() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadBookings = async () => {
            try {
                const res = await fetch("/api/bookings");
                if (res.ok) {
                    const data = await res.json();
                    setBookings(data);
                }
            } catch (error) {
                console.error("Failed to load bookings:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadBookings();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "PENDING": return "bg-amber-100 text-amber-800";
            case "CONFIRMED": return "bg-emerald-100 text-emerald-800";
            case "COMPLETED": return "bg-indigo-100 text-indigo-800";
            case "CANCELLED": return "bg-rose-100 text-rose-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-serif text-burgundy-900">Manage Bookings</h1>
                <Button size="sm">Add Manual Booking</Button>
            </div>

            <Card>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-burgundy-50 border-b border-burgundy-100">
                                    <th className="p-4 text-sm font-medium text-burgundy-900">Client Name</th>
                                    <th className="p-4 text-sm font-medium text-burgundy-900">Event Type</th>
                                    <th className="p-4 text-sm font-medium text-burgundy-900">Date & Time</th>
                                    <th className="p-4 text-sm font-medium text-burgundy-900">Status</th>
                                    <th className="p-4 text-sm font-medium text-burgundy-900 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-burgundy-50">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-gray-500">Loading bookings...</td>
                                    </tr>
                                ) : bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-medium text-burgundy-900">{booking.name}</td>
                                        <td className="p-4 text-gray-600">{booking.eventType}</td>
                                        <td className="p-4 text-gray-600">{booking.date} • {booking.timeSlot}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <select className="text-sm border border-gray-300 rounded p-1 bg-white" defaultValue={booking.status}>
                                                <option value="PENDING">Pending</option>
                                                <option value="CONFIRMED">Confirmed</option>
                                                <option value="COMPLETED">Completed</option>
                                                <option value="CANCELLED">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
