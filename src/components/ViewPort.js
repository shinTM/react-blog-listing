import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import WpData from '../data/WpData';
import Settings from '../data/Settings';

import PostList from './PostList.js';
import TermFilterList from './TermFilterList.js';
import LayoutTypeFilter from './LayoutTypeFilter.js';
import Pagination from './Pagination.js';
import MoreButton from './MoreButton.js';
import Loader from './Loader.js';
import SortOrder from './SortOrder.js';

import {
	updatePostListAction,
	updateTermListAction,
	changeLayoutAction,
	changeFeatureImageAction,
	loaderVisibleAction,
	updatePageNumberAction
} from '../actions';

class ViewPort extends Component{

	state = {
		isLoaded: false,
	};

	componentDidMount() {

		let getAllPostPromise = WpData.getPosts().then(
			response => {
				let postsData = JSON.parse( response.data );

				WpData.allPosts = postsData;

				this.props.onPageNumberUpdate( response.totalPagesAmount );
				this.props.onUpdatePostList( postsData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		let getAllCategoryPromise = WpData.getAllCategory().then(
			response => {
				let categoriesData = JSON.parse( response.data );

				this.allCategories = categoriesData;
				this.props.onUpdateTermList( categoriesData );
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);

		Promise.all( [ getAllPostPromise, getAllCategoryPromise ] ).then( () => {
			this.props.onLoaderVisibleUpdate( false );
			this.setState( {
				isLoaded: true,
			});
		} );
	}

	render() {
		return(
			<div>
				<TransitionGroup component = 'div' className = 'cherry-post-loader-container'>
					{ this.props.loaderVisible && <Loader /> }
				</TransitionGroup>
				<div className = "cherry-post-filters">
					<TermFilterList
						isLoaded = { this.state.isLoaded }
						termList = { this.props.termList }
					/>
					<SortOrder
						isLoaded = { this.state.isLoaded }
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
					layout = { this.props.layout }
				/>
				<div className = "cherry-post-controls">
					{ this.getViewMoreControl() }
				</div>
			</div>
		);
	}

	getViewMoreControl() {
		let viewMoreControl = <Pagination isLoaded = { this.state.isLoaded } />;

		if ( 'more-button' === Settings.defaultSettings.viewNextType ) {
			return <MoreButton isLoaded = { this.state.isLoaded } />
		}

		return viewMoreControl;
	}
}

export default connect(
	state    => ( {
		postList: state.postList,
		termList: state.termList,
		layout: state.layout,
		loaderVisible: state.loader.loaderVisible
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},

		onUpdateTermList: ( termList ) => {
			dispatch( updateTermListAction( termList ) );
		},

		onLayoutUpdate: ( layout ) => {
			let imageType = 'tag';

			switch ( layout ) {
				case 'grid':
				case 'list':
					imageType = 'cover';
					break;
				case 'columns':
				case 'timeline':
					imageType = 'tag';
					break;
			}

			dispatch( changeFeatureImageAction( imageType ) );
			dispatch( changeLayoutAction( layout ) );
		},

		onPageNumberUpdate: ( number ) => {
			dispatch( updatePageNumberAction( number ) );
		},

		onLoaderVisibleUpdate: ( visible ) => {
			dispatch( loaderVisibleAction( visible ) );
		}
	} )
)( ViewPort );
