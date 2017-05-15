import { combineReducers } from 'redux';
import postList from './postListReducer';
import termList from './termListReducer';
import page from './pageReducer';
import layout from './layoutListingReducer';

export default combineReducers({
	postList,
	termList,
	page,
	layout
});
