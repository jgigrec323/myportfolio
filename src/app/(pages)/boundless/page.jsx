import SinglePage from "@/app/components/SinglePage";
import React from "react";

function Boundless() {
  const infos = {
    title: "Boundless",
    year: "2024",
    mainImg: `${process.env.BASE_PATH}/images/boundless/1.png`,
    secondImg: `${process.env.BASE_PATH}/images/boundless/2.png`,
    firstText:
      "Introducing BOUNDLESS—an inclusive app designed to unite people of all abilities under one platform. With a mission to provide support and assistance to individuals with disabilities in their daily lives, BOUNDLESS allows users to make requests for help based on their current location, connecting them with willing volunteers.",
    secondText:
      "This groundbreaking app was conceived during a hackathon in 2024, where my team and I worked tirelessly to bring our vision to life in less than 24 hours. Leveraging the power of Flutter and Dart, along with integrations like the Google Maps API and Firebase Realtime Database, we crafted a seamless and intuitive user experience. Our efforts were rewarded with a 3rd place finish—a testament to the impact and potential of BOUNDLESS in fostering inclusivity and empowerment for all.",
    imgs: [
      `${process.env.BASE_PATH}/images/boundless/3.png`,
      `${process.env.BASE_PATH}/images/boundless/4.png`,
      `${process.env.BASE_PATH}/images/boundless/5.png`,
      `${process.env.BASE_PATH}/images/boundless/6.png`,
      `${process.env.BASE_PATH}/images/boundless/7.png`,
    ],
  };
  return <SinglePage infos={infos} />;
}

export default Boundless;
