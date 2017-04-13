import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';

export default class TermList extends Component {

	renderTermList() {
		const { termList, onClick } = this.props;

		if ( null === termList ) {
			return(
				<h4>Loading Term List...</h4>
			)
		}

		let itemElements = termList.map( ( term, index ) => {

			return(
				<li key={term.slug}>
					<button onClick={ onClick( term.id ) }>{ term.name }</button>
				</li>
			);
		});

		return(
			<div className="term-list">
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
