import React, { useLayoutEffect } from 'react'
import Hero from '../components/Hero'
import WelcomeVideo from '../components/WelcomeVideo'
import Testimonial from '../components/Testimonial'

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <div className='home'>
      <Hero />
      <WelcomeVideo />
      <Testimonial />
    </div>
  )
}

export default HomePage