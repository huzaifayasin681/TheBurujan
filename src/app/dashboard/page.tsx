import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import styles from "./dashboard.module.css"
import ProjectList from "@/components/ProjectList"
import ReviewForm from "@/components/ReviewForm"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user?.email) {
        redirect("/api/auth/signin?callbackUrl=/dashboard")
    }

    // Use email if ID is missing (fallback), but we try ID first. 
    // We need to fetch user from DB if session doesn't have ID, but adapter should handle it.
    // However, without a verified user in DB, this query returns empty or throws if id is undefined.

    let userId = session.user.id

    if (!userId) {
        // Try to find by email if id is missing in session (shouldn't happen with adapter)
        const dbUser = await prisma.user.findUnique({ where: { email: session.user.email } })
        if (dbUser) userId = dbUser.id
    }

    if (!userId) {
        // User is authenticated but not in DB? 
        // With Standard next-auth flow with adapter, user is created on sign in.
        // If id is missing, something is wrong.
        return <div>Error loading user data.</div>
    }

    const projects = await prisma.project.findMany({
        where: { userId: userId },
        orderBy: { updatedAt: 'desc' }
    })

    const review = await prisma.review.findFirst({
        where: { userId: userId }
    })

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Welcome, {session.user.name}</h1>
            <div className={styles.grid}>
                <div className={styles.projectsSection}>
                    <h2 className={styles.sectionTitle}>Your Projects</h2>
                    <ProjectList projects={projects} />
                </div>
                <div className={styles.reviewSection}>
                    <h2 className={styles.sectionTitle}>Your Feedback</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        Let us know how the project went. Your feedback helps us improve.
                    </p>
                    <ReviewForm existingReview={review} />
                </div>
            </div>
        </main>
    )
}
