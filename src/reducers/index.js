import { combineReducers } from 'redux';
import postList from './postListReducer';
import postPerPage from './postPerPageReducer';
import page from './pageReducer';

export default combineReducers({
	postList,
	postPerPage,
	page
});
