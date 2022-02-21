import React, { useEffect, useState, useRef } from 'react';
import classes from './Work.module.css';
import OutsideAlerter from './OutsideAlerter';
// import Webdev from './Webdev';
import Photography from './Photography';
import Codepen from './Codepen';
// import Art from './Art';
import { CSSTransition } from 'react-transition-group';

const Work = () => {

	const nodeRefWebdev = useRef(null);
	const nodeRefPhotography = useRef(null);
	const nodeRefCodepen = useRef(null);
	const nodeRefArt = useRef(null);

	const [activeCell, setActiveCell] = useState({
		webdev: false,
		photography: false,
		codepen: false,
		art: false,
	});

	const [isAnyCellActive, setIsAnyCellActive] = useState(false);

	const viewMoreHandler = (event, isOutside=false) => {
		if (isOutside) {
			setActiveCell({
				webdev: false,
				photography: false,
				codepen: false,
				art: false,
			});
			return;
		}
		let cellType = event.target.ariaLabel;
		if (cellType === 'data-webdev') {
			setActiveCell({
				webdev: true,
				photography: false,
				codepen: false,
				art: false,
			});
		}
		else if (cellType === 'data-photography') {
			setActiveCell({
				webdev: false,
				photography: true,
				codepen: false,
				art: false,
			});
		}
		else if (cellType === 'data-codepen') {
			setActiveCell({
				webdev: false,
				photography: false,
				codepen: true,
				art: false,
			});
		}
		else if (cellType === 'data-art') {
			setActiveCell({
				webdev: false,
				photography: false,
				codepen: false,
				art: true,
			});
		}
	};

	useEffect(() => {
		let activeCellArray = Object.keys(activeCell).map((key) => {
			return activeCell[key];
		});
		if (activeCellArray.includes(true)) {
			setIsAnyCellActive(true);
		} else {
			setIsAnyCellActive(false);
		}
		console.log(isAnyCellActive);
	}, [activeCell, isAnyCellActive]);

	return isAnyCellActive ? (
		<OutsideAlerter viewMoreHandler={viewMoreHandler}>
			<div className={classes['work-page']}>
				<div className={classes['grid-container']}>
					<div className={`${classes['cell']} ${classes['webdev']}`}>
						<Photography />
						<CSSTransition
							nodeRef={nodeRefWebdev}
							in={!activeCell['webdev']}
							timeout={400}
							classNames={{
								enter: classes['fade-enter'],
								enterActive: classes['fade-enter-active'],
								exit: classes['fade-exit'],
								exitActive: classes['fade-exit-active'],
							}}
							unmountOnExit
						>
							<div ref={nodeRefWebdev} className={`${classes['inner-cell']}`}>
								<p className={classes['work-description']}>
									Designing something has always been my passion! And with Web Development, I got a
									chance to explore the vast nuances of creation of a web page and making it look
									beautiful! I love to create elements and position them on the screen for not only a
									beautiful User Interface but also a smooth User Experience!
								</p>
								<button
									aria-label='data-webdev'
									className={classes['description-button']}
									onClick={viewMoreHandler}
								>
									View More!
								</button>
							</div>
						</CSSTransition>
					</div>
					<div className={`${classes['cell']} ${classes['photography']}`}>
						<Photography />
						<CSSTransition
							nodeRef={nodeRefPhotography}
							in={!activeCell['photography']}
							timeout={400}
							classNames={{
								enter: classes['fade-enter'],
								enterActive: classes['fade-enter-active'],
								exit: classes['fade-exit'],
								exitActive: classes['fade-exit-active'],
							}}
							unmountOnExit
						>
							<div ref={nodeRefPhotography} className={`${classes['inner-cell']}`}>
								<p className={classes['work-description']}>
									Photography has always been my passion. I love to visualize the frame I will be
									shooting, and capture a shot and then tweak it to my liking. Every photo gives out a
									vibe to which every individual resonates with some different meaning. My goal is to
									help people resonate that meaning truly and seek satisfaction from the photo!
								</p>
								<button
									aria-label='data-photography'
									className={classes['description-button']}
									onClick={viewMoreHandler}
								>
									View More!
								</button>
							</div>
						</CSSTransition>
					</div>
					<div className={`${classes['cell']} ${classes['codepen']}`}>
						<Codepen />
						<CSSTransition
							nodeRef={nodeRefCodepen}
							in={!activeCell['codepen']}
							timeout={400}
							classNames={{
								enter: classes['fade-enter'],
								enterActive: classes['fade-enter-active'],
								exit: classes['fade-exit'],
								exitActive: classes['fade-exit-active'],
							}}
							unmountOnExit
						>
							<div ref={nodeRefCodepen} className={`${classes['inner-cell']}`}>
								<p className={classes['work-description']}>
									I love to experiment with CSS! For that the best tool I feel is an online playground
									for HTML, CSS and JS. One such example of an online playground is Codepen! I try and
									test multiple demos and create art through CSS with the help of such tool!
								</p>
								<button
									aria-label='data-codepen'
									className={classes['description-button']}
									onClick={viewMoreHandler}
								>
									View More!
								</button>
							</div>
						</CSSTransition>
					</div>
					<div className={`${classes['cell']} ${classes['art']}`}>
						<Photography />
						<CSSTransition
							nodeRef={nodeRefArt}
							in={!activeCell['art']}
							timeout={400}
							classNames={{
								enter: classes['fade-enter'],
								enterActive: classes['fade-enter-active'],
								exit: classes['fade-exit'],
								exitActive: classes['fade-exit-active'],
							}}
							unmountOnExit
						>
							<div ref={nodeRefArt} className={`${classes['inner-cell']}`}>
								<p className={classes['work-description']}>
									Illustrations and 3D modelling are something I try to pursue in my leisure time.
									They are not always a part of my routine but when they are, I just get too much
									engrossed in them and lose all sense of time!
								</p>
								<button
									aria-label='data-art'
									className={classes['description-button']}
									onClick={viewMoreHandler}
								>
									View More!
								</button>
							</div>
						</CSSTransition>
					</div>
				</div>
			</div>
		</OutsideAlerter>
	) : (
		<div className={classes['work-page']}>
			<div className={classes['grid-container']}>
				<div className={`${classes['cell']} ${classes['webdev']}`}>
					<Photography />
					<CSSTransition
						nodeRef={nodeRefWebdev}
						in={!activeCell['webdev']}
						timeout={400}
						classNames={{
							enter: classes['fade-enter'],
							enterActive: classes['fade-enter-active'],
							exit: classes['fade-exit'],
							exitActive: classes['fade-exit-active'],
						}}
						unmountOnExit
					>
						<div ref={nodeRefWebdev} className={`${classes['inner-cell']}`}>
							<p className={classes['work-description']}>
								Designing something has always been my passion! And with Web Development, I got a chance
								to explore the vast nuances of creation of a web page and making it look beautiful! I
								love to create elements and position them on the screen for not only a beautiful User
								Interface but also a smooth User Experience!
							</p>
							<button
								aria-label='data-webdev'
								className={classes['description-button']}
								onClick={viewMoreHandler}
							>
								View More!
							</button>
						</div>
					</CSSTransition>
				</div>
				<div className={`${classes['cell']} ${classes['photography']}`}>
					<Photography />
					<CSSTransition
						nodeRef={nodeRefPhotography}
						in={!activeCell['photography']}
						timeout={400}
						classNames={{
							enter: classes['fade-enter'],
							enterActive: classes['fade-enter-active'],
							exit: classes['fade-exit'],
							exitActive: classes['fade-exit-active'],
						}}
						unmountOnExit
					>
						<div ref={nodeRefPhotography} className={`${classes['inner-cell']}`}>
							<p className={classes['work-description']}>
								Photography has always been my passion. I love to visualize the frame I will be
								shooting, and capture a shot and then tweak it to my liking. Every photo gives out a
								vibe to which every individual resonates with some different meaning. My goal is to help
								people resonate that meaning truly and seek satisfaction from the photo!
							</p>
							<button
								aria-label='data-photography'
								className={classes['description-button']}
								onClick={viewMoreHandler}
							>
								View More!
							</button>
						</div>
					</CSSTransition>
				</div>
				<div className={`${classes['cell']} ${classes['codepen']}`}>
					<Codepen />
					<CSSTransition
						nodeRef={nodeRefCodepen}
						in={!activeCell['codepen']}
						timeout={400}
						classNames={{
							enter: classes['fade-enter'],
							enterActive: classes['fade-enter-active'],
							exit: classes['fade-exit'],
							exitActive: classes['fade-exit-active'],
						}}
						unmountOnExit
					>
						<div ref={nodeRefCodepen} className={`${classes['inner-cell']}`}>
							<p className={classes['work-description']}>
								I love to experiment with CSS! For that the best tool I feel is an online playground for
								HTML, CSS and JS. One such example of an online playground is Codepen! I try and test
								multiple demos and create art through CSS with the help of such tool!
							</p>
							<button
								aria-label='data-codepen'
								className={classes['description-button']}
								onClick={viewMoreHandler}
							>
								View More!
							</button>
						</div>
					</CSSTransition>
				</div>
				<div className={`${classes['cell']} ${classes['art']}`}>
					<Photography />
					<CSSTransition
						nodeRef={nodeRefArt}
						in={!activeCell['art']}
						timeout={400}
						classNames={{
							enter: classes['fade-enter'],
							enterActive: classes['fade-enter-active'],
							exit: classes['fade-exit'],
							exitActive: classes['fade-exit-active'],
						}}
						unmountOnExit
					>
						<div ref={nodeRefArt} className={`${classes['inner-cell']}`}>
							<p className={classes['work-description']}>
								Illustrations and 3D modelling are something I try to pursue in my leisure time. They
								are not always a part of my routine but when they are, I just get too much engrossed in
								them and lose all sense of time!
							</p>
							<button
								aria-label='data-art'
								className={classes['description-button']}
								onClick={viewMoreHandler}
							>
								View More!
							</button>
						</div>
					</CSSTransition>
				</div>
			</div>
		</div>
	);
};

export default Work;
