const initialState = {
	loaderVisible: true,
	loaderMessage: 'Loading...'
};

export default function loaderVisibleReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'UPDATE_STATE':
			return Object.assign( {}, state, { loaderVisible: action.visible } );
			break;

		case 'UPDATE_MESSAGE':
			return  Object.assign( {}, state, { loaderMessage: action.message } );
			break;

		default:
			return state;
	}
}
