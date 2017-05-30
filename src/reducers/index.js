import { combineReducers } from 'redux';
import postList from './postListReducer';
import termList from './termListReducer';
import page from './pageReducer';
import postPerPage from './postPerPageReducer';
import layout from './layoutListingReducer';
import postVisible from './postVisibleReducer';

export default combineReducers({
	postList,
	termList,
	page,
	postPerPage,
	layout,
	postVisible
});
