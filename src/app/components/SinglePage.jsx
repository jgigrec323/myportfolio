"use client"
import { useGSAP } from '@gsap/react';
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function SinglePage({ infos }) {
    const secondDescriptionRef = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const imgToOverlay = gsap.utils.toArray(".imgToOverlay");

        imgToOverlay.forEach((img, index) => {
            gsap.to(img, {
                yPercent: -200,
                xPercent: index % 2 !== 0 ? "30" : undefined,
                scale: 0.7,
                scrollTrigger: {
                    trigger: secondDescriptionRef.current,
                    start: "top 90%",
                    end: "+=700",
                    toggleActions: 'play none none reverse',
                    scrub: true,
                }
            })
        });
    })
    function renderImages(imgs) {
        return imgs.map((img, index) => {
            const isEvenIndex = index % 2 === 0;
            const left = isEvenIndex ? '0' : '50%';
            const top = `${index * 600}px`;

            const imgStyle = {
                position: 'absolute',
                left: left,
                top: top,
                transform: index === imgs.length - 1 ?? 'translate(-50%, -50%)'
            };

            return (
                <div key={index} className='imgToOverlay' style={imgStyle}><Image src={img} alt={`Image ${index}`} fill={true} ></Image></div>
            );
        });
    }
    return (
        <main className="singlePage">
            <div className="top">
                <h1 className='title'>{infos.title}</h1>
                <h5 className='year'>{infos.year}</h5>
            </div>
            <div className="mainImage">
                <Image src={infos.mainImg} alt={infos.title} fill></Image>
            </div>
            <section className="firstDescription">
                <p className="desc">
                    {infos.firstText}
                </p>
                <div className="secondImage">
                    <Image src={infos.secondImg} alt={infos.title} fill={true}></Image>
                </div>
            </section>
            <section className="lastSection">
                <p className="secondDescription" ref={secondDescriptionRef}>
                    {infos.secondText}
                </p>

            </section>
            <div className="imgs">
                {renderImages(infos.imgs)}
            </div>

        </main>
    )
}

export default SinglePage