import { BsStack } from "react-icons/bs"
import { HiLightBulb } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { BiTime } from "react-icons/bi"

const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more"
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives", 
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more"
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more"
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more"
  }
]


const ServicesSec = () => {
  return (
    <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

      {/* Header */}
      <div className="w-full md:w-1/2 text-center md:text-left">

        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/7">
          Future of support with new shape
        </h2>
        
        <p className="text-gray-600 text-lg mb-4 md:w-4/7">
          Discuss your goals, determine success metrics, identify problems
        </p>

        <div className="space-y-3 mx-auto w-fit m-auto md:ml-0">
          
          <div className="flex items-center gap-2">
            <span className="block w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_0px_5px_#c7d2fe]"></span>
            <p className="text-gray-600">UX design content strategy</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="block w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_0px_5px_#c7d2fe]"></span>
            <p className="text-gray-600">Development bring</p>
          </div>
          
        </div>

        <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors">Get Started</button>
        
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          services.map((service, index) => (
            <div key={index} className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <span className="block mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-indigo-600 font-medium hover:text-indigo-700">LEARN MORE</a>
            </div>
          ))
        }
      </div>
      
    </section>
  )
}

export default ServicesSec
