import React, { useState } from 'react';
import classes from './Work.module.css';
import Photography from './Photography';
import Codepen from './Codepen';

const Work = () => {
	const [currentWorkCell, setCurrentWorkCell] = useState(null);

	const viewMoreHandler = (event) => {
		let cellType = event.target.ariaLabel;
		if (cellType === 'data-photography') {
			setCurrentWorkCell(cellType)
		}
	}

	return (
		<div className={classes['work-page']}>
			<div className={classes['grid-container']}>
				<div className={`${classes['cell']} ${classes['webdev']}`}></div>
				<div className={`${classes['cell']} ${classes['photography']}`}>
					<Photography />
					<div className={`${classes['inner-cell']} ${classes['']}`}>
						<p className={classes['work-description']}>
							Photography has always been my passion. I love to visualize the frame I will be shooting,
							and capture a shot and then tweak it to my liking. Every photo gives out a vibe to which
							every individual resonates with some different meaning. My goal is to help people resonate
							that meaning truly and seek satisfaction from the photo!
						</p>
						<button
							aria-label='data-photography'
							className={classes['description-button']}
							onClick={viewMoreHandler}
						>
							View More!
						</button>
					</div>
				</div>
				<div className={`${classes['cell']} ${classes['codepen']}`}>
					<Codepen />
					<div className={`${classes['inner-cell']} ${classes['']}`}>
						<p className={classes['work-description']}>
							I love to experiment with CSS! For that the best tool I feel is an online playground for HTML, CSS and JS. One such example of an online playground is Codepen! I try and test multiple demos and create art through CSS with the help of such tool!
						</p>
						<button
							aria-label='data-codepen'
							className={classes['description-button']}
							onClick={viewMoreHandler}
						>
							View More!
						</button>
					</div>
				</div>
				<div className={`${classes['cell']} ${classes['3dmodelling']}`}></div>
			</div>
		</div>
	);
};

export default Work;
