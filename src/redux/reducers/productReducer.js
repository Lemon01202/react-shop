import { ActionTypes } from "../constans/action-types";

const initialState = {
	product: []
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCTS:
			return {
				...state,
				product: [...state.product, ...action.payload]
			}
		default:
			return state
	}
}

export default productReducer
