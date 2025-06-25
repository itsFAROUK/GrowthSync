import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import monitorImage from "../assets/monitor-card.webp"

const MonitorSec = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      
      {/* Left */}
      <motion.div 
          variants={fadeIn('right', 0.3)}
          className="md:w-1/2 w-full">
        <motion.p 
            variants={fadeIn('up', 0.4)}
            className="text-green-500 font-semibold">MONITOR</motion.p>
        <motion.h2 
            variants={fadeIn('up', 0.5)}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
          Introducing best mobile <br />
          carousels
        </motion.h2>
        <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 md:w-4/5 mb-8">
          Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
        </motion.p>
        <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#" className="flex items-center gap-2 text-blue-500 font-semibold hover:gap-4 transition-all">
          Learn more about monitoring
          <motion.span
              variants={fadeIn('right', 0.8)}
              className="text-3xl">→</motion.span>
        </motion.a>
      </motion.div>

      {/* Right */}
      <motion.div 
          variants={fadeIn('left', 0.3)}
          className="md:w-1/2 w-full">
        <motion.img 
              variants={fadeIn('up', 0.5)}
              src={monitorImage} alt="status image" className="w-full h-auto"/>
      </motion.div>
      
    </motion.section>
  )
}

export default MonitorSec
