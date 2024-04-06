import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const horizontalScroll = () => {
  const slider = document.querySelector(".slider");
  const sections = gsap.utils.toArray(".slider section");

  let tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: 2,
      end: () => "+=" + slider.offsetWidth,
    },
  });

  tl.to(slider, {
    xPercent: -10,
  });
};
