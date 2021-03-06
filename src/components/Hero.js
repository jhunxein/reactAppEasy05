import React from 'react';

import Form from './Form';
function Hero() {
	return (
		<article className="hero">
			<div className="text-hero-wrapper">
				<h2>
					we're<span>coming</span> <span>soon</span>
				</h2>
				<p>
					Hello fellow shoppers! We're currently building our new fashion store. Add
					your email below to stay up-to-date with announcements and our launch
					deals.
				</p>
				<Form />
			</div>
		</article>
	);
}

export default Hero;
