import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import PostList from './PostList.js';
import TermList from './termList.js';
import Pagination from './Pagination.js';

import Settings from '../data/Settings';

import { updatePostListAction } from '../actions';
import { updateTermListAction } from '../actions';
import { changePageAction } from '../actions';

class ViewPort extends Component{

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				WpData.allPosts = responseData;

				this.props.onUpdatePostList( responseData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );

				this.allCategories = responseData;
				this.props.onUpdateTermList( responseData );
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);
	}

	render() {
		return(
			<div>
				<h2>Blog</h2>
				<Pagination postList = { this.props.postList } page = { this.props.page } onPageUpdate = { this.props.onPageUpdate } />
				<TermList termList = { this.props.termList } />
				<PostList postList = { this.props.postList } page = { this.props.page } />
			</div>
		);
	}

}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList,
		termList: state.termList,
		page: state.page
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},
		onUpdateTermList: ( termList ) => {
			dispatch( updateTermListAction( termList ) );
		},
		onPageUpdate: ( page ) => {
			console.log(page);
			dispatch( changePageAction( page + 1 ) );
		}
	} )
)( ViewPort );
