import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import PostList from './PostList.js';
import TermFilterList from './termFilterList.js';
import Pagination from './Pagination.js';

import Settings from '../data/Settings';

import { updatePostListAction, updateTermListAction, changePageAction, incrementPageAction, decrementPageAction } from '../actions';

class ViewPort extends Component{

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				WpData.allPosts = responseData;
				console.log(WpData.allPosts);
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
				<h2>Blog list</h2>
				<div className = "cherry-post-controls">
					<TermFilterList termList = { this.props.termList } />
				</div>
				<PostList postList = { this.props.postList } page = { this.props.page } />
				<Pagination
					postList = { this.props.postList }
					page = { this.props.page }
					onPageUpdate = { this.props.onPageUpdate }
					onPageIncrease = { this.props.onPageIncrease }
					onPageDecrease = { this.props.onPageDecrease }
				/>
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
			dispatch( changePageAction( page + 1 ) );
		},
		onPageIncrease: ( page ) => {
			dispatch( incrementPageAction( 1 ) );
		},
		onPageDecrease: ( page ) => {
			dispatch( decrementPageAction( 1 ) );
		}
	} )
)( ViewPort );
