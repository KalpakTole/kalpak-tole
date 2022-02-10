import React from 'react';
import classes from './Work.module.css';
import Photography from './Photography';

const Work = () => {
	return (
		<div className={classes['work-page']}>
			<div className={classes['grid-container']}>
				<div className={`${classes['cell']} ${classes['webdev']}`}></div>
				<div className={`${classes['cell']} ${classes['photography']}`}>
					<Photography />
				</div>
				<div className={`${classes['cell']} ${classes['illustrations']}`}></div>
				<div className={`${classes['cell']} ${classes['3dmodelling']}`}></div>
			</div>
		</div>
	);
};

export default Work;
