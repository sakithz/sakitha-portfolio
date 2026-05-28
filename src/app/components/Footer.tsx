import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  useState,
  useRef,
  MouseEvent,
} from "react";

export function Footer() {

  const [isHovered, setIsHovered] =
      useState(false);

  const constraintsRef = useRef(null);

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 25,
    stiffness: 150,
  };

  const x = useSpring(
      mouseX,
      springConfig
  );

  const y = useSpring(
      mouseY,
      springConfig
  );

  const handleMouseMove = (
      e: MouseEvent<HTMLDivElement>
  ) => {

    const rect =
        e.currentTarget.getBoundingClientRect();

    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;

    mouseX.set(
        (e.clientX - centerX) * 0.1
    );

    mouseY.set(
        (e.clientY - centerY) * 0.1
    );

  };

  const handleMouseLeave = () => {

    mouseX.set(0);

    mouseY.set(0);

    setIsHovered(false);

  };

  const socialLinks = [

    {
      name: "Instagram",
      url: "https://www.instagram.com/sakitha.pvt/?hl=en",
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sakitha-palliyaguru-0905b12b5",
    },

    {
      name: "GitHub",
      url: "https://github.com/sakithz",
    },

  ];

  return (

      <footer
          id="contact"
          className="relative py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-white text-black flex flex-col justify-between min-h-screen overflow-hidden"
      >

        {/* Grid Pattern */}

        <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
            linear-gradient(black 1px, transparent 1px),
            linear-gradient(90deg, black 1px, transparent 1px)
          `,
              backgroundSize: "60px 60px",
            }}
        />

        {/* Noise Texture */}

        <div
            className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />

        {/* Main Section */}

        <div className="flex-1 flex flex-col justify-center relative z-10">

          <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
          >

            {/* Subtitle */}

            <motion.span
                className="uppercase tracking-[0.3em] text-xs font-medium mb-12 block opacity-60"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 0.6,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
            >
              Have an idea?
            </motion.span>

            {/* Main Heading */}

            <div
                ref={constraintsRef}
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() =>
                    setIsHovered(true)
                }
                onMouseLeave={
                  handleMouseLeave
                }
            >

              <motion.h2
                  className="text-[12vw] md:text-[14vw] leading-[0.9] font-bold tracking-[-0.03em] cursor-pointer select-none"
                  style={{ x, y }}
              >

                {["L", "E", "T", "'", "S"].map(
                    (char, i) => (

                        <motion.span
                            key={`lets-${i}`}
                            className="inline-block hover:italic transition-all duration-300"
                            initial={{
                              opacity: 0,
                              y: 50,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay:
                                  0.3 +
                                  i * 0.04,
                              duration: 0.5,
                              ease: [
                                0.16,
                                1,
                                0.3,
                                1,
                              ],
                            }}
                            whileHover={{
                              y: -10,
                              transition: {
                                duration: 0.2,
                              },
                            }}
                        >
                          {char}
                        </motion.span>

                    )
                )}

                <br />

                {["T", "A", "L", "K"].map(
                    (char, i) => (

                        <motion.span
                            key={`talk-${i}`}
                            className="inline-block hover:italic transition-all duration-300"
                            initial={{
                              opacity: 0,
                              y: 50,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay:
                                  0.5 +
                                  i * 0.04,
                              duration: 0.5,
                              ease: [
                                0.16,
                                1,
                                0.3,
                                1,
                              ],
                            }}
                            whileHover={{
                              y: -10,
                              transition: {
                                duration: 0.2,
                              },
                            }}
                        >
                          {char}
                        </motion.span>

                    )
                )}

                {/* Magnetic Arrow */}

                <motion.div
                    className="inline-flex ml-4 md:ml-8 mb-4 md:mb-8 relative align-middle"
                    style={{
                      x: useTransform(
                          x,
                          [0, 100],
                          [0, 20]
                      ),
                      y: useTransform(
                          y,
                          [0, 100],
                          [0, 20]
                      ),
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: -45,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.7,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                >

                  <motion.div
                      className="relative w-16 h-16 md:w-28 md:h-28 border-2 border-black rounded-full flex items-center justify-center"
                      animate={{
                        rotate: isHovered
                            ? 90
                            : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                  >

                    <ArrowUpRight
                        className="w-8 h-8 md:w-12 md:h-12"
                        strokeWidth={2}
                    />

                  </motion.div>

                </motion.div>

              </motion.h2>

            </div>

            {/* Empty Spacer */}

            <div className="mt-16" />

          </motion.div>

        </div>

        {/* Animated Divider */}

        <motion.div
            className="relative h-[1px] bg-black/10 my-16 overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
        >

          <motion.div
              className="absolute inset-0 bg-black h-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
          />

        </motion.div>

        {/* Bottom Section */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">

          {/* Social Links */}

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">

            {socialLinks.map(
                (link, index) => (

                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                              1.1 +
                              index * 0.1,
                          duration: 0.5,
                        }}
                    >

                      <motion.div
                          className="relative overflow-hidden"
                          whileHover={{
                            x: 10,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                      >

                    <span className="text-sm uppercase tracking-[0.2em] font-medium relative inline-block">

                      {link.name}

                      <motion.span
                          className="absolute bottom-0 left-0 h-[1px] bg-black"
                          initial={{
                            width: 0,
                          }}
                          whileHover={{
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                      />

                    </span>

                      </motion.div>

                    </motion.a>

                )
            )}

          </div>

          {/* Copyright */}

          <motion.div
              className="flex flex-col md:text-right gap-3"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 1.4,
                duration: 0.6,
              }}
          >

        <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-60">

          © {new Date().getFullYear()} All rights reserved.

        </span>

            <span className="text-xs tracking-wide opacity-40">
          Built with React & Motion
        </span>

          </motion.div>

        </div>

        {/* Floating Particles */}

        {[...Array(8)].map((_, i) => (

            <motion.div
                key={i}
                className="absolute w-px h-px bg-black rounded-full opacity-20"
                style={{
                  left: `${
                      20 +
                      Math.random() * 60
                  }%`,
                  top: `${
                      20 +
                      Math.random() * 60
                  }%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [
                    0.1,
                    0.3,
                    0.1,
                  ],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration:
                      4 +
                      Math.random() * 2,
                  repeat: Infinity,
                  delay:
                      Math.random() * 3,
                  ease: "easeInOut",
                }}
            />

        ))}

      </footer>
  );
}