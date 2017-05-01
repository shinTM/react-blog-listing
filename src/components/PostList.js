import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';
import Post from './Post.js';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class PostList extends Component {

	renderPostList() {
		let { postList } = this.props;

		if ( ! postList || ! postList.length ) {
			return(
				<h4>Loading Posts...</h4>
			)
		}

	//	let posts = postList.slice( page * postPerPage - postPerPage, page * postPerPage ).map( ( post, index ) => {
		let posts = postList.map( ( post, index ) => {
			return(
				<div key={ index } className="cherry-post">
					<CSSTransitionGroup
						transitionName="example"
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
					</CSSTransitionGroup>
					<Post postData={ post } saveTitleHandler={ this.saveTitleHandler }/>
				</div>
			);
		});

		return(
			<div className="cherry-post-list">
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
