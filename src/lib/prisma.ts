import { PrismaClient } from "@prisma/client"

if (!process.env.DATABASE_URL) {
    throw new Error(
        "DATABASE_URL environment variable is not set. " +
        "Add it to your Vercel project settings under Environment Variables."
    )
}

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
