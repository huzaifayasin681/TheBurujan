"use client";

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
    }
];

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
                        <div>
                            <h2 className="section-title">We do not sell gigs. <br /> We sell Systems.</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                                We adhere to a strict 4-phase engineering protocol: Audit, Architecture, Construction, and Fortification.
                                Every solution is built using industry-standard, future-proof tools.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                                {serviceDetails.map((service, idx) => (
                                    <div key={idx}>
                                        <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{service.title}</h4>
                                        <ul className={styles.featureList} style={{ marginTop: '0' }}>
                                            {service.items.map((item, k) => (
                                                <li key={k}><CheckCircle2 size={18} className={styles.checkIcon} /> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className={styles.bookingForm}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', background: 'var(--primary)', padding: '1rem', borderRadius: '6px', textAlign: 'center', color: '#000', fontWeight: 'bold' }}>Request a Blueprint</h3>

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
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="blueprint" className={`section-padding ${styles.pricingSection}`}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-subtitle">How We Work</span>
                        <h2 className="section-title">The Blueprint Process</h2>
                    </div>

                    <div className={styles.pricingGrid}>
                        {[
                            { id: '01', title: 'The Audit', desc: "Discovery. We analyze the goal. We don't guess; we calculate." },
                            { id: '02', title: 'The Architecture', desc: "Design. We map database schemas and UI flows before coding." },
                            { id: '03', title: 'The Construction', desc: "Build. Cloud Native technologies. Clean code. No bloat." },
                            { id: '04', title: 'The Fortification', desc: "Launch. Security, Speed Optimization, and Deployment." }
                        ].map((step) => (
                            <div key={step.id} className={styles.priceCard}>
                                <div className={styles.priceHeader}>
                                    <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.1)', display: 'block' }}>{step.id}</span>
                                    <h3 className={styles.priceTitle}>{step.title}</h3>
                                </div>
                                <div className={styles.priceBody} style={{ flex: 'none', paddingBottom: '3rem' }}>
                                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
