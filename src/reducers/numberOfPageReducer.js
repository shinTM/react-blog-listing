const initialState = 0;

export default function numberOfPageReducer( state = initialState, action ) {
	switch( action.type ) {

		case 'UPDATE_PAGE_NUMBER':
			return action.number;
			break;

		default:
			return state;
	}
}
