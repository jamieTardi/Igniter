import React from 'react';
import { SearchBar, GameFilters } from '../components';

const Home = () => {
	return (
		<div>
			<SearchBar />
			<h1>Current Games</h1>
			<GameFilters />
		</div>
	);
};

export default Home;
