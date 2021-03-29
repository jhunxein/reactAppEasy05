import React, { useState, useRef } from 'react';
import arrowRight from './../assets/images/icon-arrow.svg';
import errorIcon from './../assets/images/icon-error.svg';

const emialRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Form() {
	const [email, setEmail] = useState('');
	const [isEmailError, setIsEmailError] = useState(false);

	const refInputContainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!emialRegex.test(e.target.emailAddress.value)) {
			return setIsEmailError(true);
		}
		setEmail('');
		refInputContainer.current.focus();
		setIsEmailError(false);
	};

	return (
		<form onSubmit={handleSubmit} noValidate>
			<div className="wrapper">
				<h1 className="hide">Email form</h1>
				<label htmlFor="emailAddress" className="hide">
					Email Address
				</label>
				<input
					type="email"
					name="emailAddress"
					id="emailAddress"
					placeholder="Email Address"
					className={`${isEmailError ? 'input-error' : null}`}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					ref={refInputContainer}
				/>

				{isEmailError && (
					<img src={errorIcon} alt="Input Error" className="input-error-icon" />
				)}
				{isEmailError && (
					<p className="input-text-error">Please provide a valid email</p>
				)}
				<button
					type="submit"
					className={`${isEmailError ? 'cta cta-error' : 'cta'}`}
				>
					<img src={arrowRight} alt="..." />
				</button>
			</div>
		</form>
	);
}

export default Form;
