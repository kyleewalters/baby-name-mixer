import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import NameForm from './name-form';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<NameForm />
		<Footer />
	</div>
);

export default Layout;
