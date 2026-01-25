"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ThreeParticleLoaderProps {
    onFinished: () => void;
}

export default function ThreeParticleLoader({ onFinished }: ThreeParticleLoaderProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const intervalTime = 20;
        const steps = duration / intervalTime;

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + (100 / steps);
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        onFinished();
                    }, 500);
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onFinished]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000000',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Logo scaling up slightly */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    position: 'relative',
                    width: '180px',
                    height: '60px', // Adjusted for wide logo aspect ratio
                    marginBottom: '2rem'
                }}
            >
                <Image
                    src="/images/logo_nb.png"
                    alt="The Burujan"
                    fill
                    style={{
                        objectFit: 'contain',
                        filter: 'invert(1)' // Make it white
                    }}
                    priority
                />
            </motion.div>

            {/* Minimal Progress Bar */}
            <div style={{ width: '140px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '1px' }}>
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: '#ffffff',
                        transformOrigin: 'left'
                    }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ ease: "linear" }}
                />
            </div>
        </motion.div>
    );
}
