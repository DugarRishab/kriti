// src/screens/Home.jsx
import React from "react";
import Header from "../components/Header/Header";
import EventsHeroSection from "../components/EventsHeroSection/EventsHeroSection";
import EventsDetailsSection from "../components/EventsDetailsSection/EventsDetailsSection";
import Footer from "../components/Footer/Footer";
import "./Events.css";

const eventsData = [
    {
        eventName: "EVENT NAME 1",
        eventDescription: "INDULGE INTO THE EXPERIENCE OF BOUNDLESS CREATIVITY AND ARTISTIC EXPRESSION.",
        eventImage: "./imgs/Events/EventName1.png",
        isReversed: false
    },
    {
        eventName: "EVENT NAME 2",
        eventDescription: "DISCOVER THE MAGIC OF INNOVATION AND TECHNICAL EXCELLENCE.",
        eventImage: "./imgs/Events/EventName2.png",
        isReversed: true
    }
];

const Events = () => {
    return (
        <div>
            <Header />
            <EventsHeroSection />
            
            {eventsData.map((event,index) => (
                <EventsDetailsSection
                    key={index}
                    isReversed={event.isReversed}
                    eventImage={event.eventImage}
                    eventName={event.eventName}
                    eventDescription={event.eventDescription}
                />
            ))}

            <Footer />
        </div>
    );
};

export default Events;