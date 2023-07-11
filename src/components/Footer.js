function Footer() {
	return (
		<footer id='site-footer'>
			<hr />
			<div>
				<p>
					©Copyright {new Date().getFullYear()} by nobody. All rights reversed.
				</p>
				<a href='#site-header'>
					To the top <span aria-hidden='true'>↑</span>
				</a>
			</div>
		</footer>
	);
}
export default Footer;
