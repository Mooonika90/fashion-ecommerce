import { Link } from 'react-router-dom';
import { ShoppingBag } from 'phosphor-react';
import { useCart } from 'react-use-cart';

function Basket() {
	const { totalItems } = useCart();
	return (
		<Link to={'/cart'} className='cartBasket'>
			<ShoppingBag size={32} />
			<span className='cartNumber'>{totalItems}</span>
		</Link>
	);
}

export default Basket;
