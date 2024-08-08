"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Menu from "./Menu";
import { useAppContext } from "../context/AppContext";

function SinglePage({ infos }) {
  const secondDescriptionRef = useRef(null);
  const { isMenuOpen } = useAppContext();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imgToOverlay = gsap.utils.toArray(".imgToOverlay");

    if (typeof window !== "undefined" && window.innerWidth >= 850) {
      imgToOverlay.forEach((img, index) => {
        gsap.to(img, {
          yPercent: -200,
          xPercent: index % 2 !== 0 ? "30" : undefined,
          scale: 0.7,
          scrollTrigger: {
            trigger: secondDescriptionRef.current,
            start: "top 90%",
            end: "+=700",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        });
      });
    }

    gsap.from(".firstDescription .desc", {
      y: 50,
      duration: 0.4,
      opacity: 0,
      scrollTrigger: {
        trigger: ".firstDescription .desc",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(secondDescriptionRef.current, {
      y: 50,
      duration: 0.4,
      opacity: 0,
      scrollTrigger: {
        trigger: secondDescriptionRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".secondImage", {
      y: 50,
      scale: 1.2,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".secondImage",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  function renderImages(imgs) {
    return imgs.map((img, index) => {
      const isEvenIndex = index % 2 === 0;
      const left = isEvenIndex ? "0" : "50%";
      const top = `${index * 600}px`;

      const imgStyle =
        typeof window !== "undefined" && window.innerWidth >= 850
          ? {
              position: "absolute",
              left: left,
              top: top,
              transform:
                index === imgs.length - 1 ? "translate(-50%, -50%)" : undefined,
            }
          : {
              position: "relative",
            };

      return (
        <div key={index} className="imgToOverlay" style={imgStyle}>
          <Image src={img} alt={`Image ${index}`} fill={true}></Image>
        </div>
      );
    });
  }

  return (
    <>
      {isMenuOpen && <Menu></Menu>}
      <main className="singlePage">
        <div className="top">
          <h1 className="title">{infos.title}</h1>
          <h5 className="year">{infos.year}</h5>
        </div>
        <div className="mainImage">
          <Image src={infos.mainImg} alt={infos.title} fill></Image>
        </div>
        <section className="firstDescription">
          <p className="desc">{infos.firstText}</p>
          <div className="secondImage">
            <Image src={infos.secondImg} alt={infos.title} fill={true}></Image>
          </div>
        </section>
        <section className="lastSection">
          <p className="secondDescription" ref={secondDescriptionRef}>
            {infos.secondText}
          </p>
        </section>
        <div className="imgs">{renderImages(infos.imgs)}</div>
      </main>
    </>
  );
}

export default SinglePage;
