import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
	return (
		<header>
			<div class="overlay">
				<h1>Shop&Show</h1>
				<h3>Best Items and Accessories</h3>
				<form action="/">
					<button>READ MORE</button>
				</form>
			</div>
		</header>

	)
}

export default Header
