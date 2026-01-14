"use client";

import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "James Caldwell", // UK/US
        text: "The architecture they built handled our peak traffic without a single hiccup. We went from constant downtime to sub-second load times. Solid, breakdown-proof engineering.",
        delay: 0
    },
    {
        name: "Yusuf Al-Mansur", // Arabic
        text: "We didn't just need an app; we needed a scalable ecosystem. The Burujan delivered exactly that. Their 'Blueprint' process saved us months of backtracking.",
        delay: 0.1
    },
    {
        name: "Lukas Müller", // Germany
        text: "Their DevOps audit saved us thousands in monthly cloud costs. They didn't just patch holes; they re-architected our entire deployment pipeline.",
        delay: 0.2
    },
    {
        name: "Hakan Yılmaz", // Turkey
        text: "Professional, concise, and code-centric. No fluff, just results. The AI integration they built for our portal has modernized our entire workflow.",
        delay: 0.3
    },
    {
        name: "Mateo Garcia", // Spain
        text: "The mobile ecosystem they engineered is seamless. Our user retention scaled immediately after the update. Truly distinct quality.",
        delay: 0.4
    },
    {
        name: "Noah Thompson", // Australia
        text: "Precise, logical, and robust. The new system handles our heavy data load with zero latency. A team that truly understands structure.",
        delay: 0.5
    }
];

export default function Testimonials() {
    return (
        <section className={`section-padding ${styles.testimonialSection}`}>
            <div className="container">
                <div style={{ marginBottom: '5rem' }}>
                    <span className="section-subtitle">Client Feedback</span>
                    <h2 className="section-title">Endorsements from <br /> Industry Leaders</h2>
                </div>

                <div className={styles.testimonialGrid}>
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.card}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: review.delay }}
                        >
                            <span className={styles.quoteSymbol}>“</span>
                            <p className={styles.text}>{review.text}</p>

                            <div className={styles.author}>
                                <span className={styles.name}>{review.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
