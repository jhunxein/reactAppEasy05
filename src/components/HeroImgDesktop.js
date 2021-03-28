import React from 'react';

import hero from './../assets/images/hero-desktop.jpg';

function HeroImgDesktop() {
	return (
		<section className="mobile-img-display">
			<img src={hero} alt="..." className="hero" />
		</section>
	);
}

export default HeroImgDesktop;
