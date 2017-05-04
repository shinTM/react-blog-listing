import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Settings from '../data/Settings';

export default class Pagination extends Component{

	render() {
		let { postList, page, onPageUpdate, onPageIncrease, onPageDecrease } = this.props;

		if ( ! postList || ! postList.length ) {
			return <h4>Loading pagination...</h4>;
		}

		const pagItems = postList.map( ( pagination, i ) => {
			return(
				<li key={ i }>
					<span className = { i === page - 1 ? 'active' : '' } onClick = { ( event ) => onPageUpdate( i ) }>{ i + 1 }</span>
				</li>
			);
		} );

		pagItems.length = Math.ceil( pagItems.length / Settings.defaultSettings.postPerPage );

		let prevButton = ( page > 1 ) ? <li className="prev-page" onClick = { ( event ) => onPageDecrease() }><span>Prev</span></li> : '';

		let nextButton = ( page < pagItems.length ) ? <li className="next-page" onClick = { ( event ) => onPageIncrease() }><span>Next</span></li> : '';

		return(
			<ul className="cherry-post-list-pagination">
				{ prevButton }
				{ pagItems }
				{ nextButton }
			</ul>
		);
	}

}
