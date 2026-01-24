import PageHeader from '@/components/PageHeader';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import styles from '@/components/LegalLayout.module.css';

export default function PrivacyPolicyPage() {
    return (
        <main>
            <PageHeader
                title="Privacy Policy"
                breadcrumb={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
            />

            <section className="section-padding">
                <div className={`container ${styles.legalContainer}`}>
                    <div className={styles.prose}>
                        <h2 className={`${styles.title} section-title`}>
                            <Shield className="text-primary" size={28} color="var(--primary)" />
                            Protocol: Data Integrity
                        </h2>

                        <p className={styles.introText}>
                            At The Burujan, we treat your data as a critical structural component of your digital empire.
                            We do not trade, sell, or compromise your blueprints. This protocol outlines how we collect, safeguard, and utilize information within our digital foundry.
                        </p>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <Eye size={20} color="var(--primary)" /> 1. Information Collection
                            </h3>
                            <p className={styles.paragraph}>
                                We collect information that you strictly provide to us for the purpose of engineering your systems. This includes:
                            </p>
                            <ul className={styles.list}>
                                <li><strong>Identity Coordinates:</strong> Name, Email, Phone Number.</li>
                                <li><strong>Project Schematics:</strong> Project requirements, existing codebases, and design assets.</li>
                                <li><strong>Operational Data:</strong> Server logs and analytics required for system maintenance (only for active clients).</li>
                            </ul>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <Lock size={20} color="var(--primary)" /> 2. Data Security
                            </h3>
                            <p className={styles.paragraph}>
                                We employ industry-standard encryption and security protocols to encase your data in a virtual fortress. Access to your sensitive information is strictly limited to the Architects (core team) directly involved in your project.
                            </p>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <FileText size={20} color="var(--primary)" /> 3. Third-Party Integrations
                            </h3>
                            <p className={styles.paragraph}>
                                Our systems often integrate with third-party providers (e.g., AWS, Vercel, Google Cloud). We ensure that these partners adhere to high standards of security, but we recommend reviewing their respective privacy protocols.
                            </p>
                        </div>

                        <div className={styles.quoteBox}>
                            <p className={styles.quoteText}>
                                "Trust is the mortar that holds our digital structures together. We do not compromise it."
                            </p>
                            <p className={styles.quoteAuthor}>
                                — The Architects
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
