import scheduleImage from "../assets/stats.webp"

const ScheduleSec = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      
      {/* Left */}
      <div className="md:w-1/2 w-full">
        <img src={scheduleImage} alt="status image" className="w-full h-auto"/>
      </div>

      {/* Right */}
      <div className="md:w-1/2 w-full">
        <p className="text-orange-500 font-semibold">SCHEDULE</p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
          Streamline Your Business <br /> 
          with Smart Scheduling Solutions
        </h2>
        <p className="text-gray-600 mb-8">
          Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.
        </p>
        <a href="#" className="flex items-center gap-2 text-blue-500 font-semibold hover:gap-4 transition-all">
          Explore scheduling features
          <span className="text-3xl">→</span>
        </a>
      </div>
      
    </section>
  )
}

export default ScheduleSec
