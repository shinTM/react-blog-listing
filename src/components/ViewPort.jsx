import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import CategoryList from './CategoryList.jsx';
import Pagination from './Pagination.jsx';
import PostList from './PostList.jsx';

import { incrementAction } from '../actions';
import { decrementAction } from '../actions';
import { changePageAction } from '../actions';
import { updatePostListAction } from '../actions';

class ViewPort extends Component{

	allPosts = null;

	allCategories = null;

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				this.allPosts = responseData;

				this.props.onUpdatePostList( this.allPosts )

			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		/*WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );

				this.setState( {
					termList: responseData
				} );
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);*/
	}

	render() {

		return(
			<div>
				<h2>Blog</h2>
				<button className="dec" onClick={ this.props.decrement }>-</button>
				<button className="inc" onClick={ this.props.increment }>+</button>
				<Pagination
					postList = { this.props.postList }
					postPerPage = { this.props.postPerPage }
					page = { 1 }
					onClick = { this.handlePaginationClick }
				/>
				{/*<CategoryList
					termList={ this.state.termList }
					onClick={ this.handleTermClick }
				/>*/}
				<PostList
					postList={ this.props.postList }
					postPerPage = { this.props.postPerPage }
					page = { this.props.page }
				/>
			</div>
		);
	}

	handlePaginationClick = ( currentPage ) => ( event ) => {
		this.props.onChangePage( currentPage );
	};

	/*handleTermClick = ( categoryId ) => ( event ) => {
		let postList;

		if ( 'all' !== categoryId ) {
			postList = this.allPosts.filter( ( post ) => {
				let categories = post.categories;

				return -1 !== post.categories.indexOf( categoryId );
			} );
		} else {
			postList = this.allPosts;
		}

		this.setState( {
			postList: postList,
			page: 1
		} );
	};*/

}

export default connect(
	state    => ( {
		postList: state.postList,
		postPerPage: state.postPerPage,
		page: state.page
	} ),
	dispatch => ( {
		increment: () => {
			dispatch( incrementAction( 1 ) );
		},
		decrement: () => {
			dispatch( decrementAction( 1 ) );
		},
		onChangePage: ( page ) => {
			dispatch( changePageAction( page ) );
		},
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		}
	} )
)( ViewPort );
