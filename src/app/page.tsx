"use client";

import styles from './page.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart, Code, Smartphone, Zap, Shield, Database, Cloud, Terminal, Globe, Lock, Cpu, Cog } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import Testimonials from '@/components/Testimonials';
import Typewriter from '@/components/Typewriter';
import TechTicker from '@/components/TechTicker';

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

// Gallery items with skills
const galleryItems = [
  {
    id: 1,
    image: '/images/gallery-web.png',
    imageLight: '/images/gallery-web-light.png',
    title: 'Web Architecture',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Three.js'],
    icon: Code,
    color: '#00D9FF'
  },
  {
    id: 2,
    image: '/images/gallery-devops.png',
    imageLight: '/images/gallery-devops-light.png',
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
    icon: Cloud,
    color: '#B08D57'
  },
  {
    id: 3,
    image: '/images/gallery-mobile.png',
    imageLight: '/images/gallery-mobile-light.png',
    title: 'Mobile Development',
    skills: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
    icon: Smartphone,
    color: '#FF6B00'
  },
  {
    id: 4,
    image: '/images/gallery-security.png',
    imageLight: '/images/gallery-security-light.png',
    title: 'Cybersecurity',
    skills: ['Penetration Testing', 'SIEM', 'Zero Trust', 'Vault', 'SOC'],
    icon: Shield,
    color: '#00FF88'
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <main>
      {/* Hero Gallery Section */}
      <section className={styles.heroGallery}>
        {/* Background Images */}
        <div className={styles.galleryBackgrounds}>
          <AnimatePresence mode="wait">
            {galleryItems.map((item, index) => (
              index === activeIndex && (
                <motion.div
                  key={item.id}
                  className={styles.galleryBg}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Dark theme image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    priority
                    sizes="100vw"
                    className={styles.darkImage}
                  />
                  {/* Light theme image */}
                  <Image
                    src={item.imageLight}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center center' }}
                    priority
                    sizes="100vw"
                    className={styles.lightImage}
                  />
                  <div className={styles.galleryOverlay} />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className="container">
            <motion.div
              className={styles.heroMainContent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className={styles.heroTitle}>
                We don&apos;t just code; <br /> we architect <br />
                <span className={styles.titleGradient}>
                  <Typewriter
                    texts={[
                      'digital legacies.',
                      'secure systems.',
                      'powerful solutions.',
                      'scalable platforms.',
                      'modern experiences.'
                    ]}
                    speed={100}
                    deleteSpeed={50}
                    pauseDuration={2500}
                  />
                </span>
              </h1>
              <p className={styles.heroDesc}>
                The Burujan engineers digital fortresses. Vulnerability scanning, secure infrastructure, and high-end web architecture.
              </p>
              <Link href="/contact" className={styles.primaryBtn}>
                Start Building <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Skills Overlay */}
            <div className={styles.skillsOverlay}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={galleryItems[activeIndex].id}
                  className={styles.activeSkillCard}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.skillCardHeader}>
                    <div
                      className={styles.skillIconWrapper}
                      style={{ background: `${galleryItems[activeIndex].color}20`, borderColor: galleryItems[activeIndex].color }}
                    >
                      {(() => {
                        const IconComponent = galleryItems[activeIndex].icon;
                        return <IconComponent size={28} style={{ color: galleryItems[activeIndex].color }} />;
                      })()}
                    </div>
                    <h3 className={styles.skillCardTitle}>{galleryItems[activeIndex].title}</h3>
                  </div>
                  <div className={styles.skillTags}>
                    {galleryItems[activeIndex].skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        className={styles.skillTag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        style={{ borderColor: `${galleryItems[activeIndex].color}50` }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Gallery Navigation */}
            <div className={styles.galleryNav}>
              {galleryItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`${styles.galleryNavItem} ${index === activeIndex ? styles.active : ''}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className={styles.navItemContent}>
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </div>
                  {index === activeIndex && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      style={{ background: item.color }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <TechTicker />

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
            <h2 className={styles.pillarsTitle}>The Five Pillars of <br /> Power</h2>
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

            {/* Column 5 */}
            <motion.div className={styles.columnItem} variants={fadeInUp}>
              <span className={styles.columnNumber}>05</span>
              <div className={styles.columnIcon}><Cog size={40} strokeWidth={1.5} /></div>
              <h3 className={styles.columnTitle}>Mechanical <br /> Engineer</h3>
              <p className={styles.columnDesc}>
                Expertise in CAD Modelling (Solidworks), 3D Printing, Matlab, Webots Simulations, and Product Development.
              </p>
              <Link href="/services" className={styles.columnLink}>Explore <ArrowRight size={16} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section-padding ${styles.statsSection}`}>
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
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Specialist Pillars</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className={styles.statNumber}>Global</span>
              <span className={styles.statLabel}>Client Base</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
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
      </section>
    </main>
  );
}
