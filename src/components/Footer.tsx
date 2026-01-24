"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Linkedin, MessageCircle, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <motion.footer
            className={styles.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className={styles.grid}>
                    {/* Column 1: The Brand */}
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <Image
                                src="/images/logo.png"
                                alt="The Burujan Logo"
                                width={200}
                                height={200}
                                className={styles.footerLogo}
                                style={{ width: '200px', height: 'auto' }}
                            />
                        </div>
                        <p className={styles.brandDesc}>
                            <span style={{ color: 'var(--primary)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                                Engineering Digital Empires.
                            </span>
                            We bridge the gap between humble roots and celestial heights. A digital foundry built on logic, grit, and architecture.
                        </p>
                    </div>

                    {/* Column 2: The Architecture */}
                    <div>
                        <h4 className={styles.heading}>The Architecture</h4>
                        <ul className={styles.links}>
                            <li><Link href="/services"><ArrowRight size={14} /> Custom Web Architecture</Link></li>
                            <li><Link href="/services"><ArrowRight size={14} /> Mobile Ecosystems</Link></li>
                            <li><Link href="/services"><ArrowRight size={14} /> Full Stack Systems</Link></li>
                            <li><Link href="/services"><ArrowRight size={14} /> Infrastructure & DevOps</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: The Protocols */}
                    <div>
                        <h4 className={styles.heading}>The Protocols</h4>
                        <ul className={styles.links}>
                            <li><Link href="/services#blueprint"><ArrowRight size={14} /> The Blueprint (Process)</Link></li>
                            <li><Link href="/about"><ArrowRight size={14} /> The Architects (Team)</Link></li>
                            <li><Link href="/privacy-policy"><ArrowRight size={14} /> Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service"><ArrowRight size={14} /> Terms of Service</Link></li>
                            <li><Link href="/sla"><ArrowRight size={14} /> Service Level Agreement (SLA)</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Coordinates */}
                    <div>
                        <h4 className={styles.heading}>Coordinates</h4>
                        <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
                            <Mail className={styles.contactIcon} size={20} style={{ marginTop: '3px' }} />
                            <span>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</span>
                                <a href="mailto:huzaifa@theburujan.tech" style={{ color: '#fff', fontWeight: 500 }}>huzaifa@theburujan.tech</a>
                            </span>
                        </div>

                        <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
                            <MapPin className={styles.contactIcon} size={20} style={{ marginTop: '3px' }} />
                            <span>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Operational Base</span>
                                <span style={{ color: '#fff' }}>Islamabad, Blue Area, Street 37, G6/2, ISB</span>
                            </span>
                        </div>

                        <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
                            <Globe className={styles.contactIcon} size={20} style={{ marginTop: '3px' }} />
                            <span>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Headquarters</span>
                                <span style={{ color: '#fff' }}>Islamabad</span>
                            </span>
                        </div>

                        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 170, 0.1)', padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid currentColor', color: 'var(--primary)', width: 'fit-content' }}>
                            <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>
                            <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Systems Operational</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <p>© 2026 The Burujan.</p>
                    </div>

                    <p style={{ opacity: 0.5, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Engineered in Pakistan.</p>

                    <div className={styles.socials}>
                        <Link href="https://linkedin.com" target="_blank" className={styles.socialIcon}><Linkedin size={16} /></Link>
                        <Link href="https://wa.me/" target="_blank" className={styles.socialIcon}><MessageCircle size={16} /></Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
