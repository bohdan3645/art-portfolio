import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const Layout: FC = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
