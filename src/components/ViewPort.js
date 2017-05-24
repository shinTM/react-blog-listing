import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import WpData from '../data/WpData';
import PostList from './PostList.js';
import TermFilterList from './TermFilterList.js';
import LayoutTypeFilter from './LayoutTypeFilter.js';
import Pagination from './Pagination.js';
import MoreButton from './MoreButton.js';
import Loader from './Loader.js';

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

	state = {
		isLoaded: false,
		loaderVisible: true,
		loaderMessage: 'Loading...'
	};

	componentDidMount() {

		let getAllPostPromise = WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				this.setState( {
					loaderMessage: 'Loading... Post data loaded'
				});

				WpData.allPosts = responseData;
				this.props.onUpdatePostList( responseData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		let getAllCategoryPromise = WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );

				this.setState( {
					loaderMessage: 'Loading... Category data loaded'
				});

				this.allCategories = responseData;
				this.props.onUpdateTermList( responseData );
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);

		Promise.all( [ getAllPostPromise, getAllCategoryPromise ] ).then( () => {
			this.setState( {
				loaderMessage: 'Loaded'
			});

			setTimeout( () => {
				this.setState( {
					isLoaded: true,
					loaderVisible: false,
				});
			}, 1000 );
		} );
	}

	test() {
	}

	render() {
		return(
			<div>
			<button onClick = { (event) =>  this.test() }>Test</button>
				{/*<CSSTransitionGroup
					transitionName = "example"
					transitionAppear = { true }
					transitionAppearTimeout = { 500 }
					transitionEnterTimeout = { 500 }
					transitionLeaveTimeout = { 300 }>
				</CSSTransitionGroup>*/}
				<TransitionGroup>
					{ this.state.loaderVisible && <Loader message = { this.state.loaderMessage }/> }
				</TransitionGroup>
				<div className = "cherry-post-filters">
					<TermFilterList
						isLoaded = { this.state.isLoaded }
						termList = { this.props.termList }
					/>
					<LayoutTypeFilter
						isLoaded = { this.state.isLoaded }
						layout = { this.props.layout }
						onLayoutUpdate = { this.props.onLayoutUpdate }
					/>
				</div>
				<PostList
					isLoaded = { this.state.isLoaded }
					postList = { this.props.postList }
					page = { this.props.page }
					postPerPage = { this.props.postPerPage }
					layout = { this.props.layout }
				/>
				<div className = "cherry-post-controls">
					{ this.getViewMoreControl() }
				</div>
			</div>
		);
	}

	getViewMoreControl() {
		let viewMoreControl = <Pagination
			isLoaded = { this.state.isLoaded }
			postList = { this.props.postList }
			page = { this.props.page }
			postPerPage = { this.props.postPerPage }
			onPageUpdate = { this.props.onPageUpdate }
			onPageIncrease = { this.props.onPageIncrease }
			onPageDecrease = { this.props.onPageDecrease }
		/>;

		if ( 'more-button' === Settings.defaultSettings.viewNextType ) {
			return <MoreButton
					isLoaded = { this.state.isLoaded }
					postPerPage = { this.props.postPerPage }
					onLoadMore = { this.props.onPostPerPageUpdate }
				/>
		}

		return viewMoreControl;
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
		onPostPerPageUpdate: ( ) => {
			let value = Settings.defaultSettings.viewMoreAmount;
			dispatch( changePostPerPageAction( value ) );
		},
	} )
)( ViewPort );
