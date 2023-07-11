import contact from '../assets/contact.jpg';

function ContactUs() {
	return (
		<section className='contactus'>
			<h2>Get in Touch</h2>

			<form action='#' method='get'>
				<header>
					<h3>Contact Us</h3>
					<p>Any idea of improvment? Feel free to leave us a message.</p>
					<img src={contact} alt='' />
				</header>
				<fieldset>
					<label>
						First Name <br />
						<input type='text' name='firstName' required />
					</label>

					<label>
						Last Name
						<br />
						<input type='text' name='lastName' required />
					</label>

					<label>
						E-Mail Address
						<br />
						<input type='text' name='email' required />
					</label>

					<label>
						Leave us a message <br />
						<textarea
							rows='6'
							cols='35'
							name='textarea'
							placeholder='Text here...'></textarea>
					</label>
					<button type='submit'>Send</button>
				</fieldset>
			</form>
		</section>
	);
}

export default ContactUs;
