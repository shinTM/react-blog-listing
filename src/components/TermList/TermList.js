import React, { Component, PropTypes } from 'react';
import WpData from '../../data/WpData';

export default class TermList extends Component {
	constructor() {
		super();

		this.categoryList = WpData.getAllCategory();
	}

	render() {
		return(
			<div>
				{ this.renderTermList() }
			</div>
		);
	}

	renderTermList() {
		WpData.getAllCategory().then(
			response => {
				let responseData = JSON.parse( response );
				console.log(responseData);
				let itemElements = responseData.map( ( category ) => {
					return(
						<li key="category.slug">
							category.name
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
			},
			error => {
				alert(`Rejected: ${error}`);
			}
		);
	}


}
