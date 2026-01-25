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
                        <div className={styles.logoContainer}>
                            <Image
                                src="/images/logo_nb.png"
                                alt="The Burujan Logo"
                                width={200}
                                height={200}
                                className={styles.footerLogo}
                                style={{ width: '200px', height: 'auto' }}
                            />
                        </div>
                        <p className={styles.brandDesc}>
                            <span className={styles.brandTagline}>
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
                        <div className={`${styles.contactItem} ${styles.contactWrapper}`}>
                            <Mail className={`${styles.contactIcon} ${styles.contactIconWrapper}`} size={20} />
                            <span>
                                <span className={styles.contactLabel}>Email</span>
                                <a href="mailto:huzaifa@theburujan.tech" className={styles.contactValue}>huzaifa@theburujan.tech</a>
                            </span>
                        </div>

                        <div className={`${styles.contactItem} ${styles.contactWrapper}`}>
                            <MapPin className={`${styles.contactIcon} ${styles.contactIconWrapper}`} size={20} />
                            <span>
                                <span className={styles.contactLabel}>Operational Base</span>
                                <span className={styles.contactValue}>Islamabad, Blue Area, Street 37, G6/2, ISB</span>
                            </span>
                        </div>

                        <div className={`${styles.contactItem} ${styles.contactWrapper}`}>
                            <Globe className={`${styles.contactIcon} ${styles.contactIconWrapper}`} size={20} />
                            <span>
                                <span className={styles.contactLabel}>Headquarters</span>
                                <span className={styles.contactValue}>Islamabad</span>
                            </span>
                        </div>

                        <div className={styles.operationalBadge}>
                            <div className={styles.statusDot}></div>
                            <span className={styles.statusText}>Systems Operational</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.bottomLeft}>
                        <p className={styles.copyright}>© 2026 The Burujan.</p>
                    </div>

                    <p className={styles.engineered}>Engineered in Pakistan.</p>

                    <div className={styles.socials}>
                        <Link href="https://linkedin.com" target="_blank" className={styles.socialIcon}><Linkedin size={16} /></Link>
                        <Link href="https://wa.me/" target="_blank" className={styles.socialIcon}><MessageCircle size={16} /></Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
