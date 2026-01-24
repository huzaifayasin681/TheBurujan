import PageHeader from '@/components/PageHeader';
import { Server, Clock, Activity, LifeBuoy } from 'lucide-react';
import styles from '@/components/LegalLayout.module.css';

export default function SLAPage() {
    return (
        <main>
            <PageHeader
                title="Service Level Agreement"
                breadcrumb={[{ label: 'SLA', href: '/sla' }]}
            />

            <section className="section-padding">
                <div className={`container ${styles.legalContainer}`}>
                    <div className={styles.prose}>
                        <h2 className={`${styles.title} section-title`}>
                            <Activity className="text-primary" size={28} color="var(--primary)" />
                            System Guarantees
                        </h2>

                        <p className={styles.introText}>
                            Our breakdown-proof engineering philosophy means we stand by our builds.
                            This Service Level Agreement (SLA) defines the reliability and support you can expect from The Burujan for managed systems.
                        </p>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <Server size={20} color="var(--primary)" /> 1. Uptime Commitment
                            </h3>
                            <p className={styles.paragraph}>
                                For client systems hosted and managed directly by The Burujan, we aim for a <strong>99.9% Uptime Guarantee</strong>.
                                In the event of downtime exceeding this threshold, service credits may be applied to your maintenance retainer.
                            </p>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <Clock size={20} color="var(--primary)" /> 2. Response Times
                            </h3>
                            <p className={styles.paragraph}>
                                Our support team (The Architects) adheres to the following response matrix:
                            </p>
                            <div className={styles.tableWrapper}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Severity Level</th>
                                            <th>Description</th>
                                            <th>Response Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className={styles.tdCritical}>Critical (L1)</td>
                                            <td>System Down / Core Feature Broken</td>
                                            <td>&lt; 4 Hours</td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tdHigh}>High (L2)</td>
                                            <td>Performance Degradation</td>
                                            <td>&lt; 24 Hours</td>
                                        </tr>
                                        <tr>
                                            <td>Standard (L3)</td>
                                            <td>Minor Bugs / Content Updates</td>
                                            <td>&lt; 48 Hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={styles.sectionBlock}>
                            <h3 className={styles.blockTitle}>
                                <LifeBuoy size={20} color="var(--primary)" /> 3. Maintenance Windows
                            </h3>
                            <p className={styles.paragraph}>
                                Routine maintenance and upgrades are performed during off-peak hours (usually weekends) to minimize disruption. Clients are notified at least 24 hours in advance of any scheduled maintenance that may affect availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
