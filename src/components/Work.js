import React from 'react';
import classes from './Work.module.css';

const Work = () => {
	return (
		<div className={classes['grid-container']}>
			<div className={`${classes['cell']} ${classes['webdev']}`}></div>
			<div className={`${classes['cell']} ${classes['photography']}`}></div>
			<div className={`${classes['cell']} ${classes['illustrations']}`}></div>
			<div className={`${classes['cell']} ${classes['3dmodelling']}`}></div>
		</div>
	);
};

export default Work;
