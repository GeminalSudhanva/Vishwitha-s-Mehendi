import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const testimonials = await prisma.testimonial.findMany({
            orderBy: { createdAt: "desc" }
        });
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json([]);
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const testimonial = await prisma.testimonial.create({
            data: {
                clientName: data.clientName,
                review: data.review,
                rating: parseInt(data.rating),
                eventType: data.eventType
            }
        });
        return NextResponse.json(testimonial);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 });
    }
}
