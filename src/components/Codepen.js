import React from 'react';
import classes from './Codepen.module.css';
import Flickity from 'react-flickity-component';
import './flickity.css';
import video1 from '../assets/codepen/video (1).mp4';
import video2 from '../assets/codepen/video (2).mp4';
import video3 from '../assets/codepen/video (3).mp4';
import video4 from '../assets/codepen/video (4).mp4';
import video5 from '../assets/codepen/video (5).mp4';

const flickityOptions = {
	initialIndex: 0,
	wrapAround: true,
	prevNextButtons: true,
	pageDots: false,
};

const Codepen = () => {
	return (
		<Flickity
			className={classes['flickity-container']} // default ''
			elementType={'div'} // default 'div'
			options={flickityOptions} // takes flickity options {}
			disableImagesLoaded={false} // default false
			reloadOnUpdate // default false
			static // default false
		>
			<video autoPlay loop muted playsInline src={video1} alt='Christmas Tree' className={classes['my-image']} />
			<video autoPlay loop muted playsInline src={video2} alt='Dollar Jump' className={classes['my-image']} />
			<video autoPlay loop muted playsInline src={video3} alt='First 3D' className={classes['my-image']} />
			<video autoPlay loop muted playsInline src={video4} alt='YinYang' className={classes['my-image']} />
			<video autoPlay loop muted playsInline src={video5} alt='Checkerboard' className={classes['my-image']} />
		</Flickity>
	);
};

export default Codepen;
