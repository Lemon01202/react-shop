import { ActionTypes } from "../constans/action-types";
import { SidebarTypes } from "../constans/sidebar-types";

const initialState = {
	product: [],
	currentProduct: {},
	isLoading: false
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
		default:
			return state
	}
}

export default productReducer
