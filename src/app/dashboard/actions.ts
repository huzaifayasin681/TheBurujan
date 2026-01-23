'use server'

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function submitReview(formData: FormData) {
    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    const comment = formData.get("comment") as string
    const rating = parseInt(formData.get("rating") as string)

    if (!comment || !rating) throw new Error("Invalid Input")

    // Check if review exists
    const existing = await prisma.review.findFirst({
        where: { userId: session.user.id }
    })

    if (existing) {
        await prisma.review.update({
            where: { id: existing.id },
            data: { comment, rating }
        })
    } else {
        await prisma.review.create({
            data: {
                userId: session.user.id,
                comment,
                rating
            }
        })
    }

    revalidatePath("/dashboard")
}
