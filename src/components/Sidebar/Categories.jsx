import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../redux/actions/sidebarAction';
const Categories = () => {
	const dispatch = useDispatch()
	const { categories } = useSelector(state => state.sidebar)
	const getCategories = async () => {
		const response = await axios.get('https://fakestoreapi.com/products/categories').catch(console.log('ERROR WHILE GETTING CATEGORIES'));
		dispatch(setCategories(response.data))
	}
	useEffect(() => {
		getCategories();
	}, [])

	

	return (
		<div className='align'>
			<div className='sidebarSubtitle'>Choose category:</div>
			{categories ? categories.map((c, index) => {
				return (
					<label key={index} className="rad-label">
						<input type="radio" className="rad-input" name="rad" />
						<div className="rad-design"></div>
						<div className="rad-text">{c}</div>
					</label>
				)
			}) : false}
		</div>
	)
}

export default Categories
