"use client";

import PageHeader from '@/components/PageHeader';
import styles from './portfolio.module.css';
import Link from 'next/link';
import { Layout, ShieldAlert, GraduationCap, CreditCard, Users, Briefcase, BrainCircuit, Code2, Terminal } from 'lucide-react';

const projects = [
    {
        category: 'Systems Architecture',
        title: 'Burujan CMS: Enterprise Content Engine',
        description: 'A headless Content Management System engineered for scalability. Decoupled architecture allowing seamless content delivery across web and mobile endpoints.',
        stack: ['Next.js', 'Node.js', 'Express.js', 'Prisma'],
        color: '#D4AF37', // Gold
        icon: Layout
    },
    {
        category: 'Cybersecurity',
        title: 'Sentinel: Vulnerability Scanner',
        description: 'Dual-mode (CLI & GUI) Python application for automated security auditing. Scans for SQLi, XSS, and misconfigurations in real-time.',
        stack: ['Python', 'Tkinter', 'Requests', 'Owasp ZAP'],
        color: '#E53E3E', // Red for security
        icon: ShieldAlert
    },
    {
        category: 'EdTech',
        title: 'Athena LMS: Learning Management System',
        description: 'A robust educational platform featuring live classrooms, assignment tracking, and automated grading pipelines.',
        stack: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
        color: '#3182CE', // Blue
        icon: GraduationCap
    },
    {
        category: 'FinTech',
        title: 'SecureBadge: Card Issuance System',
        description: 'Secure credential issuance platform for organizations. Handles data encryption, card design generation, and printing workflows.',
        stack: ['Django', 'Python', 'Pillow', 'Celery'],
        color: '#38A169', // Green
        icon: CreditCard
    },
    {
        category: 'Mobile Ecosystem',
        title: 'CampusConnect: Community Hub',
        description: 'A cross-platform mobile application fostering student engagement through events, forums, and real-time campus updates.',
        stack: ['Flutter', 'Dart', 'Firebase'],
        color: '#805AD5', // Purple
        icon: Users
    },
    {
        category: 'Mobile Ecosystem',
        title: 'ClientFolio: Portfolio Manager',
        description: 'A sleek mobile showcase app allowing agencies to present work offline and online with dynamic syncing.',
        stack: ['Flutter', 'Dart', 'SQLite'],
        color: '#DD6B20', // Orange
        icon: Briefcase
    },
    {
        category: 'AI Solutions',
        title: 'CareerLens: AI Interviewer',
        description: 'AI-powered interview simulation platform that provides candidate feedback on tone, pacing, and keyword relevance.',
        stack: ['Next.js', 'OpenAI API', 'Tailwind', 'WebSpeech API'],
        color: '#00B5D8', // Cyan
        icon: BrainCircuit
    }
];

export default function PortfolioPage() {
    return (
        <main>
            <PageHeader
                title="Our Portfolio"
                breadcrumb={[{ label: 'Portfolio', href: '/portfolio' }]}
            />

            <section className="section-padding">
                <div className="container">
                    <p style={{ maxWidth: '700px', margin: '0 auto 4rem auto', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        A showcase of our engineered systems. From secure backend infrastructures to fluid mobile ecosystems, we build technology that drives authority.
                    </p>

                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.imageWrapper} style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)` }}>
                                    <span className={styles.category} style={{ background: project.color, color: '#fff' }}>{project.category}</span>

                                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: project.color }}>
                                        <project.icon size={64} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.title} style={{ minHeight: '3rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6', minHeight: '4.5rem' }}>
                                        {project.description}
                                    </p>

                                    <div className={styles.meta} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                        {project.stack.map((tech, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.75rem',
                                                background: 'rgba(255,255,255,0.05)',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '4px',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
