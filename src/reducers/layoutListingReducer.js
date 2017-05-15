import Settings from '../data/Settings';

const initialState = Settings.defaultSettings.listingLayout;

export default function updateLayoutListing( state = initialState, action ) {

	switch( action.type ) {
		case 'UPDATE_LAYOUT':
			return action.layout
			break;

		default:
			return state;
	}
}
