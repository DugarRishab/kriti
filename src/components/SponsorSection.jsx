// src/components/SponsorSection.jsx
import React from "react";
import Button from "./Button/Button";
import "./OrganiserAndSponsorSection.css";

const SponsorSection = () => {
    return (
        <section className="section4">
            <div className="section4__main">
                <div className="heading centered">OUR SPONSORS</div>
                <div className="sponsors__container">
                    <div className="top__sponsors">
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                    </div>
                    <div className="other__sponsors">
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                        <div className="sponsors">
                            <img src="/imgs/adobe.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="btn__container">
                    <Button
                        text={"DOWNLOAD OUR BROCHURE"}
                        endIcon={String.fromCharCode(8595)}
                    ></Button>
                </div>
            </div>
            <div className="cover__image">
                <img src="/imgs/s4-bg.png" alt="" />
            </div>
        </section>
    );
};

export default SponsorSection;
