import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const services = await prisma.service.findMany({
            orderBy: { category: "asc" }
        });
        return NextResponse.json(services);
    } catch (error) {
        // Fallback for Next.js build time static generation when DB is not available
        return NextResponse.json([]);
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const service = await prisma.service.create({
            data: {
                name: data.name,
                description: data.description,
                priceFrom: parseInt(data.priceFrom),
                durationMinutes: parseInt(data.durationMinutes),
                category: data.category
            }
        });
        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
    }
}
