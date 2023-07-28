import { useState, useEffect } from 'react';

function ScrollUp() {
	const [scroll, setScroll] = useState(false);
	const handleScrollToTop = () => {
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<button
			className={`scrollup ${scroll ? 'show' : ''}`}
			onClick={handleScrollToTop}>
			UP
		</button>
	);
}

export default ScrollUp;
