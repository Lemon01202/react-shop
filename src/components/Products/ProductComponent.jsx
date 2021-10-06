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
					<section key={p.id} class="row">
						<div class="container-item">
							<div class="item">
								<img className='itemImage' src={p.image} />
								<div class="item-overlay">
									<a href="#" class="item-button play"><i class="play"></i></a>
									<a href="#" class="item-button share share-btn"><i class="play"></i></a>
									<div class="sale-tag"><span>SALE</span></div>
								</div>
								<div class="item-content">
									<div class="item-top-content">
										<div class="item-top-content-inner">
											<div class="item-product">
												<div class="item-top-title">
													<h2>{p.title}</h2>
													<p class="subdescription">
														{p.category}
													</p>
												</div>
											</div>
											<div class="item-product-price">
												<span class="price-num">{p.price}$</span>
												{/* <p class="subdescription">$36</p> */}
												{/* <div class="old-price"></div> */}
											</div>
										</div>
									</div>
									<div class="item-add-content">
										<div class="item-add-content-inner">

											<div class="section">
												<a href="#" class="btn buy expand">Buy now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				))}
			</div>
		</div>
	)
}

export default ProductComponent
