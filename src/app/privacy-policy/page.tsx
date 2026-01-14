import PageHeader from '@/components/PageHeader';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
    return (
        <main>
            <PageHeader
                title="Privacy Policy"
                breadcrumb={[{ label: 'Privacy Policy', href: '/privacy-policy' }]}
            />

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="prose" style={{ color: 'var(--text-secondary)' }}>
                        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shield className="text-primary" size={28} color="var(--primary)" />
                            Protocol: Data Integrity
                        </h2>

                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            At The Burujan, we treat your data as a critical structural component of your digital empire.
                            We do not trade, sell, or compromise your blueprints. This protocol outlines how we collect, safeguard, and utilize information within our digital foundry.
                        </p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Eye size={20} color="var(--primary)" /> 1. Information Collection
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                We collect information that you strictly provide to us for the purpose of engineering your systems. This includes:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li><strong>Identity Coordinates:</strong> Name, Email, Phone Number.</li>
                                <li><strong>Project Schematics:</strong> Project requirements, existing codebases, and design assets.</li>
                                <li><strong>Operational Data:</strong> Server logs and analytics required for system maintenance (only for active clients).</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Lock size={20} color="var(--primary)" /> 2. Data Security
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                We employ industry-standard encryption and security protocols to encase your data in a virtual fortress. Access to your sensitive information is strictly limited to the Architects (core team) directly involved in your project.
                            </p>
                        </div>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FileText size={20} color="var(--primary)" /> 3. Third-Party Integrations
                            </h3>
                            <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                                Our systems often integrate with third-party providers (e.g., AWS, Vercel, Google Cloud). We ensure that these partners adhere to high standards of security, but we recommend reviewing their respective privacy protocols.
                            </p>
                        </div>

                        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--primary)', borderRadius: '4px' }}>
                            <p style={{ color: '#fff', fontStyle: 'italic' }}>
                                "Trust is the mortar that holds our digital structures together. We do not compromise it."
                            </p>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                — The Architects
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
