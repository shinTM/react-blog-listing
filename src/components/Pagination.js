import React, { Component, PropTypes } from 'react';

import Settings from '../data/Settings';

export default class Pagination extends Component{

	render() {
		let { isLoaded, postList, page, postPerPage, onPageUpdate, onPageIncrease, onPageDecrease } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		const pagItems = postList.map( ( pagination, i ) => {
			return(
				<li key={ i }>
					<span className = { i === page - 1 ? 'active' : '' } onClick = { ( event ) => onPageUpdate( i ) }>{ i + 1 }</span>
				</li>
			);
		} );

		pagItems.length = Math.ceil( pagItems.length / postPerPage );

		let prevButton = ( page > 1 ) ? <li className="prev-page" onClick = { ( event ) => onPageDecrease() }><span>Prev</span></li> : '';

		let nextButton = ( page < pagItems.length ) ? <li className="next-page" onClick = { ( event ) => onPageIncrease() }><span>Next</span></li> : '';

		return(
			<ul className = "cherry-post-controls__pagination">
				{ prevButton }
				{ pagItems }
				{ nextButton }
			</ul>
		);
	}

}
