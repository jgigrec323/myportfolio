import SinglePage from "@/app/components/SinglePage";
import React from "react";

function Villagegandal() {
  const infos = {
    title: "Village Gandal",
    year: "2023",
    mainImg: `/images/villagegandal/1.png`,
    secondImg: `/images/villagegandal/2.png`,
    firstText:
      "VillageGandal, organized by PEPCI224, was a standout event with a unique twist. Serving as the event's official website, it provided students with a seamless registration process and a personalized digital card complete with a QR code. This innovative approach aimed to streamline entry procedures, ensuring a hassle-free experience on the day of the event.",
    secondText:
      "Using vanilla JavaScript, HTML, and CSS, I developed a fun and dynamic website that incorporated APIs for QR code generation. Backed by a robust database, the admin had full visibility of registered users and could effortlessly validate attendees online with a simple click or QR code scan. With over 200 students participating, VillageGandal proved to be both practical and memorable—an event to remember.",
    imgs: [`/images/villagegandal/3.png`, `/images/villagegandal/4.png`],
  };
  return <SinglePage infos={infos} />;
}

export default Villagegandal;
