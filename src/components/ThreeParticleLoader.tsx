"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers } from 'lucide-react';

export default function ThreeParticleLoader({ onFinished }: { onFinished?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onFinished?.(), 500);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 200);

        // Three.js Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Particles (Constellations)
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 700;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles in a sphere/cloud
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Gold/Teal material
        const material = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xD4AF37, // Gold
            transparent: true,
            opacity: 0.8,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, material);
        scene.add(particlesMesh);

        // Lines connecting particles (Constellation effect)
        // Note: Doing specific lines in raw Three.js can be heavy if checking all pairs. 
        // We'll use a simpler trick: A wireframe sphere or just rotating particles for performance.
        // Or we can add a secondary geometry for structure.

        const geo2 = new THREE.IcosahedronGeometry(3, 1);
        const mat2 = new THREE.MeshBasicMaterial({
            color: 0x2D3748,
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const sphere = new THREE.Mesh(geo2, mat2);
        scene.add(sphere);

        camera.position.z = 5;

        // Animation
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        };

        document.addEventListener('mousemove', onDocumentMouseMove);

        const animate = () => {
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            sphere.rotation.y += 0.5 * (targetX - sphere.rotation.y);
            sphere.rotation.x += 0.5 * (targetY - sphere.rotation.x);

            particlesMesh.rotation.y = -mouseX * 0.0002;
            particlesMesh.rotation.x = -mouseY * 0.0002;

            // Gentle constant rotation
            particlesMesh.rotation.z += 0.001;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [onFinished]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#0B1121',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'opacity 0.8s ease-out',
            }}
        >
            <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />

            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <Layers size={48} color="#D4AF37" />
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>The Burujan</h1>
                </div>
                <div style={{ width: '200px', height: '2px', background: 'rgba(255,255,255,0.1)', margin: '0 auto', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: '#D4AF37', transition: 'width 0.2s' }} />
                </div>
                <p style={{ marginTop: '1rem', color: '#718096', fontSize: '0.9rem', letterSpacing: '2px' }}>INITIALIZING SYSTEMS...</p>
            </div>
        </div>
    );
}
