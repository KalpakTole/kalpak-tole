import React from "react";
import "./About.css";
import "../assets/IMG_9612.JPG";

const About = () => {
	return (
		<div className="about-page">
			<div className="left-side">
				<img
					src="http://localhost:8000/src/assets/IMG_9612.JPG"
					alt="Profile Pic"
					className="profile-photo"
					// width="80%"
					// height="90%"
				/>
			</div>
			<div className="right-side"></div>
		</div>
	);
};

export default About;
