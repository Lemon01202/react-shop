import ProductCard from './ProductCard'
import './ProductList.css'
const ProductComponent = () => {

	return (
		<div className='productList'>
			<div className='productTitle'>Featured Products</div>
			<ProductCard />
		</div>
	)
}

export default ProductComponent
