import React from 'react';

import Header from './components/Header';
import HeroImgMobile from './components/HeroImgMobile';
import HeroImgDesktop from './components/HeroImgDesktop';
import Hero from './components/Hero';

function App() {
	return (
		<div className="container">
			<Header />
			<HeroImgMobile />
			<Hero />
			<HeroImgDesktop />
		</div>
	);
}

export default App;
