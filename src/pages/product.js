
import { useParams, Link } from 'react-router-dom';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import fetcherStore from '../api/fetcher';
import { useCart } from 'react-use-cart';

function Product() {
	const { ID } = useParams();
	const [productData, setProductData] = useState([]);
	const { data } = useSWR(`/${ID}`, fetcherStore);
	const { addItem } = useCart();

	useEffect(() => {
		if (data) {
			setProductData(data);
		
		}
	}, [data]);

	return (
		<section>
			<h2>summer 2023</h2>
			{productData && (
				<article className='product' key={`Product-${productData.ID}`}>
					<div>
						<h3>{productData.title}</h3>
						<p>${productData.price}</p>
						<Link to={'/cart'}>
							<button
								className='addToCartBttn'
								onClick={() => addItem(productData)}>
								Add to cart
							</button>
						</Link>
						<p className='cutoff-text'>{productData.description}</p>
						<input className='expand-btn' type='checkbox'></input>
					</div>
					<img src={productData.image} alt={productData.title} />
				</article>
			)}
		</section>
	);
}

export default Product;
