import React from 'react';

import hero from './../assets/images/hero-desktop.jpg';

function HeroImgDesktop() {
	return (
		<section className="desktop-img-display">
			<img src={hero} alt="..." className="hide" />
		</section>
	);
}

export default HeroImgDesktop;
