import react, { useEffect } from 'react';
import { popularGamesURL } from './api';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesActions';
import { Home } from './pages';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGames());
	}, []);

	return (
		<div className='App'>
			<Home />
		</div>
	);
}

export default App;
