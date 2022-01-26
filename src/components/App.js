import React from 'react';
import CenterLogo from './CenterLogo';
import Navbar from './Navbar';
import About from './About';
import Work from './Work';

const App = () => {
	return (
		<>
			<Navbar />
			<CenterLogo />
			<About />
			<Work />
		</>
	);
};

export default App;
