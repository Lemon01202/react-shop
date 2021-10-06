import axios from 'axios'
import { setProducts } from '../redux/actions/productAction';

export const fetchingProducts = () => {
	debugger;
	return async (dispatch) => {
		const response = await axios.get('https://fakestoreapi.com/products');
		console.log(response);
	}
}