import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import Settings from '../data/Settings';

import {
	updatePostListAction,
	updatePageNumberAction,
	changePostPerPageAction,
	loaderVisibleAction
} from '../actions';

class MoreButton extends Component{

	render() {
		const { isLoaded } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		if ( this.props.postPerPage >= this.props.numberOfPage * this.props.postPerPage ) {
			return false;
		}

		return(
			<div className = "cherry-post-controls__more-button">
				<div className = "more-button" onClick = { ( event ) => this.onMoreClick() }>Load more</div>
			</div>
		);
	}

	onMoreClick = ( event ) => {
		WpData.tempDelay = 0;
		this.props.onLoaderVisibleUpdate( true );

		let modifyPostPerPage = this.props.postPerPage + Settings.defaultSettings.viewMoreNumber;

		WpData.queryParams.postPerPage = modifyPostPerPage;

		this.props.onPostPerPageUpdate( Settings.defaultSettings.viewMoreNumber );

		WpData.getPosts().then(
			response => {
				let postsData = JSON.parse( response.data );

				this.props.onLoaderVisibleUpdate( false );
				this.props.onPageNumberUpdate( response.totalPagesAmount );
				this.props.onUpdatePostList( postsData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);
	}

}

export default connect(
	state    => ( {
		page: state.page,
		postPerPage: state.postPerPage,
		numberOfPage: state.numberOfPage,
		loaderVisible: state.loader.loaderVisible,
		loaderMessage: state.loader.loaderMessage
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},

		onPageNumberUpdate: ( number ) => {
			dispatch( updatePageNumberAction( number ) );
		},

		onPostPerPageUpdate: ( number ) => {
			dispatch( changePostPerPageAction( number ) );
		},

		onLoaderVisibleUpdate: ( visible ) => {
			dispatch( loaderVisibleAction( visible ) );
		}
	} )
)( MoreButton );
