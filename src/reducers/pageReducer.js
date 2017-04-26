const initialState = 1;

export default function pageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'CHANGE_PAGE':
			return action.page + 1;
			break;

		default:
			return state;
	}
}
