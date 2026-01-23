"use client";

import styles from './Testimonials.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
    {
        name: "James Caldwell",
        role: "CTO, UK",
        text: "The architecture they built handled our peak traffic without a single hiccup. We went from constant downtime to sub-second load times. Solid, breakdown-proof engineering.",
    },
    {
        name: "Yusuf Al-Mansur",
        role: "Founder, UAE",
        text: "We didn't just need an app; we needed a scalable ecosystem. The Burujan delivered exactly that. Their 'Blueprint' process saved us months of backtracking.",
    },
    {
        name: "Lukas Müller",
        role: "Head of DevOps, Germany",
        text: "Their DevOps audit saved us thousands in monthly cloud costs. They didn't just patch holes; they re-architected our entire deployment pipeline.",
    },
    {
        name: "Hakan Yılmaz",
        role: "CEO, Turkey",
        text: "Professional, concise, and code-centric. No fluff, just results. The AI integration they built for our portal has modernized our entire workflow.",
    },
    {
        name: "Mateo Garcia",
        role: "Product Lead, Spain",
        text: "The mobile ecosystem they engineered is seamless. Our user retention scaled immediately after the update. Truly distinct quality.",
    },
    {
        name: "Noah Thompson",
        role: "Data Architect, Australia",
        text: "Precise, logical, and robust. The new system handles our heavy data load with zero latency. A team that truly understands structure.",
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section className={`section-padding ${styles.testimonialSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="section-subtitle">Client Feedback</span>
                    <h2 className="section-title">Endorsements from <br /> Industry Leaders</h2>
                </div>

                <div className={styles.sliderContainer}>
                    {/* Previous Button */}
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={goToPrevious}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Slider Content */}
                    <div className={styles.sliderContent}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className={styles.slideCard}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className={styles.quoteIcon}>
                                    <Quote size={48} />
                                </div>
                                <p className={styles.reviewText}>
                                    {reviews[currentIndex].text}
                                </p>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorAvatar}>
                                        {reviews[currentIndex].name.charAt(0)}
                                    </div>
                                    <div className={styles.authorDetails}>
                                        <span className={styles.authorName}>{reviews[currentIndex].name}</span>
                                        <span className={styles.authorRole}>{reviews[currentIndex].role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Next Button */}
                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={goToNext}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className={styles.dotsContainer}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Mini preview cards */}
                <div className={styles.previewCards}>
                    {reviews.map((review, index) => (
                        <motion.button
                            key={index}
                            className={`${styles.previewCard} ${index === currentIndex ? styles.activePreview : ''}`}
                            onClick={() => goToSlide(index)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className={styles.previewName}>{review.name}</span>
                            <span className={styles.previewRole}>{review.role}</span>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
