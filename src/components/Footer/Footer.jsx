import React from 'react'
import './Footer.css'
import { useSelector } from 'react-redux'
const Footer = () => {
	const { categories } = useSelector(state => state.sidebar)
	return (
		<footer class="site-footer">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<h6>About</h6>
						<p class="text-justify">Shop & Show is a new generation of modern shopping not only on the TV channel, but also in the online store.
							Best TV Shop of the Year *
							More than 10 categories, from clothing to technology
							Exclusive goods and global brands
							About 20,000 products on the site
							We have 40 million buyers throughout Russia
							You can place an order on the website in just a couple of clicks!
							Choose a product, add to the cart, place an order and wait for the operator's call</p>
					</div>

					<div class="col-xs-6 col-md-3">
						<h6>Categories</h6>
						<ul class="footer-links">
							{categories.map(c => (
								<li><a href="https://shopandshow.ru/">{c}</a></li>
							))}
						</ul>
					</div>

					<div class="col-xs-6 col-md-3">
						<h6>Quick Links</h6>
						<ul class="footer-links">
							<li><a href="https://shopandshow.ru/about/">About Us</a></li>
							<li><a href="https://shopandshow.ru/about/">Contact Us</a></li>
							<li><a href="https://shopandshow.ru/about/">Contribute</a></li>
							<li><a href="https://shopandshow.ru/about/">Privacy Policy</a></li>
							<li><a href="https://shopandshow.ru/">Sitemap</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-sm-6 col-xs-12">
						<p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
							<a href="#">Scanfcode</a>.
						</p>
					</div>

					<div class="col-md-4 col-sm-6 col-xs-12">
						<ul class="social-icons">
							<li><a class="facebook" href="https://www.facebook.com/shopnshow/"><i class="fa fa-facebook"></i></a></li>
							<li><a class="twitter" href="https://twitter.com/shop_show"><i class="fa fa-twitter"></i></a></li>
							<li><a class="instagram" href="https://www.instagram.com/shopandshow.ru/?hl=ru"><i class="fa fa-instagram"></i></a></li>
							<li><a class="linkedin" href="https://www.linkedin.com/company/shop&show"><i class="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
