import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';

export const Cart = () => {
	const {
		isEmpty,
		items,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	return (
		<section className='cart'>
			<h2>{isEmpty ? 'Your Cart is Empty' : 'The Cart'}</h2>
			{!isEmpty ? (
				<table className='cart'>
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{items.map((item, index) => {
							return (
								<tr key={index}>
									<td>
										<Link to={`/product/${item?.id}`}>
											<img src={item.image} alt='' />
											<h3 className='cutoff-text'>{item.title}</h3>
										</Link>
									</td>

									<td className='cartQuantity'>
										<button
											onClick={() =>
												updateItemQuantity(item.id, item.quantity - 1)
											}>
											-
										</button>

										<span> {item.quantity}</span>

										<button
											onClick={() =>
												updateItemQuantity(item.id, item.quantity + 1)
											}>
											+
										</button>
									</td>
									<td className='cartPrice'>
										<p> ${item.price}</p>

										<button href='#' onClick={() => removeItem(item.id)}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={2}>Total Price: ${cartTotal.toFixed(2)}</td>
							<td>
								<button onClick={emptyCart}>Clear</button>
							</td>
						</tr>
					</tfoot>
				</table>
			) : (
				<p>Time to fill your cart!</p>
			)}
		</section>
	);
};

export default Cart;
