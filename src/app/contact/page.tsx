"use client";

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import styles from './contact.module.css';
import { MapPin, Mail, Phone, Clock, Send, Shield } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

export default function ContactPage() {
    return (
        <main>
            <PageHeader
                title="Contact The Burujan"
                breadcrumb={[{ label: 'Contact', href: '/contact' }]}
            />

            <section className="section-padding">
                <div className="container">
                    <motion.div
                        className={styles.contactGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div className={styles.contactCard} variants={fadeInUp}>
                            <div className={styles.iconBox}><MapPin size={32} /></div>
                            <h3>Headquarters</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Digital / Islamabad<br />Pakistan
                            </p>
                        </motion.div>

                        <motion.div className={`${styles.contactCard} ${styles.active}`} variants={fadeInUp}>
                            <div className={styles.iconBox}><Mail size={32} /></div>
                            <h3>Communication</h3>
                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Dedicated Client Portal<br />WhatsApp Business Integration
                            </p>
                        </motion.div>

                        <motion.div className={styles.contactCard} variants={fadeInUp}>
                            <div className={styles.iconBox}><Clock size={32} /></div>
                            <h3>Operations</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                99.9% Uptime SLA<br />Managed DevOps Clients
                            </p>
                        </motion.div>

                        <motion.div className={styles.contactCard} variants={fadeInUp}>
                            <div className={styles.iconBox}><Shield size={32} /></div>
                            <h3>Point of Contact</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Muhammad Huzaifa Hassan<br />Lead DevOps Architect
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        className={styles.messageSection}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.formBox}>
                            <span className="section-subtitle">Secure Comms</span>
                            <h2 className="section-title" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Initialize Project.</h2>
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

                        <div className={styles.mapBox} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Abstract Tech Visual placeholder instead of generic map since it's "Digital" */}
                            <div style={{ textAlign: 'center', opacity: 0.5 }}>
                                <Shield size={64} color="var(--primary)" />
                                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', letterSpacing: '2px' }}>SECURE CHANNEL</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
