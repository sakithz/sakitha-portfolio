import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
      <section
          id="about"
          ref={containerRef}
          className="py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-white text-black selection:bg-black selection:text-white"
      >
        <motion.div
            style={{ y, opacity }}
            className="max-w-5xl mx-auto flex flex-col gap-16"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 md:w-24 h-[1px] bg-black"></div>
            <span className="text-sm font-bold uppercase tracking-widest">
            About Me
          </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Passionate about <span className="text-gray-400 italic">IT, branding, marketing, photography </span>
             and creating impactful digital experiences.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                I am passionate about marketing, brand creation,
                entrepreneurship, technology and photography, with a strong
                interest in building innovative ideas and creating meaningful
                business impact.
              </p>

              <br />

              <p>
                I enjoy staying updated with modern technology and emerging
                digital trends while continuously improving myself through
                learning, creativity and new experiences.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex justify-between border-b border-black/10 pb-4">
                <span className="font-medium">Education</span>
                <span className="text-gray-500">SLIIT & Ananda College</span>
              </div>

              <div className="flex justify-between border-b border-black/10 pb-4">
                <span className="font-medium">Marketing</span>
                <span className="text-gray-500">SLIM Certified</span>
              </div>

              <div className="flex justify-between border-b border-black/10 pb-4">
                <span className="font-medium">Creative</span>
                <span className="text-gray-500">Photography & Branding</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
  );
}