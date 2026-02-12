import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Neon Horizon",
        category: "WebGL Experience",
        description: "An interactive 3D landscape built with Three.js and React Three Fiber.",
    },
    {
        id: 2,
        title: "Apex Finance",
        category: "Fintech Dashboard",
        description: "High-performance real-time data visualization platform.",
    },
    {
        id: 3,
        title: "Lumina API",
        category: "Backend Architecture",
        description: "Scalable serverless infrastructure handling 1M+ req/s.",
    },
    {
        id: 4,
        title: "Echo",
        category: "Mobile App",
        description: "Social audio experience connecting communities.",
    },
];

export default function Projects() {
    return (
        <section className="relative w-full py-32 px-4 md:px-12 bg-[#121212] flex flex-col items-center">
            <div className="max-w-7xl w-full">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tighter">
                    Selected Works
                </h2>

                <div className="flex flex-col items-center justify-center py-20 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Coming Soon
                    </h3>
                    <p className="text-gray-400 text-center max-w-lg px-4">
                        I am currently working on some exciting projects involving Generative AI and Data Analytics. Stay tuned!
                    </p>
                </div>
            </div>
        </section>
    );
}
