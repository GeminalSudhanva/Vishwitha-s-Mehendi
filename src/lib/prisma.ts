import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// Lazy singleton — PrismaClient reads connection from prisma.config.ts at runtime
// Using a Proxy so the client is only instantiated on first DB access (not at build time)
export const prisma: PrismaClient = new Proxy({} as PrismaClient, {
    get(_target, prop) {
        if (!globalForPrisma.prisma) {
            globalForPrisma.prisma = new PrismaClient()
        }
        return (globalForPrisma.prisma as any)[prop]
    }
})
