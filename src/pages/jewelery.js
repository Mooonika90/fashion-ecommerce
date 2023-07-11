import fetcherStore from '../api/fetcher';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
const pathname = '/category/jewelery';
function Jewelery() {
	const { data: products } = useSWR(pathname, fetcherStore);

	return (
		<section>
			<header className='hero-bg jewelery'>
				<div className='hero-text'>
					<h2>Jewelery</h2>
					<p>
						Dripping in elegance and dripping in diamonds, our jewelry
						collection is the epitome of glamour and luxury.
					</p>
				</div>
			</header>

			<div className='products'>
				{products?.map?.((item) => (
					<article key={`Products-${item.id}`}>
						<img src={item?.image} />
						<h3>{item?.title}</h3>

						<p>${item?.price}</p>
						<Link to={`/product/${item?.id}`}>Buy now!</Link>
					</article>
				))}
			</div>
		</section>
	);
}

export default Jewelery;
