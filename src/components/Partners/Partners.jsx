import React from 'react'
import './Partners.css'
import partner1 from '../../assets/images/partner1.jpg'
import partner2 from '../../assets/images/partner2.jpg'
import partner3 from '../../assets/images/partner3.jpg'
import partner4 from '../../assets/images/partner4.jpg'
const Partners = () => {
	return (
		<div className='partners'>
			<div className='partnersTitle'>Our Partners</div>
			<div className='row'>
				<div><img className='col-sm-6 col-md-6 col-lg-3' src={`${partner1}`} /></div>
				<div><img className=' col-sm-6 col-md-6 col-lg-3' src={`${partner2}`} /></div>
				<div><img className=' col-sm-6 col-md-6 col-lg-3' src={`${partner3}`} /></div>
				<div><img className=' col-sm-6 col-md-6 col-lg-3' src={`${partner4}`} /></div>
			</div>
		</div>
	)
}

export default Partners
