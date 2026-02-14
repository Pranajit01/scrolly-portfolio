"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

// FRAME_STEP: Load every Nth frame. 
// User request: New sequence with 147 frames.
// Solution:
// 1. Range: 0 to 146 (147 frames).
// 2. Step: 6 (147 / 6 = ~24 frames). Keeps performance high.
// 3. Height: 200vh.
const START_FRAME = 0;
const END_FRAME = 146;
const TOTAL_RANGE = END_FRAME - START_FRAME;
const FRAME_STEP = 6;
const RENDER_FRAME_COUNT = Math.ceil(TOTAL_RANGE / FRAME_STEP);

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);

    // "Three scrolls" = 300vh (approximating 1 scroll = 100vh)
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < RENDER_FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();

                    // Calculate actual file index with offset
                    const realIndex = START_FRAME + (i * FRAME_STEP);

                    // Pad number with leading zeros (000, 001, ... 119)
                    const frameIndex = realIndex.toString().padStart(3, "0");

                    img.src = `/sequence/frame_${frameIndex}.png`;

                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${realIndex}`, e);
                        resolve(); // Resolve anyway to avoid blocking
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setLoading(false);
        };

        loadImages();
    }, []);

    // Update frame based on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        // latest is 0 to 1
        // Map 0-1 to 0-(RENDER_FRAME_COUNT-1)
        const frameIndex = Math.min(
            RENDER_FRAME_COUNT - 1,
            Math.floor(latest * RENDER_FRAME_COUNT)
        );
        setCurrentFrame(frameIndex);
    });

    // Render to canvas
    useEffect(() => {
        if (!canvasRef.current || images.length === 0 || !images[currentFrame]) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[currentFrame];

        // Handle high-DPI displays
        const dpr = window.devicePixelRatio || 1;
        // Set canvas dimensions to window size
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        // Scale context to ensure correct drawing operations
        ctx.scale(dpr, dpr);

        // CSS size
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // Draw image cover (simulate object-fit: cover)
        const render = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const imgW = img.width;
            const imgH = img.height;

            const scale = Math.max(w / imgW, h / imgH);
            const x = (w - imgW * scale) / 2;
            const y = (h - imgH * scale) / 2;

            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(img, x, y, imgW * scale, imgH * scale);
        };

        render();

        // OPTIONAL: smooth out if resize happens
        const handleResize = () => requestAnimationFrame(render);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [currentFrame, images]);

    return (
        <div ref={containerRef} className="relative h-[200vh] bg-transparent">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50">
                        Loading...
                    </div>
                )}
                {/* will-change: contents helps browser optimize rendering */}
                <canvas ref={canvasRef} className="block w-full h-full will-change-contents" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
