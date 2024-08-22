"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Tilt } from "react-next-tilt";
import { useRouter } from "next/navigation";

function Slider() {
  const sliderRef = useRef(null);
  const descRef = useRef(null);
  const mobileBreak = 1150;
  const router = useRouter();
  let isMobile = false;
  const projects = [
    {
      name: "ProCard",
      year: 2024,
      img: `/images/procard/1.png`,
    },
    {
      name: "GEGAPOS",
      year: 2023,
      img: `/images/gegapos/1.png`,
    },
    {
      name: "Kac",
      year: 2023,
      img: `/images/kac/1.png`,
    },
    {
      name: "Hadja Maimouna",
      year: 2023,
      img: `/images/hadjaM/1.png`,
    },
    {
      name: "Village Gandal",
      year: 2023,
      img: `/images/villagegandal/1.png`,
    },
    {
      name: "Dreaminati Store",
      year: 2023,
      img: `/images/dreaminati/1.png`,
    },
    {
      name: "Boundless",
      year: 2024,
      img: `/images/boundless/1.png`,
    },
  ];

  useGSAP(() => {
    isMobile = window.innerWidth >= 768 ? true : false;
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray(".slider section");

    const projectWidth = 630;
    const numProjects = projects.length;
    const totalWidth = projectWidth * numProjects;
    const sliderWidth = sliderRef.current.offsetWidth;
    const xPercentValue = ((totalWidth - sliderWidth) / totalWidth) * 100;

    if (window.innerWidth >= mobileBreak) {
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
        xPercent: xPercentValue,
      });
      sections.forEach((stop) => {
        tl.from(stop, {
          xPercent: 50,
          scale: 1.2,
          ease: "elastic.out(1,1)",
          scrollTrigger: {
            trigger: stop,
            scrub: 2,
            containerAnimation: tl,
          },
        });
      });
    } else {
      const cards = document.querySelectorAll("section.cards");

      cards.forEach((card) => {
        gsap.from(card, {
          y: 50,
          duration: 0.4,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    gsap.from(descRef.current, {
      y: 50,
      duration: 0.4,
      opacity: 0,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    console.log(projects.length);
  }, [isMobile]);

  const handleCardClick = (projectName) => {
    router.push(`/${projectName.replace(/\s+/g, "").toLowerCase()}`);
  };

  return (
    <div className="outer">
      <div className="slider" ref={sliderRef}>
        <section className="text" ref={descRef}>
          <p>
            My expertise has played a pivotal {isMobile && <br />} role in
            bringing impactful projects to {isMobile && <br />} life. Dive into
            my curated selection {isMobile && <br />} and discover what I can
            achieve.
          </p>
        </section>
        {projects.map((project, index) => (
          <section
            className="cards"
            key={index}
            onClick={() => handleCardClick(project.name)}
          >
            {!isMobile ? (
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                spotGlareEnable={false}
                lineGlareEnable={false}
                lineGlareBlurEnable={false}
              >
                <div className="inner">
                  <h3 className="projectTitle">{project.name}</h3>
                  <h4 className="projectYear">{project.year}</h4>
                  <div className="projectImage">
                    <img src={project.img} alt={`Project ${index + 1}`} />
                  </div>
                  <div className="projectActions">
                    <button className="btn">
                      <a href={project.name.replace(/\s+/g, "").toLowerCase()}>
                        More about this
                      </a>
                    </button>
                  </div>
                </div>
              </Tilt>
            ) : (
              <div className="inner">
                <h3 className="projectTitle">{project.name}</h3>
                <h4 className="projectYear">{project.year}</h4>
                <div className="projectImage">
                  <img src={project.img} alt={`Project ${index + 1}`} />
                </div>
                <div className="projectActions">
                  <button className="btn">
                    <a href={project.name.replace(/\s+/g, "").toLowerCase()}>
                      More about this
                    </a>
                  </button>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Slider;
