import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import styles from "./dashboard.module.css"
// Components removed for cleanup
// import ProjectList from "@/components/ProjectList"
// import ReviewForm from "@/components/ReviewForm"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user?.email) {
        redirect("/api/auth/signin?callbackUrl=/dashboard")
    }

    let userId = session.user.id

    if (!userId) {
        const dbUser = await prisma.user.findUnique({ where: { email: session.user.email } })
        if (dbUser) userId = dbUser.id
    }

    if (!userId) {
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
                    {/* <ProjectList projects={projects} /> */}
                    <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                        Projects module pending update.
                    </div>
                </div>
                <div className={styles.reviewSection}>
                    <h2 className={styles.sectionTitle}>Your Feedback</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        Let us know how the project went. Your feedback helps us improve.
                    </p>
                    {/* <ReviewForm existingReview={review} /> */}
                    <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', color: 'var(--text-secondary)' }}>
                        Review module pending update.
                    </div>
                </div>
            </div>
        </main>
    )
}
