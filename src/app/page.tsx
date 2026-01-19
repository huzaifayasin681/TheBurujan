"use client";

import styles from './page.module.css';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Code, Smartphone, Zap, Shield, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
                There is a <br /> Better Way <br /> to Build.
              </motion.h1>
              <motion.p
                className={styles.heroDesc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                The Burujan engineers digital fortresses. Vulnerability scanning, secure infrastructure, and high-end web architecture.
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
                {/* Secondary button removed for minimal design */}
              </motion.div>
            </div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            >
              {/* Abstract Layers Representation */}
              <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src="/images/burujan-hero-devops.png"
                  alt="Digital Fortress DevOps Architecture"
                  width={1024}
                  height={1024}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '500px' }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concept Bar */}
      <motion.div
        style={{ borderBottom: '1px solid var(--card-border)', padding: '2rem 0' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Authority • Excellence • Structure
          </p>
        </div>
      </motion.div>

      {/* Architectural Pillars Section */}
      <section className={styles.pillarsSection} style={{ padding: '8rem 0' }}>
        <div className="container">
          <motion.div
            className={styles.pillarsHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className={styles.pillarsSubtitle}>Our Systems</span>
            <h2 className={styles.pillarsTitle}>The Four Pillars of <br /> Power</h2>
          </motion.div>

          <motion.div
            className={styles.columnsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Column 1 */}
            <motion.div className={styles.columnItem} variants={fadeInUp}>
              <span className={styles.columnNumber}>01</span>
              <div className={styles.columnIcon}><Code size={40} strokeWidth={1.5} /></div>
              <h3 className={styles.columnTitle}>Web <br /> Architecture</h3>
              <p className={styles.columnDesc}>High-performance Next.js websites and 3D Interactive Experiences designed for speed and SEO dominance.</p>
              <Link href="/services" className={styles.columnLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>

            {/* Column 2 */}
            <motion.div className={styles.columnItem} variants={fadeInUp}>
              <span className={styles.columnNumber}>02</span>
              <div className={styles.columnIcon}><Smartphone size={40} strokeWidth={1.5} /></div>
              <h3 className={styles.columnTitle}>Mobile <br /> Ecosystems</h3>
              <p className={styles.columnDesc}>Native and cross-platform mobile applications (Flutter/React Native) that dominate app stores.</p>
              <Link href="/services" className={styles.columnLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>

            {/* Column 3 */}
            <motion.div className={styles.columnItem} variants={fadeInUp}>
              <span className={styles.columnNumber}>03</span>
              <div className={styles.columnIcon}><Database size={40} strokeWidth={1.5} /></div>
              <h3 className={styles.columnTitle}>Full Stack <br /> Systems</h3>
              <p className={styles.columnDesc}>Custom CRM & ERP Dashboards, API Development, and Database Architecture connecting logic to interface.</p>
              <Link href="/services" className={styles.columnLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>

            {/* Column 4 */}
            <motion.div className={styles.columnItem} variants={fadeInUp}>
              <span className={styles.columnNumber}>04</span>
              <div className={styles.columnIcon}><Shield size={40} strokeWidth={1.5} /></div>
              <h3 className={styles.columnTitle}>DevOps <br /> & AI</h3>
              <p className={styles.columnDesc}>Cloud setup, Automated CI/CD Pipelines, Cybersecurity, and AI Automation Agents.</p>
              <Link href="/services" className={styles.columnLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      < section className={`section-padding ${styles.statsSection}`}>
        <div className="container">
          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Uptime SLA</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Code Ownership</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Specialist Pillars</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className={styles.statNumber}>Global</span>
              <span className={styles.statLabel}>Client Base</span>
            </motion.div>
          </motion.div>
        </div>
      </section >

      {/* Testimonials Section */}
      < Testimonials />

      {/* CTA Section */}
      < section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div
            className="glass-card"
            style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 className="section-title">Ready to Rise?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                We engineer precise solutions for Startups, SMEs, and High-End Service Providers.
              </p>
              <Link href="/contact" className={styles.primaryBtn} style={{ display: 'inline-flex' }}>
                Secure Your Legacy <Zap size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section >
    </main >
  );
}
