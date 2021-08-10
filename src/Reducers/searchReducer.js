import { v4 as uuidv4 } from 'uuid';
const initState = [];

export const searchReducer = (state = { searches: [] }, action) => {
	switch (action.type) {
		case 'ADD_SEARCH':
			return {
				searches: [
					...state.searches,
					{ currentSearch: action.payload, id: uuidv4() },
				],
			};
		case 'CLEAR_SEARCH':
			return {
				items: [...state.searches, []],
			};
		default:
			return { ...state };
	}
};
