"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import styles from './services.module.css';
import { Check, CheckCircle2 } from 'lucide-react';

const serviceDetails = [
    {
        title: "Custom Web Architecture",
        items: [
            "High-performance Next.js websites",
            "3D Interactive Experiences (Three.js/WebGL)",
            "Enterprise-grade E-commerce platforms"
        ]
    },
    {
        title: "Mobile Ecosystems",
        items: [
            "iOS & Android App Development",
            "Cross-platform logic (Flutter/React Native)",
            "App Store Optimization (ASO) & Deployment"
        ]
    },
    {
        title: "Full Stack Systems",
        items: [
            "Custom CRM & ERP Dashboards",
            "API Development & Integration",
            "Database Architecture (SQL/NoSQL)"
        ]
    },
    {
        title: "Infrastructure & DevOps",
        items: [
            "Cloud Setup (AWS/Hostinger/Vercel)",
            "Automated CI/CD Pipelines",
            "Cybersecurity Audits & Network Analysis",
            "AI Automation Agents (n8n)"
        ]
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

export default function ServicesPage() {
    return (
        <main>
            <PageHeader
                title="Our Services"
                breadcrumb={[{ label: 'Services', href: '/services' }]}
            />

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className="section-title">We do not sell gigs. <br /> We sell Systems.</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                                We adhere to a strict 4-phase engineering protocol: Audit, Architecture, Construction, and Fortification.
                                Every solution is built using industry-standard, future-proof tools.
                            </p>

                            <motion.div
                                style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {serviceDetails.map((service, idx) => (
                                    <motion.div key={idx} variants={fadeInUp}>
                                        <h4 style={{ fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '0.5rem', fontWeight: 600 }}>{service.title}</h4>
                                        <ul className={styles.featureList} style={{ marginTop: '0' }}>
                                            {service.items.map((item, k) => (
                                                <li key={k}><CheckCircle2 size={18} className={styles.checkIcon} /> {item}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            className={styles.bookingForm}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', background: 'var(--foreground)', padding: '1rem', borderRadius: '24px', textAlign: 'center', color: 'var(--background)', fontWeight: 'bold' }}>Request a Blueprint</h3>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Name</label>
                                <input type="text" className={styles.input} placeholder="Enter your name" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Email</label>
                                <input type="email" className={styles.input} placeholder="Enter your email" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Company Type</label>
                                <select className={styles.input} style={{ appearance: 'none' }}>
                                    <option>Startup (MVP)</option>
                                    <option>SME (Upgrade)</option>
                                    <option>High-End Service Provider</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Project Details</label>
                                <textarea className={styles.textarea} rows={4} placeholder="Describe your vision"></textarea>
                            </div>

                            <button className={styles.priceBtn}>Initialize Audit</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="blueprint" className={`section-padding ${styles.pricingSection}`}>
                <div className="container">
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <span className="section-subtitle">How We Work</span>
                        <h2 className="section-title">The Blueprint Process</h2>
                    </motion.div>

                    <motion.div
                        className={styles.processTree}
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { id: '01', title: 'The Audit', desc: "Discovery. We analyze the goal. We don't guess; we calculate." },
                            { id: '02', title: 'The Architecture', desc: "Design. We map database schemas and UI flows before coding." },
                            { id: '03', title: 'The Construction', desc: "Build. Cloud Native technologies. Clean code. No bloat." },
                            { id: '04', title: 'The Fortification', desc: "Launch. Security, Speed Optimization, and Deployment." }
                        ].map((step, idx) => (
                            <motion.div key={step.id} className={styles.stepNode} variants={fadeInUp}>
                                <div className={styles.stepNumber}>{step.id}</div>
                                <div className={styles.stepContent}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--foreground)' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
