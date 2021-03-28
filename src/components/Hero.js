import React, { useState } from 'react';

import arrowRight from './../assets/images/icon-arrow.svg';
import errorIcon from './../assets/images/icon-error.svg';
function Hero() {
	const [isEmailError, setIsEmailError] = useState(true);

	return (
		<article className="hero">
			<h1>
				we're <strong>coming soon</strong>
			</h1>
			<p>
				Hello fellow shoppers! We're currently building our new fashion store. Add
				your email below to stay up-to-date with announcements and our launch deals.
			</p>

			<form>
				<div className="wrapper">
					<label htmlFor="emailAddress">Email Address</label>
					<input type="email" name="emailAddress" id="emailAddress" />

					{isEmailError && (
						<img src={errorIcon} alt="Input Error" className="input-error" />
					)}
					{isEmailError && (
						<p className="text-error">Please provide a valid email</p>
					)}
				</div>
				<button type="submit" className="cta">
					<img src={arrowRight} alt="..." />
				</button>
			</form>
		</article>
	);
}

export default Hero;
