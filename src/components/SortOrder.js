import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';

import FontAwesome from 'react-fontawesome';

import {
	updatePostListAction
} from '../actions';

class SortOrder extends Component{
	state = {
		isDesc: true
	}

	onSortClick = ( event ) => {

		this.props.onUpdatePostList( WpData.allPosts.reverse() );

		this.setState( {
			isDesc: ! this.state.isDesc
		} );
	}

	render() {
		const { isLoaded } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		return(
			<div className = "cherry-post-filters__sort-order" onClick = { this.onSortClick }>
				<span>Order</span>
				<FontAwesome tag = 'i' name = { this.state.isDesc ? 'chevron-down' : 'chevron-up' } />
			</div>
		);
	}

}

export default connect(
	null,
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		}
	} )
)( SortOrder );
