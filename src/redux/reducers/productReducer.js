import { ActionTypes } from "../constans/action-types";

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
		default:
			return state
	}
}

export default productReducer
