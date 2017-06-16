import React, { Component, PropTypes } from 'react';
import Post from './Post.js';
import Settings from '../data/Settings';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class PostList extends Component {
	render() {
		let { isLoaded, postList, layout } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		if ( ! postList || ! postList.length ) {
			return (
				<h4>Post not found</h4>
			);
		}

		for ( let key in postList ) {
			postList[key].is_visible = true;
		}

		const posts = postList.map( ( post, index ) => (
			<Post
				isVisible = { post.is_visible }
				key = { index }
				index = { index }
				postData = { post }
			/>
		));

		let postsListClasses = [ 'cherry-post-list', `cherry-post-list--${ layout }` ];

		if ( Settings.defaultSettings.customizerMode ) {
			postsListClasses.push( 'customizer-mode' );
		}

		return(
			<div className = { postsListClasses.join( ' ' ) }>
				{ posts }
			</div>
		);
	}
}
