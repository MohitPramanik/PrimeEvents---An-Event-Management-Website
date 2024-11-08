import React from "react";
import "./Testimonials.css";

const testimonialsData = [
    {
      id: 1,
      name: "Emily Turner",
      position: "CEO, Startup Inc.",
      feedback: "This event platform is top-notch! It streamlined the whole process, making everything so much easier to manage.",
      imageUrl: "https://example.com/images/emily.jpg"
    },
    {
      id: 2,
      name: "Michael Lee",
      position: "Event Coordinator, Creative Events",
      feedback: "Highly recommend! The intuitive interface and robust features helped us plan and execute a successful event seamlessly.",
      imageUrl: "https://example.com/images/michael.jpg"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Marketing Director, Bright Ideas",
      feedback: "We couldn’t have asked for a better experience. The team and platform were outstanding from start to finish.",
      imageUrl: "https://example.com/images/sarah.jpg"
    },
    {
      id: 4,
      name: "John Doe",
      position: "Founder, Dream Events",
      feedback: "The platform made event planning so much easier. From managing RSVPs to tracking guests, everything was in one place!",
      imageUrl: "https://example.com/images/john.jpg"
    },
    {
      id: 5,
      name: "Olivia Brown",
      position: "Head of Operations, Event Masters",
      feedback: "A fantastic tool for managing large events! We were able to engage attendees better, and the analytics were incredibly useful.",
      imageUrl: "https://example.com/images/olivia.jpg"
    },
    {
      id: 6,
      name: "James Smith",
      position: "Event Manager, The Big Event Co.",
      feedback: "The user experience was amazing. Easy to navigate, and our attendees loved it. I will definitely use this again for future events.",
      imageUrl: "https://example.com/images/james.jpg"
    }
  ];
  

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
