import SinglePage from "@/app/components/SinglePage";
import React from "react";

function HadjaMaimouna() {
  const infos = {
    title: "Hadja M",
    year: "2023",
    mainImg: `${process.env.BASE_PATH}/images/hadjaM/1.png`,
    secondImg: `${process.env.BASE_PATH}/images/hadjaM/2.png`,
    firstText:
      "Hadja Maimouna Yombouno, the distinguished First Vice President of Guinea's National Transitional Council as of 2023, presents her portfolio through this sleek and informative website. Crafted with simplicity and elegance, the single-page design showcases her notable accomplishments and contributions.",
    secondText:
      "Built using simple HTML, CSS (Sass), and JavaScript, the website features a captivating gallery, sections highlighting her recent media references, and other cool features. Its clean layout and intuitive navigation provide visitors with an engaging glimpse into Hadja Maimouna's impactful journey and professional endeavors.",
    imgs: [
      `${process.env.BASE_PATH}/images/hadjaM/3.png`,
      `${process.env.BASE_PATH}/images/hadjaM/4.png`,
    ],
  };
  return <SinglePage infos={infos} />;
}

export default HadjaMaimouna;
