"use client";

import { motion } from 'framer-motion';
import {
    Code, Server, Database, Cloud, Globe, Smartphone,
    Cpu, Cog, Layers, Box, Terminal, Shield, Workflow,
    Zap, Lock, Command, Hexagon, TabletSmartphone, Printer
} from 'lucide-react';
import styles from './TechTicker.module.css';

const techStack = [
    // Web & Frontend
    { name: 'Next.js', icon: Globe },
    { name: 'React', icon: Code },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Three.js', icon: Box },

    // Backend & Database
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Command },
    { name: 'Django', icon: Layers },
    { name: 'PostgreSQL', icon: Database },

    // Cloud & DevOps
    { name: 'AWS', icon: Cloud },
    { name: 'Docker', icon: Box },
    { name: 'Kubernetes', icon: Hexagon },
    { name: 'Terraform', icon: Workflow },

    // Mobile
    { name: 'Flutter', icon: Smartphone },
    { name: 'React Native', icon: TabletSmartphone },
    { name: 'Swift', icon: Zap },
    { name: 'Kotlin', icon: Smartphone },

    // Mechanical
    { name: 'Solidworks', icon: Cog },
    { name: 'Matlab', icon: Cpu },
    { name: 'Webots', icon: BotIcon },
    { name: '3D Printing', icon: Printer },

    // Security
    { name: 'Cybersecurity', icon: Shield },
    { name: 'Zero Trust', icon: Lock },
];

function BotIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
        </svg>
    )
}

export default function TechTicker() {
    // Duplicate array to create seamless loop
    const duplicatedStack = [...techStack, ...techStack];

    return (
        <div className={styles.tickerContainer}>
            <motion.div
                className={styles.tickerTrack}
                animate={{ x: [0, -2000] }} // Adjust value based on width
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedStack.map((tech, index) => (
                    <div key={`${tech.name}-${index}`} className={styles.techCard}>
                        <div className={styles.iconWrapper}>
                            <tech.icon size={20} strokeWidth={1.5} />
                        </div>
                        <span className={styles.techName}>{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
