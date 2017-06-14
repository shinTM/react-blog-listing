import React, { Component, PropTypes } from 'react';
import MdExpandMore from 'react-icons/md/expand-more';
import MdExpandLess from 'react-icons/md/expand-less';
import { connect } from 'react-redux';

import WpData from '../data/WpData';

import {
	loaderVisibleAction,
	updatePostListAction
} from '../actions';

class SortOrder extends Component{
	state = {
		isDesc: true
	}

	onSortClick = ( event ) => {
		this.setState( {
			isDesc: ! this.state.isDesc
		} );

		this.props.onLoaderVisibleUpdate( true );

		WpData.queryParams.order = this.state.isDesc ? 'asc' : 'desc';

		WpData.getPosts().then(
			response => {
				let postsData = JSON.parse( response.data );

				this.props.onLoaderVisibleUpdate( false );
				this.props.onUpdatePostList( postsData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

	}

	render() {
		const { isLoaded } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		return(
			<div className = "cherry-post-filters__sort-order" onClick = { this.onSortClick }>
				<span>Order</span>
				{ this.state.isDesc ? <MdExpandMore size = { 22 } /> : <MdExpandLess size = { 22 } /> }
			</div>
		);
	}

}

export default connect(
	state    => ( {
		postList: state.postList
	} ),

	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		},

		onLoaderVisibleUpdate: ( visible ) => {
			dispatch( loaderVisibleAction( visible ) );
		}

	} )
)( SortOrder );
