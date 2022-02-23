import React from 'react';
import CenterLogo from './CenterLogo';
import Navbar from './Navbar';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const App = () => {
	return (
		<>
			<Navbar />
			<CenterLogo />
			<About />
			<Work />
			<Contact />
		</>
	);
};

export default App;
