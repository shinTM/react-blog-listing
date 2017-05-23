import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import WpData from '../data/WpData';
import PostList from './PostList.js';
import TermFilterList from './TermFilterList.js';
import LayoutTypeFilter from './LayoutTypeFilter.js';
import Pagination from './Pagination.js';
import MoreButton from './MoreButton.js';

import Settings from '../data/Settings';

import {
	updatePostListAction,
	updateTermListAction,
	changePageAction,
	incrementPageAction,
	decrementPageAction,
	changeLayoutAction,
	changePostPerPageAction
} from '../actions';

class ViewPort extends Component{

	componentDidMount() {

		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				WpData.allPosts = responseData;
				console.log(responseData);
				this.props.onUpdatePostList( responseData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		/*WpData.getPosts().then(
			response => {
				let responseData = JSON.parse( response );
				console.log(responseData);
				this.props.onUpdatePostList( responseData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);*/

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

	getViewMoreControl() {
		let viewMoreControl = <Pagination
			postList = { this.props.postList }
			page = { this.props.page }
			postPerPage = { this.props.postPerPage }
			onPageUpdate = { this.props.onPageUpdate }
			onPageIncrease = { this.props.onPageIncrease }
			onPageDecrease = { this.props.onPageDecrease }
		/>;

		if ( 'more-button' === Settings.defaultSettings.viewNextType ) {
			viewMoreControl = <MoreButton onLoadMore = { this.props.onPostPerPageUpdate }/>
		}

		return viewMoreControl;
	}

	test() {

		//this.props.onUpdatePostList( {} );
	}

	render() {
		return(
			<div>
			<button onClick = { (event) =>  this.test() }>adas</button>
				{/*<CSSTransitionGroup
					transitionName = "example"
					transitionAppear = { true }
					transitionAppearTimeout = { 500 }
					transitionEnterTimeout = { 500 }
					transitionLeaveTimeout = { 300 }>
				</CSSTransitionGroup>*/}
				<h2>Blog list</h2>
				<div className = "cherry-post-filters">
					<TermFilterList termList = { this.props.termList } />
					<LayoutTypeFilter
						layout = { this.props.layout }
						onLayoutUpdate = { this.props.onLayoutUpdate }
					/>
				</div>
				<PostList postList = { this.props.postList } page = { this.props.page } postPerPage = { this.props.postPerPage } layout = { this.props.layout } />
				<div className = "cherry-post-controls">
					{ this.getViewMoreControl() }
				</div>
			</div>
		);
	}
}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList,
		termList: state.termList,
		page: state.page,
		postPerPage: state.postPerPage,
		layout: state.layout
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
		},
		onLayoutUpdate: ( layout ) => {
			dispatch( changeLayoutAction( layout ) );
		},
		onPostPerPageUpdate: () => {
			let value = Settings.defaultSettings.viewMoreAmount;
			dispatch( changePostPerPageAction( value ) );
		},
	} )
)( ViewPort );
