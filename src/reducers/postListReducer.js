const initialState = [];

export default function updatePostListReducer( state = initialState, action ) {

	switch( action.type ) {
		case 'UPDATE_POST_LIST':
			return [
				...action.postList
			]
			break;

		case 'UPDATE_POST_LIST_BY_TEMR_ID':
			return [
				...state
			]
			break;

		default:
			return state;
	}
}
