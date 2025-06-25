import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  getHelp: [
    { name: 'Support Carrer', href: '#' },
    { name: '24h Service', href: '#' },
    { name: 'Quick Chat', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Policy', href: '#' },
    { name: 'Business', href: '#' },
  ],
  contact: [
    { name: 'WhatsApp', href: '#' },
    { name: 'Support 24', href: '#' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">

            <div className="flex items-center gap-1 mb-4">

              {/* Logo */}
              <div className="flex items-center gap-1 cursor-pointer" aria-label="Logo">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 -ml-2 bg-red-500 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>

              <p className="text-xl font-medium ml-1">The Next Design</p>
              
            </div>

            <p className="text-gray-600 mb-6 md:w-3/4">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white">
                <FaFacebookF className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white">
                <FaTwitter className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white">
                <FaLinkedin className="size-5" />
              </a>
            </div>
            
          </div>

          {/* Footer Nav items */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {
              Object.entries(footerLinks).map(([category, linkes], index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium mb-4 uppercase">{category}</h3>
                  <ul className="space-y-3">
                    {
                      linkes.map((link, index) => (
                        <li key={index}>
                          <a href="#" className="text-gray-600 hover:text-gray-900">{link.name}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-200 text-gray-600 text-sm mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p>Copyright © {new Date().getFullYear()} codetutorbd.com</p>
          <p>Created by Farouk Bouaziz</p>
        </div>
      
        
      </div>
    </footer>
  )
}

export default Footer
