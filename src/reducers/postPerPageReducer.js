import Settings from '../data/Settings';

const initialState = Settings.defaultSettings.postPerPage;

export default function postPerPageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'SET_POST_PER_PAGE':
			return action.number;
			break;

		case 'UPDATE_POST_PER_PAGE':
			return state + action.number;
			break;

		default:
			return state;
	}
}
