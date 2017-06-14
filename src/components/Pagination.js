import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';

import {
	updatePostListAction,
	changePageAction,
	updatePageNumberAction,
	loaderVisibleAction
} from '../actions';

class Pagination extends Component{

	render() {
		let { isLoaded } = this.props,
			paginationItems = [];

		if ( ! isLoaded ) {
			return false;
		}

		for ( var i = 1; i <= this.props.numberOfPage; i++ ) {
			paginationItems.push(
				<li key = { i }>
					<span className = { i === this.props.page ? 'active' : '' } onClick = { this.onItemClick( i ) }>{ i }</span>
				</li>
			);
		}

		let prevButton = ( this.props.page > 1 ) ? <li className = "prev-page" onClick = { this.onItemClick( this.props.page - 1 ) }><span>Prev</span></li> : '';

		let nextButton = ( this.props.page < this.props.numberOfPage ) ? <li className = "next-page" onClick = { this.onItemClick( this.props.page + 1 ) }><span>Next</span></li> : '';

		return(
			<ul className = "cherry-post-controls__pagination">
				{ prevButton }
				{ paginationItems }
				{ nextButton }
			</ul>
		);
	}

	onItemClick = ( page ) => ( event ) => {
		this.props.onPageUpdate( page );
		this.props.onLoaderVisibleUpdate( true );

		WpData.queryParams.page = page;

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
		numberOfPage: state.numberOfPage
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},

		onPageUpdate: ( page ) => {
			WpData.tempDelay = 0;

			dispatch( changePageAction( page ) );
		},

		onPageNumberUpdate: ( number ) => {
			dispatch( updatePageNumberAction( number ) );
		},

		onLoaderVisibleUpdate: ( visible ) => {
			dispatch( loaderVisibleAction( visible ) );
		}
	} )
)( Pagination );
