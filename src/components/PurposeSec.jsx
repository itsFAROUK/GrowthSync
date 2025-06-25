import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const features = [
  {
    icon: "🟣", 
    title: "Built for impact",
    description: "We identify and nurture a truly diverse team of designers, developers and marketers"
  },
  {
    icon: "🔴", 
    title: "In sync with you",
    description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
  }
]

const PurposeSec = () => {
  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8">
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Heading text */}
        <motion.div variants={fadeIn('right', 0.3)}>
          <motion.p 
            variants={fadeIn('up', 0.4)}
            className="text-sm text-purple-600 mb-2">
            ACHIEVE MORE
          </motion.p>
          <motion.h2 
            variants={fadeIn('up', 0.4)}
            className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
            Purpose of a convoy is to keep your team
          </motion.h2>
        </motion.div>

        {/* Bullet points */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
          {
            features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-4">
                <motion.span 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-12 h-12 grid place-content-center rounded-lg">{feature.icon}</motion.span>

                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>

                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</motion.h3>

                  <motion.p
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600">{feature.description}</motion.p>

                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>

      </motion.div>
    </section>
  )
}

export default PurposeSec
