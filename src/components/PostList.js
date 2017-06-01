import React, { Component, PropTypes } from 'react';
import Post from './Post.js';
import WpData from '../data/WpData';
import Settings from '../data/Settings';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class PostList extends Component {
	render() {
		let { isLoaded, postList, page, postPerPage, layout, column } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		if ( ! postList || ! postList.length ) {
			return (
				<h4>Post not found</h4>
			);
		}

		for ( let key in postList ) {
			let leftBound = page * postPerPage - postPerPage,
				rightBound = page * postPerPage;

			if ( key >= leftBound && key < rightBound ) {
				postList[key].is_visible = true;
			} else {
				postList[key].is_visible = false;
			}

		}

		const posts = postList.map( ( post, index ) => (
			<Post
				isVisible = { post.is_visible }
				key = { index }
				index = { index }
				postData = { post }
				saveTitleHandler = { this.saveTitleHandler }
			/>
		));

		let postsListClasses = `cherry-post-list cherry-post-list--${ layout }`;

		return(
			<div className = { postsListClasses }>
				{ posts }
			</div>
		);
	}

	saveTitleHandler = ( id, event ) => {
		WpData.setTitleData( id, event.target.innerText );
	}
}
