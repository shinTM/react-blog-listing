const initialState = 1;

export default function pageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'UPDATE_PAGE':
			console.log(state);
			return action.page;
			break;

		default:
			return state;
	}
}
