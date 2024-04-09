"use client"
import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'


function Navbar() {
    const navRef = useRef(null)
    useGSAP(() => {
        navRef.current.style.opacity = 1
        gsap.from(navRef.current, {
            opacity: 0,
            duration: 0.5
        })
    })
    return (
        <nav ref={navRef}>
            <div className="logo">
                <svg id="Composant_1_2" data-name="Composant 1 – 2" xmlns="http://www.w3.org/2000/svg" width="99" height="96" viewBox="0 0 99 96">
                    <text id="JG." transform="translate(51 77)" fill="#a1baff" fontSize="80" fontFamily="FuturaBT-ExtraBlackCondItalic, Futura XBlkCnIt BT" fontWeight="900" fontStyle="italic"><tspan x="-47.09" y="0">JG.</tspan></text>
                </svg>
            </div>
            <div className="burger">
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar