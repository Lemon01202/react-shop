import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import ProductCard from './ProductCard'
import './ProductList.css'
const ProductComponent = () => {

	return (
		<div div className='productList' >
			<div className='productTitle'>Featured Products</div>
			<Sidebar />
			<ProductCard />
		</div>
	)
}

export default ProductComponent
