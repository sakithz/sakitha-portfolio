import { motion } from "motion/react";
import TiltedCard from "./ui/TiltedCard";

export function About() {

  const titleText =
      "Passionate about IT, branding, marketing, photography and creating impactful digital experiences.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (

      <section
          id="about"
          className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-white text-black overflow-hidden"
      >

        {/* Top Label */}

        <div className="flex items-center gap-4 mb-20">

          <div className="w-16 md:w-24 h-[1px] bg-black"></div>

          <span className="text-sm font-bold uppercase tracking-widest text-black/70">
                    About Me
                </span>

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl"
          >

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">

              {titleText.split(" ").map((word, i) => {

                const isHighlighted = [
                  "IT,",
                  "branding,",
                  "marketing,",
                  "photography",
                ].includes(word);

                return (

                    <span
                        key={i}
                        className="inline-block overflow-hidden mr-3 mb-2"
                    >

                                    <motion.span
                                        variants={itemVariants}
                                        className={`inline-block ${
                                            isHighlighted
                                                ? "text-gray-500 italic font-medium"
                                                : ""
                                        }`}
                                    >

                                        {word}

                                    </motion.span>

                                </span>

                );

              })}

            </h2>

            {/* Description */}

            <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="mt-12 text-black/60 text-base md:text-lg leading-relaxed max-w-2xl"
            >

              I’m an IT undergraduate at SLIIT exploring the intersection
              between technology, branding, creativity, and visual storytelling.
              I enjoy building modern digital experiences, developing software
              solutions, and capturing cinematic photography moments.

              <p>
<br/>
                I enjoy staying updated with modern technology and emerging
                digital trends while continuously improving myself through
                learning, creativity and new experiences.

              </p>

            </motion.p>

            {/* Small Info Row */}

            <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="flex flex-wrap gap-4 mt-10"
            >

              {[
                "Creative Developer",
                "Brand Vision",
                "Photography",
                "Entrepreneurship",
              ].map((item, index) => (

                  <span
                      key={index}
                      className="border border-black/10 bg-black/[0.03] px-4 py-2 rounded-full text-xs uppercase tracking-widest text-black/60"
                  >

                                {item}

                            </span>

              ))}

            </motion.div>

          </motion.div>

          {/* Right Tilted Card */}

          <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center lg:justify-end"
          >

            <TiltedCard
                imageSrc="/about/me9.jpg"
                altText="Sakitha"
                captionText="SAKITHA"
                containerHeight="420px"
                containerWidth="100%"
                imageHeight="420px"
                imageWidth="320px"
                rotateAmplitude={14}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
            />

          </motion.div>

        </div>

      </section>
  );
}