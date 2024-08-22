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

    const data = {
      name,
      email,
      projectDetails,
      selectedService,
      selectedBudget,
    };

    try {
      const response = await emailSender(data);
      console.log(response);
      alert("Email sent successfully!");
      event.target.reset(); // Reset the form after successful submission
      setSelectedService(""); // Reset selected service
      setSelectedBudget(""); // Reset selected budget
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <>
      {isMenuOpen && <Menu />}
      <section className="contact">
        <h1>Please tell me about your project</h1>

        <div className="wrapper">
          <div className="firstRow">
            <h3>Service</h3>
            <div className="services">
              {[
                "Web design",
                "Web development",
                "Mobile development",
                "Mobile design",
                "Other",
              ].map((service) => (
                <div
                  key={service}
                  className={`singleService ${
                    selectedService === service ? "selected" : ""
                  }`}
                  onClick={() => handleSelectedService(service)}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="secondRow">
            <h3>Budget in USD</h3>
            <div className="budgets">
              {["500-1k", "1k-5k", "5k-10k", "10k-50k", "more than 50k"].map(
                (budget) => (
                  <div
                    key={budget}
                    className={`singleBudget ${
                      selectedBudget === budget ? "selected" : ""
                    }`}
                    onClick={() => handleSelectedBudget(budget)}
                  >
                    {budget}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
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
