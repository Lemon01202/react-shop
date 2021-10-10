import React from 'react'

const SortBy = () => {
	return (
		<div className='sortBy align'>
			<div className='sidebarSubtitle'>Sort by: </div>
			<div>
				<label className="rad-label">
					<input type="radio" className="rad-input" name="rad" />
					<div className="rad-design"></div>
					<div className="rad-text">From cheap to expensive</div>
				</label>

				<label className="rad-label">
					<input type="radio" className="rad-input" name="rad" />
					<div className="rad-design"></div>
					<div className="rad-text">From expensive to cheap</div>
				</label>

				<label className="rad-label">
					<input type="radio" className="rad-input" name="rad" />
					<div className="rad-design"></div>
					<div className="rad-text">By popularity</div>
				</label>
				<label className="rad-label">
					<input type="radio" className="rad-input" name="rad" />
					<div className="rad-design"></div>
					<div className="rad-text">Water</div>
				</label>
			</div>
		</div>
	)
}

export default SortBy
