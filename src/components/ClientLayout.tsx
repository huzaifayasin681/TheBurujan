"use client";

import { useState, useEffect } from 'react';
import ThreeParticleLoader from '@/components/ThreeParticleLoader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && (
                <ThreeParticleLoader onFinished={() => setLoading(false)} />
            )}
            <div
                style={{
                    opacity: loading ? 0 : 1,
                    transition: 'opacity 1s ease-in',
                    height: loading ? '0px' : 'auto',
                    overflow: loading ? 'hidden' : 'visible'
                }}
            >
                {children}
            </div>
        </>
    );
}
