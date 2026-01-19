import PageHeader from '@/components/PageHeader';
import { Server, Clock, Activity, LifeBuoy } from 'lucide-react';

export default function SLAPage() {
    return (
        <main>
            <PageHeader
                title="Service Level Agreement"
                breadcrumb={[{ label: 'SLA', href: '/sla' }]}
            />

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="prose" style={{ color: 'var(--text-secondary)' }}>
                        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Activity className="text-primary" size={28} color="var(--primary)" />
                            System Guarantees
                        </h2>

                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Our breakdown-proof engineering philosophy means we stand by our builds.
                            This Service Level Agreement (SLA) defines the reliability and support you can expect from The Burujan for managed systems.
                        </p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: 'var(--foreground)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Server size={20} color="var(--primary)" /> 1. Uptime Commitment
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                For client systems hosted and managed directly by The Burujan, we aim for a <strong>99.9% Uptime Guarantee</strong>.
                                In the event of downtime exceeding this threshold, service credits may be applied to your maintenance retainer.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: 'var(--foreground)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={20} color="var(--primary)" /> 2. Response Times
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                Our support team (The Architects) adheres to the following response matrix:
                            </p>
                            <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', minWidth: '500px' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid var(--line-color)', textAlign: 'left' }}>
                                            <th style={{ padding: '0.75rem', color: 'var(--foreground)' }}>Severity Level</th>
                                            <th style={{ padding: '0.75rem', color: 'var(--foreground)' }}>Description</th>
                                            <th style={{ padding: '0.75rem', color: 'var(--foreground)' }}>Response Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid var(--line-color)' }}>
                                            <td style={{ padding: '0.75rem', color: 'var(--primary)' }}>Critical (L1)</td>
                                            <td style={{ padding: '0.75rem' }}>System Down / Core Feature Broken</td>
                                            <td style={{ padding: '0.75rem' }}>&lt; 4 Hours</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--line-color)' }}>
                                            <td style={{ padding: '0.75rem', color: '#ffd700' }}>High (L2)</td>
                                            <td style={{ padding: '0.75rem' }}>Performance Degradation</td>
                                            <td style={{ padding: '0.75rem' }}>&lt; 24 Hours</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid var(--line-color)' }}>
                                            <td style={{ padding: '0.75rem' }}>Standard (L3)</td>
                                            <td style={{ padding: '0.75rem' }}>Minor Bugs / Content Updates</td>
                                            <td style={{ padding: '0.75rem' }}>&lt; 48 Hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: 'var(--foreground)', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <LifeBuoy size={20} color="var(--primary)" /> 3. Maintenance Windows
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                Routine maintenance and upgrades are performed during off-peak hours (usually weekends) to minimize disruption. Clients are notified at least 24 hours in advance of any scheduled maintenance that may affect availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
