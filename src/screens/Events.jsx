// src/screens/Home.jsx
import React from "react";
import Header from "../components/Header/Header";
import EventsHeroSection from "../components/EventsHeroSection/EventsHeroSection";
import EventsDetailsSection from "../components/EventsDetailsSection/EventsDetailsSection";
import Footer from "../components/Footer/Footer";
import "./Events.css";

const Events = () => {
    return (
        <div>
            <Header />
            <EventsHeroSection />
            <EventsDetailsSection />
            <Footer />
        </div>
    );
};

export default Events;