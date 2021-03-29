import React from 'react';

import hero from './../assets/images/hero-mobile.jpg';
function HeroImg() {
	return (
		<div className="mobile-img-display">
			<img src={hero} alt="..." className="hero-img" />
		</div>
	);
}

export default HeroImg;
