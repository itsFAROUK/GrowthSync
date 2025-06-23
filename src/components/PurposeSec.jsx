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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Heading text */}
        <div>
          <p className="text-sm text-purple-600 mb-2">
            ACHIEVE MORE
          </p>
          <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
            Purpose of a convoy is to keep your team
          </h2>
        </div>

        {/* Bullet points */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
          {
            features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <span className="w-12 h-12 grid place-content-center rounded-lg">{feature.icon}</span>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default PurposeSec
