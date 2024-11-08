import React, { useEffect, useRef } from 'react';
import './FeaturedOrganizers.css'; // Import your CSS file

const FeaturedOrganizers = () => {
  const organizers = [
    { id: 1, name: 'EventCo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s' },
    { id: 2, name: 'Innovate Events', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s' },
    { id: 3, name: 'TechEvents', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s' },
    { id: 4, name: 'EventMasters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s' },
    { id: 5, name: 'Creative Events', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s' },
    { id: 6, name: 'Event Pro', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s' },
    // Add more organizers as needed
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;
    let isScrolling = true;

    const smoothScroll = () => {
      if (carousel && isScrolling) {
        carousel.scrollBy({
          left: 1,
          behavior: 'smooth',
        });
      }
    };

    // Start the auto-scrolling
    scrollInterval = setInterval(smoothScroll, 10); // Adjust the scroll speed here

    // Stop scrolling when mouse enters the carousel
    const stopScroll = () => {
      isScrolling = false;
    };

    // Resume scrolling when mouse leaves the carousel
    const resumeScroll = () => {
      isScrolling = true;
    };

    carousel.addEventListener('mouseover', stopScroll);
    carousel.addEventListener('mouseout', resumeScroll);

    // Cleanup interval and event listeners on component unmount
    return () => {
      clearInterval(scrollInterval);
      carousel.removeEventListener('mouseover', stopScroll);
      carousel.removeEventListener('mouseout', resumeScroll);
    };
  }, []);

  return (
    <div className="organizers-section">
      <h2>Featured Organizers & Partners</h2>
      <div className="organizers-carousel" ref={carouselRef}>
        {organizers.map((organizer) => (
          <div key={organizer.id} className="organizer-item">
            <img src={organizer.image} alt={organizer.name} className="organizer-img" />
            <p className="organizer-name">{organizer.name}</p>
          </div>
        ))}
        {/* Duplicate the items to make the scroll infinite */}
        {organizers.map((organizer) => (
          <div key={organizer.id + '-duplicate'} className="organizer-item">
            <img src={organizer.image} alt={organizer.name} className="organizer-img" />
            <p className="organizer-name">{organizer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOrganizers;
