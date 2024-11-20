import SinglePage from "@/app/components/SinglePage";
import React from "react";

function Estore() {
  const infos = {
    title: "E-Store",
    year: "2024",
    mainImg: `/images/estore/1.png`,
    secondImg: `/images/estore/2.png`,
    firstText:
      "Welcome to E-Store—a versatile e-commerce platform designed for both shoppers and administrators. E-Store features an intuitive online shop offering a wide range of products, secure payment options, and efficient delivery services, ensuring a seamless shopping experience for all users.",
    secondText:
      "Built with Next.js, E-Store delivers exceptional performance and user experience. In addition to the shop, it includes a powerful admin dashboard, allowing seamless management of products, orders, customers, and analytics. This dual functionality ensures efficiency for business owners and convenience for customers, setting a new standard for e-commerce platforms.",
    imgs: [
      `/images/estore/3.png`,
      `/images/estore/4.png`,
      `/images/estore/5.png`,
      `/images/estore/6.png`,
      `/images/estore/7.png`,
    ],
  };

  return <SinglePage infos={infos} />;
}

export default Estore;
