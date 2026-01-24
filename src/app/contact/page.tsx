"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import styles from './contact.module.css';
import { MapPin, Mail, Clock, Send, Shield, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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

interface FormData {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields (Name, Email, and Message)');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', company: '', phone: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        }
    };

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

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className={styles.successMessage}
                                    >
                                        <CheckCircle size={48} color="var(--primary)" />
                                        <h3>Message Transmitted Successfully!</h3>
                                        <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className={styles.submitBtn}
                                            style={{ marginTop: '1.5rem' }}
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                    >
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name *"
                                                className={styles.inputField}
                                                value={formData.name}
                                                onChange={handleChange}
                                                disabled={status === 'loading'}
                                            />
                                            <input
                                                type="text"
                                                name="company"
                                                placeholder="Company Type"
                                                className={styles.inputField}
                                                value={formData.company}
                                                onChange={handleChange}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                className={styles.inputField}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                disabled={status === 'loading'}
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email *"
                                                className={styles.inputField}
                                                value={formData.email}
                                                onChange={handleChange}
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <textarea
                                            name="message"
                                            placeholder="Message / Project Vision *"
                                            rows={5}
                                            className={styles.inputField}
                                            value={formData.message}
                                            onChange={handleChange}
                                            disabled={status === 'loading'}
                                        ></textarea>

                                        {status === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={styles.errorMessage}
                                            >
                                                <AlertCircle size={18} />
                                                <span>{errorMessage}</span>
                                            </motion.div>
                                        )}

                                        <button
                                            type="submit"
                                            className={styles.submitBtn}
                                            disabled={status === 'loading'}
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 size={16} className={styles.spinner} />
                                                    Transmitting...
                                                </>
                                            ) : (
                                                <>
                                                    Transmit Message <Send size={16} />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
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
