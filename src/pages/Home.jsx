import React from 'react';
import { SearchBar, GameFilters, SideNav } from '../components';

const Home = () => {
	return (
		<div>
			<SearchBar />
			<div className='row'>
				<div className='col-3'>
					<SideNav />
				</div>
				<div className='col-9'>
					<h1>Current Games</h1>
					<GameFilters />
				</div>
			</div>
		</div>
	);
};

export default Home;
