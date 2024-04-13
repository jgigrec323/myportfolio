"use client"
import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import SplitType from "split-type"

function SectionTitle({ title }) {
    const titleRef = useRef(null)
    useGSAP(() => {
        if (titleRef.current) {
            const letters = new SplitType(titleRef.current, { types: 'words,chars' })

            gsap.from(titleRef.current, {
                y: 50,
                duration: 0.4,
                opacity: 0,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: 'play none none reverse',

                }
            })

            if (window.innerWidth >= 1150) {
                letters.chars.forEach((letter, index) => {

                    letter.addEventListener("mouseenter", () => {
                        gsap.to(letter, {
                            scale: 1.2,
                            ease: "back.out(1.7)",
                        })
                    })
                    letter.addEventListener("mouseleave", () => {
                        gsap.to(letter, {
                            scale: 1,
                            ease: "back.out(1.7)",
                        })
                    })
                })
            }
        }
    })
    return (
        <h1 className='sectionTitle' ref={titleRef}>{title}</h1>
    )
}

export default SectionTitle