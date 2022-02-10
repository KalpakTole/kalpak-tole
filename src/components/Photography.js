import React from 'react';
import classes from './Photography.module.css';
import photo1 from '../assets/photography/photo (1).jpg'
import photo2 from '../assets/photography/photo (2).jpg'
import photo3 from '../assets/photography/photo (3).jpg'
import photo4 from '../assets/photography/photo (4).jpg'
import photo5 from '../assets/photography/photo (5).jpg'
import Flickity from 'react-flickity-component';
import './flickity.css';

const flickityOptions = {
	initialIndex: 0,
	wrapAround: true,
	prevNextButtons: true,
	pageDots: false,
};

const Photography = () => {
	return (
		<Flickity
			className={classes['flickity-container']} // default ''
			elementType={'div'} // default 'div'
			options={flickityOptions} // takes flickity options {}
			disableImagesLoaded={false} // default false
			reloadOnUpdate // default false
			static // default false
		>
			<img src={photo2} alt='The Taj Mahal Hotel' className={classes['my-image']} />
			<img src={photo1} alt='Dog' className={classes['my-image']} />
			<img src={photo3} alt='Snowman' className={classes['my-image']} />
			<img src={photo4} alt='Bowling' className={classes['my-image']} />
			<img src={photo5} alt='Christmas Tree' className={classes['my-image']} />
		</Flickity>
	);
};

export default Photography;
