import React, { Component, PropTypes } from 'react';
import Post from './Post.js';
import WpData from '../data/WpData';
import Settings from '../data/Settings';
import TransitionGroup from 'react-transition-group/TransitionGroup';

export default class PostList extends Component {

	saveTitleHandler = ( id, event ) => {
		WpData.setTitleData( id, event.target.innerText );
	}

	render() {
		let { isLoaded, postList, page, postPerPage, layout } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		if ( ! postList || ! postList.length ) {
			return (
				<h4>Post not found</h4>
			);
		}

		let postsListClasses = `cherry-post-list cherry-post-list--${ layout }`;
		let avaliablePosts = postList.slice( page * postPerPage - postPerPage, page * postPerPage );

		const posts = avaliablePosts.map( ( post, index ) => (
			<Post
				key = { index }
				index = { index }
				postData = { post }
				layout = { layout }
				saveTitleHandler = { this.saveTitleHandler }
			/>
		));

		return(
			<div className = { postsListClasses }>
				{ posts }
			</div>
		);
	}
}
