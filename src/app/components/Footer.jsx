"use client"
import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
function Footer() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".marqueeContainer", {
            xPercent: -100,
            duration: 5,
            repeat: -1,
            ease: "linear"
        }).totalProgress(0.5)



    })
    return (
        <footer>
            <div className="marqueeContainer">
                <h1 className="sectionTitle">Let's connect</h1>
                <h1 className="sectionTitle">Let's connect</h1>

            </div>
        </footer>
    )
}

export default Footer