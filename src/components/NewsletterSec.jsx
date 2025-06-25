import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { FaArrowRight } from "react-icons/fa6";

const NewsletterSec = () => {
  return (
    <section id="newsletter" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Background div */}
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="rounded-2xl" style={{
        backgroundImage: `linear-gradient(127deg, #155dfc 0%, #155dfc 55%, #1447e6 55%, #1447e6 100%)`,
      }}>

        <motion.div 
          variants={fadeIn('right', 0.5)}
          className="px-6 md:px-16 py-16 md:py-24 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-lg text-white text-center md:text-left"> 
          <motion.h2 
            variants={textVariant(0.3)}
            className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">Subscribe newsletter</motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-blue-100 text-sm sm:text-base">
            Best cooks and best delivery guys all at your service. Hot tasty food
          </motion.p>
          </div>
          <motion.form 
              variants={fadeIn('left', 0.5)}
              action="" 
              className="w-full md:w-auto flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-0">
            <motion.input
              variants={fadeIn('right', 0.7)}
              type="email" 
              placeholder="Enter your email address"
              className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"/>
            <motion.button 
              variants={fadeIn('left', 0.7)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition-colors flex items-center justify-center sm:justify-start gap-2">
              Discover
              <FaArrowRight className="size-5"/>
            </motion.button>
          </motion.form>
        </motion.div>
        
      </motion.div>

    </section>
  )
}

export default NewsletterSec
