const initialState = [];

export default function updatePostListReducer( state = initialState, action ) {

	switch( action.type ) {
		case 'UPDATE_POST_LIST':
			return [
				...action.postList
			]
			break;

		default:
			return state;
	}
}
