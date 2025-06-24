import monitorImage from "../assets/monitor-card.webp"

const MonitorSec = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
      
      {/* Left */}
      <div className="md:w-1/2 w-full">
        <p className="text-green-500 font-semibold">MONITOR</p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
          Introducing best mobile <br />
          carousels
        </h2>
        <p className="text-gray-600 md:w-4/5 mb-8">
          Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.
        </p>
        <a href="#" className="flex items-center gap-2 text-blue-500 font-semibold hover:gap-4 transition-all">
          Learn more about monitoring
          <span className="text-3xl">→</span>
        </a>
      </div>

      {/* Right */}
      <div className="md:w-1/2 w-full">
        <img src={monitorImage} alt="status image" className="w-full h-auto"/>
      </div>
      
    </section>
  )
}

export default MonitorSec
