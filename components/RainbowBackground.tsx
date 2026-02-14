"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RainbowBackground() {
    return (
        <div className="fixed inset-0 z-[-1] min-h-screen w-full overflow-hidden bg-[#050505]">
            {/* Animated Gradient Orbs */}
            <motion.div
                // Optimized animations: reduced scale variance and rotation speed
                animate={{
                    rotate: [0, 360],
                    x: [0, 20, -20, 0],
                    y: [0, -20, 20, 0]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[80px] will-change-transform"
            />
            <motion.div
                animate={{
                    rotate: [360, 0],
                    x: [0, -20, 20, 0],
                    y: [0, 20, -20, 0]
                }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[80px] will-change-transform"
            />
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[100px] will-change-transform"
            />

            {/* Subtle Rainbow Noise/Grain (Optional, keeping it clean for now) */}

            {/* Spotlight effect for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none" />
        </div>
    );
}
