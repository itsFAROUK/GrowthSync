import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about", label: "About Us"},
    {href: "#services", label: "Our Service"},
    {href: "#testimonials", label: "Testimonials"},
  ]
  
  return (
    <motion.header
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: true}}
    className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm z-50">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        
        {/* Logo */}
        <motion.div
        variants={fadeIn('right', 0.3)}
        className="flex items-center gap-1 cursor-pointer" aria-label="Logo">

          <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></motion.div>
          
          <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-4 h-4 -ml-2 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity"></motion.div>
          
        </motion.div>

        <motion.button
          variants={fadeIn('left', 0.3)}
          onClick={() => setIsMenuOpen(prev => !prev)} 
          className="md:hidden">
          {
            isMenuOpen ? <HiX size={24}/> : <HiMenu size={24}/>
          }
        </motion.button>

        <motion.nav
          variants={fadeIn('down', 0.3)}
          className="hidden md:block">
          <ul
          className="flex items-center gap-10">
            {
              navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn('down', 0.1 * (index + 1))}>
                  <a 
                    key={index} 
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>
                    {link.label}
                  </a>
                </motion.li>
              ))
            }
          </ul>
        </motion.nav>

        <motion.button
        variants={fadeIn('left', 0.3)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsletter">Get in touch</a>
        </motion.button>
        
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        className="md:hidden bg-white border-t border-gray-100 py-4">
          <motion.div
          variants={fadeIn('down', 0.3)}
          className="container mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                variants={fadeIn('right', 0.1 * (index + 1))}
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2
                  ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
            variants={fadeIn('up', 0.4)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
