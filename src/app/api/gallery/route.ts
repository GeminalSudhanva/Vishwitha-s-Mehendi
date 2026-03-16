import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');

    try {
        const where = category && category !== 'All' ? { category } : undefined;
        const gallery = await prisma.gallery.findMany({
            where,
            orderBy: { createdAt: "desc" }
        });
        return NextResponse.json(gallery);
    } catch (error) {
        return NextResponse.json([]);
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const image = await prisma.gallery.create({
            data: {
                imageUrl: data.imageUrl,
                category: data.category,
                caption: data.caption
            }
        });
        return NextResponse.json(image);
    } catch (error) {
        return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
    }
}
