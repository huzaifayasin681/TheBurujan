"use client";

import PageHeader from '@/components/PageHeader';
import styles from './about.module.css';
import Image from 'next/image';
import { Target, Eye, Flag } from 'lucide-react';



export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="About The Burujan"
                breadcrumb={[{ label: 'About', href: '/about' }]}
            />

            {/* Origin Story */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-subtitle">The Origin Story</span>
                            <h2 className="section-title">Talent is universal. Opportunity is not. We engineered our own.</h2>
                            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                <p style={{ marginBottom: '1rem' }}>
                                    The Burujan was born from a collective realization: the digital world is a landscape of towers, built by those who control the code.
                                    We are four specialists who grew up in the quiet grit of the middle class. We didn't inherit empires; we learned to build them.
                                </p>
                                <p>
                                    While others slept, we traded rest for syntax. We founded <strong>The Burujan</strong> to be the bridge between humble roots and celestial heights.
                                    We are not just a service provider; we are a testament to the power of logic, structure, and hard work.
                                </p>
                            </div>

                            <div className={styles.visionGrid} style={{ marginTop: '2rem', gridTemplateColumns: '1fr 1fr' }}>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>4</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Specialized Pillars</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>100%</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Commitment</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image
                                src="/images/about-hero.png"
                                alt="Our Team"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className={`section-padding ${styles.visionSection}`}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-subtitle">Our Blueprint</span>
                        <h2 className="section-title">Values that Build Empires</h2>
                    </div>

                    <div className={styles.visionGrid}>
                        <div className={styles.visionCard}>
                            <div className={styles.iconWrapper}><Eye size={30} /></div>
                            <h3>The Vision</h3>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                To become the premier 'Digital Foundry' of the region—a place where chaotic ideas are forged into unbreakable logic.
                            </p>
                        </div>
                        <div className={styles.visionCard}>
                            <div className={styles.iconWrapper}><Target size={30} /></div>
                            <h3>The Mission</h3>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                To engineer digital solutions that are as robust as they are beautiful. Providing clients with the structural advantage to dominate.
                            </p>
                        </div>
                        <div className={styles.visionCard}>
                            <div className={styles.iconWrapper}><Flag size={30} /></div>
                            <h3>Our Concept</h3>
                            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                                "Burūj" (The Great Towers). We build digital fortresses that stand the test of time and scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (The Architects) */}

        </main>
    );
}
