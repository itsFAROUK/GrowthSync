import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"

const logos = [slack, amazon, woocommerce, meundies, sitepoint]

const CompanyLogo = () => {
  return (
    <div className="w-full overflow-hidden container mx-auto py-20 flex flex-col gap-8 sm:flex-row sm:items-center">
      
      <div className="w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 px-5 z-10 sm:text-base text-xl font-semibold text-left">Proud partner at <br /> Hubspot & Segment</div>

      <div className="flex whitespace-nowrap animate-marquee">
        {
          logos.map((logo, index) => (
            <img
              key={index}
              src={logo} 
              alt={`${logo} company logo`}
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          ))
        }
        {
          logos.map((logo, index) => (
            <img
              key={`duplicate${index}`}
              src={logo} 
              alt={`${logo} company logo`}
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
          ))
        }
      </div>

    </div>
  )
}

export default CompanyLogo
