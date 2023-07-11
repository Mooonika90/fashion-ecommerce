import woman from '../assets/woman-big.jpg';
import company from '../assets/company-big.jpg';
import { CoatHanger, Hourglass, ShoppingCart } from 'phosphor-react';

function AboutUs() {
	return (
		<section className='about-us'>
			<h2>Who we are?</h2>
			<article>
				<div>
					<h3>
						Elevé is a fashion brand that embraces elegance and minimalism in
						its designs.
					</h3>
					<p>
						The brand's mission goes beyond creating stylish clothing and
						jewelery Through its commitment to timeless elegance,
						sustainability, simplicity, and empowering confidence, Elevé aspires
						to be a brand that resonates with individuals seeking refined and
						minimalist fashion choices that align with their values.
					</p>
				</div>
				<img src={woman} alt='' />
			</article>
			<ul>
				<li>
					<CoatHanger size={32} />
					<h4>Simplicity and Minimalism</h4>
					<p>
						Elevé celebrates the beauty of simplicity and minimalism. The brand
						believes in the power of understated sophistication, offering
						designs that are refined, uncluttered, and effortlessly chic.
					</p>
				</li>
				<li>
					<Hourglass size={32} />
					<h4>Versatility and Time Efficiency</h4>
					<p>
						Elevé recognizes the demands of modern life and aims to provide
						versatile pieces that seamlessly transition from day to night,
						allowing individuals to save time and effortlessly adapt to various
						occasions.
					</p>
				</li>
				<li>
					<ShoppingCart size={32} />
					<h4>Attention to Detail</h4>
					<p>
						Elevé prides itself on its meticulous attention to detail. Every
						aspect of the design, from stitching to fabric selection, is
						carefully considered to ensure exceptional quality and a refined
						aesthetic.
					</p>
				</li>
			</ul>
			<article>
				<div>
					<h3>
						Elevé is a fashion brand that embraces elegance and minimalism in
						its designs.
					</h3>
					<p>
						The brand's mission goes beyond creating stylish clothing and
						jewelery Through its commitment to timeless elegance,
						sustainability, simplicity, and empowering confidence, Elevé aspires
						to be a brand that resonates with individuals seeking refined and
						minimalist fashion choices that align with their values.
					</p>
				</div>
				<img className='company' src={company} alt='' />
			</article>
		</section>
	);
}

export default AboutUs;
