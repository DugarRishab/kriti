// src/components/SponsorSection.jsx
import React from "react";
import Button from "../Button/Button";
import "./SponsorSection.css";

const SponsorSection = () => {
    const sponsors = [
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        },
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        },
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        },
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        },
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        },
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        },
        {
            sponsorImage: "/imgs/Sponsors/adobe.png",
            sponsorName: "Adobe"
        }
    ]

    return (
        <section className="section4">
            <div className="section4__main">
                <div className="heading">OUR SPONSORS</div>
                <div className="sponsors__container">
                    {
                        sponsors.map((sponsor,index) => {
                            return (<div key={index} className="sponsors">
                                <img src={sponsor.sponsorImage} alt={sponsor.sponsorName} />
                            </div>)
                        })
                    }
                </div>
                <div className="btn__container">
                    <Button
                        text={"DOWNLOAD OUR BROCHURE"}
                        endIcon={
                            <svg
						        width="28"
						        height="26"
						        viewBox="0 0 28 26"
						        fill="none"
						        xmlns="http://www.w3.org/2000/svg"
					        >
						        <path
						        	d="M20.9527 11.3332L12.0127 2.39315L14.3697 0.0361328L27.3333 12.9998L14.3697 25.9633L12.0127 23.6063L20.9527 14.6665H0.666656V11.3332H20.9527Z"
						        	fill="black"
						        />
					        </svg>
                        }
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
