import SinglePage from "@/app/components/SinglePage";
import React from "react";

function Dreaminati() {
  const infos = {
    title: "Dreaminati",
    year: "2023",
    mainImg: `${process.env.BASE_PATH}/images/dreaminati/1.png`,
    secondImg: `${process.env.BASE_PATH}/images/dreaminati/2.png`,
    firstText:
      "Welcome to DREAMINATI SHOP—an exclusive destination for streetwear enthusiasts seeking the latest and most stylish products. Designed as a dropshipping website, it offers a curated selection of fashionable items and multiple delivery options tailored to customers in Africa and beyond.",
    secondText:
      "Crafted with React.js, the website embodies a sleek and minimalist aesthetic, perfectly complementing the brand's logo and identity. Its simplicity belies its sophistication, providing users with a seamless browsing experience and easy access to a diverse range of products. A labor of love for my friends, this project was an opportunity to create something cool and classy, leaving an astonishing impression on all who visit.",
    imgs: [
      `${process.env.BASE_PATH}/images/dreaminati/3.png`,
      `${process.env.BASE_PATH}/images/dreaminati/4.png`,
    ],
  };
  return <SinglePage infos={infos} />;
}

export default Dreaminati;
