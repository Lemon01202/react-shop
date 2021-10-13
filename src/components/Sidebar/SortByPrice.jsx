import { Slider } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productAction";
import { setPriceRange } from "../../redux/actions/sidebarAction";
import './Sidebar.css';
const SortByPrice = () => {
	const dispatch = useDispatch();
	const onRangeChange = (e, data) => {
		dispatch(setPriceRange(data));
	}
	const { product } = useSelector(state => state.products)
	const { priceRange, staticMinPrice, staticMaxPrice } = useSelector(state => state.sidebar)

	const getProductOnRangePrice = async () => {
		const sortingByPrice = [];
		const response = await axios.get('https://fakestoreapi.com/products');

		response.data.map(p => {
			if (p.price >= priceRange[0] && p.price <= priceRange[1]) {
				sortingByPrice.push(p);
			}
		})
		dispatch(setProducts(sortingByPrice));
	}

	return (
		<div>
			<div className='sliderBar'>
				<Slider value={priceRange} onChange={onRangeChange} valueLabelDisplay={'auto'} min={staticMinPrice} max={staticMaxPrice} />
				<div href="" className="sortingButton" onClick={getProductOnRangePrice}>Sorting by price</div>
			</div>
		</div>
	)
};

export default SortByPrice;