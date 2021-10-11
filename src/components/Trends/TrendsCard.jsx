import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const TrendsCard = ({ idProduct }) => {
	if (!idProduct) return <div>Loading...</div>;
	return (
		<section className="row">
			<div className="container-item">
				<div className="item">
					<img className='itemImage' src={idProduct.image} />
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
										<h2>{idProduct.title}</h2>
										<p className="subdescription">
											{idProduct.category}
										</p>
									</div>
								</div>
								<div className="item-product-price">
									<span className="price-num">{idProduct.price}$</span>
								</div>
							</div>
						</div>
						<div className="item-add-content">
							<div className="item-add-content-inner">

								<div className="section">
									<NavLink to={`/product/${idProduct.id}`} className="btn buy expand">Buy now</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrendsCard
