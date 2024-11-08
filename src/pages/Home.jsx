import React from 'react'
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from '../components/UpcomingEvents';
import HowItWorks from '../components/HowItWorks';
import FeaturedOrganizers from '../components/FeaturedOrganizers';

export default function Home() {
  return (
    <>
      <HeroSection /> 
      <UpcomingEvents />
      <Testimonials />
      <HowItWorks />
      <FeaturedOrganizers />
    </>
  )
}
