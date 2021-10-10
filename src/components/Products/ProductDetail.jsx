import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { setCurrentProduct, setIsLoading } from '../../redux/actions/productAction';
import './CurrentCard.css'
const ProductDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { currentProduct } = useSelector(state => state.products)
	let { title, image, price, description, rating, category } = currentProduct;
	const { isLoading } = useSelector(state => state.products)
	const { rate, count } = rating ? rating : 0;
	const setProduct = async (id) => {
		dispatch(setIsLoading(true))
		const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch(console.log('ERROR WHILE GETTING CURRENT USER'))
		dispatch(setIsLoading(false))
		dispatch(setCurrentProduct(response.data))
	}
	
	useEffect(() => {
		setProduct(id);
	}, [])
	if (isLoading) return (<div>Loading...</div>)
	return (
		<div className='currentProduct'>
			<div className='currentProductCard'>
				<div className='currentImage'><img src={image} /></div>
				<div className='currentProductDetails'>
					<div className='productTitle'><h1>{title}</h1></div>
					<div className='productCategory'>{category}</div>
					<div className='productDescription'>Description: {description}</div>
					<div className='purchaseBlock'>
						<div className='purchaseButton'>{price}$</div>
						<div className='productRating'>{rate} <i class="yellow star icon"></i></div>
					</div>
					<div className='productCount'>Left: {count}</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
