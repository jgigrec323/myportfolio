import SinglePage from '@/app/components/SinglePage'
import React from 'react'

function Kac() {
    const infos = {
        title: "KAC",
        year: "2023",
        mainImg: '/images/kac/1.png',
        secondImg: '/images/kac/2.png',
        firstText: "Introducing Kac—an agile shipping services enterprise headquartered in Canada. Specializing in freight delivery, relocation assistance, and transportation services, Kac is committed to providing efficient and reliable solutions to its clients",
        secondText: "As the architect behind their online presence, I crafted a dynamic website using React.js as the primary frontend framework. This innovative platform not only features user-friendly forms for gathering requests but also serves as a showcase for Kac's extensive portfolio of services and their close-knit relationships with clients. It's a testament to Kac's dedication to excellence and my passion for creating impactful digital experiences.",
        imgs: ['/images/kac/3.png', '/images/kac/4.png']
    }
    return (
        <SinglePage infos={infos} >

        </SinglePage>
    )
}

export default Kac