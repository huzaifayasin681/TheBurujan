import PageHeader from '@/components/PageHeader';
import { Gavel, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

export default function TermsOfServicePage() {
    return (
        <main>
            <PageHeader
                title="Terms of Service"
                breadcrumb={[{ label: 'Terms of Service', href: '/terms-of-service' }]}
            />

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="prose" style={{ color: 'var(--text-secondary)' }}>
                        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Gavel className="text-primary" size={28} color="var(--primary)" />
                            Operational Parameters
                        </h2>

                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Acceptance of these terms indicates your agreement to the operational guidelines set forth by The Burujan.
                            These parameters safeguard both the Architect (Us) and the Visionary (You).
                        </p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={20} color="var(--primary)" /> 1. Scope of Engagement
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                All projects are defined by a specific "Blueprint" (Scope of Work). Any deviations or additions to this Blueprint must be mutually agreed upon and may incur additional resource allocation (cost).
                            </p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Scale size={20} color="var(--primary)" /> 2. Intellectual Property
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                Upon full settlement of all invoices, ownership of the final "Structure" (Codebase and Assets) is transferred to you. The Burujan retains the right to display the work in our portfolio as a testament to our engineering capabilities, unless a Non-Disclosure Agreement (NDA) is in place.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <AlertTriangle size={20} color="var(--primary)" /> 3. Liability & Maintenance
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                We build with stability in mind. However, The Burujan is not liable for damages caused by third-party failures, unauthorized modifications to the codebase by other parties, or Force Majeure events. Maintenance is provided only within the agreed-upon support period or active SLA.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <AlertTriangle size={20} color="var(--primary)" /> 4. Termination
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                Either party may terminate the engagement with written notice if the other party breaches these Operational Parameters. Compensation for work already completed remains due.
                            </p>
                        </div>

                        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '3rem' }}>
                            Last Updated: January 2026
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
