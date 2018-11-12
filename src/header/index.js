import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () =>( 
	<header className="header">
		<h1>iToll</h1>
		<nav>
			<NavLink activeClassName="active" to="/itoll/scanner">Scanner</NavLink>
			<NavLink activeClassName="active" to="/itoll/transaction">Declaration</NavLink>
		</nav>
	</header>
);

export default Header;
