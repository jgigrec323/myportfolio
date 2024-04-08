"use client"
import { useRef } from "react"
import gsap from "gsap"



function Cursor() {
    const cursorRef = useRef(null)
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
                stagger: 0.02
            });
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener("mousemove", (e) => {
            moveCursor(e)
        });
    }

    return (
        <div className='cursor' ref={cursorRef}></div>
    )
}

export default Cursor