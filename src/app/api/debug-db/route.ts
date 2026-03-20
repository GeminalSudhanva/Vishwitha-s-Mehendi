import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const count = await prisma.booking.count();
        const bookings = await prisma.booking.findMany({ take: 5, orderBy: { createdAt: "desc" } });
        
        return NextResponse.json({
            status: "connected",
            databaseUrl: process.env.DATABASE_URL ? "SET (hidden)" : "NOT SET",
            totalBookings: count,
            recentBookings: bookings
        });
    } catch (error: any) {
        return NextResponse.json({
            status: "error",
            message: error.message || "Unknown error",
            stack: error.stack
        }, { status: 500 });
    }
}
