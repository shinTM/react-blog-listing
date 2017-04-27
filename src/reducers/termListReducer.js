const initialState = [];

export default function updateTermListReducer( state = initialState, action ) {

	switch( action.type ) {
		case 'UPDATE_TERM_LIST':
			return [
				...action.termList
			]
			break;

		default:
			return state;
	}
}
