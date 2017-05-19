import React, { Component, PropTypes } from 'react';
import Post from './Post.js';
import FontAwesome from 'react-fontawesome';
import WpData from '../data/WpData';
import Settings from '../data/Settings';

export default class PostList extends Component {

	saveTitleHandler = ( id, event ) => {
		WpData.setTitleData( id, event.target.innerText );
	}

	render() {
		let { postList, page, layout } = this.props,
		postPerPage = Settings.defaultSettings.postPerPage;

		if ( ! postList || ! postList.length ) {
			return(
				<FontAwesome size = '2x' tag = 'i' spin name = 'spinner' />
			)
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
