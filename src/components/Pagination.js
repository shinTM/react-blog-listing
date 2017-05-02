import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Settings from '../data/Settings';

export default class Pagination extends Component{

	render() {
		let { postList, page, onPageUpdate } = this.props;

		if ( ! postList || ! postList.length ) {
			return <h4>Loading pagination...</h4>;
		}
		const pagItems = postList.map( ( pagination, i ) => {
			return(
				<li key={ i }>
					<button className = { i === page - 1 ? 'active' : '' } onClick = { () => onPageUpdate( i ) }>{ i + 1 }</button>
				</li>
			);
		} );

		pagItems.length = Math.ceil( pagItems.length / Settings.defaultSettings.postPerPage );

		return(
			<ul className="cherry-post-list-pagination">
				{ pagItems }
			</ul>
		);
	}

}
