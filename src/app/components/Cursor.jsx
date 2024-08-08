"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppContext } from "../context/AppContext";

function Cursor() {
  const cursorRef = useRef(null);
  const { isMenuOpen } = useAppContext();

  const moveCursor = (e) => {
    if (cursorRef.current) {
      const cursorWidth = cursorRef.current.offsetWidth;
      const cursorHeight = cursorRef.current.offsetHeight;
      const cursorHalfWidth = cursorWidth / 2;
      const cursorHalfHeight = cursorHeight / 2;

      gsap.to(cursorRef.current, {
        x: e.clientX - cursorHalfWidth,
        y: e.clientY - cursorHalfHeight,
        duration: 0.3,
        stagger: 0.02,
      });
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      moveCursor(e);
    });
  }

  useGSAP(() => {
    const scaleUp = document.querySelectorAll(".scaleUp");

    scaleUp.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursorRef.current.style.mixBlendMode = "initial";
        cursorRef.current.firstChild.style.opacity = 1;
        gsap.to(cursorRef.current, {
          scale: 5,
        });
      });
      el.addEventListener("mouseleave", () => {
        cursorRef.current.style.mixBlendMode = "difference";
        cursorRef.current.firstChild.style.opacity = 0;
        gsap.to(cursorRef.current, {
          scale: 1,
        });
      });
    });

    if (isMenuOpen) {
      const navLinks = document.querySelectorAll(".menu .navLink");
      navLinks.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursorRef.current, {
            scale: 7,
          });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(cursorRef.current, {
            scale: 1,
          });
        });
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="cursor" ref={cursorRef}>
      <p>
        {`Let's`} <br /> Talk
      </p>
    </div>
  );
}

export default Cursor;
