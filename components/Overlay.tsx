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

    const top = useTransform(scrollYProgress, [0, 0.2], ["50%", targetTop]);
    const left = useTransform(scrollYProgress, [0, 0.2], ["50%", targetLeft]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, targetScale]);

    // X needs to remain -50% if we are at left 50% (mobile), but go to 0% if we are at left 85% (desktop)
    // Actually, if we keep left 50% on mobile, we need x to stay -50%.
    // If desktop, left 85%, x goes to 0% (origin top-right logic).
    const targetX = isMobile ? "-50%" : "0%";
    const x = useTransform(scrollYProgress, [0, 0.2], ["-50%", targetX]);

    const y = useTransform(scrollYProgress, [0, 0.2], ["-50%", "0%"]);

    // Sticky Name Fade Out at the end
    const nameOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);

    // 2. Middle Text Fade In/Out - Widened timeline for readability
    // Was: [0.3, 0.4, 0.6, 0.7] -> New: [0.25, 0.35, 0.65, 0.75]
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.75], [50, -50]);

    // 3. Bottom Text Fade In/Out - Widened timeline
    // Was: [0.7, 0.8, 0.95] -> New: [0.7, 0.8, 0.95] (This one acts as the "last" one before profile, so keep it)
    const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

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
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 -translate-y-1/2 w-[90%] md:max-w-lg text-center md:text-left"
            >
                <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                    Turning knowledge into <span className="text-blue-500">real-world action</span>.
                </h2>
                <p className="text-sm md:text-lg text-gray-400 mt-6 leading-relaxed">
                    &quot;AI isn&apos;t replacing skills—it&apos;s amplifying them for those who know how to use it right.&quot;
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-20 -translate-y-1/2 w-[90%] md:max-w-lg text-center md:text-right"
            >
                <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                    Building intelligent <span className="text-purple-500">systems</span>.
                </h2>
                <p className="text-sm md:text-lg text-gray-400 mt-6 leading-relaxed">
                    Aspiring to create solutions in business, education, and society.
                </p>
            </motion.div>
        </div>
    );
}
