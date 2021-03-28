import React from 'react';

import logo from './../assets/images/logo.svg';

function Header() {
	return (
		<header>
			<a href="/">
				<img src={logo} alt="..." className="logo" />
			</a>
		</header>
	);
}

export default Header;
