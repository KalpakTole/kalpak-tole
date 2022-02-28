import React from 'react';
import classes from './Contact.module.css';
import GithubIconAnimated from '../assets/Icons/GithubIconAnimated.gif'
import LinkedInIconAnimated from '../assets/Icons/LinkedInIconAnimated.gif'
import InstagramIconAnimated from '../assets/Icons/InstagramIconAnimated.gif'
import TwitterIconAnimated from '../assets/Icons/TwitterIconAnimated.gif'

const Contact = () => {
	return (
		<div className={classes['contact-page']}>
			<div className={classes['left-side']}>
				<h1 className={classes['connect-heading']}>Let's connect!</h1>
				{/* <form action='mailto:kalpakto26@gmail.com' method='post' enctype='text/plain'>
					Name:
					<br />
					<input type='text' name='name' />
					<br />
					E-mail:
					<br />
					<input type='text' name='email' />
					<br />
					Comment:
					<br />
					<input type='text' name='comment' size='100' />
					<br />
					<br />
					<input type='submit' value='Send' />
					<input type='reset' value='Reset' />
				</form> */}
				<h2>
					<a href='mailto:kalpakto26@gmail.com?&subject=Let us connect, Kalpak!&body=Hello Kalpak!'>
						Click here to send an email to me!
					</a>
				</h2>
				<br />
				<br />
				<h2>Or I am also available on the following links:</h2>
				<h3 className={classes['heading']}>
					<img className={classes['icon']} src={GithubIconAnimated} alt='Github Icon' />
					Github
				</h3>
				<h3 className={classes['heading']}>
					<img className={classes['icon']} src={LinkedInIconAnimated} alt='LinkedIn Icon' />
					LinkedIn
				</h3>
				<h3 className={classes['heading']}>
					<img className={classes['icon']} src={InstagramIconAnimated} alt='Instagram Icon' />
					Instagram
				</h3>
				<h3 className={classes['heading']}>
					<img className={classes['icon']} src={TwitterIconAnimated} alt='Twitter Icon' />
					Twitter
				</h3>
			</div>
			<div className={classes['right-side']}></div>
		</div>
	);
};

export default Contact;
