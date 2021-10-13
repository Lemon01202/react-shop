import { ActionTypes } from "../constans/action-types"

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products
	}
}
export const selectedProduct = (product) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: product
	}
}
export const setCurrentProduct = (currentProduct) => {
	return {
		type: ActionTypes.SET_CURRENT_PRODUCT,
		payload: currentProduct
	}
}
export const setIsLoading = (loadingState) => {
	return {
		type: ActionTypes.SET_IS_LOADING,
		payload: loadingState
	}
}

export const setIsLoadingProducts = (state) => {
	return {
		type: ActionTypes.SET_IS_LOADING_PRODUCTS,
		payload: state
	}
}

export const setIsLoadingCurrentProduct = (state) => {
	return {
		type: ActionTypes.SET_IS_LOADING_CURRENT_PRODUCT,
		payload: state
	}
}

export const setIsLoadingProductTrends = (state) => {
	return {
		type: ActionTypes.SET_IS_LOADING_PRODUCT_TRENDS,
		payload: state
	}
}
