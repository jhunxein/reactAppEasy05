import React from 'react';

import logo from './../assets/images/logo.svg';

function Header() {
	return (
		<header>
			<h1>
				<a href="/">
					<img src={logo} alt="..." className="logo" />
				</a>
			</h1>
		</header>
	);
}

export default Header;
