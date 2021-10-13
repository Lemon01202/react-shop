import { SidebarTypes } from "../constans/sidebar-types"

export const setCategories = (categories) => {
	return {
		type: SidebarTypes.SET_CATEGORIES,
		payload: categories
	}
}

export const setMaxPrice = (maxPrice) => {
	return {
		type: SidebarTypes.SET_MAX_PRICE,
		payload: maxPrice
	}
}

export const setMinPrice = (minPrice) => {
	return {
		type: SidebarTypes.SET_MIN_PRICE,
		payload: minPrice
	}
}

export const setPriceRange = (priceRange) => {
	return {
		type: SidebarTypes.SET_PRICE_RANGE,
		payload: priceRange
	}
}

export const getPriceRange = (priceRange) => {
	return {
		type: SidebarTypes.GET_PRICE_RANGE,
		payload: priceRange
	}
}

export const setChoosenCategory = (category) => {
	return {
		type: SidebarTypes.SET_CHOOSEN_CATEGORY,
		payload: category
	}
}

