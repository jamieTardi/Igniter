import react, { useEffect } from 'react';
import { popularGamesURL } from './api';
import { useDispatch } from 'react-redux';
import { loadGames } from './actions/gamesActions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGames());
	}, []);
	console.log(popularGamesURL());
	return <div className='App'></div>;
}

export default App;
