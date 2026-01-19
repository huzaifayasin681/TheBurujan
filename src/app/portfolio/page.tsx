"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import styles from './portfolio.module.css';
import Link from 'next/link';
import { Layout, ShieldAlert, GraduationCap, CreditCard, Users, Briefcase, BrainCircuit, Code2, Terminal } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

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

                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                style={{ border: 'none', background: 'var(--card-bg)', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', overflow: 'hidden' }}
                                variants={fadeInUp}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            >
                                <div className={styles.imageWrapper} style={{
                                    background: `${project.color}15`, // Very light opacity of brand color
                                    padding: '3rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative'
                                }}>
                                    <span className={styles.category} style={{
                                        position: 'absolute',
                                        top: '1.5rem',
                                        left: '1.5rem',
                                        background: 'var(--card-bg)',
                                        color: project.color,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '999px',
                                        fontWeight: '600',
                                        fontSize: '0.8rem',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                    }}>{project.category}</span>

                                    <div style={{ color: project.color, transform: 'scale(1.2)' }}>
                                        <project.icon size={80} strokeWidth={1} />
                                    </div>
                                </div>
                                <div className={styles.content} style={{ padding: '2.5rem' }}>
                                    <h3 className={styles.title} style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--foreground)', marginBottom: '1rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                                        {project.description}
                                    </p>

                                    <div className={styles.meta} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0', borderTop: 'none' }}>
                                        {project.stack.map((tech, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.8rem',
                                                background: 'var(--card-bg-hover)',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '8px',
                                                fontWeight: '500',
                                                color: 'var(--text-secondary)',
                                                border: '1px solid var(--line-color)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
