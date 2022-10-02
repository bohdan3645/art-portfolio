import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Slice from './pages/Slice';
import ScrollToTop from './components/ScrollToTop';
import Layout from './layout/Layout';

const App: FC = () => {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route
						path='/'
						element={<Layout />}
					>
						{/* <Route path='/' element={<Home />} /> */}
						<Route
							path=':slice'
							element={<Home />}
						/>
					</Route>
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};

export default App;
