import axios from 'axios'
import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setIsLoadingProducts, setProducts } from '../../redux/actions/productAction'
import { setMaxPrice, setMinPrice, setPriceRange } from '../../redux/actions/sidebarAction'

const ProductCard = () => {
	const { product, isLoadingProducts } = useSelector(state => state.products)
	const dispatch = useDispatch();
	debugger;

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
			dispatch(setIsLoadingProducts(true))
			const response = await axios.get('https://fakestoreapi.com/products');
			dispatch(setIsLoadingProducts(false))
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


	if (isLoadingProducts) {
		return (
			<Loader type="ThreeDots"
				color="#00BFFF"
				height={100}
				width={100} />
		)
	}
	return (
		<div className=''>
			<div className='row'>
				{product.map((p, index) => (
					<div className="productCards col-sm-6 col-md-6 col-lg-4 col-lg-3">
						<section key={index} >
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
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductCard
