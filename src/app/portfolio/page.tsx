"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import styles from './portfolio.module.css';
import { ShieldCheck, Check, Layout, AlertCircle, Database, Server, Smartphone, Globe, Cloud, CircuitBoard } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const projects = [
    {
        category: 'v2.4 RELEASE',
        title: 'Burujan CMS',
        subtitle: 'Content Engine',
        description: 'A headless Content Management System engineered for scalability. Decoupled architecture allowing seamless content delivery across web and mobile endpoints.',
        stack: ['Next.js', 'Node.js', 'Express.js', 'Prisma'],
        color: '#D4AF37', // Gold
        accentColor: '#F6E05E',
        status: 'Operational'
    },
    {
        category: 'v1.1 SECURITY',
        title: 'Sentinel',
        subtitle: 'Vuln Scanner',
        description: 'Dual-mode (CLI & GUI) Python application for automated security auditing. Scans for SQLi, XSS, and misconfigurations in real-time.',
        stack: ['Python', 'Tkinter', 'Requests', 'OWASP'],
        color: '#E53E3E', // Red
        accentColor: '#FC8181',
        status: 'Active Scanning'
    },
    {
        category: 'v3.0 RELEASE',
        title: 'Athena LMS',
        subtitle: 'Learning Platform',
        description: 'A robust educational platform featuring live classrooms, assignment tracking, and automated grading pipelines.',
        stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Python'],
        color: '#3182CE', // Blue
        accentColor: '#63B3ED',
        status: 'Online'
    },
    {
        category: 'ENTERPRISE',
        title: 'SecureBadge',
        subtitle: 'Issuance System',
        description: 'Secure credential issuance platform for organizations. Handles data encryption, card design generation, and printing workflows.',
        stack: ['Django', 'Celery', 'Redis', 'Python'],
        color: '#38A169', // Green
        accentColor: '#68D391',
        status: 'Processing'
    },
    {
        category: 'MOBILE APP',
        title: 'CampusConnect',
        subtitle: 'Community Hub',
        description: 'A cross-platform mobile application fostering student engagement through events, forums, and real-time campus updates.',
        stack: ['Flutter', 'Dart', 'Firebase', 'iOS/Android'],
        color: '#805AD5', // Purple
        accentColor: '#B794F4',
        status: 'Live on Store'
    },
    {
        category: 'AI MODULE',
        title: 'CareerLens',
        subtitle: 'AI Interviewer',
        description: 'AI-powered interview simulation platform that provides candidate feedback on tone, pacing, and keyword relevance.',
        stack: ['OpenAI API', 'Next.js', 'Tailwind', 'WebSpeech'],
        color: '#00B5D8', // Cyan
        accentColor: '#4FD1C5',
        status: 'Online'
    }
];

export default function PortfolioPage() {
    return (
        <main>
            <PageHeader
                title="Our Portfolio"
                breadcrumb={[{ label: 'Portfolio', href: '/portfolio' }]}
            />

            <section className="section-padding" style={{ background: '#0b1121' }}>
                <div className="container">
                    <div className={styles.projectList}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={styles.projectCard}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                style={{
                                    '--brand-color': project.color,
                                    '--brand-glow': `${project.color}40`,
                                    '--card-accent': project.accentColor
                                } as React.CSSProperties}
                            >
                                {/* Left Panel */}
                                <div className={styles.leftPanel}>
                                    <div className={styles.releaseBadge}>
                                        <CircuitBoard size={14} />
                                        {project.category}
                                    </div>
                                    <h2 className={styles.mainTitle}>{project.title}</h2>
                                    <h3
                                        className={styles.subTitle}
                                        style={{
                                            background: `linear-gradient(to right, ${project.accentColor}, ${project.color})`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        {project.subtitle}
                                    </h3>

                                    <p className={styles.description}>{project.description}</p>

                                    <div className={styles.stackGrid}>
                                        {project.stack.map((tech, i) => (
                                            <div key={i} className={styles.stackItem}>
                                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: project.color }} />
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Panel - Abstract UI */}
                                <div className={styles.rightPanel}>
                                    <div className={styles.uiContainer}>
                                        {/* Abstract Sidebar */}
                                        <div className={styles.uiSidebar}>
                                            <div className={`${styles.uiNavBubble} ${styles.uiNavActive}`} />
                                            <div className={styles.uiNavBubble} />
                                            <div className={styles.uiNavBubble} />
                                            <div className={styles.uiNavBubble} style={{ marginTop: 'auto' }} />
                                        </div>

                                        {/* Abstract Main Area */}
                                        <div className={styles.mainArea}>
                                            <div className={styles.uiHeader} />
                                            <div className={styles.uiGrid}>
                                                <div className={styles.uiCard}>
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLarge}`} />
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLine}`} />
                                                    <div className={`${styles.uiCardBlock} ${styles.blockButton}`} />
                                                </div>
                                                <div className={styles.uiCard} style={{ background: 'rgba(255,255,255,0.03)' }}>
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLarge}`} style={{ background: 'rgba(255,255,255,0.1)' }} />
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLine}`} />
                                                </div>
                                                <div className={styles.uiCard} style={{ background: 'rgba(255,255,255,0.03)' }}>
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLarge}`} style={{ background: 'rgba(255,255,255,0.1)' }} />
                                                    <div className={`${styles.uiCardBlock} ${styles.blockButton}`} />
                                                </div>
                                                <div className={styles.uiCard}>
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLarge}`} style={{ background: '#fbbf24' }} /> {/* Amber accent for variance */}
                                                    <div className={`${styles.uiCardBlock} ${styles.blockLine}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Status Badge */}
                                    <div className={styles.statusFloating}>
                                        <div className={styles.statusIcon}>
                                            <Check size={18} strokeWidth={3} />
                                        </div>
                                        <div className={styles.statusText}>
                                            <h4>System Status</h4>
                                            <span>{project.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
