const initialState = true;

export default function tooglePostVisible( state = initialState, action ) {

	switch( action.type ) {
		case 'TOOGLE_POST_VISIBLE':
			return ! state
			break;

		default:
			return state;
	}
}
