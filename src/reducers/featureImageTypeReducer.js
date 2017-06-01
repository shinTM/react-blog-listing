import Settings from '../data/Settings';

const initialState = Settings.defaultSettings.imageType;

export default function featureImageTypeReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'UPDATE_FEATURE_IMAGE_TYPE':
			return action.imageType;
			break;

		default:
			return state;
	}
}
