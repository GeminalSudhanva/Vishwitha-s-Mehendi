const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Manually parse .env to avoid 'dotenv' dependency
const envPath = path.join(__dirname, '.env');
try {
    if (fs.existsSync(envPath)) {
        const envText = fs.readFileSync(envPath, 'utf8');
        const lines = envText.split('\n');
        for (const line of lines) {
            if (line.trim().startsWith('DATABASE_URL=')) {
                let value = line.split('=')[1].trim();
                // Strip quotes if present
                if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
                process.env.DATABASE_URL = value;
                break;
            }
        }
    }
} catch (e) {
    console.error("Failed to parse .env file:", e);
}

const prisma = new PrismaClient();

async function main() {
    const password = "admin123";
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.upsert({
        where: { email: 'admin@saundarya.com' },
        update: { password: hashedPassword },
        create: {
            id: 'admin-1',
            email: 'admin@saundarya.com',
            password: hashedPassword,
            name: 'Admin',
            role: 'ADMIN'
        }
    });

    console.log(`\n✅ Admin user updated/created with email: ${user.email} and password: ${password}\n`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
