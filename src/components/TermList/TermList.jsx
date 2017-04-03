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
		//this.categoryList = WpData.getAllCategory();
	}

	renderTermList() {
		if ( null === this.state.categoryList ) {
			return null;
		}

		let itemElements = this.state.categoryList.map( ( category, index ) => {
			return(
				<li key={category.slug}>
					{category.name}
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

	render() {
		return(
			<div>
				{ this.renderTermList() }
			</div>
		);
	}


}
