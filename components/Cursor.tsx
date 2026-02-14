"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            setIsHovered(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null
            );
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - (isHovered ? 24 : 16),
                    y: mousePosition.y - (isHovered ? 24 : 16),
                    width: isHovered ? 48 : 32,
                    height: isHovered ? 48 : 32,
                    opacity: 1
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.8 }}
            />
        </>
    );
}
