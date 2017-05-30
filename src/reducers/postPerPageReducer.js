import Settings from '../data/Settings';

const initialState = Settings.defaultSettings.postPerPage;

export default function postPerPageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'UPDATE_POST_PER_PAGE':
			return state + action.amount;
			break;

		default:
			return state;
	}
}
