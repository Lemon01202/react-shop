import { Slider } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMaxPrice, setMinPrice, setPriceRange } from "../../redux/actions/sidebarAction";
import './Sidebar.css';
const SortByPrice = () => {
	const dispatch = useDispatch();
	const [val, setVal] = useState([10, 110])
	const onRangeChange = (e, data) => {
		debugger;
		setVal(data)
	}
	const { product } = useSelector(state => state.products)
	const { priceRange, staticMinPrice, staticMaxPrice} = useSelector(state => state.sidebar)

	return (
		<div>
			<div className='sliderBar'>
				<Slider value={val} onChange={onRangeChange} valueLabelDisplay={'auto'} min={staticMinPrice} max={staticMaxPrice} />
				<div>От {staticMinPrice} до {staticMaxPrice}</div>
			</div>
		</div>
	)
};

export default SortByPrice;