import React from 'react';
import classes from './Photography.module.css';
import photo1 from '../assets/photography/photo (1).jpg'
import photo2 from '../assets/photography/photo (2).jpg'
import photo3 from '../assets/photography/photo (3).jpg'
import photo4 from '../assets/photography/photo (4).jpg'
import photo5 from '../assets/photography/photo (5).jpg'

const Photography = () => {
	return (
	<>
		<img src={photo2} alt="The Taj Mahal Hotel" className={classes['my-image']} />
	</>
	);
};

export default Photography;
