import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
	return (
		<div className='header'>
			<div className='leftSide'>
				<NavLink to='/' className=''><img className='headerLogo' src='https://upload.wikimedia.org/wikipedia/en/9/92/Stop%26Shop2008.png' /></NavLink>
				<div className='headerTitle'>
					<div className='shopName'>Stop&Shop</div>
					<div className='shopNameSubtitle'>
						only branded items and accessories</div>
				</div>
			</div>
		</div>
	)
}

export default Header
