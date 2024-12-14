// src/screens/Home.jsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BannerSection from "../components/BannerSection";
import OrganiserSection from "../components/OrganiserSection";
import SponsorSection from "../components/SponsorSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import "./Home.css";
import EventsSection from "../components/EventsSection/EventsSection";

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <HeroSection />
            <BannerSection />
            <EventsSection></EventsSection>
            <OrganiserSection />
            <SponsorSection />
            <TeamSection />
            <Footer />
        </div>
    );
};

export default Home;
