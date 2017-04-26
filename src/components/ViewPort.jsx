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
	state = {
		postList: null,
		termList: null,
		//postPerPage: 4,
		//page: 1,
		category: 'all'
	}

	allPosts = null;

	allCategories = null;

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				this.allPosts = responseData;

				this.setState( {
					postList: this.allPosts
				} );
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
		console.log(this.props);
		return(
			<div>
				<h2>Blog</h2>
				<button className="inc" onClick={ this.props.increment }>-</button>
				<button className="dec" onClick={ this.props.decrement }>+</button>
				<Pagination
					postList={ this.state.postList }
					postPerPage={ 4 }
					onClick={ this.props.changePage }
					page={ 1 }
				/>
				{/*<CategoryList
					termList={ this.state.termList }
					onClick={ this.handleTermClick }
				/>*/}
				<PostList
					postList={ this.state.postList }
					page={ 1 }
					postPerPage={ 4 }
				/>
			</div>
		);
	}

	handlePaginationClick = ( currentPage ) => ( event ) => {

		/*this.setState({
			page: currentPage + 1
		});*/
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
		//testStore: state
		postPerPage: state.postPerPage,
		//page: state.page
	} ),
	dispatch => ( {
		increment: () => {
			dispatch( incrementAction(1) );
		},
		decrement: () => {
			dispatch( decrementAction(1) );
		},
		changePage: ( page ) => {
			dispatch( changePageAction( page ) );
		},
		updatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		}
	} )
)( ViewPort );
