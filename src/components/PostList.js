import React, { Component, PropTypes } from 'react';
import Post from './Post.js';
import FontAwesome from 'react-fontawesome';
import WpData from '../data/WpData';
import Settings from '../data/Settings';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class PostList extends Component {

	renderPostList() {
		let { postList, page, layout } = this.props,
			postPerPage = Settings.defaultSettings.postPerPage;

		if ( ! postList || ! postList.length ) {
			return(
				<FontAwesome size = '2x' tag = 'i' spin name = 'spinner' />
			)
		}

		let posts = postList.slice( page * postPerPage - postPerPage, page * postPerPage ).map( ( post, index ) => {
			let postClasses = `cherry-post ${ post.format }-post`;
			return(
				<div key={ index } className = { postClasses }>
					{/*<CSSTransitionGroup
						transitionName="example"
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
					</CSSTransitionGroup>*/}
					<Post postData={ post } saveTitleHandler={ this.saveTitleHandler }/>
				</div>
			);
		});

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

	render() {
		return(
			this.renderPostList()
		);
	}
}
