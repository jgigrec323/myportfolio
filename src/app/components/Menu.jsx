"use client";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAppContext } from "../context/AppContext";
import SplitType from "split-type";
import { usePathname, useRouter } from "next/navigation";

function Menu() {
  const menuRef = useRef(null);
  const closeBtnRef = useRef(null);
  const spitLink = useRef(null);
  const { isMenuOpen, setIsMenuOpen, setIsMenuItemClicked } = useAppContext();
  const currentPath = usePathname();
  const router = useRouter();

  useGSAP(() => {
    const links = document.querySelectorAll(".middle li");
    closeBtnRef.current.addEventListener("click", () => {
      setIsMenuOpen(!isMenuOpen);
    });
    gsap.from(menuRef.current, {
      yPercent: -100,
      duration: 0.5,
      ease: "expo.out",
    });

    if (links) {
      links.forEach((link) => {
        const linkSplit = new SplitType(link, { types: "chars" });
        spitLink.current = linkSplit;
        gsap.from(linkSplit.chars, {
          yPercent: 100,
          scaleY: 0.5,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.4,
        });
        if (window.innerWidth >= 1150 && isMenuOpen) {
          linkSplit.chars.forEach((letter) => {
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
      });
    }

    gsap.from(".menu .bottom a", {
      opacity: 0,
      stagger: 0.05,
      duration: 0.3,
      delay: 1,
    });
    gsap.from(".menu .top .logo", {
      opacity: 0,
      duration: 0.3,
      delay: 0.7,
    });
    gsap.from(".menu .top .closeBtn", {
      opacity: 0,
      duration: 0.3,
      delay: 0.7,
    });
  }, [isMenuOpen]);

  const handleLocalLinkClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    setIsMenuItemClicked(true); // Set the menu item clicked state
    setIsMenuOpen(false); // Close the menu

    const targetLink = e.target.closest("a"); // Get the anchor element
    const href = targetLink.getAttribute("href");

    if (href.startsWith("#")) {
      // **Internal Hash Link**
      const targetId = href.substring(1); // Extract the target id

      if (currentPath === "/") {
        // If on the homepage, scroll to the section
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          window.history.pushState(null, null, `#${targetId}`); // Update the URL hash
          targetEl.scrollIntoView({
            behavior: "smooth", // Smooth scroll to the section
          });
        }
      } else {
        // If on a different page, navigate to the homepage with the hash
        router.push(`/#${targetId}`);
      }
    } else {
      // **Route Link**
      router.push(href); // Navigate to the route (e.g., /contact)
    }
  };

  return (
    <div className="menu" ref={menuRef}>
      <div className="top">
        <div className="logo">
          <a href="/">JG.</a>
        </div>
        <div className="closeBtn" ref={closeBtnRef}>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul className="middle">
        <li className="navLink" onClick={handleLocalLinkClick}>
          <a href="/">Home</a>
        </li>
        <li className="navLink" onClick={handleLocalLinkClick}>
          <a href="#skills">Skills</a>
        </li>
        <li className="navLink" onClick={handleLocalLinkClick}>
          <a href="#projects">Projects</a>
        </li>
        <li className="navLink" onClick={handleLocalLinkClick}>
          <a href="#services">Services</a>
        </li>
        <li className="navLink" onClick={handleLocalLinkClick}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="bottom">
        <a href="#" className="active">
          En
        </a>
        <a href="https://fr.jeangalant.com" className="">
          Fr
        </a>
      </div>
    </div>
  );
}

export default Menu;
