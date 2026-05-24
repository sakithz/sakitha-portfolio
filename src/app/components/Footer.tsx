import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
        id="contact"
        className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-white text-black flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-widest text-sm font-bold mb-8 block">Have an idea?</span>
          <h2 className="text-[12vw] md:text-[14vw] leading-none font-bold tracking-tighter hover-target cursor-pointer flex items-end">
            LET'S <br />
            TALK
            <motion.div 
              className="ml-4 md:ml-8 mb-4 md:mb-8"
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <ArrowUpRight className="w-16 h-16 md:w-32 md:h-32" />
            </motion.div>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-16 pt-8 border-t border-black/20 text-sm uppercase tracking-widest font-medium">
        <div className="flex gap-8">
          <a href="https://www.instagram.com/sakitha.pvt/?hl=en" className="hover:line-through transition-all hover-target">Instagram</a>
          <a href="https://www.linkedin.com/in/sakitha-palliyaguru-0905b12b5" className="hover:line-through transition-all hover-target">LinkedIn</a>
          <a href="https://github.com/sakithz" className="hover:line-through transition-all hover-target">GitHub</a>
        </div>
        
        <div className="flex flex-col md:text-right gap-2">
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <span className="text-gray-500">Built with React & Motion</span>
        </div>
      </div>
    </footer>
  );
}
