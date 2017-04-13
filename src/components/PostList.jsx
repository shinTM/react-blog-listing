import React, { Component, PropTypes } from 'react';
import Post from './Post.jsx';
import WpData from '../data/WpData';

export default class PostList extends Component {

	renderPostList() {
		let { postList, page, term, postPerPage } = this.props;

		if ( null === postList ) {
			return(
				<h4>Loading Posts...</h4>
			)
		}

		if ( 'all' !== term ) {
			postList = postList.filter( ( post ) => {
				let categories = post.categories;

				return -1 !== post.categories.indexOf( term );
			} );
		}

		let posts = postList.slice( page * postPerPage - postPerPage, page * postPerPage ).map( ( post, index ) => {

			return(
				<Post key={ index } postData={ post } saveTitleHandler={ this.saveTitleHandler }/>
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
