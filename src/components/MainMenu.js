import { Link } from 'react-router-dom';
function MainMenu() {
	return (
		<nav id='mainmenu'>
			<a href='#' hidden>
				x
			</a>
			<ul>
				<li>
					<Link to={'/'}>Clothing</Link>
				</li>
				<li>
					<Link to={'/jewelery'}>Jewelery</Link>
				</li>
				<li>
					<Link to={'/aboutme'}>About Us</Link>
				</li>
				<li>
					<Link to={'/contact'}>Contact </Link>
				</li>
			</ul>
		</nav>
	);
}

export default MainMenu;
