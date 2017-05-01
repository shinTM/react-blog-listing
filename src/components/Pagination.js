import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updatePostListAction } from '../actions';

class Pagination extends Component{

	render() {
		if ( ! this.props.postList || ! this.props.postList.length ) {
			return <h4>Loading pagination...</h4>;
		}

		const pagItems = this.props.postList.map( ( pagination, i ) => {
			return(
				<li key={ i }>
					<button className={ i === this.props.page - 1 ? 'active' : '' } onClick={ this.onPaginationClick() }>{ i + 1 }</button>
				</li>
			);
		} );

		pagItems.length = Math.ceil( pagItems.length / this.props.postPerPage );

		return(
			<ul className="cherry-post-list-pagination">
				{ pagItems }
			</ul>
		);
	}

	onPaginationClick = ( page ) => ( event ) => {
		let postList = WpData.allPosts;

		postList = postList.slice( page * postPerPage - postPerPage, page * postPerPage );

		this.props.onUpdatePostList( postList );
	}
}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList,
		postPerPage: state.postPerPage,
		page: state.page
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		}
	} )
)( Pagination );
