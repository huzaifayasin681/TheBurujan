"use client";

import PageHeader from '@/components/PageHeader';
import styles from './contact.module.css';
import { MapPin, Mail, Phone, Clock, Send, Shield } from 'lucide-react';

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact The Burujan"
                breadcrumb={[{ label: 'Contact', href: '/contact' }]}
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactCard}>
                            <div className={styles.iconBox}><MapPin size={32} /></div>
                            <h3>Headquarters</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Digital / Islamabad<br />Pakistan
                            </p>
                        </div>

                        <div className={`${styles.contactCard} ${styles.active}`} style={{ background: 'var(--primary)', color: '#000' }}>
                            <div className={styles.iconBox} style={{ color: '#000' }}><Mail size={32} /></div>
                            <h3>Communication</h3>
                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Dedicated Client Portal<br />WhatsApp Business Integration
                            </p>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.iconBox}><Clock size={32} /></div>
                            <h3>Operations</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                99.9% Uptime SLA<br />Managed DevOps Clients
                            </p>
                        </div>

                        <div className={styles.contactCard}>
                            <div className={styles.iconBox}><Shield size={32} /></div>
                            <h3>Point of Contact</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Muhammad Huzaifa Hassan<br />Lead DevOps Architect
                            </p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className={styles.messageSection}>
                        <div className={styles.formBox}>
                            <span className="section-subtitle">Secure Comms</span>
                            <h2 className="section-title" style={{ fontSize: '2rem' }}>Initialize Project.</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                Ready to build your digital fortress? Send us a secure message.
                            </p>

                            <form>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="Name" className={styles.inputField} />
                                    <input type="text" placeholder="Company Type" className={styles.inputField} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="tel" placeholder="Phone" className={styles.inputField} />
                                    <input type="email" placeholder="Email" className={styles.inputField} />
                                </div>
                                <textarea placeholder="Message / Project Vision" rows={5} className={styles.inputField}></textarea>

                                <button type="button" className={styles.submitBtn}>
                                    Transmit Message <Send size={16} />
                                </button>
                            </form>
                        </div>

                        <div className={styles.mapBox} style={{ background: '#1a202c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Abstract Tech Visual placeholder instead of generic map since it's "Digital" */}
                            <div style={{ textAlign: 'center', opacity: 0.5 }}>
                                <Shield size={64} color="var(--primary)" />
                                <p style={{ marginTop: '1rem', color: '#fff', letterSpacing: '2px' }}>SECURE CHANNEL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
