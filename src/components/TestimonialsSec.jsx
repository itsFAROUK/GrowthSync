// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe", 
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/men/67.jpg", 
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Steve  Johnson",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Karl Willson",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },

];

const TestimonialsSec = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What our happy client say</h2>
        <p className="text-gray-600 ">Things that make it the best place to start trading</p>
      </div>

      {/* Testimonial cards */}
      <div className="relative">

        {/* Swiper cards */}
        <Swiper
          navigation={
            {
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom'
            }
          }
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {
            testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="py-4 md:py-12" style={{height: "auto"}}>
                <div className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">

                  <div className="w-24 h-24 mx-auto mb-4">
                    <img src={testimonial.image} alt="user" className="w-full h-full object-cover rounded-full"/>
                  </div>

                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-blue-600">★</span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{testimonial.name}</h3>

                  <p className="text-gray-600">{testimonial.text}</p>
                  
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        {/* Navigational bttons */}
        <div className='flex justify-center gap-4 mt-4 md:mt-8'>
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 grid place-content-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
            <BsChevronLeft/>
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 grid place-content-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
            <BsChevronRight />
          </button>
        </div>
        
      </div>
      
    </section>
  )
}

export default TestimonialsSec
