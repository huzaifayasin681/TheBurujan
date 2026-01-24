import PageHeader from '@/components/PageHeader';
import { Gavel, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import styles from '@/components/LegalLayout.module.css';

export default function TermsOfServicePage() {
    return (
        <main>
            <PageHeader
                title="Terms of Service"
                breadcrumb={[{ label: 'Terms of Service', href: '/terms-of-service' }]}
            />

            <section className="section-padding">
                <div className={`container ${styles.legalContainer}`}>
                    <div className={styles.prose}>
                        <h2 className={`${styles.title} section-title`}>
                            <Gavel className="text-primary" size={28} color="var(--primary)" />
                            Operational Parameters
                        </h2>

                        <p className={styles.introText}>
                            Acceptance of these terms indicates your agreement to the operational guidelines set forth by The Burujan.
                            These parameters safeguard both the Architect (Us) and the Visionary (You).
                        </p>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <CheckCircle size={20} color="var(--primary)" /> 1. Scope of Engagement
                            </h3>
                            <p className={styles.paragraph}>
                                All projects are defined by a specific "Blueprint" (Scope of Work). Any deviations or additions to this Blueprint must be mutually agreed upon and may incur additional resource allocation (cost).
                            </p>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <Scale size={20} color="var(--primary)" /> 2. Intellectual Property
                            </h3>
                            <p className={styles.paragraph}>
                                Upon full settlement of all invoices, ownership of the final "Structure" (Codebase and Assets) is transferred to you. The Burujan retains the right to display the work in our portfolio as a testament to our engineering capabilities, unless a Non-Disclosure Agreement (NDA) is in place.
                            </p>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <AlertTriangle size={20} color="var(--primary)" /> 3. Liability & Maintenance
                            </h3>
                            <p className={styles.paragraph}>
                                We build with stability in mind. However, The Burujan is not liable for damages caused by third-party failures, unauthorized modifications to the codebase by other parties, or Force Majeure events. Maintenance is provided only within the agreed-upon support period or active SLA.
                            </p>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <AlertTriangle size={20} color="var(--primary)" /> 4. Termination
                            </h3>
                            <p className={styles.paragraph}>
                                Either party may terminate the engagement with written notice if the other party breaches these Operational Parameters. Compensation for work already completed remains due.
                            </p>
                        </div>

                        <p className={styles.lastUpdated}>
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
