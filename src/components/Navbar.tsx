"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Layers } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoBox}>B</div>
          <span>TheBurujan</span>
        </Link>

        <ul className={styles.navLinks}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink}>About us</Link></li>
          <li><Link href="/services" className={styles.navLink}>Services</Link></li>
          <li><Link href="/portfolio" className={styles.navLink}>Portfolio</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact us</Link></li>
        </ul>

        <Link href="/contact" className={styles.ctaButton}>
          Get Started
        </Link>
        <button className={styles.mobileMenuBtn}>☰</button>
      </div>
    </nav>
  );
}
