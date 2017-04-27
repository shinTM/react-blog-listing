import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updatePostListAction } from '../actions';

class CategoryList extends Component {

	renderCategoryList() {
		const { termList, onClick } = this.props;

		if ( ! termList || ! termList.length ) {
			return(
				<h4>Loading Term List...</h4>
			)
		}

		let itemElements = termList.map( ( term, index ) => {
			return(
				<li key={ term.id }>
					<button onClick={ this.onTermClick( term.id  ) }>{ term.name }</button>
				</li>
			);
		});

		return(
			<ul>
				{ itemElements }
			</ul>
		);
	}

	onTermClick = ( categoryId ) => ( event ) => {
		let postList = this.props.postList;

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
				{ this.renderCategoryList() }
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
)( CategoryList );

