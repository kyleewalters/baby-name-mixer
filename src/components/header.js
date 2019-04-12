import React from 'react';

import './style.scss';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg">
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Baby Name Mixer
							</h1>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
