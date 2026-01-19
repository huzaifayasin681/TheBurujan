"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
    title: string;
    breadcrumb?: { label: string; href: string }[];
}

export default function PageHeader({ title, breadcrumb = [] }: PageHeaderProps) {
    return (
        <section className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        className={styles.breadcrumb}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Link href="/">Home</Link>
                        {breadcrumb.map((item, index) => (
                            <motion.div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ChevronRight size={14} />
                                {index === breadcrumb.length - 1 ? (
                                    <span className={styles.active}>{item.label}</span>
                                ) : (
                                    <Link href={item.href}>{item.label}</Link>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* Decorative background elements could be added here */}
        </section >
    );
}
