import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WpData from '../data/WpData';

import { updatePostListAction } from '../actions';

class TermList extends Component {

	renderTermList() {
		const { termList, onClick } = this.props;

		if ( ! termList || ! termList.length ) {
			return(
				<h4>Loading Term List...</h4>
			)
		}

		return(
			<ul>
				{
				termList.map( ( term, index ) => {
					return(
						<li key={ term.id }>
							<button onClick={ this.onTermClick( term.id ) }>{ term.name }</button>
						</li>
					);
				})
				}
			</ul>
		);
	}

	onTermClick = ( categoryId ) => ( event ) => {
		let postList = WpData.allPosts;

		if ( 'all' !== categoryId ) {
			postList = postList.filter( ( post ) => {
				let categories = post.categories;

				return -1 !== post.categories.indexOf( categoryId );
			} );
		}

		this.props.onUpdatePostList( postList );
	};

	render() {
		return(
			<div className="term-list cherry-post-category-list">
				{ this.renderTermList() }
			</div>
		);
	}
}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
		}
	} )
)( TermList );

