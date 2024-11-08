import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import "./Carousel.css";

export default function Carousel() {

    const carouselSlides = [
        {
          id: 1,
          heading: "Find Your Perfect Event",
          description: "Explore a variety of events tailored to your interests, from concerts to workshops, and book your spot instantly."
        },
        {
          id: 2,
          heading: "Effortless Event Management",
          description: "Organize events seamlessly with our user-friendly interface, ensuring a memorable experience for all attendees."
        },
        {
          id: 3,
          heading: "Discover New Opportunities",
          description: "Stay updated on upcoming events and connect with a community that shares your passions."
        },
        {
          id: 4,
          heading: "Simplify Your Bookings",
          description: "Enjoy hassle-free booking with secure and quick payment options, all within our platform."
        },
        {
          id: 5,
          heading: "Customized Experience",
          description: "Receive personalized event recommendations based on your interests and past bookings."
        },
        {
          id: 6,
          heading: "Exclusive Access",
          description: "Get access to exclusive events and early-bird offers reserved just for our community members."
        },
        {
          id: 7,
          heading: "Create Memorable Moments",
          description: "Make each event unforgettable, whether you're an organizer or an attendee, with features designed for seamless interactions."
        }
      ];
      

  return (
    <div id='carousel'>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            carouselSlides.map((item) => (
                <SwiperSlide key={item.id}>
                    <p id='carousel-text-lg'> {item.heading} </p>
                    <p id='carousel-text-sm'> {item.description} </p>
                    <img src="https://images.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg?clr=" alt="" className='slide-img' />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div> 
  )
}
