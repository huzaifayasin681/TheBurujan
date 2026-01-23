
import { prisma } from "@/lib/prisma"

async function main() {
    try {
        console.log("Testing database connection...");
        const userCount = await prisma.user.count();
        console.log(`Successfully connected! Found ${userCount} users.`);

        // Test write
        /*
        const testUser = await prisma.user.create({
            data: {
                email: "test-connection@example.com",
                name: "Test Connection"
            }
        });
        console.log("Successfully wrote test user:", testUser.id);
        await prisma.user.delete({ where: { id: testUser.id } });
        console.log("Successfully cleaned up test user.");
        */

    } catch (e) {
        console.error("Database connection failed:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
