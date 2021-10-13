import React from 'react'
import { useSelector } from 'react-redux'
import './Trends.css'
import TrendsCard from './TrendsCard'
import 'animate.css';

const Trends = () => {
	const { product } = useSelector(state => state.products)
	return (
		<div className='container trends'>
			<div className='trendTitle'>Main Trends</div>
			<div className='row'>
				<div className='trendsCard col-sm-6 col-md-6 col-lg-3'><TrendsCard idProduct={product[1]} /></div>
				<div className='trendsCard col-sm-6 col-md-6 col-lg-3'><TrendsCard idProduct={product[3]} /></div>
				<div className='trendsCard col-sm-6 col-md-6 col-lg-3'><TrendsCard idProduct={product[19]} /></div>
				<div className='trendsCard col-sm-6 col-md-6 col-lg-3'><TrendsCard idProduct={product[18]} /></div>
			</div>
		</div>
	)
}

export default Trends
