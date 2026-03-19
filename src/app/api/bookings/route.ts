import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const bookingSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Valid phone number required"),
    email: z.string().email("Invalid email address"),
    eventType: z.string().min(2, "Event type is required"),
    date: z.string(), // ISO String
    timeSlot: z.string(),
    locationType: z.string(),
    specialRequests: z.string().optional()
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = bookingSchema.parse(body);

        const bookingDate = new Date(data.date);

        // Check availability
        const existingBooking = await prisma.booking.findFirst({
            where: {
                date: bookingDate,
                timeSlot: data.timeSlot,
                status: { not: "CANCELLED" }
            }
        });

        if (existingBooking) {
            return NextResponse.json(
                { error: "This time slot is already booked for the selected date." },
                { status: 400 }
            );
        }

        const booking = await prisma.booking.create({
            data: {
                name: data.name,
                phone: data.phone,
                email: data.email,
                eventType: data.eventType,
                date: bookingDate,
                timeSlot: data.timeSlot,
                locationType: data.locationType,
                specialRequests: data.specialRequests,
            }
        });

        // TODO: Send confirmation email using Resend / Nodemailer

        return NextResponse.json({ success: true, booking });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: (error as any).errors }, { status: 400 });
        } return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const bookings = await prisma.booking.findMany({
            orderBy: { date: "asc" }
        });
        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
    }
}
