import React from 'react'
import Carousel_ from '../Carousel/Carousel';
import Sidebar from '../Sidebar/Sidebar';
import Trends from '../Trends/Trends';
import ProductComponent from './ProductComponent';

const ProductsListing = () => {
	return (
		<div className='productContent'>
			<Trends />
			<Carousel_ />
			<Sidebar />
			<ProductComponent />
		</div>
	)
}

export default ProductsListing
