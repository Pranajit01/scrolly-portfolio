"use client";

import { motion } from "framer-motion";

const education = [
    {
        school: "Techno India University",
        degree: "B.Sc. in Generative AI & Data Analytics",
        duration: "2025 – Present | Ongoing",
        role: "CLASS REPRESENTATIVE",
        details: "Focus: Python, ML, SQL, GitHub Projects, Generative AI",
    },
    {
        school: "University of Kalyani",
        degree: "Bachelor of Science (Physics)",
        duration: "2023 | Completed",
        role: "",
        details: "",
    },
    {
        school: "Institute of Computer Literacy and Training (ICLT)",
        degree: "Diploma in Computer Applications (DCA)",
        duration: "2023 | Grade A",
        role: "",
        details: "",
    },
    {
        school: "WBCHSE",
        degree: "Higher Secondary (Science)",
        duration: "2023 | Grade A",
        role: "",
        details: "",
    },
    {
        school: "WBBSE",
        degree: "Secondary (Science)",
        duration: "2021 | Outstanding",
        role: "",
        details: "",
    },
];

const technicalSkills = "Python, Data Analytics, SQL, Machine Learning, Deep Learning, NLP, Prompt Engineering, Power BI & Tableau, C/C++, Java/JavaScript, HTML, Basic Full-Stack Development";
const softSkills = "Communication, Leadership, Problem Solving, Time Management, Teaching";

const certifications = [
    "AI Tools Workshop | United Latino Students Association (Dec 2025)",
    "Google Get Started with Dataplex (Oct 2025)",
    "Get Started with Looker Skill Badge (Oct 2025)",
    "Get Started with API Gateway Skill Badge (Oct 2025)",
    "Get Started with Cloud Storage Skill Badge (Oct 2025)",
    "Get Started with Pub/Sub Skill Badge (Oct 2025)",
    "The Basics of Google Cloud Compute Skill Badge (Oct 2025)",
    "Certificate_Python | Be10x (Sep 2025)",
];

const careerObjective = "I'm looking to build a career in Generative AI and Data Analytics. I want to put my technical skills and problem-solving abilities to good use, keep learning on the job, and get hands-on experience through internships and projects. My goal is to actually make a difference wherever I work.";

const references = [
    {
        name: "Dr Nisarga Bhattacharjee",
        role: "Assistant Professor, TECHNO INDIA UNIVERSITY",
        email: "XXXXX1234@xxxxx.com",
        phone: "XXXXXXXXXX",
    }
];

export default function ProfileDetails() {
    return (
        <section className="relative w-full pt-32 pb-20 px-4 md:px-12 bg-[#121212] text-white z-20">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Career Objective / About Me */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                    <h2 className="text-3xl font-bold tracking-normal text-blue-500 mb-6">
                        CAREER OBJECTIVE
                    </h2>
                    <div className="text-lg text-gray-300 leading-relaxed font-light">
                        {careerObjective}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400 text-sm">
                        <div>
                            <p><span className="text-white font-semibold">Name:</span> Pranajit Das (Jit)</p>
                            <p><span className="text-white font-semibold">DOB:</span> 28 March 2005</p>
                            <p><span className="text-white font-semibold">Nationality:</span> Indian</p>
                        </div>
                        <div className="md:text-right">
                            <p><span className="text-white font-semibold">Email:</span> daspranajit973@gmail.com</p>
                            <p><span className="text-white font-semibold">Phone:</span> 7478207706</p>
                            <p><span className="text-white font-semibold">Location:</span> Kolkata, India</p>
                        </div>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-normal text-purple-500 mb-8 ml-2">
                        EDUCATION
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {education.map((item, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all hover:bg-white/10">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">{item.school}</h3>
                                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded mt-2 md:mt-0 w-fit">
                                        {item.duration}
                                    </span>
                                </div>
                                <p className="text-purple-300 font-medium mb-1">{item.degree}</p>
                                {item.role && <p className="text-sm text-gray-400 font-semibold">{item.role}</p>}
                                {item.details && <p className="text-sm text-gray-500 mt-2">{item.details}</p>}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills & Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-normal text-green-500 ml-2">
                            SKILLS
                        </h2>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-full hover:border-green-500/30 transition-colors">
                            <div className="mb-6">
                                <h3 className="font-bold text-green-400 mb-3 text-lg">Technical Skills</h3>
                                <p className="text-gray-300 leading-relaxed text-sm">{technicalSkills}</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-green-400 mb-3 text-lg">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {softSkills.split(", ").map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications & Activities */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-normal text-yellow-500 ml-2">
                            CERTIFICATIONS
                        </h2>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md h-full hover:border-yellow-500/30 transition-colors">
                            <ul className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-gray-300 group">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-400 transition-colors"></span>
                                        <span className="group-hover:text-white transition-colors">{cert}</span>
                                    </li>
                                ))}
                                <li className="pt-4 border-t border-white/10 mt-4">
                                    <p className="text-white font-semibold text-sm">Activities:</p>
                                    <ul className="mt-2 space-y-2 text-sm text-gray-400">
                                        <li>• THE ESCAPE: Ideathon at Techno India University</li>
                                        <li>• Pitched AI-Powered Smart Dustbin System</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* References */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-normal text-pink-500 mb-8 ml-2">
                        REFERENCES
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {references.map((ref, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-pink-500/5 transition-all group">
                                <h3 className="font-bold text-white text-lg group-hover:text-pink-400 transition-colors">{ref.name}</h3>
                                <p className="text-sm text-gray-400 mb-4">{ref.role}</p>
                                <div className="space-y-1 text-sm text-gray-500 font-mono">
                                    <p>Email: {ref.email}</p>
                                    <p>Phone: {ref.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Declaration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center pt-12 pb-20 border-t border-white/5"
                >
                    <p className="text-gray-500 italic mb-2">
                        &quot;I confirm that the information above is true and accurate to the best of my knowledge.&quot;
                    </p>
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                        Date: 14/01/2026 • Place: KOLKATA
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
