import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Loader() {

    const [show, setShow] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShow(false);
        }, 2800);

        return () => clearTimeout(timer);

    }, []);

    return (

        <AnimatePresence>

            {show && (

                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                        },
                    }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
                >

                    {/* Background Glow */}

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

                    {/* Main Content */}

                    <div className="relative z-10 flex flex-col items-center">





                        {/* Main Name */}

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-[16vw] md:text-[6rem] lg:text-[6rem] font-black uppercase tracking-[-0.08em] text-white leading-none"
                        >

                            SAKITHA

                            <motion.span
                                animate={{
                                    opacity: [1, 0, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="ml-2 text-white/70"
                            >
                                _
                            </motion.span>

                        </motion.h1>

                        {/* Subtitle */}

                        <motion.p
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 1,
                            }}
                            className="mt-4 text-white/40 text-xs md:text-xs tracking-[0.25em] uppercase"
                        >
                            Loading Experience
                        </motion.p>

                        {/* Loading Line */}

                        <div className="w-[220px] h-[1px] bg-white/10 mt-10 overflow-hidden">

                            <motion.div
                                initial={{
                                    x: "-100%",
                                }}
                                animate={{
                                    x: "100%",
                                }}
                                transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-1/2 h-full bg-white"
                            />

                        </div>

                    </div>

                </motion.div>

            )}

        </AnimatePresence>

    );
}