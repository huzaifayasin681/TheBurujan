"use client";

import styles from './page.module.css';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Code, Smartphone, Zap, Shield, Database } from 'lucide-react';
import Link from 'next/link';
import HeroAnimation from '@/components/HeroAnimation';
import Testimonials from '@/components/Testimonials';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Engineering Digital <br /> Empires.
              </motion.h1>
              <motion.p
                className={styles.heroDesc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We are the bridge between humble roots and celestial heights.
                We do not just build websites; we construct digital fortresses for clients who are ready to rise.
              </motion.p>
              <motion.div
                className={styles.btnGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link href="/contact" className={styles.primaryBtn}>
                  Start Building <ArrowRight size={18} />
                </Link>
                <Link href="/portfolio" className={styles.secondaryBtn}>
                  View Architecture
                </Link>
              </motion.div>
            </div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
        {/* Abstract shapes or background elements could go here */}
      </section>

      {/* Concept Bar */}
      <div style={{ borderBottom: '1px solid var(--card-border)', padding: '2rem 0' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Authority • Excellence • Structure
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-subtitle">Our Systems</span>
            <h2 className="section-title">The Four Pillars of <br /> Power</h2>
          </motion.div>

          <motion.div
            className={styles.servicesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className={styles.serviceCard} variants={fadeInUp}>
              <div className={styles.cardIcon}><Code size={24} /></div>
              <h3 className={styles.cardTitle}>Web Architecture</h3>
              <p className={styles.cardDesc}>High-performance Next.js websites and 3D Interactive Experiences designed for speed and SEO dominance.</p>
              <Link href="/services" className={styles.cardLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={fadeInUp}>
              <div className={styles.cardIcon}><Smartphone size={24} /></div>
              <h3 className={styles.cardTitle}>Mobile Ecosystems</h3>
              <p className={styles.cardDesc}>Native and cross-platform mobile applications (Flutter/React Native) that dominate app stores.</p>
              <Link href="/services" className={styles.cardLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={fadeInUp}>
              <div className={styles.cardIcon}><Database size={24} /></div>
              <h3 className={styles.cardTitle}>Full Stack Systems</h3>
              <p className={styles.cardDesc}>Custom CRM & ERP Dashboards, API Development, and Database Architecture connecting logic to interface.</p>
              <Link href="/services" className={styles.cardLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>

            <motion.div className={styles.serviceCard} variants={fadeInUp}>
              <div className={styles.cardIcon}><Shield size={24} /></div>
              <h3 className={styles.cardTitle}>DevOps & AI</h3>
              <p className={styles.cardDesc}>Cloud setup, Automated CI/CD Pipelines, Cybersecurity, and AI Automation Agents.</p>
              <Link href="/services" className={styles.cardLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section-padding ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime SLA</span>
            </div>
            <div>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Code Ownership</span>
            </div>
            <div>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Specialist Pillars</span>
            </div>
            <div>
              <span className={styles.statNumber}>Global</span>
              <span className={styles.statLabel}>Client Base</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 className="section-title">Ready to Rise?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                We engineer precise solutions for Startups, SMEs, and High-End Service Providers.
              </p>
              <Link href="/contact" className={styles.primaryBtn} style={{ display: 'inline-flex' }}>
                Secure Your Legacy <Zap size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
