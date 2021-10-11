import React from 'react'
import { useSelector } from 'react-redux'
import './Trends.css'
import TrendsCard from './TrendsCard'
import 'animate.css';

const Trends = () => {
	const { product } = useSelector(state => state.products)
	return (
		<div className='trends'>
			<div className='trendTitle'>Main Trends</div>
			<div className='trendsContent'>
				<div className='trendsCard animate__animated fadeInDown'><TrendsCard idProduct={product[1]} /></div>
				<div className='trendsCard animate__animated fadeInUp'><TrendsCard idProduct={product[3]} /></div>
				<div className='trendsCard animate__animated fadeInDown'><TrendsCard idProduct={product[19]} /></div>
				<div className='trendsCard animate__animated fadeInUp'><TrendsCard idProduct={product[18]} /></div>
			</div>
		</div>
	)
}

export default Trends
