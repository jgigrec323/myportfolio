"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skills() {
    const textRef = useRef(null)
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const logos = gsap.utils.toArray(".mySkills .skillLogo");

        gsap.from(textRef.current, {
            y: 50,
            duration: 0.4,
            opacity: 0,
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                toggleActions: 'play none none reverse',

            }
        })
        logos.forEach((logo, index) => {
            gsap.from(logo, {
                y: 50,
                duration: 0.4,
                opacity: 0,
                stagger: 0.05,

                scrollTrigger: {
                    trigger: logo,
                    start: "top 90%",
                    toggleActions: 'play none none reverse',

                }
            })
        });

    })
    return (
        <section className='skills'>
            <p className="text" ref={textRef}>
                I am skilled in the following <br /> technologies and disciplines.
            </p>
            <div className="mySkills">
                <div className="skillLogo">
                    <Image src="/images/next-js.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/react-js.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/html.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/css.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/js.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/sass.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/threejs.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/gsap.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/dart.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/flutter.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/java.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/nodejs.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/sql.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/mongodb.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/restapi.png" width={80} height={80} alt='Skillset'></Image>
                </div>
                <div className="skillLogo">
                    <Image src="/images/xd.png" width={80} height={80} alt='Skillset'></Image>
                </div>
            </div>
        </section>
    )
}

export default Skills