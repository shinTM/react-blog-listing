import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import PostList from './PostList.js';
import TermList from './termList.js';
import Pagination from './Pagination.js';


import { updatePostListAction } from '../actions';
import { updateTermListAction } from '../actions';

class ViewPort extends Component{

	static allPosts = null;

	allCategories = null;

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				WpData.allPosts = responseData;

				this.props.onUpdatePostList( WpData.allPosts );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );

				this.allCategories = responseData;
				this.props.onUpdateTermList( this.allCategories );
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
				<Pagination />
				<TermList
					termList = { this.props.termList }
				/>
				<PostList
					postList={ this.props.postList }
				/>
			</div>
		);
	}

}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList,
		termList: state.termList
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},
		onUpdateTermList: ( termList ) => {
			dispatch( updateTermListAction( termList ) );
		}
	} )
)( ViewPort );
