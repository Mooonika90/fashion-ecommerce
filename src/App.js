import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/index';
import Product from './pages/product';
import Jewelery from './pages/jewelery';
import Cart from './pages/cart';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contact';

import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

function App() {
	return (
		<div id='app'>
			<CartProvider>
				<Header id='site-header'>
					<h1>Elevé</h1>
				</Header>

				<main>
					<Routes>
						<Route path={'/contact'} element={<ContactUs />} />
						<Route path={'/aboutme'} element={<AboutUs />} />
						<Route path={'/cart'} element={<Cart />} />
						<Route path={'/product/:ID'} element={<Product />} />
						<Route path={'/jewelery'} element={<Jewelery />} />
						<Route path={'/'} element={<HomePage />} />
					</Routes>
				</main>

				<Footer />
			</CartProvider>
		</div>
	);
}

export default App;
