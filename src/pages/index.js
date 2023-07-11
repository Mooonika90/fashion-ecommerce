import fetcherStore from '../api/fetcher';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
const pathname = "/category/women's clothing";
function HomePage() {
	const { data: products } = useSWR(pathname, fetcherStore);

	return (
		<section>
			<header className='hero-bg  women'>
				<div className='hero-text'>
					<h2>New Collection</h2>
					<p>
						Step into a world of sartorial wonder with our fresh-off-the-runway
						new arrivals!
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

export default HomePage;
