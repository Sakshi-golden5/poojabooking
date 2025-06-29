import React from 'react'
import Hero from '../Components/Hero'
import FeaturedPooja from '../Components/FeaturedPooja'
import Poojaflow from '../Components/Poojaflow'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import TrustBuild from '../Components/TrustBuild'

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBuild />
      <FeaturedPooja />
      <Poojaflow />
      <Testimonial />
      <Newsletter />
    </>
  )
}

export default Home
