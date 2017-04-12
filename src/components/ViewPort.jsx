import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';
import TermList from './TermList.jsx';
import Pagination from './Pagination.jsx';
import PostList from './PostList.jsx';

export default class ViewPort extends Component{
	state = {
		title: 'Blog',
		subTitle: 'Blog Listing',
		postList: null,
		postPerPage: 4,
		page: 1
	}

	componentDidMount() {
		WpData.getAllPosts().then(
			response => {
				let responseData = JSON.parse( response );

				this.setState( {
					postList: responseData
				} );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);
	}

	render() {
		return(
			<div>
				<h2>{ this.state.title }</h2>
				<Pagination
					paginations={ this.state.postList }
					postPerPage={ this.state.postPerPage }
					onClick={ this.handlePaginationClick }
					handlePageNumber={ this.state.page }
				/>
				<PostList postList={ this.state.postList } page={ this.state.page } postPerPage={ this.state.postPerPage }/>
			</div>
		);
	}

	handlePaginationClick = ( currentPage ) => ( event ) => {
		event.preventDefault();

		this.setState({
			page: currentPage + 1
		});
	};

}
