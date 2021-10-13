import React from 'react'
import Categories from './Categories'
import './Sidebar.css'
import SortBy from './SortBy'
import SortByPrice from './SortByPrice'
const Sidebar = () => {
	return (
		<div className='container'>
			<div className='sidebarSubtitle'>SORTING PARAMS:</div>
			<div className='row'>
				<div className='col-sm-12 col-xl-6'>
					<Categories />
				</div>
				<div className='col-sm-12 col-xl-6'>
					<SortByPrice />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
