"use client"
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { Tilt } from 'react-next-tilt';


function Slider() {
    const sliderRef = useRef(null)
    const descRef = useRef(null)

    const projects = [
        {
            name: "ProCard",
            year: 2024,
            img: "/images/procard/1.png"
        },
        {
            name: "GEGAPOS",
            year: 2023,
            img: "/images/gegapos/1.png"
        },
        {
            name: "Kac",
            year: 2023,
            img: "/images/kac/1.png"
        },
        {
            name: "Hadja Maimouna",
            year: 2023,
            img: "/images/hadjaM/1.png"
        },
        {
            name: "Village Gandal",
            year: 2023,
            img: "/images/villagegandal/1.png"
        },
        {
            name: "Dreaminati Store",
            year: 2023,
            img: "/images/dreaminati/1.png"
        },
        {
            name: "Boundless",
            year: 2024,
            img: "/images/boundless/1.png"
        },
    ]

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger);
        const sections = gsap.utils.toArray(".slider section");

        let tl = gsap.timeline({
            defaults: {
                ease: "none",
            },
            scrollTrigger: {
                trigger: sliderRef.current,
                pin: true,
                scrub: 2,
                end: () => "+=" + sliderRef.current.offsetWidth,
            },
        });
        tl.to(sliderRef.current, {
            xPercent: -66,
        });
        sections.forEach((stop) => {
            tl
                .from(stop, {
                    xPercent: 50,
                    scale: 1.2,
                    ease: 'elastic.out(1,1)',
                    scrollTrigger: {
                        trigger: stop,
                        scrub: 2,
                        containerAnimation: tl
                    }
                })
        })
        gsap.from(descRef.current, {
            y: 50,
            duration: 0.4,
            opacity: 0,
            scrollTrigger: {
                trigger: descRef.current,
                start: "top 80%",
                toggleActions: 'play none none reverse',

            }
        })
        console.log(projects.length)
    })
    return (
        <div className="outer">
            <div className="slider" ref={sliderRef}>
                <section className="text" ref={descRef}>
                    <p>
                        My expertise has played a pivotal <br /> role in bringing impactful projects to <br /> life. Dive into my curated selection <br /> and discover what I can achieve.
                    </p>
                </section>
                {
                    projects.map((project, index) => (



                        <section key={index}>
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} spotGlareEnable={false} lineGlareEnable={false} lineGlareBlurEnable={false}>
                                <div className="inner">
                                    <h3 className="projectTitle">{project.name}</h3>
                                    <h4 className="projectYear">{project.year}</h4>
                                    <div className="projectImage">
                                        <Image src={project.img} fill={true} alt={`Project ${index + 1}`} />
                                    </div>
                                    <div className="projectActions">
                                        <button className="btn">More about this</button>
                                    </div>
                                </div>
                            </Tilt>
                        </section>
                    ))
                }


            </div>
        </div>
    )
}

export default Slider