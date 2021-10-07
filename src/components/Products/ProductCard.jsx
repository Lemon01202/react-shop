import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setProducts } from '../../redux/actions/productAction'

const ProductCard = () => {
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
		<div className='productCards'>
			{product.map((p, index) => (
				<section key={p.id} className="row">
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
											{/* <p clasclassName="subdescription">$36</p> */}
											{/* <div className="old-price"></div> */}
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
