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
		termList: null,
		postPerPage: 4,
		page: 1,
		term: 'all'
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
					paginations={ this.state.postList }
					postPerPage={ this.state.postPerPage }
					onClick={ this.handlePaginationClick }
					handlePageNumber={ this.state.page }
				/>
				<TermList
					termList={ this.state.termList }
					onClick={ this.handleTermClick }
				/>
				<PostList
					postList={ this.state.postList }
					page={ this.state.page }
					term={ this.state.term }
					postPerPage={ this.state.postPerPage }
				/>
			</div>
		);
	}

	handlePaginationClick = ( currentPage ) => ( event ) => {
		event.preventDefault();

		this.setState({
			page: currentPage + 1
		});
	};

	handleTermClick = ( currentTerm ) => ( event ) => {
		console.log(currentTerm);

		this.setState( {
			term: currentTerm
		} );
	};

}
