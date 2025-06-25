import { FaArrowRight } from "react-icons/fa6";

const NewsletterSec = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Background div */}
      <div className="rounded-2xl" style={{
        backgroundImage: `linear-gradient(127deg, #155dfc 0%, #155dfc 55%, #1447e6 55%, #1447e6 100%)`,
      }}>

        <div className="px-6 md:px-16 py-16 md:py-24 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-lg text-white text-center md:text-left"> 
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">Subscribe newsletter</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Best cooks and best delivery guys all at your service. Hot tasty food
          </p>
          </div>
          <form action="" className="w-full md:w-auto flex flex-col sm:flex-row sm:justify-center gap-4 sm:gap-0">
            <input 
            type="email" 
            placeholder="Enter your email address"
            className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"/>
            <button 
            type="submit"
            className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-600 transition-colors flex items-center justify-center sm:justify-start gap-2">
              Discover
              <FaArrowRight className="size-5"/>
            </button>
          </form>
        </div>
        
      </div>

    </section>
  )
}

export default NewsletterSec
