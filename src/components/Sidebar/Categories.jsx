import axios from 'axios';
import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setIsLoadingProducts, setProducts } from '../../redux/actions/productAction';
import { setCategories, setChoosenCategory } from '../../redux/actions/sidebarAction';
import './Sidebar.css'
const Categories = () => {
	const dispatch = useDispatch()
	const { categories, choosenCategory } = useSelector(state => state.sidebar)
	const { isLoading } = useSelector(state => state.products)
	const getCategories = async () => {
		dispatch(setIsLoading(true))
		const response = await axios.get('https://fakestoreapi.com/products/categories').catch(console.log('ERROR WHILE GETTING CATEGORIES'));
		dispatch(setIsLoading(false))
		dispatch(setCategories(response.data))
	}
	const getCurrentCategories = async () => {
		const currentCategories = [];
		dispatch(setIsLoadingProducts(true))
		const response = await axios.get('https://fakestoreapi.com/products');
		dispatch(setIsLoadingProducts(false))
		response.data.map(c => {
			if (c.category === choosenCategory) {
				currentCategories.push(c);
			}
		})
		dispatch(setProducts(currentCategories))
	}
	const getProducts = async () => {
		dispatch(setIsLoadingProducts(true))
		const response = await axios.get('https://fakestoreapi.com/products');
		dispatch(setIsLoadingProducts(false))
		dispatch(setProducts(response.data))
	}
	useEffect(() => {
		getCategories();
	}, [])
	useEffect(() => {
		getCurrentCategories()
	}, [choosenCategory])

	const onChangeCategory = (e) => {
		console.log(e.target.value);
		dispatch(setChoosenCategory(e.target.value));
	}
	const onGetAllProducts = () => {
		getProducts();
	}

	if (isLoading) {
		return (
			<Loader type="ThreeDots"
				color="#00BFFF"
				height={100}
				width={100} />
		)
	}

	return (
		<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
			<div class="form_radio_group">
				<div class="form_radio_group-item">
					<input onClick={onGetAllProducts} id='radio-0' type="radio" name="radio" value='0' checked />
					<label for='radio-0'>all</label>
				</div>
				{categories ? categories.map((c, index) => {
					return (
						<div class="form_radio_group-item">
							<input id={`radio-${index + 1}`} onClick={onChangeCategory} type="radio" name="radio" value={`${c}`} checked />
							<label for={`radio-${index + 1}`}>{c}</label>
						</div>
					)
				}) : false}
			</div>
		</div>
	)
}

export default Categories
