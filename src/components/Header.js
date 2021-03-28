import React from 'react';

import logo from './../assets/images/logo.svg';

function Header() {
	return (
		<header>
			<a href="/" className="logo">
				<img src={logo} alt="..." />
			</a>
		</header>
	);
}

export default Header;
