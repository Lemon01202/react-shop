import { combineReducers } from "redux";
import productReducer from "./productReducer";
import sidebarReducer from "./sidebarReducer";

export const reducers = combineReducers({
	products: productReducer,
	sidebar: sidebarReducer,
})