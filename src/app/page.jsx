"use client"
import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'
import Menu from './components/Menu'
import { useAppContext } from './context/AppContext';

function Home() {
  const { isMenuOpen } = useAppContext();
  return (
    <div>
      {isMenuOpen && <Menu></Menu>}
      <Hero></Hero>
      <Skills></Skills>
      <FeaturedProjects></FeaturedProjects>
      <Services></Services>
    </div>
  )
}

export default Home