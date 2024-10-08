"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

function Services() {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/contact", { scroll: false });
  };

  useGSAP(() => {
    const services = gsap.utils.toArray(".allServices .singleService");

    services.forEach((service) => {
      gsap.from(service, {
        y: 10,
        opacity: 0,
        scrollTrigger: {
          trigger: service,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <section id="services" className="services">
      <SectionTitle title={"Services"} />
      <div className="allServices">
        <div className="serviceDivider"></div>
        <div className="singleService scaleUp" onClick={handleOnClick}>
          <span className="serviceNo">01</span>
          <div className="serviceInfos">
            <h3>Web design</h3>
            <div className="process">
              <span>Landing Page</span>
              <span>Business Website</span>
              <span>Online Store</span>
            </div>
          </div>
        </div>

        <div className="serviceDivider"></div>
        <div className="singleService scaleUp" onClick={handleOnClick}>
          <span className="serviceNo">02</span>
          <div className="serviceInfos">
            <h3>Web development</h3>
            <div className="process">
              <span>Frontend Development</span>
              <span>Backend Development</span>
            </div>
          </div>
        </div>

        <div className="serviceDivider"></div>
        <div className="singleService scaleUp" onClick={handleOnClick}>
          <span className="serviceNo">03</span>
          <div className="serviceInfos">
            <h3>Mobile apps</h3>
            <div className="process">
              <span>Android</span>
              <span>iOS</span>
              <span>Design & Development</span>
            </div>
          </div>
        </div>

        <div className="serviceDivider"></div>
      </div>
    </section>
  );
}

export default Services;
