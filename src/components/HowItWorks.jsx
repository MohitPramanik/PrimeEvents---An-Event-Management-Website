import React from "react";
import "./HowItWorks.css";

// Sample data for steps
const stepsData = [
  {
    id: 1,
    title: "Sign Up",
    description: "Create an account to get access to all the features to manage your events.",
    icon: "https://img.icons8.com/ios-filled/50/000000/user-plus.png",
  },
  {
    id: 2,
    title: "Choose Event Type",
    description: "Select from a variety of event types such as conferences, webinars, and parties.",
    icon: "https://img.icons8.com/ios-filled/50/000000/event-available.png",
  },
  {
    id: 3,
    title: "Customize Event",
    description: "Personalize your event with themes, locations, and guest lists.",
    icon: "https://img.icons8.com/ios-filled/50/000000/settings.png",
  },
  {
    id: 4,
    title: "Launch & Manage",
    description: "Launch your event and manage registrations and attendees.",
    icon: "https://img.icons8.com/ios-filled/50/000000/launch.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-description">
          Follow these simple steps to organize and manage your events seamlessly.
        </p>
        <div className="steps-container">
          {stepsData.map((step) => (
            <div className="step" key={step.id}>
              <div className="step-icon">
                <img src={step.icon} alt={step.title} />
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
