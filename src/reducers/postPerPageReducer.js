const initialState = 4;

export default function postPerPageReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'INCREMENT':
			return state + action.amount;
			break;

		case 'DECREMENT':
			return state - action.amount;
			break;

		default:
			return state;
	}
}
