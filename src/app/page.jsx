import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Skills></Skills>
      <FeaturedProjects></FeaturedProjects>
      <Services></Services>
    </div>
  )
}

export default Home