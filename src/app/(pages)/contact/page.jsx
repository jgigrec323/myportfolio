"use client";
import Menu from "@/app/components/Menu";
import { useAppContext } from "@/app/context/AppContext";
import emailSender from "@/app/utils/emailSender";
import React, { useState } from "react";

function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const { isMenuOpen } = useAppContext();
  const handleSelectedService = (service) => {
    setSelectedService(service);
  };
  const handleSelectedBudget = (budget) => {
    setSelectedBudget(budget);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const projectDetails = formData.get("projectDetails");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Project Details:", projectDetails);
    console.log("Selected Service:", selectedService);
    console.log("Selected Budget:", selectedBudget);

    const data = {
      name,
      email,
      projectDetails,
      selectedService,
      selectedBudget,
    };

    const response = await emailSender(data);

    console.log(response);
  };
  return (
    <>
      {isMenuOpen && <Menu></Menu>}
      <section className="contact">
        <h1>Please tell me about your project</h1>

        <div className="wrapper">
          <div className="firstRow">
            <h3>Service</h3>
            <div className="services">
              <div
                className={`singleService ${
                  selectedService == "Web design" ? "selected" : ""
                }`}
                onClick={() => handleSelectedService("Web design")}
              >
                Web design
              </div>
              <div
                className={`singleService ${
                  selectedService == "Web development" ? "selected" : ""
                }`}
                onClick={() => handleSelectedService("Web development")}
              >
                Web development
              </div>
              <div
                className={`singleService ${
                  selectedService == "Mobile development" ? "selected" : ""
                }`}
                onClick={() => handleSelectedService("Mobile development")}
              >
                Mobile development
              </div>
              <div
                className={`singleService ${
                  selectedService == "Mobile design" ? "selected" : ""
                }`}
                onClick={() => handleSelectedService("Mobile design")}
              >
                Mobile design
              </div>
              <div
                className={`singleService ${
                  selectedService == "Other" ? "selected" : ""
                }`}
                onClick={() => handleSelectedService("Other")}
              >
                Other
              </div>
            </div>
          </div>
          <div className="secondRow">
            <h3>Budget in USD</h3>
            <div className="budgets">
              <div
                className={`singleBudget ${
                  selectedBudget == "500-1k" ? "selected" : ""
                }`}
                onClick={() => handleSelectedBudget("500-1k")}
              >
                500-1k
              </div>
              <div
                className={`singleBudget ${
                  selectedBudget == "1k-5k" ? "selected" : ""
                }`}
                onClick={() => handleSelectedBudget("1k-5k")}
              >
                1k-5k
              </div>
              <div
                className={`singleBudget ${
                  selectedBudget == "5k-10k" ? "selected" : ""
                }`}
                onClick={() => handleSelectedBudget("5k-10k")}
              >
                5k-10k
              </div>
              <div
                className={`singleBudget ${
                  selectedBudget == "10k-50k" ? "selected" : ""
                }`}
                onClick={() => handleSelectedBudget("10k-50k")}
              >
                10k-50k
              </div>
              <div
                className={`singleBudget ${
                  selectedBudget == "more than 50k" ? "selected" : ""
                }`}
                onClick={() => handleSelectedBudget("more than 50k")}
              >
                more than 50k
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea
            name="projectDetails"
            placeholder="Project details (optional)"
          ></textarea>

          <div className="discuss">
            <button type="submit">Discuss project</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
