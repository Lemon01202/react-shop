import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../redux/actions/productAction'
// import { fetchingProducts } from '../../api/productsAPI'
import './ProductList.css'
const ProductComponent = () => {
	const { product } = useSelector(state => state.products)
	const dispatch = useDispatch();
	const fetchingProducts = async () => {
		try {
			const response = await axios.get('https://fakestoreapi.com/products');
			dispatch(setProducts(response.data));
		}
		catch {
			console.log('Error');
		}
	}

	useEffect(() => {
		fetchingProducts();
	}, [])
	return (
		<div className='productList'>
			<div className='productCards'>
				{product.map((p, index) => (
					<div key={index} className='productCard'>
						<div className='productCardImage'><img alt={p.title} src={p.image} /></div>
						<div className='productCardContent'>
							<div className=''>Header: {p.title}</div><hr />
							<div className=''>Meta price: {p.price}</div><hr />
							<div className=''>Meta: {p.category}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductComponent
