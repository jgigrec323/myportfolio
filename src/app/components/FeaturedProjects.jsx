import React from 'react'
import Slider from './Slider'
import SectionTitle from './SectionTitle'

function FeaturedProjects() {
    return (
        <section id='projects' className='featuredProjects'>
            <SectionTitle title={"Featured Projects"}></SectionTitle>
            <Slider></Slider>
        </section>
    )
}

export default FeaturedProjects