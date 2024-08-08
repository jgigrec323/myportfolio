import SinglePage from "@/app/components/SinglePage";
import React from "react";

function Procard() {
  const infos = {
    title: "ProCard",
    year: "2024",
    mainImg: `${process.env.BASE_PATH}/images/procard/1.png`,
    secondImg: `${process.env.BASE_PATH}/images/procard/2.png`,
    firstText:
      "Introducing ProCard—a groundbreaking project aimed at revolutionizing traditional business cards through NFC technology. My role involved crafting a dynamic website to showcase ProCard's innovative products, offering users a seamless e-commerce experience. From browsing and purchasing cards to customizing private pages akin to Linktree, every aspect was meticulously designed to enhance user engagement and satisfaction.",
    secondText:
      "Building this platform was not only a technical endeavor but also a fulfilling journey. Witnessing ProCard's digital presence come to life, empowering users to create meaningful connections, was both challenging and rewarding. It's a testament to the transformative potential of digital innovation in modern networking and communication.",
    imgs: [
      `${process.env.BASE_PATH}/images/procard/3.png`,
      `${process.env.BASE_PATH}/images/procard/4.png`,
      `${process.env.BASE_PATH}/images/procard/5.png`,
    ],
  };
  return <SinglePage infos={infos} />;
}

export default Procard;
