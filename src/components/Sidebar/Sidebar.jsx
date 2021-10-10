import React from 'react'
import Categories from './Categories'
import './Sidebar.css'
import SortBy from './SortBy'
import SortByPrice from './SortByPrice'
const Sidebar = () => {
	return (
		<div className='sideBar'>
			<SortBy />
			<Categories />
			<SortByPrice />
		</div>
	)
}

export default Sidebar
