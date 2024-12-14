import React from "react";
import Button from "./Button/Button";
import "./OrganiserSection.css";

const organisersData = [
    {
        name: "Akash Das",
        shortIntro: "lorem ipsum",
        profileImg: "profile.png",
    },
    {
        name: "Akash Das",
        shortIntro: "lorem ipsum",
        profileImg: "profile.png",
    },
    {
        name: "Akash Das",
        shortIntro: "lorem ipsum",
        profileImg: "profile.png",
    },
    {
        name: "Akash Das",
        shortIntro: "lorem ipsum",
        profileImg: "profile.png",
    },
];

const OrganiserSection = () => {
    return (
        <section className="section3">
            <div className="section3__main">
                <div className="heading centered">MEET THE ORGANISERS</div>
                <div className="organisers__container">
                    {organisersData.map((organiser, index) => (
                        <div className="organisers" key={index}>
                            <div className="organisers__img">
                                <img
                                    src={`/imgs/organisers/${organiser.profileImg}`}
                                    alt={`${organiser.name}'s profile`}
                                />
                            </div>
                            <div className="organisers__name description">
                                {organiser.name}
                            </div>
                            <div className="organisers__description description">
                                {organiser.shortIntro}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn__container">
                    <Button
                        text={"VIEW THE ENTIRE TEAM"}
                        endIcon={String.fromCharCode(8594)}
                    />
                </div>
            </div>
            <div className="side__image">
                <img src="/imgs/leaf.png" alt="" />
            </div>
        </section>
    );
};

export default OrganiserSection;
