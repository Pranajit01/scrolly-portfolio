"use client";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="relative py-20 px-6 md:px-20 min-h-[60vh] flex flex-col items-center justify-center z-10">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-900/20 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Let&apos;s <span className="text-blue-500">Create</span> Together.
                </h2>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Whether you have an ambitious AI project, need data-driven insights, or just want to discuss the future of tech — my inbox is open.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="mailto:contact@pranajitdas.com"
                        className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                        Say Hello
                    </a>

                    <a
                        href="https://linkedin.com/in/pranajitdas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all duration-300"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Pranajit01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all duration-300"
                    >
                        GitHub
                    </a>
                </div>

                <div className="mt-12 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Pranajit Das. Built with Next.js & Framer Motion.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
