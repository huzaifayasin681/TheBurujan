"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function BuildingBlock({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01 * speed;
            mesh.current.rotation.y += 0.015 * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh} position={position}>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.8}
                    emissive={color}
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </Float>
    );
}

function GridFormation() {
    const blocks = useMemo(() => {
        const items = [];
        const colors = ['#D4AF37', '#ffffff', '#2A4365'];
        // Create a loose 3x3x3 grid but omitted some to look "under construction"
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    if (Math.random() > 0.4) {
                        items.push({
                            position: [x * 1.2, y * 1.2, z * 1.2] as [number, number, number],
                            color: colors[Math.floor(Math.random() * colors.length)],
                            speed: 0.5 + Math.random()
                        });
                    }
                }
            }
        }
        return items;
    }, []);

    const group = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <group ref={group}>
            {blocks.map((block, i) => (
                <BuildingBlock key={i} position={block.position} color={block.color} speed={block.speed} />
            ))}
        </group>
    );
}

export default function HeroAnimation() {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d2aa" />

                <GridFormation />

                {/* Subtle environment reflection */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
