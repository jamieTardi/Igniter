import { combineReducers } from 'redux';
import { gamesReducer } from './gamesReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({
	games: gamesReducer,
	searchReducer,
});

export default rootReducer;
