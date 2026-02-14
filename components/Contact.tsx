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

                <form
                    action="https://formsubmit.co/daspranajit973@gmail.com"
                    method="POST"
                    className="w-full max-w-lg mx-auto flex flex-col gap-4"
                >
                    {/* Access Key / Spam Protection */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://scrolly-portfolio.vercel.app/" />
                    <input type="hidden" name="_subject" value="New Connection Request from Portfolio" />

                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-sm text-gray-400 font-semibold ml-1">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-sm text-gray-400 font-semibold ml-1">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-sm text-gray-400 font-semibold ml-1">Phone (Optional)</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+1 234 567 890"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        <label className="text-sm text-gray-400 font-semibold ml-1">Purpose / Message (Optional)</label>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="I'd like to connect regarding..."
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full px-8 py-4 bg-white text-black font-bold rounded-xl text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                        Connect
                    </button>

                </form>

                <div className="mt-8 flex gap-6 justify-center">
                    <a
                        href="https://linkedin.com/in/pranajitdas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Pranajit01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase"
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
