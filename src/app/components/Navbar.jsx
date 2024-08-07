"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const navRef = useRef(null);
  const { setIsMenuOpen, isMenuOpen } = useAppContext();

  useGSAP(() => {
    const burger = document.querySelector(".burger");

    if (burger) {
      burger.addEventListener("click", () => {
        setIsMenuOpen(!isMenuOpen);
      });
    }
    navRef.current.style.opacity = 1;
    gsap.from(navRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  }, []);
  return (
    <nav ref={navRef}>
      <div className="logo">
        <a href="/">JG.</a>
      </div>
      <div className="burger">
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
