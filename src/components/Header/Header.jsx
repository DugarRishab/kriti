// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Events</a>
					</li>
					<li>
						<a href="#">Team</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
