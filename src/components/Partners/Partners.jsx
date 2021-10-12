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
			<div className='partnersCards'>
				<div><img className='partnersCardImage' src={`${partner1}`} /></div>
				<div><img className='partnersCardImage' src={`${partner2}`} /></div>
				<div><img className='partnersCardImage' src={`${partner3}`} /></div>
				<div><img className='partnersCardImage' src={`${partner4}`} /></div>
			</div>
		</div>
	)
}

export default Partners
