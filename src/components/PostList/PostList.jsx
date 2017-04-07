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
		console.log(id);
		console.log(event.target.innerText);
		//console.log(event);
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
