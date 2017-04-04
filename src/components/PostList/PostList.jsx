import React, { Component, PropTypes } from 'react';
import Post from '../Post/Post.jsx';
import WpData from '../../data/WpData';

export default class PostList extends Component {
	constructor() {
		super();
		this.state = {
			postList: null
		}
		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );
				this.setState({postList:responseData});
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);
	}

	renderPostList() {
		if ( null === this.state.postList ) {
			return(
				<h4>Loading...</h4>
			)
		}

		let posts = this.state.postList.map( ( post, index ) => {
			console.log(post);
			return(
				<div key={post.id} className="post">
					<Post postData={ post }/>
				</div>
			);
		});

		return(
			<div className="post-list">
				{ posts }
			</div>
		);
	}

	render() {
		return(
			<div>
				{ this.renderPostList() }
			</div>
		);
	}


}
