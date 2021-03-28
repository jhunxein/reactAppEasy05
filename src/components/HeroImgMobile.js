import React from 'react';

import hero from './../assets/images/hero-mobile.jpg';
function HeroImg() {
	return (
		<section className="mobile-img-display">
			<img src={hero} alt="..." className="hero" />
		</section>
	);
}

export default HeroImg;
