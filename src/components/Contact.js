import React from 'react';
import classes from './Contact.module.css';

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
				<a
					href='mailto:kalpakto26@gmail.com?&subject=Let us connect, Kalpak!&body=Add what you want to suggest'
				>
					Send
				</a>
			</div>
			<div className={classes['right-side']}></div>
		</div>
	);
};

export default Contact;
