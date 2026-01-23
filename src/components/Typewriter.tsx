"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    className?: string;
    cursorClassName?: string;
}

export default function Typewriter({
    texts,
    speed = 80,
    deleteSpeed = 40,
    pauseDuration = 2000,
    className = '',
    cursorClassName = ''
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];

        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimer);
        }

        if (isDeleting) {
            if (displayText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            } else {
                const deleteTimer = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, deleteSpeed);
                return () => clearTimeout(deleteTimer);
            }
        } else {
            if (displayText === currentText) {
                setIsPaused(true);
            } else {
                const typeTimer = setTimeout(() => {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                }, speed);
                return () => clearTimeout(typeTimer);
            }
        }
    }, [displayText, currentIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

    return (
        <span className={className}>
            {displayText}
            <motion.span
                className={cursorClassName}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                style={{
                    display: 'inline-block',
                    marginLeft: '2px',
                    width: '3px',
                    height: '1em',
                    background: 'currentColor',
                    verticalAlign: 'text-bottom'
                }}
            />
        </span>
    );
}
