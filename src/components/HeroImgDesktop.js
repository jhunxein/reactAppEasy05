import React from 'react';

import hero from './../assets/images/hero-desktop.jpg';

function HeroImgDesktop() {
	return (
		<div className="desktop-img-display">
			<img src={hero} alt="..." className="hide" />
		</div>
	);
}

export default HeroImgDesktop;
