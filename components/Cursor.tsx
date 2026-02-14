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
            {/* Apple/iPad Style Cursor: Translucent Gray Circle */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block backdrop-none"
                style={{
                    background: "rgba(200, 200, 200, 0.4)", // Translucent gray
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                }}
                animate={{
                    x: mousePosition.x - (isHovered ? 30 : 10),
                    y: mousePosition.y - (isHovered ? 30 : 10),
                    width: isHovered ? 60 : 20,
                    height: isHovered ? 60 : 20,
                    borderRadius: "50%"
                }}
                // Fast, snappy spring transition like iPadOS
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />
        </>
    );
}
