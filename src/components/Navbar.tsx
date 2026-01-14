"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <div className={styles.logoBox}>B</div>
          <span>TheBurujan</span>
        </Link>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          <li><Link href="/" className={styles.navLink} onClick={() => setMobileOpen(false)}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink} onClick={() => setMobileOpen(false)}>About us</Link></li>
          <li><Link href="/services" className={styles.navLink} onClick={() => setMobileOpen(false)}>Services</Link></li>
          <li><Link href="/portfolio" className={styles.navLink} onClick={() => setMobileOpen(false)}>Portfolio</Link></li>
          <li><Link href="/contact" className={styles.navLink} onClick={() => setMobileOpen(false)}>Contact us</Link></li>

          <li className={styles.mobileCTA}>
            <Link href="/contact" className={styles.ctaButton} onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </li>
        </ul>

        <div className={styles.desktopCTA}>
          <Link href="/contact" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>

        <button className={styles.mobileMenuBtn} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
