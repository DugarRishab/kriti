// src/components/HeroSection.js
import React from "react";
import Button from "./Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<section className="hero">
			<div className="content">
				<div className="title ruslan">KRITI</div>
				<div className="tagline">
					<p className="highlight">Largest</p>&nbsp;Art Festival of
					Kolkata
				</div>
				<Button
					text={"REGISTER NOW"}
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
			<div className="details">
				<div className="item highlight">17th to 19th Jan, 2025</div>
				<div className="item">Venue: IIEST Shibpur</div>
				<div className="item">Organised By: Scage</div>
			</div>
			<div className="rainbow">
				<img src="./imgs/home/rainbow.png" alt="" />
				<div className="days">38</div>
				<div className="text">Days to go</div>
			</div>
		</section>
	);
};

export default HeroSection;
