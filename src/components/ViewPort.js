import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import PostList from './PostList.js';
import TermList from './termList.js';
import Pagination from './Pagination.js';


import { updatePostListAction } from '../actions';
import { updateTermListAction } from '../actions';

class ViewPort extends Component{

	allPosts = null;

	allCategories = null;

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				this.allPosts = responseData;

				this.props.onUpdatePostList( this.allPosts );
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
		console.log(this.props.tempState);
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

	/*handlePaginationClick = ( currentPage ) => ( event ) => {
		this.props.onChangePage( currentPage );
	};*/

}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList,
		termList: state.termList
	} ),
	dispatch => ( {
		onChangePage: ( page ) => {
			dispatch( changePageAction( page ) );
		},
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},
		onUpdateTermList: ( termList ) => {
			dispatch( updateTermListAction( termList ) );
		}
	} )
)( ViewPort );
