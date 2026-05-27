import { motion } from "motion/react";
import PixelSnow from "./effects/PixelSnow";
import TextType from "./ui/TextType";

export function Hero() {

    return (

        <section className="relative w-full h-screen flex flex-col justify-between p-6 md:p-12 lg:p-16 bg-[#0a0a0a] text-white overflow-hidden font-sans select-none">

            {/* Background Effect Overlay */}

            <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
                <PixelSnow />
            </div>

            {/* Structural Border */}

            <div className="absolute inset-4 md:inset-8 pointer-events-none border border-white/5 z-0" />

            {/* Top Navigation */}

            <div className="z-10 flex justify-between items-start text-[10px] tracking-[0.25em] uppercase text-white/40 font-mono w-full">

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-2"
                >

                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

                    Status // Available 2026

                </motion.div>

            </div>

            {/* Main Content */}

            <div className="flex flex-col z-10 relative gap-3 my-auto max-w-7xl w-full mx-auto justify-center">

                {/* Intro */}

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase font-mono pl-1"
                >
                    Hey there. I’m
                </motion.p>

                {/* Main Heading */}

                <div className="leading-[0.8] tracking-[-0.05em] select-none w-fit">

                    <TextType
                        text={[
                            "SAKITHA",
                            "PALLIYAGURU",

                        ]}
                        typingSpeed={110}
                        deletingSpeed={50}
                        pauseDuration={1500}
                        loop={true}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorClassName="text-white"
                        className="text-[12vw] sm:text-[11vw] lg:text-[8rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 block"
                    />

                </div>

                {/* Divider */}

                <div className="relative w-full my-4">

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-[1px] bg-gradient-to-r from-white/25 via-white/10 to-transparent origin-left"
                    />

                </div>

                {/* Bottom Content */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mt-2"
                >

                    {/* Description */}

                    <p className="lg:col-span-7 text-sm md:text-base text-white/50 leading-relaxed font-light max-w-xl">

                        Blending technology, creativity, and brand thinking into meaningful,
                        high-fidelity interactive digital ecosystem experiences.

                    </p>

                    {/* Skills */}

                    <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end items-start">

                        {[
                            "Developing",
                            "Marketing / Branding",
                            "Photography",
                        ].map((skill, index) => (

                            <motion.span
                                key={index}
                                whileHover={{
                                    scale: 1.04,
                                    borderColor: "rgba(255,255,255,0.35)",
                                    color: "rgba(255,255,255,1)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                }}
                                className="border border-white/10 bg-white/[0.02] backdrop-blur-sm px-3 py-1.5 text-[10px] md:text-xs tracking-wider uppercase font-mono text-white/60 cursor-crosshair transition-colors"
                            >

                                {skill}

                            </motion.span>

                        ))}

                    </div>

                </motion.div>

            </div>

            {/* Bottom Navigation */}

            <div className="z-10 flex justify-between items-end w-full font-mono text-[10px] tracking-[0.2em] text-white/30">

                <div>
                    [ SCROLL_TO_EXPLORE ]
                </div>

                {/* Scroll Indicator */}

                <div className="flex flex-col items-center gap-4 group cursor-pointer mix-blend-difference">

                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white/80 transition-colors duration-300">
                        Scroll Down
                    </span>

                    <div className="w-[1px] h-14 bg-white/10 overflow-hidden relative">

                        <motion.div
                            className="w-full h-1/2 bg-white/70"
                            animate={{ y: [-28, 56] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: [0.25, 1, 0.5, 1],
                            }}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}