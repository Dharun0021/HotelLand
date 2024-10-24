import React from 'react'
import { AppleCardsCarouselDemo } from './Story'
import { AnimatedModalDemo } from './AnimatedModalDemo'
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview'

export const OurStory = () => {
  return (
    <section id='ourstory'>
      <h2 className='text-yellow-800 text-5xl font-semibold mt-5' style={{ fontFamily: 'Poppins, sans-serif' }} >Our Storys</h2>
      <AppleCardsCarouselDemo />
      <h2 className='text-yellow-800 text-5xl font-semibold mt-5' style={{ fontFamily: 'Poppins, sans-serif' }} >Book Your's</h2>
      <p className='text-justify mt-4 p-4'style={{ fontFamily: 'Poppins, sans-serif' }}>Welcome to Royal, where comfort meets convenience. Whether you're here for business or leisure, our rooms are thoughtfully designed to provide a peaceful and relaxing atmosphere. Enjoy modern amenities, exceptional service, and a prime location that puts you just steps away from the city’s top attractions. With a variety of room options to suit your needs, from cozy singles to spacious family suites, we guarantee a stay that's both enjoyable and unforgettable. Book your room today and experience the perfect blend of luxury and warmth that Royal has to offer.

      </p>
      <AnimatedModalDemo />
    </section>

  )
}
