"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentFrame, setCurrentFrame] = useState(0);

    // We need a tall container to scroll through
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

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    // Pad number with leading zeros (000, 001, ... 119)
                    const frameIndex = i.toString().padStart(3, "0");
                    // NOTE: Adjust file naming logic if necessary based on exact asset names.
                    // Based on file list: frame_000_delay-0.067s.png
                    // The delay suffix might vary slightly or be consistent. 
                    // To be safe, we might need a more robust loader or assume standard naming if we renamed them.
                    // Since we didn't rename them, we have to guess the delay part or regex match.
                    // However, for this demo, I will assume we might need to handle the variable delay string or 
                    // just try to load the known structure. 
                    // Let's assume for now they are mostly 0.067s or 0.066s. 
                    // Actually, strict file paths are tricky without a manifest.
                    // RECOMMENDATION: Rename files to frame_000.png via script or just handle error.
                    // For this implementation, I will assume a standard name `frame_${index}.png` 
                    // and relies on a user step to rename them OR I generate a manifest.
                    // Since I can't generate a manifest easily client-side without a server listings, 
                    // I will use a simple path for now and ask user to rename or I will execute a rename command.

                    img.src = `/sequence/frame_${frameIndex}.png`;

                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i}`, e);
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
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
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
        <div ref={containerRef} className="relative h-[130vh] bg-transparent">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50">
                        Loading Sequence...
                    </div>
                )}
                <canvas ref={canvasRef} className="block w-full h-full" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
