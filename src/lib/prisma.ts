import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient {
    if (!process.env.DATABASE_URL) {
        throw new Error(
            "DATABASE_URL environment variable is not set. " +
            "Add it to your Vercel project settings under Environment Variables."
        )
    }
    return globalForPrisma.prisma ?? new PrismaClient()
}

// Lazy singleton — only instantiated on first access (at request time, not build time)
export const prisma: PrismaClient = new Proxy({} as PrismaClient, {
    get(_target, prop) {
        const client = getPrismaClient()
        if (process.env.NODE_ENV !== "production") {
            globalForPrisma.prisma = client
        }
        return (client as any)[prop]
    }
})
