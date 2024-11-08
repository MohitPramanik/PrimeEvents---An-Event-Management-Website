import "./UpcomingEvents.css";

import SwitchCards from "../components/SwitchCards";

export default function UpcomingEvents() {
  return (
    <section id='upcoming-events-section'>
        <h2 id="upcoming-events-title">Upcoming Events</h2>
        <div id="upcoming-event-detail-area">
            <div id="upcoming-event-detail">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste atque explicabo fugit possimus dolorum omnis doloremque consectetur! Iste, sit iusto!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum veniam eum sint unde odit saepe, tempore amet dolores, minima magni. Consectetur eaque unde natus pariatur optio dignissimos beatae odio!</p>
            </div>
            <SwitchCards />
        </div>
    </section>
  )
}
