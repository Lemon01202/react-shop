import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar';
import ProductComponent from './ProductComponent';

const ProductsListing = () => {
	const { product } = useSelector(state => state.products)
	return (
		<div className='productContent'>
			<Sidebar />
			<ProductComponent />
		</div>
	)
}

export default ProductsListing
