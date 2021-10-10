import React from 'react'
import { SidebarTypes } from '../constans/sidebar-types';

const initialState = {
	categories: [],
	priceRange: [],
	maxPrice: 0,
	minPrice: 0,
	staticMinPrice: 0,
	staticMaxPrice: 0,
}

const sidebarReducer = (state = initialState, action) => {
	// debugger;
	switch (action.type) {
		case SidebarTypes.SET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			}
		case SidebarTypes.SET_PRICE_RANGE:
			return {
				...state,
				priceRange: action.payload,
				staticMinPrice: action.payload[0],
				staticMaxPrice: action.payload[1],

			}
		default:
			return state;
	}
}

export default sidebarReducer
