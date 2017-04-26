import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

import ViewPort from './components/ViewPort.jsx';

//import reducer from './reducers';

require('./../sass/style.scss');

const initialState = {
	postPerPage: 4,
	page: 1,
	postList: null
};

function postPerPageReducer( state = 4, action ) {

	switch( action.type ) {
		case 'INCREMENT':
			return {
				postPerPage: state.postPerPage + action.amount
			}
			break;

		case 'DECREMENT':
			return {
				postPerPage: state.postPerPage - action.amount
			}
			break;

		default: return state;
	}
}

function changePageReducer( state = 1, action ) {

	switch( action.type ) {
		case 'CHANGE_PAGE':
			return {
				page: action.page
			}
			break;

		default: return state;
	}
}

function updatePostListReducer( state = {}, action ) {

	switch( action.type ) {
		case 'UPDATE_POST_LIST':
			return {
				postList: action.postList
			}
			break;

		default: return state;
	}
}

const reducer = combineReducers({
	postPerPageReducer,
	changePageReducer,
	updatePostListReducer
});


const store = createStore( postPerPageReducer );

ReactDOM.render(
	<Provider store={ store }>
		<ViewPort />
	</Provider>,
	document.getElementById( 'cherry-post-listing' )
);
