// src/components/OrganiserSection.jsx
import React from "react";
import Button from "./Button/Button";
import "./OrganiserAndSponsorSection.css";

const OrganiserSection = () => {
    return (
        <section className="section3">
            <div className="section3__main">
                <div className="heading centered">MEET THE ORGANISERS</div>
                <div className="organisers__container">
                    <div className="organisers">
                        <div className="organisers__img">
                            <img src="/imgs/profile.png" alt="" />
                        </div>
                        <div className="organisers__name description">
                            AKASH DAS
                        </div>
                        <div className="organisers__description description">
                            LOREM IPSUM
                        </div>
                    </div>
                    <div className="organisers">
                        <div className="organisers__img">
                            <img src="/imgs/profile.png" alt="" />
                        </div>
                        <div className="organisers__name description">
                            AKASH DAS
                        </div>
                        <div className="organisers__description description">
                            LOREM IPSUM
                        </div>
                    </div>
                    <div className="organisers">
                        <div className="organisers__img">
                            <img src="/imgs/profile.png" alt="" />
                        </div>
                        <div className="organisers__name description">
                            AKASH DAS
                        </div>
                        <div className="organisers__description description">
                            LOREM IPSUM
                        </div>
                    </div>
                    <div className="organisers">
                        <div className="organisers__img">
                            <img src="/imgs/profile.png" alt="" />
                        </div>
                        <div className="organisers__name description">
                            AKASH DAS
                        </div>
                        <div className="organisers__description description">
                            LOREM IPSUM
                        </div>
                    </div>
                </div>
                <div className="btn__container">
                    <Button
                        text={"VIEW THE ENTIRE TEAM"}
                        endIcon={String.fromCharCode(8594)}
                    ></Button>
                </div>
            </div>
            <div className="side__image">
                <img src="/imgs/leaf.png" alt="" />
            </div>
        </section>
    );
};

export default OrganiserSection;
