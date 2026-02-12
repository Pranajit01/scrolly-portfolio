"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
    // Opacity logic might not be needed if we want it to stay visible, just move.
    // Actually, user wants it to stick. So let's keep it opacity 1 mostly, maybe fade out others.

    // Move Name/Role from Center to Top Right
    // Define the "end" state as fixed top-0 right-0 but we use transforms.
    // Let's use fixed positioning changes via motion values or standard CSS with layout animation.
    // A simple way: animate `top`, `left`, `transform`.
    // Initial: top: 50%, left: 50%, translate(-50%, -50%)
    // Final: top: 2rem, left: auto (can't animate auto), right: 2rem, translate(0, 0)
    // Framer motion `layout` prop is good for this but might be jumpy with scroll.
    // Let's use `top` and `left` percentages.

    const top = useTransform(scrollYProgress, [0, 0.2], ["50%", "5%"]);
    const left = useTransform(scrollYProgress, [0, 0.2], ["50%", "85%"]); // Move towards right
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]); // Shrink a bit
    const x = useTransform(scrollYProgress, [0, 0.2], ["-50%", "0%"]); // Remove centering offset
    const y = useTransform(scrollYProgress, [0, 0.2], ["-50%", "0%"]);

    // Fade out other sections as we scroll
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.7], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.95], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.7, 1], [50, 0]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
            {/* Sticky Name & Role */}
            <motion.div
                style={{ top, left, x, y, scale }}
                className="fixed z-50 flex flex-col items-center md:items-end text-center md:text-right w-max origin-top-right p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/5 shadow-2xl transition-all"
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mix-blend-difference whitespace-nowrap">
                    PRANAJIT DAS
                </h1>
                <p className="text-sm md:text-xl text-gray-400 mt-2 tracking-widest uppercase">
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
                className="fixed top-1/2 left-4 md:left-20 -translate-y-1/2 max-w-lg"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Turning knowledge into <span className="text-blue-500">real-world action</span>.
                </h2>
                <p className="text-base md:text-lg text-gray-400 mt-6">
                    &quot;AI isn&apos;t replacing skills—it&apos;s amplifying them for those who know how to use it right.&quot;
                </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="fixed top-1/2 right-4 md:right-20 -translate-y-1/2 max-w-lg text-right"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Building intelligent <span className="text-purple-500">systems</span>.
                </h2>
                <p className="text-base md:text-lg text-gray-400 mt-6">
                    Aspiring to create solutions in business, education, and society.
                </p>
            </motion.div>
        </div>
    );
}
