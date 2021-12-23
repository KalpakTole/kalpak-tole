import React from "react";
import "./About.css";
import profilepic from "../assets/IMG_9612.JPG";

const About = () => {
	return (
		<div className="about-page">
			<div className="left-side">
				<img
					src={profilepic}
					alt="Profile Pic"
					className="profile-photo"
					// width="80%"
					// height="90%"
				/>
			</div>
			<div className="right-side">
				<div className="name-plate">
					<h1 className="myname">Kalpak Tole</h1>
					<p className="mylocation">Mumbai, India</p>
				</div>
				<div className="about-myself">
					<h3>
						Just a usual teen trying to bring unusual changes to the
						Web World...
					</h3>
					<details>
						<summary>Work Experience</summary>
						<h4>Systems Engineer</h4>
						<h5>Tata Consultancy Services Ltd.</h5>
						<span>08.2020 - PRESENT</span>
						<span>MUMBAI, INDIA</span>
						<ul>
							<li>
								Web development - Front-end (Angular and
								Material UI) (August 2021 - Present)
							</li>
							<li>
								AR-VR application development (April 2021 - July
								2021)
							</li>
							<li>
								Web development - Front-end (Python, Flask and
								Bootstrap) (December 2020 - April 2021)
							</li>
							<li>
								Meta Learning (September 2020 - December 2020)
							</li>
						</ul>
					</details>
				</div>
				<div className="hobby-list">
					<div className="ilike">I like </div>
					<div className="hobbies">
						<div className="webdev">Web Development</div>
						<div className="illustrate">Illustrating</div>
						<div className="python">Programming</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
