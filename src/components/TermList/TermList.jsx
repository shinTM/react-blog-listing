import React, { Component, PropTypes } from 'react';
import WpData from '../../data/WpData';

export default class TermList extends Component {
	constructor() {
		super();
		this.state = {
			categoryList: null
		}
		WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );
				this.setState({categoryList:responseData});
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);
	}

	renderPostList() {
		if ( null === this.state.categoryList ) {
			return(
				<h4>Loading...</h4>
			)
		}

		let itemElements = this.state.categoryList.map( ( category, index ) => {
			return(
				<li key={category.slug}>
					<button onClick={this.termItemClick}>{category.name}</button>
				</li>
			);
		});

		return(
			<div className="terms-list">
				<ul>
					{ itemElements }
				</ul>
			</div>
		);
	}

	termItemClick( event ) {
		console.log(event);
	}

	render() {
		return(
			<div>
				{ this.renderPostList() }
			</div>
		);
	}


}
