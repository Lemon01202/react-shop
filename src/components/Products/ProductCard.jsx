import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setProducts } from '../../redux/actions/productAction'
import { setMaxPrice, setMinPrice, setPriceRange } from '../../redux/actions/sidebarAction'

const ProductCard = () => {
	const { product } = useSelector(state => state.products)
	const dispatch = useDispatch();


	const fetchingProducts = async () => {
		try {
			const findMaxMin = (array, params) => {
				let value = array[0];
				if (params === 'min') {
					for (let i = 0; i < array.length; i++) {
						if (array[i] < value) {
							value = array[i];
						}
					}
				}
				else if (params === 'max') {
					for (let i = 0; i < array.length; i++) {
						if (array[i] > value) {
							value = array[i];
						}
					}
				}
				else {
					return console.log(`Element with current params ${params} not found`);
				}
				return value;
			}
			const response = await axios.get('https://fakestoreapi.com/products');
			const prices = [];
			response.data.map(p => prices.push(p.price))
			console.log(prices);
			dispatch(setProducts(response.data));
			dispatch(setPriceRange([findMaxMin(prices, 'min'), findMaxMin(prices, 'max')]))
			dispatch(setMinPrice(findMaxMin(prices, 'min')))
			dispatch(setMaxPrice(findMaxMin(prices, 'max')))
		}
		catch {
			console.log('Error');
		}
	}

	useEffect(() => {
		fetchingProducts();
	}, [])


	return (
		<div className='productCards'>
			{product.map((p, index) => (
				<section key={index} className="row">
					<div className="container-item">
						<div className="item">
							<img className='itemImage' src={p.image} />
							<div className="item-overlay">
								<a href="#" className="item-button play"><i className="play"></i></a>
								<a href="#" className="item-button share share-btn"><i className="play"></i></a>
								<div className="sale-tag"><span>SALE</span></div>
							</div>
							<div className="item-content">
								<div className="item-top-content">
									<div className="item-top-content-inner">
										<div className="item-product">
											<div className="item-top-title">
												<h2>{p.title}</h2>
												<p className="subdescription">
													{p.category}
												</p>
											</div>
										</div>
										<div className="item-product-price">
											<span className="price-num">{p.price}$</span>
										</div>
									</div>
								</div>
								<div className="item-add-content">
									<div className="item-add-content-inner">

										<div className="section">
											<NavLink to={`/product/${p.id}`} className="btn buy expand">Buy now</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			))}
		</div>
	)
}

export default ProductCard
