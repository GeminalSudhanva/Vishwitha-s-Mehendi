import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Users, Calendar, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
    let dashboardStats = [
        { name: "Total Bookings", value: "0", icon: Calendar, color: "text-amber-600", bg: "bg-amber-100" },
        { name: "Pending Requests", value: "0", icon: Users, color: "text-rose-600", bg: "bg-rose-100" },
        { name: "Gallery Images", value: "0", icon: ImageIcon, color: "text-emerald-600", bg: "bg-emerald-100" },
        { name: "Active Services", value: "0", icon: Sparkles, color: "text-indigo-600", bg: "bg-indigo-100" },
    ];
    let recentBookings: any[] = [];

    try {
        const [totalBookings, pendingRequests, totalImages, activeServices, bookings] = await Promise.all([
            prisma.booking.count(),
            prisma.booking.count({ where: { status: { equals: "PENDING", mode: "insensitive" } } }),
            prisma.gallery.count(),
            prisma.service.count(),
            prisma.booking.findMany({ take: 5, orderBy: { createdAt: "desc" } })
        ]);

        dashboardStats = [
            { name: "Total Bookings", value: totalBookings.toString(), icon: Calendar, color: "text-amber-600", bg: "bg-amber-100" },
            { name: "Pending Requests", value: pendingRequests.toString(), icon: Users, color: "text-rose-600", bg: "bg-rose-100" },
            { name: "Gallery Images", value: totalImages.toString(), icon: ImageIcon, color: "text-emerald-600", bg: "bg-emerald-100" },
            { name: "Active Services", value: activeServices.toString(), icon: Sparkles, color: "text-indigo-600", bg: "bg-indigo-100" },
        ];
        recentBookings = bookings;
    } catch (e) {
        console.error("Dashboard data fetch error:", e);
    }

    return (
        <div>
            <h1 className="text-3xl font-serif text-burgundy-900 mb-8 font-semibold">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {dashboardStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.name} className="border border-burgundy-100 rounded-2xl shadow-sm">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className={`p-4 rounded-xl ${stat.bg}`}>
                                    <Icon className={stat.color} size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 tracking-wider uppercase">{stat.name}</p>
                                    <h3 className="text-2xl font-bold text-burgundy-900">{stat.value}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Lower Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Bookings column */}
                <div className="lg:col-span-2">
                    <Card className="border border-burgundy-100 rounded-2xl shadow-sm">
                        <CardHeader className="border-b border-burgundy-50">
                            <h3 className="text-lg font-serif font-semibold text-burgundy-900">Recent Bookings</h3>
                        </CardHeader>
                        <CardContent className="p-0">
                            {recentBookings.length === 0 ? (
                                <div className="p-8 text-center text-sm text-gray-400 font-light">
                                    No bookings found in database yet.
                                </div>
                            ) : (
                                <div className="divide-y divide-burgundy-50">
                                    {recentBookings.map((b: any) => (
                                        <div key={b.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                            <div>
                                                <p className="font-semibold text-burgundy-900 text-sm">{b.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{b.eventType} • {new Date(b.date).toLocaleDateString()}</p>
                                            </div>
                                            <span className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full ${b.status === "PENDING" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                                                }`}>
                                                {b.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="p-4 border-t border-burgundy-50">
                                <Link href="/admin/bookings" className="text-xs text-gold-600 font-medium hover:text-burgundy-900">View All Bookings &rarr;</Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions Column */}
                <div>
                    <Card className="border border-burgundy-100 rounded-2xl shadow-sm h-full">
                        <CardHeader className="border-b border-burgundy-50">
                            <h3 className="text-lg font-serif font-semibold text-burgundy-900">Quick Actions</h3>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                            <Link href="/admin/bookings" className="w-full text-left p-4 rounded-xl border border-burgundy-100 hover:border-[#B38E50] hover:bg-burgundy-50 transition-all flex items-center gap-4 group">
                                <div className="p-2 bg-burgundy-50 rounded text-burgundy-900 group-hover:bg-[#FAF7F2] transition-colors">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-burgundy-900 text-sm leading-tight">Manage Bookings</p>
                                    <p className="text-xs text-gray-400 font-light mt-0.5">Approve and update customer dates.</p>
                                </div>
                            </Link>
                            <Link href="/admin/gallery" className="w-full text-left p-4 rounded-xl border border-burgundy-100 hover:border-[#B38E50] hover:bg-burgundy-50 transition-all flex items-center gap-4 group">
                                <div className="p-2 bg-burgundy-50 rounded text-burgundy-900 group-hover:bg-[#FAF7F2] transition-colors">
                                    <ImageIcon size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-burgundy-900 text-sm leading-tight">Upload to Portfolio</p>
                                    <p className="text-xs text-gray-400 font-light mt-0.5">Add new designs photos to display.</p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
