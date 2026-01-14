import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        {breadcrumb.map((item, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ChevronRight size={14} />
                                {index === breadcrumb.length - 1 ? (
                                    <span className={styles.active}>{item.label}</span>
                                ) : (
                                    <Link href={item.href}>{item.label}</Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Decorative background elements could be added here */}
        </section>
    );
}
