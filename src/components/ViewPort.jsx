import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';
import CategoryList from './CategoryList.jsx';
import Pagination from './Pagination.jsx';
import PostList from './PostList.jsx';

export default class ViewPort extends Component{
	state = {
		title: 'Blog',
		subTitle: 'Blog Listing',
		postList: null,
		termList: null,
		postPerPage: 4,
		page: 1,
		category: 'all'
	}

	allPosts = null;

	allCategories = null;

	componentDidMount() {
		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				this.allPosts = responseData;

				this.setState( {
					postList: this.allPosts
				} );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);

		WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );

				this.setState( {
					termList: responseData
				} );
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);
	}

	render() {
		return(
			<div>
				<h2>{ this.state.title }</h2>
				<Pagination
					postList={ this.state.postList }
					postPerPage={ this.state.postPerPage }
					onClick={ this.handlePaginationClick }
					pageNumber={ this.state.page }
				/>
				<CategoryList
					termList={ this.state.termList }
					onClick={ this.handleTermClick }
				/>
				<PostList
					postList={ this.state.postList }
					page={ this.state.page }
					postPerPage={ this.state.postPerPage }
				/>
			</div>
		);
	}

	handlePaginationClick = ( currentPage ) => ( event ) => {

		this.setState({
			page: currentPage + 1
		});
	};

	handleTermClick = ( currentCategory ) => ( event ) => {
		let postList;

		if ( 'all' !== currentCategory ) {
			postList = this.allPosts.filter( ( post ) => {
				let categories = post.categories;

				return -1 !== post.categories.indexOf( currentCategory );
			} );
		} else {
			postList = this.allPosts;
		}
		console.log(postList);
		this.setState( {
			postList: postList,
			page: 1
		} );
	};

}
