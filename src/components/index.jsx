import React from 'react'
import Carousel_ from './Carousel/Carousel';
import Sidebar from './Sidebar/Sidebar';
import Trends from './Trends/Trends';
import ProductComponent from './Products/ProductComponent';
import SalesInfo from './SalesInfo/SalesInfo';
import Partners from './Partners/Partners';

const ProductsListing = () => {
	return (
		<div className='productContent'>
			<Trends />
			<Carousel_ />
			<ProductComponent />
			<SalesInfo />
			<Partners />
		</div>
	)
}

export default ProductsListing
