import React, { Component, PropTypes } from 'react';
import Post from './Post.jsx';
import WpData from '../data/WpData';

export default class PostList extends Component {

	renderPostList() {
		const { postList, page, postPerPage } = this.props;

		if ( null === postList ) {
			return(
				<h4>Loading...</h4>
			)
		}

		let posts = postList.slice( page * postPerPage - postPerPage, page * postPerPage ).map( ( post, index ) => {

			return(
				<div key={ post.id } className="post">
					<Post postData={ post } saveTitleHandler={ this.saveTitleHandler }/>
				</div>
			);
		});

		return(
			<div className="post-list">
				{ posts }
			</div>
		);
	}

	saveTitleHandler = ( id, event ) => {
		WpData.setTitleData( id, event.target.innerText );
	}

	render() {
		return(
			<div>
				{ this.renderPostList() }
			</div>
		);
	}


}
