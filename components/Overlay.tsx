"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
    // 1. Name/Role Animation
    // Moves from Center (initial) to Top-Right (scroll 0.2)
    const top = useTransform(scrollYProgress, [0, 0.2], ["50%", "5%"]);
    const left = useTransform(scrollYProgress, [0, 0.2], ["50%", "85%"]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);
    const x = useTransform(scrollYProgress, [0, 0.2], ["-50%", "0%"]);
    const y = useTransform(scrollYProgress, [0, 0.2], ["-50%", "0%"]);

    // Sticky Name Fade Out at the end (so it doesn't overlap next section)
    const nameOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);

    // 2. Middle Text Fade In/Out
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.7], [50, -50]);

    // 3. Bottom Text Fade In/Out
    const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
            {/* Sticky Name & Role */}
            <motion.div
                style={{ top, left, x, y, scale, opacity: nameOpacity }}
                className="fixed z-50 flex flex-col items-center md:items-end text-center md:text-right w-max origin-top-right p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/5 shadow-2xl transition-all"
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
                className="fixed top-1/2 left-4 md:left-20 -translate-y-1/2 max-w-[90%] md:max-w-lg"
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
                className="fixed top-1/2 right-4 md:right-20 -translate-y-1/2 max-w-[90%] md:max-w-lg text-right"
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
