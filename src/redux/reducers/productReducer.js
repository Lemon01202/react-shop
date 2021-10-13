import { ActionTypes } from "../constans/action-types";
import { SidebarTypes } from "../constans/sidebar-types";

const initialState = {
	product: [],
	currentProduct: {},
	isLoading: false,
	isLoadingTrends: false,
	isLoadingProducts: false,
	isLoadingCurrentProduct: false,
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCTS:
			return {
				...state,
				product: action.payload
			}
		case ActionTypes.SET_CURRENT_PRODUCT:
			return {
				...state,
				currentProduct: action.payload
			}
		case ActionTypes.SET_IS_LOADING:
			return {
				...state,
				isLoading: action.payload
			}
		case SidebarTypes.GET_PRICE_RANGE:
			return {
				...state,
				product: state.product.map(p => {
					if (p.price >= action.payload[0] && p.price <= action.payload[1]) {
						return { ...p }
					}
				})
			}
		case ActionTypes.SET_IS_LOADING_PRODUCT_TRENDS:
			return {
				...state,
				isLoadingTrends: action.payload
			}
		case ActionTypes.SET_IS_LOADING_PRODUCTS:
			return {
				...state,
				isLoadingProducts: action.payload
			}
		case ActionTypes.SET_IS_LOADING_CURRENT_PRODUCT:
			return {
				...state,
				isLoadingCurrentProduct: action.payload
			}
		default:
			return state
	}
}

export default productReducer
