import React from 'react';
import classes from './About.module.css';
import profilepic from '../assets/IMG_9612_Resized.jpg';

const About = () => {
	return (
		<div className={classes['about-page']}>
			<div className={classes['left-side']}>
				<img
					src={profilepic}
					alt='Profile Pic'
					className={classes['profile-photo']}
					// width="80%"
					// height="90%"
				/>
			</div>
			<div className={classes['right-side']}>
				<div className={classes['name-plate']}>
					<h1 className={classes['myname']}>Kalpak Tole</h1>
					<p className={classes['mylocation']}>Mumbai, India</p>
				</div>
				<div className={classes['about-myself']}>
					<h3>Just a usual teen trying to bring unusual changes to the Web World...</h3>
					<details className={classes['work-experience']}>
						<summary>Work Experience</summary>
						<h4 style={{ display: 'inline' }}>Tata Consultancy Services Ltd.</h4>
						<h5 style={{ display: 'inline' }}> / Systems Engineer</h5>
						<div>
							<span>08.2020 - PRESENT</span>
							<span>, MUMBAI</span>
						</div>
						<ul>
							<li>Web development - Front-end (React and Material UI) (December 2021 - Present)</li>
							<li>Web development - Front-end (Angular and Material UI) (August 2021 - November 2021)</li>
							<li>AR-VR application development (April 2021 - July 2021)</li>
							<li>
								Web development - Front-end (Python, Flask and Bootstrap) (December 2020 - April 2021)
							</li>
							<li>Meta Learning (September 2020 - December 2020)</li>
						</ul>
					</details>
					<details>
						<summary>Education</summary>
						<h4 style={{ display: 'inline' }}>Vidyalankar Institute of Technology</h4>
						<h5 style={{ display: 'inline' }}> / Bachelor of Engineering (9.17/10)</h5>
						<div>
							<span>08.2016 - 11.2020</span>
							<span>, MUMBAI</span>
						</div>
					</details>
					<details className={classes['skills']}>
						<summary>Skills</summary>
						<div>
							<h5>- Web Development</h5>
							<h4>HTML, CSS, Angular, React</h4>
						</div>
						{/* <div className={classes['skill-level-web']}><progress id="skill-level-web" value="32" max="100"> 32% </progress></div>
						<br /> */}
						<div>
							<h5>- Competitive Programming</h5>
							<h4>Python</h4>
						</div>
						{/* <div className={classes['skill-level-python']}></div>
						<br /> */}
						<div>
							<h5>- Media</h5>
							<h4>Photography</h4>
						</div>
						{/* <div className={classes['skill-level-photography']}></div>
						<br /> */}
						<div>
							<h5>- 3D Modelling</h5>
							<h4>Autodesk Maya</h4>
						</div>
						{/* <div className={classes['skill-level-modelling']}></div>
						<br /> */}
						<div>
							<h5>- Illustration</h5>
							<h4>Photoshop and Illustrator</h4>
						</div>
						{/* <div className={classes['skill-level-illustration']}></div>
						<br /> */}
					</details>
					<details className={classes['awards-achievements']}>
						<summary>Awards and Achievements</summary>
						<h4>Codechef</h4>
						<span>PRESENT</span>
						<span>, MUMBAI</span>
						<p>Current rating - 1672, Highest rating - 1726</p>
						<br />
						<h4>Technical Paper Writing Competition</h4>
						<span>06.2020</span>
						<span>, MUMBAI</span>
						<p>
							Secured First rank in 'Paper Writing Competition' organised by Department of Electronics
							Engineering, Government Polytechnic Mumbai. The topic of the paper was: 'Ball Trajectory
							Prediction in Table Tennis'.
						</p>
						<br />
						<h4>Autodesk Maya Workshop</h4>
						<span>09.2019</span>
						<span>, MUMBAI</span>
						<p>
							Felicitation Award for conducting a workshop on 3D Modelling and animation using Autodesk
							Maya
						</p>
						<br />
						<h4>Cyber Olympiad</h4>
						<span>2016</span>
						<span>, MUMBAI</span>
						<p>State rank 16 in Cyber Olympiad in Std. XII</p>
						<br />
						<h4>Best-Boy Award</h4>
						<span>03.2014</span>
						<span>, MUMBAI</span>
						<p>Best-Boy award in Std. X awarded by School principal</p>
						<br />
					</details>
				</div>
				<div className={classes['hobby-list']}>
					<div className={classes['ilike']}>I like </div>
					<div className={classes['hobbies']}>
						<div className={classes['css']}>CSS</div>
						<div className={classes['animations']}>Animations</div>
						<div className={classes['python']}>Python</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
