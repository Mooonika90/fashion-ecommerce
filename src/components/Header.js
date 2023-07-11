import MainMenu from './MainMenu';
import Basket from './Basket';

function Header(props) {
	const { children, ...rest } = props;
	return (
		<header {...rest}>
			<div className='wrapper'>
				{children}
				<MainMenu />
				<a href='#mainmenu' hidden>
					&#9776;
				</a>
				<Basket />
			</div>
		</header>
	);
}

export default Header;
