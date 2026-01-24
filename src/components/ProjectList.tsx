import styles from "./ProjectList.module.css"

export default function ProjectList({ projects }: { projects: any[] }) {
    if (projects.length === 0) {
        return (
            <div className={styles.empty}>
                <p>No active projects found. Your project details will appear here once we start.</p>
            </div>
        )
    }

    return (
        <div className={styles.list}>
            {projects.map((project) => (
                <div key={project.id} className={styles.card}>
                    <div className={styles.header}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.description}>{project.description || "No description provided."}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
