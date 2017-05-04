const initialState = 1;

export default function pageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'UPDATE_PAGE':
			return action.page;
			break;

		case 'INCREMENT_PAGE':
			return state + action.amount;
			break;

		case 'DECREMENT_PAGE':
			return state - action.amount;
			break;

		default:
			return state;
	}
}
