"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SectionTransitionProps {
    startPosition: { x: number; y: number };
    endPosition: { x: number; y: number };
}

export default function SectionTransition({ startPosition, endPosition }: SectionTransitionProps) {
    const [position, setPosition] = useState(startPosition);
    const [mousePosition, setMousePosition] = useState(endPosition);
    const [rotation, setRotation] = useState(0);
    const [isDead, setIsDead] = useState(false);
    const [deathPosition, setDeathPosition] = useState({ x: 0, y: 0 });
    const [showSwatter, setShowSwatter] = useState(false);
    const animationFrameRef = useRef<number | null>(null);
    const lastTimeRef = useRef(performance.now());
    const positionRef = useRef(position);

    // Update position ref when position changes
    useEffect(() => {
        positionRef.current = position;
    }, [position]);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Handle death sequence
    useEffect(() => {
        if (isDead) {
            // Set death position to current position
            setDeathPosition(position);
            // Stop the animation loop
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, [isDead, position]);

    // Move fly towards mouse
    useEffect(() => {
        const moveSpeed = 4;
        const rotationSpeed = 0.5;

        const animate = (currentTime: number) => {
            if (isDead) return;

            const deltaTime = Math.min(currentTime - lastTimeRef.current, 16.67);
            lastTimeRef.current = currentTime;

            // Calculate direction to mouse
            const dx = mousePosition.x - positionRef.current.x;
            const dy = mousePosition.y - positionRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0) {
                // Calculate movement with smoother transitions
                const moveAmount = Math.min(moveSpeed * (deltaTime / 16.67), distance);
                const ratio = moveAmount / distance;

                // Update position with easing
                const newX = positionRef.current.x + dx * ratio;
                const newY = positionRef.current.y + dy * ratio;
                positionRef.current = { x: newX, y: newY };
                setPosition({ x: newX, y: newY });

                // Calculate rotation with smoother transitions
                const targetRotation = Math.atan2(dy, dx) * (180 / Math.PI) - 90 + 180;
                const currentRotation = rotation;
                const rotationDiff = ((targetRotation - currentRotation + 180) % 360) - 180;
                const newRotation = currentRotation + rotationDiff * rotationSpeed;
                setRotation(newRotation);
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [mousePosition, isDead, rotation]);

    // Handle click on fly
    const handleFlyClick = () => {
        if (!isDead) {
            setShowSwatter(true);
            setIsDead(true);
            // Hide swatter after animation
            setTimeout(() => setShowSwatter(false), 1000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 pointer-events-none z-50"
        >
            <motion.div
                className="absolute"
                style={{
                    width: '40px',
                    height: '40px',
                    x: isDead ? deathPosition.x - 20 : position.x - 20,
                    y: isDead ? deathPosition.y - 20 : position.y - 20,
                    transform: `translate(-50%, -50%)`,
                    pointerEvents: isDead ? 'none' : 'auto',
                    willChange: 'transform'
                }}
                onClick={handleFlyClick}
            >
                <motion.div
                    animate={{
                        rotate: isDead ? rotation + 180 : rotation,
                        y: isDead ? window.innerHeight - deathPosition.y : 0,
                        scale: isDead ? [1, 1.2, 1] : 1,
                        opacity: isDead ? [1, 1, 0.5] : 1
                    }}
                    transition={{
                        duration: isDead ? 1 : 0.016,
                        ease: isDead ? "easeInOut" : "linear",
                        times: isDead ? [0, 0.3, 1] : undefined
                    }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/new_fly_logo.svg"
                        alt="ZappaFly Logo"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>

            {/* Fly Swatter */}
            {showSwatter && (
                <motion.div
                    className="absolute pointer-events-none"
                    style={{
                        width: '100px',
                        height: '100px',
                        x: deathPosition.x - 50,
                        y: deathPosition.y - 50,
                        transform: `translate(-50%, -50%)`
                    }}
                    initial={{
                        scale: 0,
                        rotate: -45,
                        opacity: 0
                    }}
                    animate={{
                        scale: [0, 1.2, 1],
                        rotate: [-45, 0],
                        opacity: [0, 1, 1]
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        times: [0, 0.3, 1]
                    }}
                >
                    <Image
                        src="/fly_swatter1.svg"
                        alt="Fly Swatter"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            )}
        </motion.div>
    );
} 