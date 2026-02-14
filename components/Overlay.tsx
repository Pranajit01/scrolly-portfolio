"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
    // Responsive Logic: Check if mobile to adjust target position
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // 1. Name/Role Animation
    // Desktop: center -> top-right (85%)
    // Mobile: center -> top-center (50%) or top-left, keeping it visible.
    // Let's keep it centered on mobile (left 50%, x -50%) but moved to top.

    const targetLeft = isMobile ? "50%" : "85%";
    const targetTop = isMobile ? "10%" : "5%";
    const targetScale = isMobile ? 0.8 : 0.6;

    // SECTION 1: 0% -> 30% of scroll
    const top = useTransform(scrollYProgress, [0, 0.25], ["75%", targetTop]);
    const left = useTransform(scrollYProgress, [0, 0.25], ["50%", targetLeft]);
    const scale = useTransform(scrollYProgress, [0, 0.25], [1, targetScale]);
    const targetX = isMobile ? "-50%" : "0%";
    const x = useTransform(scrollYProgress, [0, 0.25], ["-50%", targetX]);
    const y = useTransform(scrollYProgress, [0, 0.25], ["-50%", "0%"]);
    const nameOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

    // SECTION 2: 35% -> 65% (Middle Scroll)
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.35, 0.65], [50, -50]);

    // SECTION 3: 70% -> 100% (Last Scroll)
    const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.7, 1.0], [50, -50]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
            {/* Sticky Name & Role */}
            <motion.div
                style={{ top, left, x, y, scale, opacity: nameOpacity }}
                className="fixed z-50 flex flex-col items-center md:items-end text-center md:text-right w-max origin-top-right p-4 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/5 shadow-2xl transition-all"
            >
                {/* Fixed typography: removed tracking-tighter, added toggle for mobile size */}
                <h1 className="text-3xl md:text-7xl font-bold tracking-normal text-white mix-blend-difference whitespace-nowrap">
                    PRANAJIT DAS
                </h1>
                <p className="text-sm md:text-xl text-gray-400 mt-2 tracking-wide uppercase">
                    Generative AI Engineer <br /> & Data Analyst
                </p>
                <a
                    href="/resume.pdf"
                    download="Pranajit_Das_Resume.pdf"
                    className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors pointer-events-auto text-sm"
                >
                    Download CV
                </a>
            </motion.div>

            {/* Section 2 */}
            {/* Section 2 */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 -translate-y-1/2 w-[90%] md:max-w-lg text-center md:text-left pointer-events-none">
                <motion.div style={{ opacity: opacity2, y: y2 }}>
                    <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                        Turning knowledge into <span className="text-blue-500">real-world action</span>.
                    </h2>
                    <p className="text-sm md:text-lg text-gray-400 mt-6 leading-relaxed">
                        &quot;AI isn&apos;t replacing skills—it&apos;s amplifying them for those who know how to use it right.&quot;
                    </p>
                </motion.div>
            </div>

            {/* Section 3 */}
            {/* Section 3 */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-20 -translate-y-1/2 w-[90%] md:max-w-lg text-center md:text-right pointer-events-none">
                <motion.div style={{ opacity: opacity3, y: y3 }}>
                    <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                        Building intelligent <span className="text-purple-500">systems</span>.
                    </h2>
                    <p className="text-sm md:text-lg text-gray-400 mt-6 leading-relaxed">
                        Aspiring to create solutions in business, education, and society.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
