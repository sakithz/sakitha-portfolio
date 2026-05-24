import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useEffect } from "react";

// Grain Overlay
function GrainOverlay() {
    return (
        <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.05]"
            xmlns="http://www.w3.org/2000/svg"
        >
            <filter id="grain">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.75"
                    numOctaves="4"
                    stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>

            <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
    );
}

// Grid Lines
function GridLines() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

            {[15, 35, 55, 75, 90].map((top, i) => (
                <motion.div
                    key={`h${i}`}
                    className="absolute w-full h-[1px] bg-white"
                    style={{ top: `${top}%` }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.04 }}
                    transition={{
                        duration: 1.8,
                        delay: 0.1 * i,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                />
            ))}

            {[10, 25, 50, 75, 90].map((left, i) => (
                <motion.div
                    key={`v${i}`}
                    className="absolute h-full w-[1px] bg-white"
                    style={{ left: `${left}%` }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 0.04 }}
                    transition={{
                        duration: 2,
                        delay: 0.15 * i,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                />
            ))}

        </div>
    );
}

// Morph Blob
function MorphBlob() {
    return (
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] pointer-events-none z-0">

            <motion.div
                className="w-full h-full rounded-full border border-white/10"
                animate={{
                    scale: [1, 1.08, 0.96, 1.04, 1],

                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "30% 60% 70% 40% / 50% 60% 30% 60%",
                        "60% 40% 50% 60% / 30% 70% 40% 60%",
                        "40% 60% 30% 70% / 60% 40% 70% 30%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

        </div>
    );
}

// Spotlight
function Spotlight() {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, {
        stiffness: 50,
        damping: 20,
    });

    const springY = useSpring(mouseY, {
        stiffness: 50,
        damping: 20,
    });

    useEffect(() => {

        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);

    }, []);

    return (
        <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                background: useTransform(
                    [springX, springY],
                    ([x, y]) =>
                        `radial-gradient(350px circle at ${x}px ${y}px, rgba(255,255,255,0.05) 0%, transparent 70%)`
                ),
            }}
        />
    );
}

// Bottom Ticker
function Ticker() {

    const items = [
        "IT",
        "Branding",
        "Photography",
        "Entrepreneurship",
        "AI",
        "Marketing",
        "Developer",
    ];

    const repeated = [...items, ...items];

    return (
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 py-3 overflow-hidden">

            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >

                {repeated.map((item, i) => (

                    <span
                        key={i}
                        className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium flex-shrink-0"
                    >
            {item} <span className="text-white/10 mx-2">◆</span>
          </span>

                ))}

            </motion.div>

        </div>
    );
}

export function Hero() {

    return (

        <section className="relative w-full h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-black text-white overflow-hidden">

            {/* Background Effects */}

            <GrainOverlay />
            <GridLines />
            <MorphBlob />
            <Spotlight />

            {/* Main Content */}

            <div className="flex flex-col z-10 relative gap-2">

                {/* Desktop Hover Animation */}

                <div className="hidden md:block">

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative overflow-hidden cursor-default h-[8rem] lg:h-[10rem]"
                    >

                        <motion.div
                            whileHover={{
                                y: -160,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="flex flex-col"
                        >

                            <h1 className="text-8xl lg:text-[10rem] leading-none font-bold tracking-tighter uppercase text-white">
                                SAKITHA
                            </h1>

                            <h1 className="text-8xl lg:text-[10rem] leading-none font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                                PALLIYAGURU
                            </h1>

                        </motion.div>

                    </motion.div>

                </div>

                {/* Mobile Typography */}

                <div className="flex flex-col md:hidden overflow-hidden">

                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                        }}
                        className="text-[3.3rem] leading-[0.92] font-black tracking-[-0.045em] uppercase text-white"
                    >
                        SAKITHA
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.1,
                        }}
                        className="text-[3.3rem] leading-[0.92] font-black tracking-[-0.045em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white"
                    >
                        PALLIYAGURU
                    </motion.h1>

                </div>

                {/* Divider */}

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        delay: 1,
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-[1px] bg-white/10 mt-8 origin-left"
                />

                {/* Description */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1.2,
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col md:flex-row gap-6 md:gap-24 text-sm md:text-base text-white/40 max-w-3xl mt-8 md:mt-12"
                >

                    <p className="leading-relaxed">
                        IT Undergraduate at SLIIT passionate about IT,
                        marketing, branding, photography, and entrepreneurship.
                    </p>

                    <div className="flex flex-wrap gap-4 uppercase tracking-widest text-xs font-bold items-start">

                        {[
                            "IT / AI",
                            "Marketing / Branding",
                            "Photography",
                        ].map((tag, i) => (

                            <motion.span
                                key={tag}
                                className="border-b border-white/20 pb-1 cursor-default"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 1.5 + i * 0.1,
                                    duration: 0.5,
                                }}
                                whileHover={{
                                    color: "#ffffff",
                                    borderColor: "rgba(255,255,255,0.6)",
                                }}
                            >
                                {tag}
                            </motion.span>

                        ))}

                    </div>

                </motion.div>

            </div>

            {/* Scroll Indicator */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2,
                    duration: 1,
                }}
                className="absolute bottom-16 left-6 md:left-16 lg:left-24 z-10 flex flex-col items-center gap-2"
            >

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

            </motion.div>

            {/* Ticker */}

            <Ticker />

        </section>
    );
}