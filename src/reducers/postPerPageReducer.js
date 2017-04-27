const initialState = 4;

export default function postPerPageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'UPDATE_PAGE':
			return action.page;
			break;

		default:
			return state;
	}
}
