import { motion } from "motion/react";
import LiquidEther from "./LiquidEther";

export function Hero() {

    return (

        <section className="relative w-full h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-black text-white overflow-hidden">

            {/* LIQUID BACKGROUND */}

            <div className="absolute inset-0 z-0 opacity-60">

                <LiquidEther
                    colors={["#1a1a1a", "#3d3d3d", "#ffffff"]}
                    mouseForce={18}
                    cursorSize={120}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.4}
                    autoIntensity={1.8}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />

            </div>

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-black/45 z-[1]" />

            {/* GRID */}

            <div className="absolute inset-0 z-[2] pointer-events-none">

                {[15, 35, 55, 75, 90].map((top, i) => (

                    <div
                        key={`h${i}`}
                        className="absolute w-full h-[1px] bg-white/5"
                        style={{ top: `${top}%` }}
                    />

                ))}

                {[10, 25, 50, 75, 90].map((left, i) => (

                    <div
                        key={`v${i}`}
                        className="absolute h-full w-[1px] bg-white/5"
                        style={{ left: `${left}%` }}
                    />

                ))}

            </div>

            {/* MAIN CONTENT */}

            <div className="relative z-10 flex flex-col gap-4">

                {/* DESKTOP */}

                <div className="hidden md:flex flex-col">

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-8xl lg:text-[10rem] leading-[0.9] font-black tracking-[-0.07em] uppercase text-white"
                    >
                        SAKITHA
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-8xl lg:text-[10rem] leading-[0.9] font-black tracking-[-0.07em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white"
                    >
                        PALLIYAGURU
                    </motion.h1>

                </div>

                {/* MOBILE */}

                <div className="flex flex-col md:hidden overflow-hidden">

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-[3.3rem] leading-[0.92] font-black tracking-[-0.045em] uppercase text-white"
                    >
                        SAKITHA
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-[3.3rem] leading-[0.92] font-black tracking-[-0.045em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white"
                    >
                        PALLIYAGURU
                    </motion.h1>

                </div>

                {/* DIVIDER */}

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="h-[1px] bg-white/10 mt-8 origin-left"
                />

                {/* DESCRIPTION */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex flex-col md:flex-row gap-6 md:gap-24 text-sm md:text-base text-white/40 max-w-3xl mt-8 md:mt-12"
                >

                    <p className="leading-relaxed">
                        IT Undergraduate at SLIIT passionate about IT,
                        marketing, branding, photography, and entrepreneurship.
                    </p>

                    <div className="flex flex-wrap gap-4 uppercase tracking-widest text-xs font-bold items-start">

                        <span className="border-b border-white/20 pb-1">
                            IT / AI
                        </span>

                        <span className="border-b border-white/20 pb-1">
                            Marketing / Branding
                        </span>

                        <span className="border-b border-white/20 pb-1">
                            Photography
                        </span>

                    </div>

                </motion.div>

            </div>

            {/* SCROLL */}

            <div className="absolute bottom-16 left-6 md:left-16 lg:left-24 z-10 flex flex-col items-center gap-2">

                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-[-90deg] translate-y-[-24px] origin-bottom-left">
                    Scroll
                </span>

                <div className="w-[1px] h-16 bg-white/10 mt-4 overflow-hidden relative">

                    <motion.div
                        className="w-full h-1/2 bg-white/60"
                        animate={{ y: [-32, 64] }}
                        transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                </div>

            </div>

        </section>
    );
}