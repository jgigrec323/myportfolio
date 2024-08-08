import SinglePage from "@/app/components/SinglePage";
import React from "react";

function Gegapos() {
  const infos = {
    title: "GEGAPOS",
    year: "2023",
    mainImg: `${process.env.BASE_PATH}/images/gegapos/1.png`,
    secondImg: `${process.env.BASE_PATH}/images/gegapos/2.png`,
    firstText:
      "Meet GEGAPOS—a versatile Point of Sale (POS) application designed to streamline operations in restaurants and small businesses. From processing purchases to organizing appointments and managing sales volumes, GEGAPOS simplifies essential tasks, enhancing efficiency and productivity.",
    secondText:
      "As a personal project still in development, GEGAPOS represents my ongoing commitment to innovation. Utilizing the MERN (MongoDB, Express.js, React, Node.js) stack, I'm leveraging cutting-edge technology to create a robust and user-friendly solution. Stay tuned as GEGAPOS prepares to hit the market, poised to revolutionize the way businesses manage their operations.",
    imgs: [
      `${process.env.BASE_PATH}/images/gegapos/3.png`,
      `${process.env.BASE_PATH}/images/gegapos/4.png`,
      `${process.env.BASE_PATH}/images/gegapos/5.png`,
    ],
  };
  return <SinglePage infos={infos} />;
}

export default Gegapos;
