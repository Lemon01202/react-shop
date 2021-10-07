import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className='ui field menu'>
			<NavLink to='/' className='ui container center'><h1>Fake Shop</h1></NavLink>
		</div>
	)
}

export default Header
