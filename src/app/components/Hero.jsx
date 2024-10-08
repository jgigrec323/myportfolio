"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useRouter } from "next/navigation";
function Hero() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const btn = useRef(null);
  const mainText = useRef(null);
  const mobileBreak = 1150;
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/contact");
  };

  useGSAP(() => {
    //here simulating the entrance animation
    mainText.current.style.opacity = 1;
    btn.current.style.opacity = 1;
    document.querySelector(".scrollIndicator").style.opacity = 1;
    if (mainText.current) {
      const text = new SplitType(mainText.current, { types: "words,chars" });

      gsap.from(text.chars, {
        yPercent: 100,
        opacity: 0,
        rotate: "20deg",
        scaleY: 0.5,
        duration: 0.2,
        stagger: 0.05,
        delay: 0.3,
      });

      if (window.innerWidth >= mobileBreak) {
        text.chars.forEach((letter) => {
          letter.addEventListener("mouseenter", () => {
            gsap.to(letter, {
              scale: 1.2,
              ease: "back.out(1.7)",
            });
          });
          letter.addEventListener("mouseleave", () => {
            gsap.to(letter, {
              scale: 1,
              ease: "back.out(1.7)",
            });
          });
        });
      }
    }
    gsap.from(btn.current, {
      opacity: 0,
      delay: 3,
    });
    gsap.from(".scrollIndicator", {
      opacity: 0,
      delay: 3.3,
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(text1.current, {
      yPercent: -103,
      duration: 0.5,
      ease: "power2.inOut",
    }).to(
      text2.current,
      { yPercent: -120, duration: 0.5, ease: "power2.inOut" },
      "-=0.4"
    );

    if (window.innerWidth >= mobileBreak) {
      btn.current.addEventListener("mouseenter", () => {
        tl.play();
      });

      btn.current.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    }

    return () => {
      btn.current.removeEventListener("mouseenter", () => {
        tl.play();
      });

      btn.current.removeEventListener("mouseleave", () => {
        tl.reverse();
      });
    };
  }, []);

  return (
    <div className="hero">
      <div className="mainText" ref={mainText}>
        <div>
          Hey ! {`I'm`} <span className="myname">Jean Galant .</span>
        </div>
        <div>
          Full stack <span className="myc">Web & Mobile</span>
        </div>
        <div>Developer</div>
      </div>
      <button className="btn" ref={btn} onClick={handleOnClick}>
        <div>
          <span className="text1" ref={text1}>
            Got a project ?
          </span>
          <span className="text2" ref={text2}>{`Let's talk`}</span>
        </div>
      </button>
      <div className="scrollIndicator down">
        Scroll
        <br />
        Down
      </div>
    </div>
  );
}

export default Hero;
