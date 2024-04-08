"use client"
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
function Slider() {
    const sliderRef = useRef(null)
    const descRef = useRef(null)

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
        sections.forEach((stop, index) => {
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
    })
    return (
        <div className="outer">
            <div className="slider" ref={sliderRef}>
                <section className="text" ref={descRef}>
                    <p>
                        My expertise has played a pivotal <br /> role in bringing impactful projects to <br /> life. Dive into my curated selection <br /> and discover what I can achieve.
                    </p>
                </section>
                <section>
                    <div className="inner">
                        <h3 className="projectTitle">ProCard</h3>
                        <h4 className="projectYear">2024</h4>
                        <div className="projectImage" >
                            <Image src="/images/procard/1.png" fill={true} alt='Project 1'></Image>
                        </div>
                        <div className="projectActions">
                            <button className="btn">More about this</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner">
                        <h3 className="projectTitle">ProCard</h3>
                        <h4 className="projectYear">2024</h4>
                        <div className="projectImage" >
                            <Image src="/images/procard/1.png" fill={true} alt='Project 1'></Image>
                        </div>
                        <div className="projectActions">
                            <button className="btn">More about this</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner">
                        <h3 className="projectTitle">ProCard</h3>
                        <h4 className="projectYear">2024</h4>
                        <div className="projectImage" >
                            <Image src="/images/procard/1.png" fill={true} alt='Project 1'></Image>
                        </div>
                        <div className="projectActions">
                            <button className="btn">More about this</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner">
                        <h3 className="projectTitle">ProCard</h3>
                        <h4 className="projectYear">2024</h4>
                        <div className="projectImage" >
                            <Image src="/images/procard/1.png" fill={true} alt='Project 1'></Image>
                        </div>
                        <div className="projectActions">
                            <button className="btn">More about this</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner">
                        <h3 className="projectTitle">ProCard</h3>
                        <h4 className="projectYear">2024</h4>
                        <div className="projectImage" >
                            <Image src="/images/procard/1.png" fill={true} alt='Project 1'></Image>
                        </div>
                        <div className="projectActions">
                            <button className="btn">More about this</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner">
                        <h3 className="projectTitle">ProCard</h3>
                        <h4 className="projectYear">2024</h4>
                        <div className="projectImage" >
                            <Image src="/images/procard/1.png" fill={true} alt='Project 1'></Image>
                        </div>
                        <div className="projectActions">
                            <button className="btn">More about this</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Slider