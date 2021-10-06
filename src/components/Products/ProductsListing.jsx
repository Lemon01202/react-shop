import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

const ProductsListing = () => {
	const { product } = useSelector(state => state.products)
	return (
		<div className=''>
			<ProductComponent />
		</div>
	)
}

export default ProductsListing
